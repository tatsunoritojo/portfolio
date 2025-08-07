// 3D横スライドギャラリー制御

// 各ギャラリーの現在位置を管理
let currentIndexes = {
    gallery1: 0,
    gallery2: 0
};

// コンテンツデータ（portfolio_simpleに忠実）
const galleryContentData = {
    gallery1: [
        {
            title: "システム概要",
            desc: "Python/Kivyベースのデスクトップアプリを新規事業立ち上げのために開発。2バージョンあり、Excelベースでのローカル管理によりインターネット環境に依存しない安定運用を実現。また、Google Sheets APIを活用し、クラウドベースでの運用を行っています。このバージョンでは、GASを活用した入退室のメール通知機能の自動化も実装しました。"
        },
        {
            title: "生徒情報を登録",
            desc: "新しく入学された生徒さんの情報登録や、既にご登録いただいている生徒さんの情報編集を行う画面です。登録済みの生徒さん一覧も見やすく表示され、必要に応じてQRコードの生成も簡単に行えます。保護者の方の連絡先なども含めて、包括的に管理できるようになっています。"
        },
        {
            title: "睡眠満足度アンケート画面",
            desc: "3つの質問の例です。睡眠時間やその満足度が、生徒の学習に影響を与えているとの事業所からの要望から、それを楽しく答えていただけるアンケート機能を用意しました。ビーカーの水位で満足度を表現する視覚的なデザインにより、小さなお子さんでも直感的に回答できます。毎日の健康状態を把握することで、よりよい個別対応が可能になります。"
        },
        {
            title: "出席状況確認",
            desc: "この画面では、生徒さんの出席状況をリアルタイムで確認することができます。ExcelやspreadSheetsに連携させており、データが即座に更新されます。その情報を参照して、メールを自動送信するシステムも構築できます。また、詳細な出席履歴も一元的に管理されているので、過去のデータもすぐに確認できて便利です。"
        },
        {
            title: "生徒出席状況のレポート詳細",
            desc: "生徒さん個別の出席レポートです。単純な出席時間だけでなく、その日の気分や睡眠の状況、何を目的として来校したかといった出席時に求められる質問への回答も集計します。生徒さんの学習状況や生活リズムを把握するのに大変役立つ資料となっています。"
        }
    ],
    gallery2: [
        {
            title: "アプリケーション メイン画面",
            desc: "Google Calendar連携シフト自動計算システムのメイン画面です。直感的なインターフェースでシフト管理の全機能にアクセスできます。"
        },
        {
            title: "Google OAuth認証機能",
            desc: "OAuth 2.0認証によってGoogleアカウントと安全に連携します。個人のカレンダーデータに対する適切なアクセス許可を管理できます。"
        },
        {
            title: "詳細なシフト設定機能",
            desc: "営業日、勤務時間、最低勤務時間、移動時間などを設定し、カレンダーの予定から該当する時間帯を探し出します。また、変則的な営業時間や、日祝の扱いなど、様々な事業所に柔軟に対応可能なカスタマイズが可能です。"
        },
        {
            title: "カレンダー表示での調整機能",
            desc: "カレンダーの表示でもシフト希望日を調整できます。カレンダー内のセルをクリックすることで、その日の予定をリストアップし、希望を出すかどうかを予定を勘案して選択できるようにしています。"
        },
        {
            title: "スケジュール管理機能",
            desc: "Google Calendarから取得したスケジュール情報をもとに、設定の条件から計算されたシフト希望をリストで表示します。希望日数や合計時間などの統計情報も併せて計算して表示しています。"
        }
    ]
};

// 円弧配置の計算
const positions = [
    // メイン (中央)
    { left: 50, top: 50, scale: 1, opacity: 1, rotateY: 0, zIndex: 3 },
    // 右サイド
    { left: 85, top: 55, scale: 0.7, opacity: 0.5, rotateY: -15, zIndex: 2 },
    // 右奥
    { left: 115, top: 65, scale: 0.5, opacity: 0.3, rotateY: -25, zIndex: 1 },
    // 左サイド  
    { left: 15, top: 55, scale: 0.7, opacity: 0.5, rotateY: 15, zIndex: 2 },
    // 左奥
    { left: -15, top: 65, scale: 0.5, opacity: 0.3, rotateY: 25, zIndex: 1 }
];

// ギャラリースライド関数
function slideGallery(galleryId, direction) {
    currentIndexes[galleryId] = (currentIndexes[galleryId] + direction + 5) % 5;
    
    const gallery = document.getElementById(galleryId);
    const items = gallery.querySelectorAll('.gallery-item');
    
    // 各アイテムの位置を更新
    items.forEach((item, index) => {
        const positionIndex = (index - currentIndexes[galleryId] + 5) % 5;
        const pos = positions[positionIndex];
        
        // 円弧軌道を描くアニメーション
        item.style.left = pos.left + '%';
        item.style.top = pos.top + '%';
        item.style.transform = `translate(-50%, -50%) scale(${pos.scale}) rotateY(${pos.rotateY}deg)`;
        item.style.opacity = pos.opacity;
        item.style.zIndex = pos.zIndex;
        
        // メイン画像の特別効果
        if (positionIndex === 0) {
            item.style.borderColor = 'var(--accent-secondary)';
            item.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.4)';
            item.style.animation = 'glow 4s infinite';
        } else {
            item.style.borderColor = 'var(--border-color)';
            item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            item.style.animation = 'none';
        }
    });
    
    // コンテンツ更新
    updateGalleryContent(galleryId);
}

// コンテンツ更新関数
function updateGalleryContent(galleryId) {
    const titleId = galleryId === 'gallery1' ? 'title1' : 'title2';
    const descId = galleryId === 'gallery1' ? 'desc1' : 'desc2';
    
    const titleElement = document.getElementById(titleId);
    const descElement = document.getElementById(descId);
    
    const content = galleryContentData[galleryId][currentIndexes[galleryId]];
    if (titleElement) titleElement.textContent = content.title;
    if (descElement) descElement.textContent = content.desc;
}

// 3Dギャラリー初期化
function init3DGallery() {
    // 初期化
    slideGallery('gallery1', 0);
    slideGallery('gallery2', 0);
    
    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            slideGallery('gallery1', -1);
            slideGallery('gallery2', -1);
        } else if (e.key === 'ArrowRight') {
            slideGallery('gallery1', 1);
            slideGallery('gallery2', 1);
        }
    });
    
    // タッチスワイプ対応
    let startX = 0;
    let currentX = 0;
    let isSwipping = false;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isSwipping = true;
    });
    
    document.addEventListener('touchmove', function(e) {
        if (!isSwipping) return;
        currentX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!isSwipping) return;
        isSwipping = false;
        
        const deltaX = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(deltaX) > threshold) {
            const direction = deltaX > 0 ? 1 : -1;
            slideGallery('gallery1', direction);
            slideGallery('gallery2', direction);
        }
    });
}

// 画像クリック時のモーダル表示機能
function openImageModal(imageSrc, title, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // スクロール無効化
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // スクロール復活
    
    // アニメーション完了後に非表示
    setTimeout(() => {
        if (!modal.classList.contains('show')) {
            modal.style.display = 'none';
        }
    }, 300);
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// 画像クリック時のイベントリスナーを追加
function addImageClickListeners() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 画像URLを取得
            const backgroundImage = window.getComputedStyle(item).backgroundImage;
            const imageUrl = backgroundImage.slice(5, -2); // url("...") から URL部分を抽出
            
            // どのギャラリーに属するかを判定
            const galleryWrapper = item.closest('.gallery-wrapper');
            const galleryId = galleryWrapper.id;
            
            // 現在表示されている画像のインデックスを取得
            const currentIndex = currentIndexes[galleryId];
            const content = galleryContentData[galleryId][currentIndex];
            
            // モーダルを開く
            openImageModal(imageUrl, content.title, content.desc);
        });
    });
}

// DOM読み込み完了時に初期化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        init3DGallery();
        addImageClickListeners();
    });
} else {
    init3DGallery();
    addImageClickListeners();
}