// 趣味・興味記事機能
console.log('=== interest-articles.js が読み込まれました ===');

// DOMの状態を確認
console.log('DOM state:', document.readyState);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeInterestArticles);
} else {
    // DOMが既に読み込み完了している場合はすぐ実行
    initializeInterestArticles();
}

// 現在の言語を取得（グローバル関数）
function getCurrentLanguage() {
    const pathname = window.location.pathname;
    console.log('Current pathname:', pathname);
    const isEnglish = pathname.includes('/en/') || pathname.includes('/en');
    console.log('Is English?', isEnglish);
    return isEnglish ? 'en' : 'ja';
}

function initializeInterestArticles() {
    console.log('=== interest-articles 初期化開始 ===');
    // 記事が存在する趣味・興味のリスト（記事名のみ指定、パスは動的生成）
    const articlesAvailable = {
        // 日本語版
        'ja': {
            '🎮 ゲーム': 'gaming'
        },
        // 英語版
        'en': {
            '🎮 Gaming': 'gaming'
        }
    };

    // 言語に応じた記事パスを生成
    function generateArticlePath(articleName, currentLang) {
        if (currentLang === 'en') {
            // 英語版: /en/ から articles/gaming.html
            return `articles/${articleName}.html`;
        } else {
            // 日本語版: / から articles/gaming.html  
            return `articles/${articleName}.html`;
        }
    }

    // 興味タグを初期化
    function initializeInterestTags() {
        console.log('=== initializeInterestTags が呼び出されました ===');
        const currentLang = getCurrentLanguage();
        const interestTags = document.querySelectorAll('.interest-tag');
        const availableArticles = articlesAvailable[currentLang];

        console.log('現在の言語:', currentLang);
        console.log('見つかったタグ数:', interestTags.length);
        console.log('利用可能な記事:', availableArticles);
        
        // 見つかった要素をすべて表示
        console.log('見つかった要素:', interestTags);

        interestTags.forEach((tag, index) => {
            const tagText = tag.textContent.trim();
            console.log(`処理中のタグ ${index}:`, tagText);
            console.log('タグの要素:', tag);
            
            // 記事が存在する場合
            if (availableArticles && availableArticles[tagText]) {
                console.log('記事が見つかりました:', tagText);
                // has-articleクラスを追加
                tag.classList.add('has-article');
                
                // 英語版の場合はenクラスも追加
                if (currentLang === 'en') {
                    tag.classList.add('en');
                }

                console.log('クリックイベントを登録します:', tagText);

                // 記事ページへのナビゲーション（最高優先度）
                tag.addEventListener('click', function(e) {
                    console.log('=== クリックイベントが実行されました ===');
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    
                    const articleName = availableArticles[tagText];
                    const articlePath = generateArticlePath(articleName, currentLang);
                    
                    // パスをデバッグ用にログ出力
                    console.log('Article name:', articleName);
                    console.log('Generated path:', articlePath);
                    console.log('Current language:', currentLang);
                    console.log('Navigating to:', articlePath);
                    
                    // 記事ページに移動
                    window.location.href = articlePath;
                }, true);

                // ホバー効果を強化
                tag.addEventListener('mouseenter', function() {
                    tag.style.transform = 'translateY(-3px) scale(1.02)';
                });

                tag.addEventListener('mouseleave', function() {
                    tag.style.transform = '';
                });
            }
        });
    }

    // 初期化実行
    initializeInterestTags();
}

