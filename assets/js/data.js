// ポートフォリオデータ
const portfolioData = {
    skills: {
        languages: [
            { 
                name: "Python", 
                icon: "assets/images/icons/tech/python.svg",
                description_ja: "汎用プログラミング言語。AI・機械学習、Web開発、データ分析など幅広い分野で使用されています。",
                description_en: "General-purpose programming language. Widely used in AI/ML, web development, data analysis, and automation."
            },
            { 
                name: "TypeScript", 
                icon: "assets/images/icons/tech/typescript.svg",
                description_ja: "JavaScriptに静的型チェック機能を追加した言語。大規模開発でバグを減らし、保守性を向上させます。",
                description_en: "JavaScript with static type checking. Reduces bugs and improves maintainability in large-scale development."
            },
            { 
                name: "JavaScript", 
                icon: "assets/images/icons/tech/javascript.svg",
                description_ja: "Webブラウザ上で動作するプログラミング言語。インタラクティブなWebページ、SPA、Node.jsでのサーバー開発などで使用。",
                description_en: "Programming language that runs in web browsers. Used for interactive web pages, SPAs, and server development with Node.js."
            },
            { 
                name: "HTML5", 
                icon: "",
                description_ja: "Webページの構造を定義するマークアップ言語。ビデオ、音声、キャンバスなどのマルチメディア機能をサポート。",
                description_en: "Markup language for defining web page structure. Supports multimedia features like video, audio, and canvas."
            },
            { 
                name: "CSS3", 
                icon: "",
                description_ja: "Webページのスタイルを定義するスタイルシート言語。アニメーション、レスポンシブデザイン、グリッドレイアウトなどを実現。",
                description_en: "Style sheet language for defining web page appearance. Enables animations, responsive design, and grid layouts."
            }
        ],
        frameworks: [
            { 
                name: "React", 
                icon: "assets/images/icons/tech/react.svg",
                description_ja: "Facebook開発のJavaScriptライブラリ。コンポーネントベースのUI構築で、1ページアプリケーション（SPA）の開発に幅広く使用。",
                description_en: "JavaScript library developed by Facebook. Widely used for building single-page applications (SPAs) with component-based UI architecture."
            },
            { 
                name: "Flask", 
                icon: "",
                description_ja: "Python用の軽量Webフレームワーク。シンプルな構造で学習しやすく、小規模から中規模のWebアプリケーション開発に適しています。",
                description_en: "Lightweight web framework for Python. Easy to learn with simple structure, suitable for small to medium-scale web applications."
            },
            { 
                name: "Bootstrap 5", 
                icon: "",
                description_ja: "人気のCSSフレームワーク。事前に用意されたコンポーネントで美しいレスポンシブサイトを簡単に作成できます。",
                description_en: "Popular CSS framework. Easily create beautiful responsive websites using pre-built components and utilities."
            },
            { 
                name: "SQLAlchemy", 
                icon: "",
                description_ja: "Python用のORM（Object-Relational Mapping）ライブラリ。SQLデータベースをPythonオブジェクトで操作でき、複雑なクエリを簡潔に記述。",
                description_en: "ORM (Object-Relational Mapping) library for Python. Allows manipulation of SQL databases as Python objects with concise complex queries."
            }
        ],
        tools: [
            { 
                name: "Git", 
                icon: "",
                description_ja: "分散型バージョン管理システム。ソースコードの変更履歴を記録・管理し、チーム開発でのコラボレーションをサポート。",
                description_en: "Distributed version control system. Records and manages source code change history, supporting team collaboration."
            },
            { 
                name: "REST API", 
                icon: "",
                description_ja: "Webサービスのアーキテクチャ設計スタイル。HTTPメソッド（GET、POST等）を使ってクライアントとサーバー間でデータをやり取り。",
                description_en: "Architectural style for web service design. Exchanges data between client and server using HTTP methods (GET, POST, etc.)."
            },
            { 
                name: "PowerPoint API", 
                icon: "",
                description_ja: "Microsoft PowerPointをプログラムから操作するAPI。スライドの自動作成、データの動的挿入、レポートの自動生成などが可能。",
                description_en: "API for programmatically controlling Microsoft PowerPoint. Enables automatic slide creation, dynamic data insertion, and report generation."
            },
            { 
                name: "ChatGPT", 
                icon: "assets/images/icons/tech/ai.svg",
                description_ja: "OpenAI開発の対話型AIモデル。コード生成、デバッグ支援、技術的な質問への回答など、開発業務を幅広くサポート。",
                description_en: "Conversational AI model by OpenAI. Supports various development tasks including code generation, debugging assistance, and technical Q&A."
            },
            { 
                name: "Claude", 
                icon: "assets/images/icons/tech/ai.svg",
                description_ja: "Anthropic開発のAIアシスタント。長文の理解、複雑な推論、コード解析などに優れ、精度の高い回答を提供。",
                description_en: "AI assistant by Anthropic. Excels at long-form understanding, complex reasoning, and code analysis, providing highly accurate responses."
            }
        ]
    },
    
    projects: [
        {
            id: "project-01",
            title_ja: "新規塾立ち上げ社内システム構築",
            title_en: "New Cram School Internal System Development",
            category_ja: "教育機関DX",
            category_en: "Educational Institution DX",
            description_ja: "新規塾立ち上げに伴う包括的な管理システムを構築。GoogleFormsからの塾生データ収集、QRコード生成による塾生カード作成、デスクトップアプリケーションでの入退室管理自動化を実現。生徒の心理状態把握機能と月次レポート自動生成により、個別支援の質を向上させました。",
            description_en: "Built a comprehensive management system for a new cram school startup. Implemented automated attendance management using QR codes, student psychological state tracking through visual mood selection, and automated monthly reporting for parents. Streamlined operations from student registration to individual support.",
            tech_stack: ["Google Apps Script", "Google Forms", "Google Sheets", "QR Code API", "Desktop App", "Data Visualization"],
            period: "4ヶ月（要件定義1ヶ月 + 開発3ヶ月）",
            scale: "約2800行",
            outcome_ja: "入退室管理の完全自動化、生徒の心理状態可視化を実現。経営者・保護者から高い評価を獲得。",
            outcome_en: "Achieved complete automation of attendance management and psychological state visualization. Received high praise from management and parents.",
            image: "assets/images/projects/project-01.jpg",
            github_url: "https://github.com/tatsunoritojo/attendance-management-system",
            features: [
                {
                    title_ja: "GoogleForms連携データ収集",
                    title_en: "Google Forms Data Collection",
                    description_ja: "塾生の基本情報を効率的に収集・管理",
                    description_en: "Efficient collection and management of student basic information"
                },
                {
                    title_ja: "QRコード自動生成・塾生カード作成",
                    title_en: "QR Code Generation & Student Card Creation",
                    description_ja: "個別QRコードによる塾生カードの自動作成システム",
                    description_en: "Automated student card creation system with individual QR codes"
                },
                {
                    title_ja: "入退室管理自動化",
                    title_en: "Automated Attendance Management",
                    description_ja: "QRコードスキャンによる入退室の完全自動化",
                    description_en: "Complete automation of entry/exit through QR code scanning"
                },
                {
                    title_ja: "心理状態可視化システム",
                    title_en: "Psychological State Visualization",
                    description_ja: "5択イメージ選択による生徒の気分・状態把握",
                    description_en: "Student mood and condition tracking through 5-choice image selection"
                },
                {
                    title_ja: "月次レポート自動生成",
                    title_en: "Automated Monthly Reporting",
                    description_ja: "保護者向け月次レポートの自動作成・配信",
                    description_en: "Automated creation and distribution of monthly reports for parents"
                }
            ],
            development_process: [
                {
                    phase_ja: "要件定義",
                    phase_en: "Requirements",
                    period: "4月",
                    description_ja: "塾の運営フローと必要機能の詳細分析",
                    description_en: "Detailed analysis of school operations and required functions"
                },
                {
                    phase_ja: "設計・開発",
                    phase_en: "Development",
                    period: "5月-7月",
                    description_ja: "システム実装と機能テスト",
                    description_en: "System implementation and functionality testing"
                },
                {
                    phase_ja: "運用開始",
                    phase_en: "Launch",
                    period: "8月",
                    description_ja: "本格運用とフィードバック収集",
                    description_en: "Full operation and feedback collection"
                }
            ]
        }
    ]
};