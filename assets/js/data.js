// ポートフォリオデータ
const portfolioData = {
    skills: {
        languages: [
            { name: "Python", icon: "assets/images/icons/tech/python.svg" },
            { name: "TypeScript", icon: "assets/images/icons/tech/typescript.svg" },
            { name: "JavaScript", icon: "assets/images/icons/tech/javascript.svg" },
            { name: "HTML5", icon: "" },
            { name: "CSS3", icon: "" }
        ],
        frameworks: [
            { name: "React", icon: "assets/images/icons/tech/react.svg" },
            { name: "Flask", icon: "" },
            { name: "Bootstrap 5", icon: "" },
            { name: "SQLAlchemy", icon: "" }
        ],
        tools: [
            { name: "Git", icon: "" },
            { name: "REST API", icon: "" },
            { name: "PowerPoint API", icon: "" },
            { name: "ChatGPT", icon: "assets/images/icons/tech/ai.svg" },
            { name: "Claude", icon: "assets/images/icons/tech/ai.svg" }
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