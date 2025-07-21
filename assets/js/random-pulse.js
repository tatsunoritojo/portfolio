// ランダムパルスアニメーション機能

// ページ読み込み時とブラウザバック時のアニメーション状態をリセット
function resetAllAnimations() {
    console.log('アニメーション状態をリセットします');
    
    // 全ての要素のアニメーション関連スタイルをクリア
    document.querySelectorAll('*').forEach(element => {
        // インラインスタイルをクリア
        if (element.style.animation) element.style.animation = '';
        if (element.style.transform && !element.classList.contains('interest-tag')) {
            element.style.transform = '';
        }
        if (element.style.transition) element.style.transition = '';
        if (element.style.opacity && element.style.opacity !== '1' && element.style.opacity !== '') {
            element.style.opacity = '';
        }
    });
    
    // body要素の特別なクラスやスタイルをクリア
    document.body.style.backgroundColor = '';
    document.body.classList.remove('page-transitioning', 'transitioning');
    document.body.classList.add('force-reset');
    
    // スライドショー要素もリセット
    const slideshow = document.querySelector('.background-slideshow');
    if (slideshow) {
        slideshow.classList.add('reset');
    }
    
    // HTMLの背景色も確認
    document.documentElement.style.backgroundColor = '';
    
    // 少し待ってからリセットクラスを削除
    setTimeout(() => {
        document.body.classList.remove('force-reset');
        if (slideshow) slideshow.classList.remove('reset');
    }, 100);
}

// ブラウザバック時の処理
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('ページがキャッシュから復元されました');
        resetAllAnimations();
        
        // 強制的にページをリフレッシュして完全にリセット
        setTimeout(() => {
            window.location.reload();
        }, 50);
    }
});

// ページロード時にも実行
window.addEventListener('load', function() {
    resetAllAnimations();
});

document.addEventListener('DOMContentLoaded', function() {
    let isInitialPulse = true;
    let currentPulsingTag = null;
    
    // 全ての興味タグを取得（統一された has-article クラス）
    function getAllInterestTags() {
        return document.querySelectorAll('.interest-tag.has-article');
    }
    
    // パルスアニメーションを停止
    function stopPulse(tag) {
        if (tag) {
            tag.style.animation = 'none';
            tag.classList.remove('pulsing');
        }
    }
    
    // パルスアニメーションを開始
    function startPulse(tag) {
        if (tag) {
            tag.style.animation = 'pulse-article 2s infinite';
            tag.classList.add('pulsing');
        }
    }
    
    // ランダムなタグを選択
    function getRandomTag() {
        const tags = getAllInterestTags();
        if (tags.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * tags.length);
        return tags[randomIndex];
    }
    
    // パルスを次のランダムなタグに移動
    function moveToNextRandomTag() {
        // 現在のパルスを停止
        if (currentPulsingTag) {
            stopPulse(currentPulsingTag);
        }
        
        // 新しいランダムなタグを選択
        const newTag = getRandomTag();
        if (newTag) {
            currentPulsingTag = newTag;
            startPulse(newTag);
            
            console.log('パルス移動:', newTag.textContent.trim());
        }
    }
    
    // 初期化（最初の5秒はゲームタグが光る）
    function initialize() {
        const gameTag = document.querySelector('.interest-tag.has-article');
        if (gameTag) {
            currentPulsingTag = gameTag;
            startPulse(gameTag);
            console.log('初期パルス開始: ゲームタグ');
            
            // 3秒後にランダムモードに切り替え
            setTimeout(() => {
                isInitialPulse = false;
                moveToNextRandomTag();
                
                // その後は3秒ごとにランダムに移動
                setInterval(() => {
                    moveToNextRandomTag();
                }, 3000);
                
                console.log('ランダムパルスモードに切り替わりました');
            }, 3000);
        }
    }
    
    // ホバー時にパルスを一時停止
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('interest-tag') && e.target.classList.contains('has-article')) {
            e.target.style.animation = 'none';
        }
    });
    
    // ホバー終了時にパルスを再開（該当タグの場合）
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('interest-tag') && e.target.classList.contains('has-article')) {
            if (e.target === currentPulsingTag) {
                startPulse(e.target);
            }
        }
    });
    
    // プレースホルダーリンクは正常にナビゲーションを許可
    
    // 初期化実行
    initialize();
});