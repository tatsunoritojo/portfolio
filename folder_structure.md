# ポートフォリオサイト推奨フォルダ構成

## メインフォルダ名
```
ai-portfolio-site/
```

## 完全なディレクトリ構成

```
ai-portfolio-site/
├── requirements.md                    # 要件定義書（ClaudeCode参照用）
├── README.md                         # プロジェクト概要
├── index.html                        # ホーム（日本語）
├── profile.html                      # プロフィール（日本語）
├── projects.html                     # プロジェクト（日本語）
├── contact.html                      # お問い合わせ（日本語）
├── sitemap.xml                       # サイトマップ
├── robots.txt                        # クローラー制御
│
├── en/                              # 英語版ページ
│   ├── index.html                   # ホーム（英語）
│   ├── profile.html                 # プロフィール（英語）
│   ├── projects.html                # プロジェクト（英語）
│   └── contact.html                 # お問い合わせ（英語）
│
├── assets/                          # 静的リソース
│   ├── css/                         # スタイルシート
│   │   ├── variables.css            # CSS変数定義
│   │   ├── reset.css                # リセットCSS
│   │   ├── base.css                 # 基本スタイル
│   │   ├── components.css           # コンポーネント
│   │   ├── layout.css               # レイアウト
│   │   ├── responsive.css           # レスポンシブ対応
│   │   └── animations.css           # アニメーション
│   │
│   ├── js/                          # JavaScript
│   │   ├── main.js                  # メイン機能
│   │   ├── language-switch.js       # 言語切替
│   │   ├── form-handler.js          # フォーム処理
│   │   ├── animations.js            # アニメーション制御
│   │   └── utils.js                 # ユーティリティ関数
│   │
│   ├── images/                      # 画像ファイル
│   │   ├── hero/                    # ヒーロー画像
│   │   │   ├── hero-bg.jpg
│   │   │   └── hero-bg-mobile.jpg
│   │   ├── profile/                 # プロフィール関連
│   │   │   ├── profile-photo.jpg
│   │   │   └── profile-avatar.jpg
│   │   ├── projects/                # プロジェクト画像
│   │   │   ├── project-01.jpg
│   │   │   ├── project-02.jpg
│   │   │   └── project-03.jpg
│   │   └── icons/                   # アイコン類
│   │       ├── tech/                # 技術アイコン
│   │       │   ├── python.svg
│   │       │   ├── javascript.svg
│   │       │   ├── react.svg
│   │       │   └── ai.svg
│   │       ├── social/              # SNSアイコン
│   │       │   ├── github.svg
│   │       │   ├── linkedin.svg
│   │       │   └── twitter.svg
│   │       └── ui/                  # UIアイコン
│   │           ├── menu.svg
│   │           ├── close.svg
│   │           └── arrow.svg
│   │
│   └── fonts/                       # カスタムフォント（必要に応じて）
│       ├── NotoSansJP-Regular.woff2
│       └── Roboto-Regular.woff2
│
├── data/                            # データファイル
│   ├── content-ja.json              # 日本語コンテンツ
│   ├── content-en.json              # 英語コンテンツ
│   ├── projects.json                # プロジェクトデータ
│   └── skills.json                  # スキルデータ
│
├── docs/                            # ドキュメント
│   ├── design-guide.md              # デザインガイド
│   ├── deployment.md                # デプロイ手順
│   └── maintenance.md               # 保守運用ガイド
│
└── .github/                         # GitHub関連（GitHub Pages使用時）
    └── workflows/
        └── deploy.yml               # 自動デプロイ設定
```

## フォルダ命名の理由

### 1. **ai-portfolio-site/**
- 「ai」でAI特化のポートフォリオであることを明示
- ハイフン区切りで読みやすい
- GitHub リポジトリ名としても適切

### 2. **assets/** 
- 一般的なWeb開発で使用される標準的な名前
- 静的リソース全般を格納する定番フォルダ名

### 3. **en/** 
- 英語版ページを格納
- 短くて分かりやすい
- SEO的にも「/en/」は標準的なURL構造

### 4. **data/** 
- JSON形式のコンテンツデータを格納
- 将来的なCMS化や動的コンテンツ化に対応

### 5. **docs/** 
- プロジェクトドキュメントを格納
- GitHubの標準的なドキュメントフォルダ名

## ClaudeCode向けの配慮

### ✅ 分かりやすい命名
- 英語で統一（国際標準）
- 機能が一目で分かる
- 階層が深くなりすぎない

### ✅ 開発効率重視
- cssファイルを機能別に分割
- jsファイルを責務別に分割
- 画像を用途別にディレクトリ分け

### ✅ 拡張性確保
- 新しいプロジェクトの画像追加が容易
- 技術アイコンの追加が簡単
- 多言語対応の拡張が可能

### ✅ 保守性重視
- 設定ファイルとコンテンツファイルを分離
- ドキュメントフォルダで情報集約
- GitHub連携を考慮した構成

## 作業開始時の準備

1. **フォルダ作成**: `ai-portfolio-site` フォルダを作成
2. **要件定義書配置**: `requirements.md` として要件定義書を配置
3. **README作成**: プロジェクト概要を記載
4. **ClaudeCode起動**: フォルダ内で ClaudeCode を開始

この構成により、ClaudeCodeが迷うことなく効率的に開発を進められます。