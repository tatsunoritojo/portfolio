/**
 * Modern Typography Controller
 * 次世代可読性向上システム - 動的タイポグラフィ制御
 */

class ModernTypographyController {
    constructor() {
        this.isSupported = this.checkSupport();
        this.observers = new Map();
        this.dynamicElements = [];
        
        if (this.isSupported) {
            this.init();
        }
    }

    checkSupport() {
        const testEl = document.createElement('div');
        return (
            'fontVariationSettings' in testEl.style &&
            'backdropFilter' in testEl.style &&
            typeof CSS !== 'undefined' &&
            CSS.supports('container-type', 'inline-size')
        );
    }

    init() {
        this.setupVariableFonts();
        this.setupContainerQueries();
        this.setupIntersectionObserver();
        this.setupResizeObserver();
        this.setupAccessibilityListeners();
        this.setupSmoothScrolling();
        this.optimizeForDevice();
        
        console.log('🎨 Modern Typography Controller initialized');
    }

    setupVariableFonts() {
        // Variable Fontsの動的調整
        const dynamicElements = document.querySelectorAll('.modern-typography');
        
        dynamicElements.forEach(element => {
            this.dynamicElements.push({
                element,
                baseWeight: 400,
                targetWeight: 400,
                currentWeight: 400
            });
            
            // インタラクティブ要素の処理
            if (element.classList.contains('interactive-text')) {
                this.setupInteractiveFont(element);
            }
        });
    }

    setupInteractiveFont(element) {
        let isAnimating = false;
        
        const animate = (targetWeight, duration = 300) => {
            if (isAnimating) return;
            isAnimating = true;
            
            const startWeight = parseInt(element.style.fontVariationSettings?.match(/wght.*?(\d+)/)?.[1] || 400);
            const startTime = performance.now();
            
            const animateWeight = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                
                const currentWeight = Math.round(startWeight + (targetWeight - startWeight) * easeProgress);
                
                element.style.fontVariationSettings = `'wght' ${currentWeight}, 'opsz' ${Math.max(14, Math.min(32, currentWeight / 20 + 14))}`;
                
                if (progress < 1) {
                    requestAnimationFrame(animateWeight);
                } else {
                    isAnimating = false;
                }
            };
            
            requestAnimationFrame(animateWeight);
        };
        
        element.addEventListener('mouseenter', () => animate(600, 200));
        element.addEventListener('mouseleave', () => animate(400, 300));
        element.addEventListener('focus', () => animate(600, 200));
        element.addEventListener('blur', () => animate(400, 300));
    }

    setupContainerQueries() {
        // Container Queries の動的調整
        if (!CSS.supports('container-type', 'inline-size')) return;
        
        const containers = document.querySelectorAll('.typography-container');
        
        containers.forEach(container => {
            const ro = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    const width = entry.contentRect.width;
                    const textElements = container.querySelectorAll('.responsive-text');
                    
                    textElements.forEach(textEl => {
                        let weight, opticalSize;
                        
                        if (width < 480) {
                            weight = 450;
                            opticalSize = 14;
                        } else if (width < 768) {
                            weight = 420;
                            opticalSize = 16;
                        } else if (width < 1024) {
                            weight = 400;
                            opticalSize = 18;
                        } else {
                            weight = 380;
                            opticalSize = 20;
                        }
                        
                        textEl.style.fontVariationSettings = `'wght' ${weight}, 'opsz' ${opticalSize}`;
                    });
                });
            });
            
            ro.observe(container);
            this.observers.set(container, ro);
        });
    }

    setupIntersectionObserver() {
        const options = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px 0px -10% 0px'
        };
        
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const element = entry.target;
                const ratio = entry.intersectionRatio;
                
                if (element.classList.contains('enhanced-text')) {
                    // 視認性に基づく動的調整
                    const intensity = Math.max(0.3, ratio);
                    
                    if (element.classList.contains('hero-name')) {
                        const weight = Math.round(700 + (200 * intensity));
                        element.style.fontVariationSettings = `'wght' ${weight}, 'opsz' 32`;
                    }
                    
                    // Text shadowの動的調整
                    const shadowIntensity = intensity * 0.8;
                    element.style.setProperty('--text-shadow-intensity', shadowIntensity);
                }
            });
        }, options);
        
        document.querySelectorAll('.enhanced-text').forEach(el => io.observe(el));
        this.observers.set('intersection', io);
    }

    setupResizeObserver() {
        // Viewport変更時の最適化
        const ro = new ResizeObserver(entries => {
            entries.forEach(entry => {
                this.optimizeForViewport(entry.contentRect);
            });
        });
        
        ro.observe(document.documentElement);
        this.observers.set('viewport', ro);
    }

    optimizeForViewport(rect) {
        const { width, height } = rect;
        const aspectRatio = width / height;
        
        // アスペクト比による調整
        if (aspectRatio > 1.8) {
            // ウルトラワイド
            document.documentElement.style.setProperty('--hero-font-weight', '350');
            document.documentElement.style.setProperty('--hero-optical-size', '22');
        } else if (aspectRatio < 0.8) {
            // ポートレート
            document.documentElement.style.setProperty('--hero-font-weight', '500');
            document.documentElement.style.setProperty('--hero-optical-size', '16');
        } else {
            // 標準
            document.documentElement.style.setProperty('--hero-font-weight', '400');
            document.documentElement.style.setProperty('--hero-optical-size', '18');
        }
    }

    setupSmoothScrolling() {
        // スペシャルティアイテムのスムーズスクロール
        const specialtyLinks = document.querySelectorAll('.specialty-item[href^="#"]');
        const ctaLinks = document.querySelectorAll('.cta-primary[href^="#"], .cta-secondary[href^="#"]');
        const allScrollLinks = [...specialtyLinks, ...ctaLinks];
        
        allScrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // ヘッダー分のオフセット
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    // reduce-motionの場合は即座に移動
                    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: shouldReduceMotion ? 'auto' : 'smooth'
                    });
                    
                    // フォーカス管理（アクセシビリティ）
                    setTimeout(() => {
                        targetElement.focus({ preventScroll: true });
                        targetElement.setAttribute('tabindex', '-1');
                    }, shouldReduceMotion ? 0 : 500);
                }
            });
        });
    }

    setupAccessibilityListeners() {
        // ユーザー設定の監視
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        
        prefersReducedMotion.addEventListener('change', (e) => {
            document.documentElement.classList.toggle('reduce-motion', e.matches);
        });
        
        prefersHighContrast.addEventListener('change', (e) => {
            document.documentElement.classList.toggle('high-contrast', e.matches);
            if (e.matches) {
                this.enhanceContrast();
            } else {
                this.resetContrast();
            }
        });
        
        // 初期状態の設定
        if (prefersReducedMotion.matches) {
            document.documentElement.classList.add('reduce-motion');
        }
        if (prefersHighContrast.matches) {
            document.documentElement.classList.add('high-contrast');
            this.enhanceContrast();
        }
    }

    enhanceContrast() {
        const enhancedElements = document.querySelectorAll('.enhanced-text');
        enhancedElements.forEach(element => {
            element.style.textShadow = '0 0 4px rgba(0, 0, 0, 1), 0 0 8px rgba(0, 0, 0, 1)';
            element.style.webkitTextStroke = '1px rgba(255, 255, 255, 0.5)';
        });
    }

    resetContrast() {
        const enhancedElements = document.querySelectorAll('.enhanced-text');
        enhancedElements.forEach(element => {
            element.style.textShadow = '';
            element.style.webkitTextStroke = '';
        });
    }

    optimizeForDevice() {
        // デバイス特性による最適化
        const pixelRatio = window.devicePixelRatio || 1;
        const connection = navigator.connection;
        
        // 高DPI ディスプレイの最適化
        if (pixelRatio > 2) {
            document.documentElement.style.setProperty('--text-rendering', 'geometricPrecision');
        }
        
        // ネットワーク状況による調整
        if (connection && connection.effectiveType) {
            if (connection.effectiveType.includes('2g') || connection.effectiveType.includes('slow')) {
                document.documentElement.classList.add('low-bandwidth');
            }
        }
    }

    // パフォーマンス監視
    measurePerformance() {
        const perfObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
                    console.log('🎨 Typography FCP:', entry.startTime);
                }
            });
        });
        
        try {
            perfObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
            console.warn('Performance Observer not supported');
        }
    }

    // クリーンアップ
    destroy() {
        this.observers.forEach(observer => {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect();
            }
        });
        this.observers.clear();
        this.dynamicElements.length = 0;
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    if ('fonts' in document) {
        // フォントの読み込み完了を待機
        document.fonts.ready.then(() => {
            window.modernTypography = new ModernTypographyController();
        });
    } else {
        // フォールバック
        setTimeout(() => {
            window.modernTypography = new ModernTypographyController();
        }, 100);
    }
});

// Hot reload対応
if (module && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        if (window.modernTypography) {
            window.modernTypography.destroy();
        }
    });
}