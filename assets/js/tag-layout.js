// スマートタグレイアウトシステム
class SmartTagLayout {
    constructor() {
        this.init();
    }
    
    init() {
        // DOM読み込み完了後に実行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.optimizeTagLayout());
        } else {
            this.optimizeTagLayout();
        }
        
        // リサイズ時にも再計算
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.optimizeTagLayout(), 300);
        });
    }
    
    optimizeTagLayout() {
        const tagContainers = document.querySelectorAll('.interest-tags');
        
        tagContainers.forEach(container => {
            this.arrangeTagsOptimally(container);
        });
    }
    
    arrangeTagsOptimally(container) {
        const tags = Array.from(container.children);
        if (tags.length === 0) return;
        
        // タグの幅を測定
        const tagData = tags.map(tag => ({
            element: tag,
            width: this.getElementWidth(tag),
            text: tag.textContent.trim()
        }));
        
        // 文字数による分類
        const shortTags = tagData.filter(tag => tag.text.length <= 6);
        const mediumTags = tagData.filter(tag => tag.text.length > 6 && tag.text.length <= 12);
        const longTags = tagData.filter(tag => tag.text.length > 12);
        
        // 最適化されたレイアウトを計算
        const optimizedOrder = this.calculateOptimalLayout(shortTags, mediumTags, longTags);
        
        // DOM要素を再配置
        this.reorderElements(container, optimizedOrder);
        
        console.log('Tag layout optimized:', {
            short: shortTags.length,
            medium: mediumTags.length,
            long: longTags.length
        });
    }
    
    getElementWidth(element) {
        // 一時的に可視状態にして幅を測定
        const originalDisplay = element.style.display;
        const originalVisibility = element.style.visibility;
        
        element.style.display = 'inline-block';
        element.style.visibility = 'hidden';
        
        const width = element.getBoundingClientRect().width;
        
        element.style.display = originalDisplay;
        element.style.visibility = originalVisibility;
        
        return width;
    }
    
    calculateOptimalLayout(shortTags, mediumTags, longTags) {
        const optimizedOrder = [];
        
        // レイアウト戦略：長いタグを先に配置し、隙間に短いタグを配置
        // 1. 長いタグから配置
        longTags.forEach(tag => optimizedOrder.push(tag));
        
        // 2. 中間タグを配置
        mediumTags.forEach(tag => optimizedOrder.push(tag));
        
        // 3. 短いタグをバランス良く配置
        shortTags.forEach(tag => optimizedOrder.push(tag));
        
        // より高度なアルゴリズム：行ごとのバランスを考慮
        return this.balanceRowLayout(optimizedOrder);
    }
    
    balanceRowLayout(tags) {
        // コンテナの幅を取得
        const containerWidth = document.querySelector('.interest-tags')?.clientWidth || 600;
        const gapSize = 16; // calc(var(--spacing-unit) * 0.8) ≈ 16px
        
        const rows = [];
        let currentRow = [];
        let currentRowWidth = 0;
        
        tags.forEach(tag => {
            const tagWidth = tag.width + gapSize;
            
            if (currentRowWidth + tagWidth <= containerWidth || currentRow.length === 0) {
                currentRow.push(tag);
                currentRowWidth += tagWidth;
            } else {
                // 現在の行をバランス調整してから次の行へ
                rows.push(this.optimizeRowBalance(currentRow));
                currentRow = [tag];
                currentRowWidth = tagWidth;
            }
        });
        
        if (currentRow.length > 0) {
            rows.push(this.optimizeRowBalance(currentRow));
        }
        
        // 行をフラット化して返す
        return rows.flat();
    }
    
    optimizeRowBalance(row) {
        if (row.length <= 1) return row;
        
        // 短いタグと長いタグをバランスよく配置
        const sorted = row.sort((a, b) => {
            // 文字数の差でソート（長い→短いの順）
            return b.text.length - a.text.length;
        });
        
        const balanced = [];
        let longIndex = 0;
        let shortIndex = Math.floor(sorted.length / 2);
        
        while (longIndex < Math.floor(sorted.length / 2) || shortIndex < sorted.length) {
            if (longIndex < Math.floor(sorted.length / 2)) {
                balanced.push(sorted[longIndex]);
                longIndex++;
            }
            if (shortIndex < sorted.length) {
                balanced.push(sorted[shortIndex]);
                shortIndex++;
            }
        }
        
        return balanced;
    }
    
    reorderElements(container, optimizedOrder) {
        // 最後の要素から順番に移動（DOM操作を最小化）
        optimizedOrder.reverse().forEach(tagData => {
            container.insertBefore(tagData.element, container.firstChild);
        });
    }
}

// 自動初期化
document.addEventListener('DOMContentLoaded', () => {
    new SmartTagLayout();
});

// グローバルに公開
window.SmartTagLayout = SmartTagLayout;