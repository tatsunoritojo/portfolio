// 趣味・興味記事機能
document.addEventListener('DOMContentLoaded', function() {
    // 記事が存在する趣味・興味のリスト
    const articlesAvailable = {
        // 日本語版
        'ja': {
            '🎮 ゲーム': 'articles/gaming.html',
            '🚴‍♂️ ロードバイク': 'articles/road-bike.html',
            '♿ 車いすソフトボール': 'articles/wheelchair-softball.html',
            '🏀 FIDバスケットボール指導': 'articles/fid-basketball.html',
            '📚 読書': 'articles/reading.html'
        },
        // 英語版
        'en': {
            '🎮 Gaming': 'articles/gaming.html',
            '🚴‍♂️ Road Cycling': 'articles/road-bike.html',
            '♿ Wheelchair Softball': 'articles/wheelchair-softball.html',
            '🏀 FID Basketball Coaching': 'articles/fid-basketball.html',
            '📚 Reading': 'articles/reading.html'
        }
    };

    // 現在の言語を取得
    function getCurrentLanguage() {
        return window.location.pathname.includes('/en/') ? 'en' : 'ja';
    }

    // 興味タグを初期化
    function initializeInterestTags() {
        const currentLang = getCurrentLanguage();
        const interestTags = document.querySelectorAll('.interest-tag');
        const availableArticles = articlesAvailable[currentLang];

        interestTags.forEach(tag => {
            const tagText = tag.textContent.trim();
            
            // 記事が存在する場合
            if (availableArticles && availableArticles[tagText]) {
                // has-articleクラスを追加
                tag.classList.add('has-article');
                
                // 英語版の場合はenクラスも追加
                if (currentLang === 'en') {
                    tag.classList.add('en');
                }

                // クリックイベントを追加
                tag.addEventListener('click', function(e) {
                    e.preventDefault();
                    const articlePath = availableArticles[tagText];
                    
                    // 相対パスを調整
                    const basePath = currentLang === 'en' ? '../' : '';
                    const fullPath = basePath + articlePath;
                    
                    // 記事ページに移動
                    window.location.href = fullPath;
                });

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

    // 記事ディレクトリの作成を提案する関数（デベロッパー向け）
    function suggestArticleStructure() {
        console.log(`
📚 記事機能のディレクトリ構造提案:

/articles/
  ├── gaming.html              (ゲーム記事)
  ├── road-bike.html           (ロードバイク記事) 
  ├── wheelchair-softball.html (車いすソフトボール記事)
  ├── fid-basketball.html      (FIDバスケットボール記事)
  ├── reading.html             (読書記事)
  └── template.html            (記事テンプレート)

/en/articles/
  ├── gaming.html              (English version)
  ├── road-bike.html           (English version)
  ├── wheelchair-softball.html (English version)
  ├── fid-basketball.html      (English version)
  ├── reading.html             (English version)
  └── template.html            (English template)
        `);
    }

    // 初期化実行
    initializeInterestTags();
    
    // 開発者向けヒント出力
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        suggestArticleStructure();
    }
});