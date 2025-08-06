
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    const path = window.location.pathname;
    const isEnglish = path.includes('/en/');
    console.log('Current path:', path);

    // デバッグ: 要素の存在確認
    console.log('Skills elements found:', {
        lang: !!document.getElementById('skills-lang'),
        fw: !!document.getElementById('skills-fw'),
        tools: !!document.getElementById('skills-tools')
    });
    
    console.log('Project container found:', !!document.getElementById('projects-container'));
    console.log('Contact form found:', !!document.getElementById('contact-form'));

    // 常にデータを読み込む（パス判定を簡略化）
    loadSkillsData();
    loadProjectsData(isEnglish);
    initContactForm();
    initSmoothScrolling();
    
    // プロフェッショナルなヒーローアニメーションを初期化
    initHeroAnimations();
});

async function loadProfileData(isEnglish = false) {
    try {
        const lang = isEnglish ? 'en' : 'ja';
        const basePath = isEnglish ? '../data/' : 'data/';
        const response = await fetch(`${basePath}content-${lang}.json`);
        const data = await response.json();
        
        const profileElement = document.querySelector('#profile .profile-text p');
        if (profileElement) {
            profileElement.textContent = data.profile.bio;
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

function loadSkillsData() {
    try {
        console.log('Loading skills data...');
        
        // データファイルから直接取得
        if (typeof portfolioData === 'undefined') {
            console.error('Portfolio data not loaded. Make sure data.js is included.');
            return;
        }
        
        const data = portfolioData.skills;
        console.log('Skills data loaded:', data);
        
        const langList = document.getElementById('skills-lang');
        const fwList = document.getElementById('skills-fw');
        const toolsList = document.getElementById('skills-tools');

        // 言語判定（パスから判断）
        const isEnglish = window.location.pathname.includes('/en/');
        const descKey = isEnglish ? 'description_en' : 'description_ja';

        console.log('Elements found:', {langList, fwList, toolsList});
        if (langList && fwList && toolsList) {
            console.log('Adding skills to DOM...');
            
            // Clear existing content
            langList.innerHTML = '';
            fwList.innerHTML = '';
            toolsList.innerHTML = '';
            
            data.languages.forEach((skill, index) => {
                const li = document.createElement('li');
                li.className = 'skill-item';
                li.textContent = skill.name;
                li.setAttribute('data-description', skill[descKey]);
                li.style.animationDelay = `${index * 0.1}s`;
                langList.appendChild(li);
            });
            data.frameworks.forEach((skill, index) => {
                const li = document.createElement('li');
                li.className = 'skill-item';
                li.textContent = skill.name;
                li.setAttribute('data-description', skill[descKey]);
                li.style.animationDelay = `${index * 0.1}s`;
                fwList.appendChild(li);
            });
            data.tools.forEach((skill, index) => {
                const li = document.createElement('li');
                li.className = 'skill-item';
                li.textContent = skill.name;
                li.setAttribute('data-description', skill[descKey]);
                li.style.animationDelay = `${index * 0.1}s`;
                toolsList.appendChild(li);
            });
            console.log('Skills added successfully with tooltips');
            
            // シンプルなホバー反応をテスト
            console.log('Adding simple hover effects...');
            const allSkillItems = document.querySelectorAll('.skill-item');
            console.log('Found skill items:', allSkillItems.length);
            
            allSkillItems.forEach((item, index) => {
                console.log(`Setting up hover for item ${index}:`, item.textContent);
                
                item.addEventListener('mouseenter', function() {
                    console.log('Mouse entered:', this.textContent);
                    this.style.backgroundColor = 'rgba(30, 58, 138, 0.2)';
                    this.style.transform = 'translateY(-3px) scale(1.02)';
                });
                
                item.addEventListener('mouseleave', function() {
                    console.log('Mouse left:', this.textContent);
                    this.style.backgroundColor = '';
                    this.style.transform = '';
                });
            });
            
            // ツールチップ機能を初期化
            initSkillTooltips();
        } else {
            console.error('Skill elements not found in DOM');
        }

    } catch (error) {
        console.error('Error loading skills data:', error);
    }
}

function loadProjectsData(isEnglish = false) {
    try {
        console.log('Loading projects data...');
        
        // データファイルから直接取得
        if (typeof portfolioData === 'undefined') {
            console.error('Portfolio data not loaded. Make sure data.js is included.');
            return;
        }
        
        const data = portfolioData.projects;
        console.log('Projects data loaded:', data);
        const projectList = document.getElementById('projects-container');
        console.log('Project container found:', !!projectList);

        if (!projectList) {
            console.error('Projects container not found');
            return;
        }
        
        // Clear existing content
        projectList.innerHTML = '';

        const lang = isEnglish ? 'en' : 'ja';
        const techStackLabel = isEnglish ? 'Tech Stack:' : '技術スタック:';
        const periodLabel = isEnglish ? 'Duration:' : '開発期間:';
        const scaleLabel = isEnglish ? 'Scale:' : '規模:';
        const outcomeLabel = isEnglish ? 'Outcome:' : '成果:';

        data.forEach(project => {
            const imagePath = isEnglish ? `../${project.image}` : project.image;
            
            // Generate features HTML if available
            let featuresHTML = '';
            if (project.features && project.features.length > 0) {
                const featuresLabel = isEnglish ? 'Key Features:' : '主要機能:';
                featuresHTML = `
                    <div class="project-features">
                        <strong>${featuresLabel}</strong>
                        <div class="features-grid">
                            ${project.features.map(feature => `
                                <div class="feature-item">
                                    <h4>${feature[`title_${lang}`]}</h4>
                                    <p>${feature[`description_${lang}`]}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Generate development process HTML if available
            let processHTML = '';
            if (project.development_process && project.development_process.length > 0) {
                const processLabel = isEnglish ? 'Development Process:' : '開発プロセス:';
                processHTML = `
                    <div class="project-process">
                        <strong>${processLabel}</strong>
                        <div class="process-steps">
                            ${project.development_process.map((phase, index) => `
                                <div class="process-item">
                                    <div class="process-step">${index + 1}</div>
                                    <div class="process-info">
                                        <div class="process-phase">${phase[`phase_${lang}`]}</div>
                                        <div class="process-period">${phase.period}</div>
                                        <div class="process-description">${phase[`description_${lang}`]}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Generate GitHub link if available
            let githubLinkHTML = '';
            if (project.github_url) {
                const viewCodeLabel = isEnglish ? 'View Code' : 'コードを見る';
                githubLinkHTML = `
                    <div class="project-links">
                        <a href="${project.github_url}" target="_blank" class="btn btn-secondary project-github-btn">
                            <span class="github-icon">⚡</span> ${viewCodeLabel}
                        </a>
                    </div>
                `;
            }

            projectList.innerHTML += `
                <div class="project-card ${project.features ? 'project-card-detailed' : ''}">
                    <div class="project-image">
                        <img src="${imagePath}" alt="${project[`title_${lang}`]}" onerror="this.style.display='none'">
                    </div>
                    <div class="project-card-content">
                        <div class="project-category">${project[`category_${lang}`]}</div>
                        <h3>${project[`title_${lang}`]}</h3>
                        <p class="project-description">${project[`description_${lang}`]}</p>
                        
                        ${featuresHTML}
                        
                        ${processHTML}
                        
                        <div class="project-tech">
                            <strong>${techStackLabel}</strong>
                            <div class="tech-tags">
                                ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="project-metrics">
                            <div class="metric">
                                <span class="metric-label">${periodLabel}</span>
                                <span class="metric-value">${project.period}</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">${scaleLabel}</span>
                                <span class="metric-value">${project.scale}</span>
                            </div>
                        </div>
                        <div class="project-outcome">
                            <strong>${outcomeLabel}</strong> ${project[`outcome_${lang}`]}
                        </div>
                        
                        ${githubLinkHTML}
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error('Error loading projects data:', error);
    }
}

function initSmoothScrolling() {
    // スムーズスクロールの実装
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // アクティブリンクの更新
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // スクロール時のナビゲーションハイライト
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
    
    // 高度なスクロールアニメーション
    initScrollAnimations();
}

function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // About timeline items animation
                if (entry.target.classList.contains('about-item')) {
                    animateTimelineItem(entry.target);
                }
                
                // Skills categories animation
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillsCategory(entry.target);
                }
                
                // Project cards animation
                if (entry.target.classList.contains('project-card')) {
                    animateProjectCard(entry.target);
                }
                
                // Workflow steps animation
                if (entry.target.classList.contains('workflow-step')) {
                    animateWorkflowStep(entry.target);
                }
                
                // Section headers animation
                if (entry.target.classList.contains('section-header')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(`
        .about-item,
        .skill-category,
        .project-card,
        .workflow-step,
        .section-header,
        .contact-form,
        .strength-item
    `);
    
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Header background on scroll
        const header = document.querySelector('.main-header');
        if (scrolled > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function animateTimelineItem(item) {
    const year = item.querySelector('.about-year');
    const content = item.querySelector('.about-content');
    const highlight = item.querySelector('.about-highlight');
    
    setTimeout(() => {
        if (year) {
            year.classList.add('animate');
            year.style.opacity = '1';
        }
    }, 200);
    
    setTimeout(() => {
        if (content) {
            content.classList.add('animate');
            content.style.opacity = '1';
        }
    }, 400);
    
    setTimeout(() => {
        if (highlight) {
            highlight.classList.add('animate');
            highlight.style.opacity = '1';
        }
    }, 600);
}

function animateSkillsCategory(category) {
    const skillItems = category.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
            item.style.opacity = '1';
        }, index * 100);
    });
}

function animateProjectCard(card) {
    const features = card.querySelectorAll('.feature-item');
    const processItems = card.querySelectorAll('.process-item');
    
    // Animate features
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.opacity = '1';
        }, index * 100);
    });
    
    // Animate process items
    processItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 200);
    });
}

function animateWorkflowStep(step) {
    const stepNumber = step.querySelector('.step-number');
    
    if (stepNumber) {
        setTimeout(() => {
            stepNumber.style.animation = 'pulse 0.6s ease-out';
        }, 200);
    }
}

function animateCounter(element) {
    // Number counting animation
    const numbers = element.querySelectorAll('[data-count]');
    
    numbers.forEach(number => {
        const target = parseInt(number.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current);
        }, 16);
    });
}

function initSkillTooltips() {
    console.log('Initializing stable skill tooltips...');
    
    // 既存のツールチップがあれば削除
    const existingTooltip = document.querySelector('.skill-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    // 安定したツールチップ要素を作成
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.style.cssText = `
        position: fixed;
        background: linear-gradient(135deg, #1a1a1a, #2d2d2d) !important;
        color: #fff !important;
        padding: 14px 18px !important;
        border-radius: 12px !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        max-width: 280px !important;
        box-shadow: 0 12px 28px rgba(0,0,0,0.3), 0 0 0 1px rgba(30, 58, 138, 0.4) !important;
        border: none !important;
        opacity: 0;
        pointer-events: auto;
        z-index: 99999 !important;
        transition: all 0.2s ease !important;
        line-height: 1.5 !important;
        word-wrap: break-word !important;
        transform: translateY(-5px) scale(0.95);
        display: none;
    `;
    
    // 吹き出し用の矢印要素を作成
    const arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';
    arrow.style.cssText = `
        position: absolute;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-right-color: #1a1a1a;
        left: -16px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 99999;
    `;
    tooltip.appendChild(arrow);
    document.body.appendChild(tooltip);
    console.log('Tooltip element created');
    
    let currentItem = null;
    let hideTimeout = null;
    
    // 少し待ってからスキルアイテムを取得
    setTimeout(() => {
        const skillItems = document.querySelectorAll('.skill-item');
        console.log('Looking for skill items with descriptions:', skillItems.length);
        
        skillItems.forEach((item, index) => {
            const description = item.getAttribute('data-description');
            console.log(`Item ${index} (${item.textContent}):`, description ? 'HAS description' : 'NO description');
            
            if (description) {
                // マウスエンター（ボタン）
                item.addEventListener('mouseenter', function(e) {
                    console.log('TOOLTIP: Mouse entered button', this.textContent);
                    
                    // 既存のタイムアウトをクリア
                    if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        hideTimeout = null;
                    }
                    
                    currentItem = this;
                    
                    // ツールチップのコンテンツを設定
                    const textNode = tooltip.firstChild;
                    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                        textNode.remove();
                    }
                    tooltip.insertBefore(document.createTextNode(description), arrow);
                    
                    // 位置を計算
                    const rect = this.getBoundingClientRect();
                    const x = rect.right + 10;
                    const y = rect.top - 10;
                    
                    // 画面端チェック
                    const tooltipWidth = 300;
                    const finalX = (x + tooltipWidth > window.innerWidth) 
                        ? rect.left - tooltipWidth - 10 
                        : x;
                    const finalY = (y < 0) 
                        ? rect.bottom + 10 
                        : y;
                    
                    tooltip.style.left = finalX + 'px';
                    tooltip.style.top = finalY + 'px';
                    tooltip.style.display = 'block';
                    
                    // アニメーションで表示
                    requestAnimationFrame(() => {
                        tooltip.style.opacity = '1';
                        tooltip.style.transform = 'translateY(0) scale(1)';
                    });
                    
                    console.log(`TOOLTIP positioned at: ${finalX}, ${finalY}`);
                });
                
                // マウスリーブ（ボタン）
                item.addEventListener('mouseleave', function(e) {
                    console.log('TOOLTIP: Mouse left button', this.textContent);
                    
                    // マウスがツールチップに移動したかチェック
                    const relatedTarget = e.relatedTarget;
                    if (relatedTarget && (relatedTarget === tooltip || tooltip.contains(relatedTarget))) {
                        console.log('Mouse moved to tooltip, keeping visible');
                        return;
                    }
                    
                    // 少し遅延させて非表示
                    hideTimeout = setTimeout(() => {
                        hideTooltip();
                    }, 100);
                });
            }
        });
        
        // ツールチップ自体のイベント
        tooltip.addEventListener('mouseenter', function() {
            console.log('TOOLTIP: Mouse entered tooltip');
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
        });
        
        tooltip.addEventListener('mouseleave', function() {
            console.log('TOOLTIP: Mouse left tooltip');
            hideTimeout = setTimeout(() => {
                hideTooltip();
            }, 100);
        });
        
    }, 100);
    
    function hideTooltip() {
        console.log('TOOLTIP: Hiding tooltip');
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-5px) scale(0.95)';
        setTimeout(() => {
            tooltip.style.display = 'none';
            currentItem = null;
        }, 200);
    }
}

function initHeroAnimations() {
    console.log('Initializing professional hero animations...');
    
    // ページ読み込み後、少し遅延してから順次アニメーション開始
    setTimeout(() => {
        const animationElements = [
            { selector: '.hero-animate-profile', delay: 100 },
            { selector: '.hero-animate-content', delay: 300 },
            { selector: '.hero-animate-tags', delay: 600 },
            { selector: '.hero-animate-cta', delay: 900 }
        ];
        
        animationElements.forEach(({ selector, delay }) => {
            setTimeout(() => {
                const element = document.querySelector(selector);
                if (element) {
                    element.classList.add('active');
                    console.log(`Animated: ${selector}`);
                }
            }, delay);
        });
        
    }, 500); // 初回500ms遅延でページの安定を待つ
}

function initContactForm() {
    console.log('Initializing contact form...');
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }
    
    console.log('Contact form found, adding event listener');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
        // フォームデータの取得
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form data:', data);
        
        // 簡易バリデーション
        if (!data.name || !data.email || !data.message) {
            alert('必須項目を入力してください。');
            return;
        }
        
        // 成功メッセージ
        alert('お問い合わせありがとうございます。後日ご連絡いたします。');
        contactForm.reset();
    });
}
