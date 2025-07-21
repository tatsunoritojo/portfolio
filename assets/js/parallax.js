// パララックス効果とスクロールアニメーション

class ParallaxController {
    constructor() {
        this.profileSection = document.querySelector('.profile-section');
        this.projectsSection = document.querySelector('.projects-section');
        this.isProfileIntersecting = false;
        this.isProjectsIntersecting = false;
        this.scrollSpeed = 0.5; // パララックス速度調整
        
        this.init();
    }
    
    init() {
        if (!this.profileSection && !this.projectsSection) return;
        
        // Intersection Observer でセクションの表示状態を監視
        this.setupIntersectionObserver();
        
        // スクロールイベントリスナー
        this.setupScrollListener();
        
        // リサイズイベントリスナー
        window.addEventListener('resize', this.handleResize.bind(this));
        
        console.log('Parallax controller initialized');
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target.classList.contains('profile-section')) {
                    this.isProfileIntersecting = entry.isIntersecting;
                } else if (entry.target.classList.contains('projects-section')) {
                    this.isProjectsIntersecting = entry.isIntersecting;
                }
                
                if (entry.isIntersecting) {
                    // セクションが表示されたときの処理
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px 0px -50px 0px'
        });
        
        if (this.profileSection) observer.observe(this.profileSection);
        if (this.projectsSection) observer.observe(this.projectsSection);
    }
    
    setupScrollListener() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking && (this.isProfileIntersecting || this.isProjectsIntersecting)) {
                requestAnimationFrame(() => {
                    if (this.isProfileIntersecting) this.updateProfileParallax();
                    if (this.isProjectsIntersecting) this.updateProjectsParallax();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        // パッシブリスナーでパフォーマンス向上
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    updateProfileParallax() {
        const scrolled = window.pageYOffset;
        const sectionTop = this.profileSection.offsetTop;
        const sectionHeight = this.profileSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // セクションが画面内にあるかチェック（開始前から終了後まで）
        const sectionStart = sectionTop - windowHeight;
        const sectionEnd = sectionTop + sectionHeight + windowHeight;
        
        if (scrolled >= sectionStart && scrolled <= sectionEnd) {
            // セクション全体での進行度を計算（-1から1の範囲）
            const totalDistance = sectionHeight + (windowHeight * 2);
            const currentPosition = scrolled - sectionStart;
            const progress = currentPosition / totalDistance;
            
            // 相対的なスクロール量
            const relativeScrolled = scrolled - sectionTop;
            
            // パララックス効果を適用
            this.applyParallaxEffect(progress, relativeScrolled);
        }
    }
    
    applyParallaxEffect(progress, relativeScrolled) {
        // Cover画像用のパララックス移動計算
        const maxMovement = 200; // 最大移動距離を調整
        
        // Y位置をより滑らかに制御（セクション開始時は上部、終了時は下部）
        const smoothY = Math.sin(progress * Math.PI - Math.PI/2) * (maxMovement / 2);
        
        // 背景位置を更新（cover画像が自然に流れる）
        this.profileSection.style.backgroundPosition = `center calc(50% + ${smoothY}px)`;
        
        // じんわり消えるための透明度調整
        let opacity;
        if (progress < 0.1) {
            // セクション開始時：フェードイン
            opacity = Math.max(0.2, progress * 8);
        } else if (progress > 0.9) {
            // セクション終了時：じんわりフェードアウト
            const fadeProgress = (1 - progress) / 0.1;
            opacity = Math.max(0, Math.min(0.8, fadeProgress * 0.8));
        } else {
            // セクション中央：最も鮮明
            const centerProgress = Math.sin((progress - 0.1) * Math.PI / 0.8);
            opacity = Math.max(0.4, Math.min(0.8, 0.4 + centerProgress * 0.4));
        }
        
        // CSS変数として値を設定
        this.profileSection.style.setProperty('--parallax-opacity', opacity);
        this.profileSection.style.setProperty('--parallax-progress', progress);
        
        // セクション終了に近づいたら背景全体をフェードアウト
        if (progress > 0.85) {
            const fadeOutProgress = (progress - 0.85) / 0.15;
            const backgroundOpacity = Math.max(0, 1 - fadeOutProgress);
            this.profileSection.style.setProperty('--background-fade', backgroundOpacity);
        } else {
            this.profileSection.style.setProperty('--background-fade', 1);
        }
    }
    
    updateProjectsParallax() {
        const scrolled = window.pageYOffset;
        const sectionTop = this.projectsSection.offsetTop;
        const sectionHeight = this.projectsSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // セクションが画面内にあるかチェック（開始前から終了後まで）
        const sectionStart = sectionTop - windowHeight;
        const sectionEnd = sectionTop + sectionHeight + windowHeight;
        
        if (scrolled >= sectionStart && scrolled <= sectionEnd) {
            // セクション全体での進行度を計算（-1から1の範囲）
            const totalDistance = sectionHeight + (windowHeight * 2);
            const currentPosition = scrolled - sectionStart;
            const progress = currentPosition / totalDistance;
            
            // 相対的なスクロール量
            const relativeScrolled = scrolled - sectionTop;
            
            // パララックス効果を適用
            this.applyProjectsParallaxEffect(progress, relativeScrolled);
        }
    }
    
    applyProjectsParallaxEffect(progress, relativeScrolled) {
        // Cover画像用のパララックス移動計算
        const maxMovement = 200; // 最大移動距離を調整
        
        // Y位置をより滑らかに制御（セクション開始時は上部、終了時は下部）
        const smoothY = Math.sin(progress * Math.PI - Math.PI/2) * (maxMovement / 2);
        
        // 背景位置を更新（cover画像が自然に流れる）
        this.projectsSection.style.backgroundPosition = `center calc(50% + ${smoothY}px)`;
        
        // じんわり消えるための透明度調整
        let opacity;
        if (progress < 0.1) {
            // セクション開始時：フェードイン
            opacity = Math.max(0.2, progress * 8);
        } else if (progress > 0.9) {
            // セクション終了時：じんわりフェードアウト
            const fadeProgress = (1 - progress) / 0.1;
            opacity = Math.max(0, Math.min(0.8, fadeProgress * 0.8));
        } else {
            // セクション中央：最も鮮明
            const centerProgress = Math.sin((progress - 0.1) * Math.PI / 0.8);
            opacity = Math.max(0.4, Math.min(0.8, 0.4 + centerProgress * 0.4));
        }
        
        // CSS変数として値を設定
        this.projectsSection.style.setProperty('--parallax-opacity', opacity);
        this.projectsSection.style.setProperty('--parallax-progress', progress);
        
        // セクション終了に近づいたら背景全体をフェードアウト
        if (progress > 0.85) {
            const fadeOutProgress = (progress - 0.85) / 0.15;
            const backgroundOpacity = Math.max(0, 1 - fadeOutProgress);
            this.projectsSection.style.setProperty('--background-fade', backgroundOpacity);
        } else {
            this.projectsSection.style.setProperty('--background-fade', 1);
        }
    }
    
    handleResize() {
        // リサイズ時にパララックスを再計算
        if (this.isProfileIntersecting) {
            this.updateProfileParallax();
        }
        if (this.isProjectsIntersecting) {
            this.updateProjectsParallax();
        }
    }
    
    // パララックス効果を一時停止/再開
    pause() {
        this.profileSection.style.backgroundAttachment = 'scroll';
    }
    
    resume() {
        this.profileSection.style.backgroundAttachment = 'fixed';
    }
}

// スムーズスクロール効果の拡張
class SmoothScrollEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // 要素の表示アニメーション
        this.setupRevealAnimations();
        
        // スクロール進行インジケーター
        this.setupScrollProgress();
    }
    
    setupRevealAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-animate');
                }
            });
        }, observerOptions);
        
        // アニメーション対象要素を監視
        const elementsToReveal = document.querySelectorAll(`
            .profile-content,
            .strengths-grid .strength-item,
            .workflow-steps .workflow-step,
            .about-timeline .about-item,
            .skill-category
        `);
        
        elementsToReveal.forEach(el => {
            observer.observe(el);
        });
    }
    
    setupScrollProgress() {
        // スクロール進行度を表示するプログレスバー（オプション）
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            
            const progressBarElement = progressBar.querySelector('.scroll-progress-bar');
            progressBarElement.style.width = `${Math.min(progress, 100)}%`;
        }, { passive: true });
    }
}

// 初期化
let parallaxController = null;
let smoothScrollEffects = null;

document.addEventListener('DOMContentLoaded', () => {
    // パララックスコントローラーを初期化
    parallaxController = new ParallaxController();
    
    // スムーズスクロール効果を初期化
    smoothScrollEffects = new SmoothScrollEffects();
    
    // モバイルデバイスではパララックスを軽量化
    if (window.innerWidth <= 768) {
        parallaxController.pause();
    }
});

// ウィンドウリサイズ時の処理
window.addEventListener('resize', () => {
    if (parallaxController) {
        if (window.innerWidth <= 768) {
            parallaxController.pause();
        } else {
            parallaxController.resume();
        }
    }
});

// グローバルに公開
window.ParallaxController = ParallaxController;
window.SmoothScrollEffects = SmoothScrollEffects;