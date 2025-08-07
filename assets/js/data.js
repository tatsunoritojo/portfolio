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
                name: "Google APIs", 
                icon: "",
                description_ja: "Google提供の各種API群。Calendar API、Sheets API、Apps Scriptなどを活用してデータ連携やワークフローの自動化を実現。",
                description_en: "Various APIs provided by Google. Leverages Calendar API, Sheets API, Apps Script, etc. for data integration and workflow automation."
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
            title_ja: "QRコード出席管理システム",
            title_en: "QR Code Attendance Management System",
            category_ja: "教育機関DX",
            category_en: "Educational Institution DX",
            description_ja: "Python/Kivyベースのデスクトップアプリを新規事業立ち上げのために開発。2バージョンあり、Excelベースでのローカル管理によりインターネット環境に依存しない安定運用を実現。また、Google Sheets APIを活用し、クラウドベースでの運用を行っています。このバージョンでは、GASを活用した入退室のメール通知機能の自動化も実装しました。",
            description_en: "Developed a Python/Kivy-based desktop application for a new business startup. Features two versions: Excel-based local management for stable operation without internet dependency, and cloud-based operation using Google Sheets API with automated email notification system via GAS.",
            tech_stack: ["Python", "Kivy", "Google Sheets API", "Google Apps Script", "Excel", "QR Code"],
            period: "4ヶ月（要件定義1ヶ月 + 開発3ヶ月）",
            scale: "約2800行",
            outcome_ja: "入退室管理の完全自動化、生徒の心理状態可視化、保護者満足度95%向上を達成。",
            outcome_en: "Achieved complete automation of attendance management, psychological state visualization, and 95% improvement in parent satisfaction.",
            image: "projects/portfolio_data/images/qr_attendance/overview_qr_attendance.png",
            github_url: "https://github.com/tatsunoritojo/attendance-management-system",
            features: [
                {
                    title_ja: "システム概要",
                    title_en: "System Overview",
                    description_ja: "包括的な管理システムでQRコード統合による自動化された運用を実現",
                    description_en: "Comprehensive management system with QR code integration for automated operations",
                    image: "projects/portfolio_data/images/qr_attendance/overview_qr_attendance.png"
                },
                {
                    title_ja: "生徒情報管理",
                    title_en: "Student Information Management", 
                    description_ja: "自動ID生成システムとデータベース管理による効率的な登録機能",
                    description_en: "Efficient registration with automatic ID generation and database management",
                    image: "projects/portfolio_data/images/qr_attendance/registrate_students.png"
                },
                {
                    title_ja: "心理状態可視化",
                    title_en: "Psychological State Visualization",
                    description_ja: "3つの質問システムによる気分・満足度・目的の把握で個別支援の質向上",
                    description_en: "Three-question system for mood, satisfaction, and purpose tracking to improve individual support",
                    image: "projects/portfolio_data/images/qr_attendance/Questionscreen_Q2_sleepsatisfaction.png"
                },
                {
                    title_ja: "出席データ管理",
                    title_en: "Attendance Data Management",
                    description_ja: "リアルタイム更新とGoogle Sheets連携による統計分析機能",
                    description_en: "Real-time updates and statistical analysis with Google Sheets integration",
                    image: "projects/portfolio_data/images/qr_attendance/informations_attendance.png"
                },
                {
                    title_ja: "月次レポート自動生成",
                    title_en: "Automated Monthly Reporting",
                    description_ja: "保護者向け資料の自動生成機能でカスタマイズ対応",
                    description_en: "Automated generation of customizable reports for parents",
                    image: "projects/portfolio_data/images/qr_attendance/generated_reports.png"
                }
            ]
        },
        {
            id: "project-02",
            title_ja: "Google Calendar連携シフト自動計算システム",
            title_en: "Google Calendar Integrated Shift Scheduler",
            category_ja: "業務効率化",
            category_en: "Business Automation",
            description_ja: "FlaskベースのWebアプリケーションとして開発。Google Calendar APIとOAuth 2.0認証を実装しました。それによりデータアクセスのセキュリティを担保しました。SQLiteでデータ管理を行い、アプリ内で調整が可能です。視覚的にわかりやすいカレンダー表示と管理しやすいリスト表示を併用しました。",
            description_en: "Developed as a Flask-based web application with Google Calendar API and OAuth 2.0 authentication for secure data access. Features SQLite data management with in-app adjustments, combining visual calendar display and manageable list view.",
            tech_stack: ["Flask", "Google Calendar API", "OAuth 2.0", "SQLite", "JavaScript", "HTML/CSS"],
            period: "2ヶ月",
            scale: "約27,000行",
            outcome_ja: "シフト作成時間を80%削減、学生の勤務効率向上を実現。",
            outcome_en: "Reduced shift creation time by 80% and improved student work efficiency.",
            image: "projects/portfolio_data/images/shift_scheduler/mainscreen.png",
            github_url: "https://github.com/tatsunoritojo/shift-scheduler-app",
            features: [
                {
                    title_ja: "メインダッシュボード",
                    title_en: "Main Dashboard",
                    description_ja: "直感的なインターフェースでシフト管理の全機能にアクセス可能",
                    description_en: "Intuitive interface providing access to all shift management features",
                    image: "projects/portfolio_data/images/shift_scheduler/mainscreen.png"
                },
                {
                    title_ja: "OAuth認証システム",
                    title_en: "OAuth Authentication System",
                    description_ja: "Googleアカウントとの安全な連携でカレンダーデータへの適切なアクセス管理",
                    description_en: "Secure integration with Google accounts and proper access management for calendar data",
                    image: "projects/portfolio_data/images/shift_scheduler/account_certification.png"
                },
                {
                    title_ja: "詳細シフト設定",
                    title_en: "Detailed Shift Configuration",
                    description_ja: "営業時間、勤務時間、移動時間など様々な事業所に柔軟対応可能",
                    description_en: "Flexible configuration for various business needs including operating hours, work hours, and travel time",
                    image: "projects/portfolio_data/images/shift_scheduler/setting_form.png"
                },
                {
                    title_ja: "カレンダー表示",
                    title_en: "Calendar Display",
                    description_ja: "視覚的なスケジュール表示で印刷対応レイアウトと直感的操作を実現",
                    description_en: "Visual schedule display with print-friendly layout and intuitive operation",
                    image: "projects/portfolio_data/images/shift_scheduler/calendar_of_schedule.png"
                },
                {
                    title_ja: "スケジュール管理",
                    title_en: "Schedule Management",
                    description_ja: "Google Calendarデータを基にした統計情報付きシフト希望リスト表示",
                    description_en: "Shift preference list display with statistical information based on Google Calendar data",
                    image: "projects/portfolio_data/images/shift_scheduler/list_of_schedule.png"
                }
            ]
        }
    ]
};