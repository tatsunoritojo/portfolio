// Background Slideshow Functionality

class BackgroundSlideshow {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.background-slideshow .slide');
        this.autoplayInterval = null;
        this.autoplayDelay = 8000; // 8秒間隔（ゆっくり）
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // 背景画像をdata-bg属性から設定
        this.slides.forEach((slide, index) => {
            const bgImage = slide.dataset.bg;
            if (bgImage) {
                // 画像の存在確認
                const img = new Image();
                img.onload = () => {
                    slide.style.backgroundImage = `url('${bgImage}')`;
                    console.log(`Background image ${index + 1} loaded successfully: ${bgImage}`);
                };
                img.onerror = () => {
                    console.warn(`Failed to load background image: ${bgImage}`);
                    // フォールバック：グラデーション背景
                    slide.style.background = `linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)`;
                };
                img.src = bgImage;
            }
        });
        
        // イベントリスナーの設定
        this.setupEventListeners();
        
        // 自動再生開始
        this.startAutoplay();
        
        console.log('Background slideshow initialized with', this.slides.length, 'slides');
    }
    
    setupEventListeners() {
        // 自動再生のみ - マウスホバーで一時停止機能は残す
        const slideshow = document.querySelector('.background-slideshow');
        if (slideshow) {
            slideshow.addEventListener('mouseenter', () => {
                this.stopAutoplay();
            });
            
            slideshow.addEventListener('mouseleave', () => {
                this.startAutoplay();
            });
        }
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        // 現在のスライドを非アクティブに
        this.slides[this.currentSlide].classList.remove('active');
        
        // 新しいスライドをアクティブに
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        
        console.log('Switched to slide', this.currentSlide);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.goToSlide(prevIndex);
    }
    
    startAutoplay() {
        if (this.slides.length <= 1) return;
        
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
    
    // 動的に背景画像を追加する機能
    addSlide(imagePath, insertAtIndex = -1) {
        const slideshow = document.querySelector('.background-slideshow');
        const indicators = document.querySelector('.slide-indicators');
        
        if (!slideshow || !indicators) return;
        
        // 新しいスライド要素を作成
        const newSlide = document.createElement('div');
        newSlide.className = 'slide';
        newSlide.dataset.bg = imagePath;
        newSlide.style.backgroundImage = `url('${imagePath}')`;
        
        // 新しいインジケーターを作成
        const newIndicator = document.createElement('button');
        newIndicator.className = 'indicator';
        newIndicator.addEventListener('click', () => {
            this.goToSlide(this.slides.length);
            this.resetAutoplay();
        });
        
        // 要素を追加
        if (insertAtIndex >= 0 && insertAtIndex < this.slides.length) {
            slideshow.insertBefore(newSlide, this.slides[insertAtIndex]);
            indicators.insertBefore(newIndicator, this.indicators[insertAtIndex]);
        } else {
            slideshow.appendChild(newSlide);
            indicators.appendChild(newIndicator);
        }
        
        // 配列を更新
        this.slides = document.querySelectorAll('.background-slideshow .slide');
        this.indicators = document.querySelectorAll('.indicator');
        
        // インジケーターのdata-slide属性を更新
        this.indicators.forEach((indicator, index) => {
            indicator.dataset.slide = index;
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
        
        console.log('Added new slide:', imagePath);
    }
    
    // スライドを削除する機能
    removeSlide(index) {
        if (index < 0 || index >= this.slides.length || this.slides.length <= 1) return;
        
        const slideToRemove = this.slides[index];
        const indicatorToRemove = this.indicators[index];
        
        // 要素を削除
        slideToRemove.remove();
        indicatorToRemove.remove();
        
        // 配列を更新
        this.slides = document.querySelectorAll('.background-slideshow .slide');
        this.indicators = document.querySelectorAll('.indicator');
        
        // 現在のスライドが削除された場合の処理
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }
        
        // スライドを再初期化
        this.goToSlide(this.currentSlide);
        
        console.log('Removed slide at index:', index);
    }
    
    // スライドショーを破棄する機能
    destroy() {
        this.stopAutoplay();
        console.log('Background slideshow destroyed');
    }
}

// スライドショーのインスタンスを作成
let backgroundSlideshow = null;

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
    // スライドショーの初期化
    const slideshowElement = document.querySelector('.background-slideshow');
    if (slideshowElement) {
        backgroundSlideshow = new BackgroundSlideshow();
    }
});

// グローバルに公開（必要に応じて）
window.BackgroundSlideshow = BackgroundSlideshow;