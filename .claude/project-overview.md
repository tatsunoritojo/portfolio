# AI Portfolio Site - プロジェクト概要

## プロジェクト情報
- **プロジェクト名**: AI駆動開発ポートフォリオサイト
- **メインブランチ**: main
- **現在のブランチ**: enhance/modern-typography
- **ライセンス**: MIT
- **開発環境**: Node.js (serve使用)

## ディレクトリ構造

```
ai-portfolio-site/
├── .claude/                          # プロジェクト管理用ディレクトリ
│   └── project-overview.md            # このファイル
├── articles/                          # 日本語記事ページ
│   ├── anime.html
│   ├── drive.html
│   ├── educational-psychology.html
│   ├── fid-basketball.html
│   ├── fullstack-development.html
│   ├── gaming.html
│   ├── golf.html
│   ├── movies.html
│   ├── nature.html
│   ├── ramen.html
│   ├── rapid-prototyping.html
│   ├── reading.html
│   ├── road-bike.html
│   ├── special-olympics.html
│   └── wheelchair-softball.html
├── assets/                           # 静的アセット
│   ├── css/                          # スタイルシート
│   │   ├── variables.css             # CSS変数定義
│   │   ├── reset.css                 # CSSリセット
│   │   ├── base.css                  # 基本スタイル
│   │   ├── layout.css                # レイアウトスタイル
│   │   ├── components.css            # コンポーネントスタイル
│   │   ├── animations.css            # アニメーション
│   │   ├── responsive.css            # レスポンシブ対応
│   │   ├── about-readability.css     # 可読性向上
│   │   ├── project-fix.css           # プロジェクトセクション修正
│   │   ├── video-background.css      # 動画背景
│   │   ├── projects-parallax.css     # パララックス効果
│   │   ├── accessibility.css         # アクセシビリティ
│   │   ├── professional-hero.css     # プロフェッショナルヒーローセクション
│   │   └── modern-typography.css     # モダンタイポグラフィ
│   ├── fonts/                        # Webフォント
│   ├── images/                       # 画像ファイル
│   │   ├── backgrounds/              # 背景画像・動画
│   │   │   ├── *.jpg                 # 背景画像
│   │   │   └── VID_20250721_232707.mp4  # 背景動画
│   │   ├── hero/                     # ヒーローセクション画像
│   │   ├── icons/                    # アイコン
│   │   │   ├── social/               # ソーシャルアイコン
│   │   │   ├── tech/                 # 技術アイコン
│   │   │   └── ui/                   # UIアイコン
│   │   ├── profile/                  # プロフィール画像
│   │   │   └── profile-photo.jpg     # プロフィール写真
│   │   ├── projects/                 # プロジェクト関連画像
│   │   └── sections/                 # セクション用画像
│   │       └── profile-bg.jpg        # プロフィール背景
│   └── js/                           # JavaScript
│       ├── animations.js             # アニメーション制御
│       ├── data.js                   # データ管理
│       ├── form-handler.js           # フォーム処理
│       ├── interest-articles.js      # 興味記事管理
│       ├── language-switch.js        # 言語切替
│       ├── main.js                   # メインスクリプト
│       ├── modern-typography.js      # タイポグラフィ制御
│       ├── parallax.js              # パララックス効果
│       ├── random-pulse.js          # ランダムパルス効果
│       ├── slideshow.js             # スライドショー
│       ├── tag-layout.js            # タグレイアウト
│       ├── utils.js                 # ユーティリティ
│       └── video-handler.js         # 動画処理
├── data/                            # JSONデータファイル
│   ├── content-en.json              # 英語コンテンツ
│   ├── content-ja.json              # 日本語コンテンツ
│   ├── projects.json                # プロジェクト情報
│   └── skills.json                  # スキル情報
├── design/                          # デザイン関連ファイル
│   ├── 01changes-root.png           # デザイン変更履歴（旧ルート）
│   ├── 01changes.png                # デザイン変更履歴1
│   └── 02changes.png                # デザイン変更履歴2
├── docs/                            # ドキュメント
│   ├── deployment.md                # デプロイメント手順
│   ├── design-guide.md              # デザインガイド
│   └── maintenance.md               # メンテナンス情報
├── en/                              # 英語版ページ
│   ├── articles/                    # 英語記事
│   │   ├── gaming.html
│   │   └── road-bike.html
│   ├── contact.html                 # 英語お問い合わせ
│   ├── index.html                   # 英語ホーム
│   ├── profile.html                 # 英語プロフィール
│   └── projects.html                # 英語プロジェクト
├── node_modules/                    # Node.js依存関係
├── contact.html                     # 日本語お問い合わせページ
├── index.html                       # 日本語メインページ
├── profile.html                     # 日本語プロフィールページ
├── projects.html                    # 日本語プロジェクトページ
├── package.json                     # Node.js設定
├── package-lock.json                # 依存関係ロック
├── robots.txt                       # 検索エンジン用
├── sitemap.xml                      # サイトマップ
├── README.md                        # プロジェクト説明
├── README-DEPLOY.md                 # デプロイ説明
├── deploy.bat                       # デプロイスクリプト
├── setup-auto-deploy.bat            # 自動デプロイ設定
└── start-server.bat                 # サーバー起動スクリプト
```

## 主要ファイルの役割

### コアファイル
- `index.html` - メインのランディングページ（日本語）
- `profile.html` - プロフィールページ
- `projects.html` - プロジェクト一覧ページ
- `contact.html` - お問い合わせページ

### 設定ファイル
- `package.json` - Node.js設定、依存関係、スクリプト定義
- `robots.txt` - 検索エンジンクローラー用
- `sitemap.xml` - サイトマップ

### データファイル
- `data/content-ja.json` - 日本語コンテンツデータ
- `data/content-en.json` - 英語コンテンツデータ
- `data/projects.json` - プロジェクト詳細データ
- `data/skills.json` - スキル情報データ

## 開発コマンド

```bash
# 開発サーバー起動
npm start
# または
npm run dev

# Windowsバッチファイルでサーバー起動
start-server.bat

# デプロイ実行
deploy.bat
```

## CSS アーキテクチャ

スタイルシートは機能別に分割されており、以下の順序で読み込まれます：

1. `variables.css` - CSS変数とカラーパレット
2. `reset.css` - ブラウザデフォルトスタイルのリセット
3. `base.css` - 基本的なタイポグラフィとレイアウト
4. `layout.css` - グリッドシステムとページレイアウト
5. `components.css` - 再利用可能なコンポーネント
6. `animations.css` - アニメーションとトランジション
7. `responsive.css` - レスポンシブ対応
8. 機能固有のCSS（accessibility.css, professional-hero.css等）

## JavaScript アーキテクチャ

- **main.js** - メインの初期化とイベントリスナー
- **data.js** - データ管理とAPI通信
- **animations.js** - インタラクションアニメーション
- **language-switch.js** - 多言語対応
- **form-handler.js** - フォーム送信処理
- **utils.js** - 共通ユーティリティ関数

## 最近の変更履歴

### 現在のブランチ: enhance/modern-typography
- モダンタイポグラフィシステムの実装
- プロフェッショナルなヒーローセクションの追加
- 自然な写真ギャラリーの実装

### 最近のコミット
- bb02e20: Professional Hero Section with Natural Photography Showcase
- 91f82a0: Visual refinement and accessibility enhancements
- 09cf7f8: Readability improvements with optimized color scheme
- bb5a7b2: Slideshow performance optimization and smart tag layout
- 66e0d89: Interest tag overflow resolution and blue color scheme

## メンテナンス項目

### 定期的に確認すべき項目
1. **画像最適化** - assets/images/ 内の画像サイズとフォーマット
2. **パフォーマンス** - CSS/JSの圧縮と結合
3. **アクセシビリティ** - WAI-ARIAガイドライン準拠
4. **SEO** - メタデータとstructured dataの更新
5. **セキュリティ** - 依存関係の脆弱性チェック

### トラブルシューティング
- 画像が表示されない → assets/images/ のパス確認
- アニメーションが動かない → animations.js と CSS の読み込み順確認
- レスポンシブが効かない → responsive.css の読み込み確認

## 連絡先・サポート
プロジェクトに関する質問や問題は、GitHubのIssueページで報告してください。

---
最終更新: 2025年1月7日