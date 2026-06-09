const projectsData = [
    {
        title: 'SealX Manager',
        description: 'Production-grade iOS local media companion and offline video player utility. Implements sandbox-restricted local file management and optimized playback buffers to guarantee privacy-first performance, published on the Apple App Store.',
        fullDescription: `SealX Manager is a utility application published live on the Apple App Store, designed to provide a secure and rapid local media library on iOS devices.
        
Key Technical Integrations:
• Sandboxed File Access: Utilizes secure local directory structures to isolate and protect user media on-device, prioritizing privacy over third-party cloud integrations.
• Buffer-Optimized Video Engine: Integrates video playback widgets with custom cache sizing to prevent drops in frames during high-bitrate offline playback.
• Clean MVVM Architecture: Designed with Riverpod for reactive state management, cleanly separating database models from layout widgets.
• App Store Compliance: Developed and certified under Apple's rigorous review standards, optimizing bundle sizes (26 MB) and local caching.`,
        technologies: ['Flutter', 'Dart', 'Riverpod', 'iOS Sandbox', 'Apple App Store SDK'],
        githubUrl: 'https://github.com/mel-adna',
        demoUrl: 'https://apps.apple.com/us/app/sealx-manager/id6760955423',
        imageUrl: 'assets/apps_screenshots/sealx_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Tomato: Focus Timer',
        description: 'Distraction-free time-blocking productivity app published on the Apple App Store. Features a high-fidelity glassmorphic user interface, customizable focus-break intervals, and background-resilient timers.',
        fullDescription: `Tomato: Focus Timer is a productivity application live on the Apple App Store that helps users manage focus intervals using the Pomodoro technique.

Key Technical Integrations:
• Glassmorphic Design System: Crafted a highly detailed UI using custom styling, blur filters, and micro-animations to improve aesthetic engagement.
• Resilient Background Services: Implements background task listeners and OS-level local notifications to ensure timer precision even when the application is suspended or minimized.
• Event-Driven State Flow: Utilizes BLoC architecture to manage complex transitions between focus cycles, break intervals, and active task states.
• UX Accessibility: Designed with a distraction-free interface matching Apple Human Interface Guidelines for focus states.`,
        technologies: ['Flutter', 'Dart', 'BLoC', 'Local Notifications', 'CoreGraphics / Shaders'],
        githubUrl: 'https://github.com/mel-adna',
        demoUrl: 'https://apps.apple.com/us/app/tomato-focus-timer/id6760948116',
        imageUrl: 'assets/apps_screenshots/tomato_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'FatigueVision - Driver Safety System',
        description: 'Real-time driver drowsiness detection system utilizing on-device computer vision and machine learning. Computes eye aspect ratios (EAR) on-device to trigger instant audio and haptic alerts.',
        fullDescription: `FatigueVision is an advanced driver assistance safety application running on-device ML pipelines for instant danger mitigation.

Key Technical Integrations:
• Real-Time EAR Analysis: Computes mathematical distances between eye landmarks to identify blinking frequency and prolonged eye closure.
• On-Device ML Inference: Integrates Google ML Kit face mesh detectors directly inside the device CPU/GPU pipeline, bypassing network requirements.
• Domain-Driven Design (DDD): Modularized structure separating ML inference layers, core domains, data mappings, and reactive UI controllers.
• Interactive Alarm Loop: Controls custom audio and haptic device feedback loops to prevent alert delay.`,
        technologies: ['Flutter', 'Dart', 'Riverpod', 'Google ML Kit', 'DDD Architecture', 'GoRouter'],
        githubUrl: 'https://github.com/mel-adna/FatigueVisionApp',
        imageUrl: 'assets/apps_screenshots/fatigue_vision_app.jpeg',
        category: 'mobile',
    },
    {
        title: 'E-Commerce Mobile Platform',
        description: 'Scalable retail application featuring a dynamic catalog, real-time cart state propagation, and Firebase user synchronization. Built using Clean Architecture and MVVM patterns.',
        fullDescription: `A production-ready retail application designed to handle high transaction states across iOS and Android.

Key Technical Integrations:
• Cartesian State Propagator: Employs Riverpod/Provider state propagation to instantly reflect catalog changes, coupon activations, and checkout totals across separate layout nodes.
• Database Sync: Syncs user authentication, profile data, and secure orders with Firestore and Firebase Auth instances.
• Repository & Service Decoupling: Abstracts remote data calls behind repository interfaces to allow seamless local testing and data mocking.`,
        technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'REST APIs'],
        githubUrl: 'https://github.com/mel-adna/e-commerce-app',
        imageUrl: 'assets/apps_screenshots/e_commerce_app_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Task Management & Productivity Suite',
        description: 'A local-first task organizer featuring sqlite storage, category-based tag groupings, priority levels, and scheduled local notifications. Powered by BLoC.',
        fullDescription: `A productivity tool optimized for speed, reliability, and offline data safety.

Key Technical Integrations:
• SQLite Persistent Storage: Implements relational schemas locally on the device with raw database queries for high speed and low memory usage.
• BLoC State Management: Decouples view widgets from core workflow controllers to enforce clean unidirectional data flows.
• Scheduled Alerts: Configures OS-level alarm registers to trigger task reminders even after device reboots.`,
        technologies: ['Flutter', 'Dart', 'SQLite', 'BLoC', 'Local Notifications'],
        githubUrl: 'https://github.com/mel-adna/task-manager-app',
        imageUrl: 'assets/apps_screenshots/task_manager_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Location-Aware Weather Forecast System',
        description: 'Location-aware weather forecaster retrieving meteorological data via RESTful APIs. Incorporates cache management and Riverpod to optimize bandwidth consumption.',
        fullDescription: `A reliable meteorological client highlighting fluid animations and custom cache managers.

Key Technical Integrations:
• Riverpod Caching Framework: Saves recent queries and responses to avoid redundant REST requests, improving performance.
• Geolocator Services: Accesses on-device GPS nodes to fetch localized conditions.
• Animations: Utilizes custom canvas rendering for weather widgets.`,
        technologies: ['Flutter', 'Dart', 'REST API', 'Riverpod', 'Geolocator'],
        githubUrl: 'https://github.com/mel-adna/weather_app',
        imageUrl: 'assets/apps_screenshots/weather_app_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Real-Time Encrypted Chat Engine',
        description: 'Secure chat system utilizing socket streams and Firestore databases to perform instant message transmissions and media transfers.',
        fullDescription: `A real-time messaging application designed with clean UX indicators.

Key Technical Integrations:
• Firestore Real-Time Streams: Subscribes to collection listener portals to receive text and media objects instantly.
• Image Processing: Compresses and optimizes image binaries before upload to reduce Firestore network bandwidth.`,
        technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Storage'],
        githubUrl: 'https://github.com/mel-adna/chat_app_2026',
        imageUrl: 'assets/apps_screenshots/chat_2026_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Responsive Engineering Portfolio',
        description: 'Clean, semantic developer portfolio website built using vanilla HTML, CSS variables, and modern Javascript, implementing SEO standards and clean code layouts.',
        fullDescription: `A sleek developer portfolio showcasing professional work, active App Store deployments, and academic accomplishments.

Key Technical Integrations:
• Vanilla Stack Execution: Built without complex bundlers to achieve lightning-fast loading speeds and responsive layouts across mobile, tablet, and desktop.
• Dark-Mode Layout: Uses responsive CSS variables and HSL palettes to display elegant dark layouts.
• Contact Integration: Integrates AJAX-based Formspree portals with error boundary states and interactive success alerts.`,
        technologies: ['HTML5', 'Vanilla CSS', 'Modern JavaScript', 'SEO Best Practices'],
        githubUrl: 'https://github.com/mel-adna/Portfolio_With_Flutter',
        demoUrl: 'https://mel-adna.github.io/',
        imageUrl: 'assets/apps_screenshots/web_site_screenshot.png',
        category: 'web',
    },
];

const experienceData = [
    {
        company: 'Independent App Development & Deployment',
        role: 'iOS / Android Software Engineer',
        duration: '2025 - Present',
        location: 'Morocco (Remote / European Target)',
        description: 'Architecting, developing, and deploying fully functional commercial mobile applications to the Apple App Store, managing end-to-end design, implementation, and compliance lifecycles.',
        responsibilities: [
            'Architected and deployed "SealX Manager" and "Tomato: Focus Timer" to the Apple App Store, passing strict App Store Review guidelines.',
            'Implemented Clean Architecture and MVVM patterns with Riverpod and BLoC to ensure modular, testable, and scale-ready codebases.',
            'Engineered local-first databases using SQLite/Hive and local storage sandboxing to guarantee privacy-focused user data processing.',
            'Collaborated directly with testers to resolve UI, performance bottlenecks, background threading issues, and local notifications.',
            'Created responsive layouts adhering to Apple Human Interface Guidelines and Material Design 3.'
        ],
        technologies: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'iOS Sandbox', 'Local Databases'],
    },
    {
        company: '1337 Coding School (42 Network)',
        role: 'Software Engineering Student',
        duration: '2023 - Present',
        location: 'Khouribga, Morocco',
        description: 'Intensive peer-to-peer, project-based computer science curriculum focusing on software architecture, algorithms, and low-level systems programming without standard libraries.',
        responsibilities: [
            'Architected and implemented low-level Unix utilities and custom shell interpreters in C, managing system signals, processes, file descriptors, and pipelines.',
            'Engineered custom C++ graphics engines and pathfinding algorithms, practicing strict manual memory management (pointers, leaks prevention).',
            'Developed full-stack web applications for ft_transcendence using React, TypeScript, Node.js, and WebSockets with strict peer evaluations.',
            'Collaborated within complex team settings utilizing Git workflows and conducting rigid, peer-to-peer code reviews.'
        ],
        technologies: ['C', 'C++', 'Unix Shell', 'React', 'Node.js', 'WebSockets', 'Algorithms', 'Docker'],
    },
    {
        company: 'Independent Mobile Research & Freelancing',
        role: 'Software Developer',
        duration: '2022 - 2025',
        location: 'Morocco',
        description: 'Researched mobile application architectures, state management patterns, and designed customized digital solutions for startup clients.',
        responsibilities: [
            'Completed comprehensive certifications covering cross-platform development paradigms, widget rendering pipelines, and native integrations.',
            'Designed and structured functional prototypes implementing BLoC, Riverpod, and Provider state solutions to compare performance benefits.',
            'Configured Firebase Backends (Auth, Firestore, Cloud Functions) to deploy responsive, real-time database apps.'
        ],
        technologies: ['Flutter', 'Dart', 'Firebase', 'State Management', 'SQLite', 'REST APIs'],
    },
];

const skillsData = [
    {
        name: 'Core Technologies',
        description: 'Primary development stack',
        icon: 'code',
        skills: ['Flutter', 'Dart', 'C++', 'C', 'React', 'Node.js', 'TypeScript', 'Docker'],
    },
    {
        name: 'State Management',
        description: 'Application state solutions',
        icon: 'hub',
        skills: ['Riverpod', 'BLoC', 'Provider', 'GetX'],
    },
    {
        name: 'Backend & Database',
        description: 'Server-side integrations',
        icon: 'storage',
        skills: ['Firebase', 'Firestore', 'REST APIs', 'PostgreSQL', 'SQLite', 'Hive'],
    },
    {
        name: 'Architecture & Patterns',
        description: 'Code organization & best practices',
        icon: 'architecture',
        skills: ['Clean Architecture', 'Domain-Driven Design', 'SOLID Principles', 'Design Patterns'],
    },
    {
        name: 'Testing & Quality',
        description: 'Code quality assurance',
        icon: 'verified',
        skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Apple Review Compliance'],
    },
    {
        name: 'Tools & Platforms',
        description: 'Development ecosystem',
        icon: 'build',
        skills: ['Git', 'GitHub Actions', 'App Store Connect', 'Google Play Console', 'VS Code', 'Xcode', 'Android Studio'],
    },
];

const aboutData = {
    title: "Software Engineer & Mobile App Architect",
    description: `I am a Software Engineer who bridges the gap between raw low-level performance and polished, high-fidelity mobile products. My computer science foundation was built at 1337 Coding School (42 Network) in Morocco, where I mastered rigorous low-level algorithms, custom Unix systems programming, and memory allocation in C/C++ under strict peer review criteria.\n\nBuilding upon this deep systems pedigree, I self-directed my expertise in mobile and cross-platform app architecture using Flutter and Dart. I focus on developing production-grade, highly responsive applications utilizing Clean Architecture, SOLID principles, and clean state-management paradigms (BLoC, Riverpod). Having built, certified, and successfully launched multiple applications on the Apple App Store, I understand the end-to-end lifecycle of deploying production apps.\n\nI am actively seeking Software Engineering internships or full-time roles, specifically targeting Spain, Europe, or international remote teams. I am fully prepared to relocate or collaborate across borders.`,
    highlights: [
        { icon: 'location_on', label: 'Morocco (Relocation Ready to Spain/Europe)' },
        { icon: 'verified_user', label: 'App Store Published Developer' },
        { icon: 'school', label: '1337 Coding School (42 Network)' },
        { icon: 'code', label: 'Flutter • Dart • C/C++ • React • Node.js' }
    ],
    stats: [
        { value: '2', label: 'Apps Live on App Store' },
        { value: '1337', label: 'Systems Pedigree' },
        { value: 'Clean Code', label: 'Architecture Focus' },
        { value: 'Europe/Remote', label: 'Target Market' }
    ]
};

const contactData = {
    header: "Let's build something extraordinary",
    description: "I am actively seeking Software Engineering internships or full-time mobile developer positions (relocation to Spain/Europe or remote setups). If you are looking for an engineer with systems-level discipline who builds and deploys production-grade mobile experiences, let's connect!",
    email: 'mohamedeladnani0@gmail.com',
    location: 'Morocco (Relocation Ready)',
    availability: 'Actively seeking Europe-based roles & Remote positions',
    socials: [
        { platform: 'GitHub', url: 'https://github.com/mel-adna', icon: 'fab fa-github' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mel-adna/', icon: 'fab fa-linkedin' },
    ]
};

const certificatesData = [
    {
        title: 'Flutter Masterclass - Your Complete Guide to App Development',
        issuer: 'Udemy',
        date: 'Sep 2025',
        credentialId: 'UC-8f6011e9-90fa-46b2-934f-dfa4d175123e',
        logo: 'assets/images/udemy_logo.png' 
    },
    {
        title: 'Complete Flutter Guide 2025: Build Android, iOS and Web apps',
        issuer: 'Udemy',
        date: 'Aug 2025',
        credentialId: 'UC-b623879c-57b8-44d5-8e11-e3f27a72481c',
        logo: 'assets/images/udemy_logo.png'
    },
    {
        title: 'Computer Networks and Network Security',
        issuer: 'IBM',
        date: 'Aug 2025',
        credentialId: '41QCX8PRK125',
        logo: 'assets/images/ibm_logo.png'
    },
    {
        title: 'Critical Thinking Skills for the Professional',
        issuer: 'University of California, Davis',
        date: 'Aug 2025',
        credentialId: 'CQ0UHZ692MJ9',
        logo: 'assets/images/uc_davis_logo.png'
    },
    {
        title: 'Cybersecurity Compliance Framework, Standards & Regulations',
        issuer: 'IBM',
        date: 'Aug 2025',
        credentialId: 'G5A9U9XW9VCI',
        logo: 'assets/images/ibm_logo.png'
    },
    {
        title: 'Generative AI: Prompt Engineering Basics',
        issuer: 'IBM',
        date: 'Aug 2025',
        credentialId: 'TP768VRQ257Q',
        logo: 'assets/images/ibm_logo.png'
    },
    {
        title: 'Introduction to Cybersecurity Tools & Cyberattacks',
        issuer: 'IBM',
        date: 'Aug 2025',
        credentialId: 'T81ONWRWMVBP',
        logo: 'assets/images/ibm_logo.png'
    },
    {
        title: 'Prompt Engineering Basics',
        issuer: 'UM6P - University Mohammed VI Polytechnic',
        date: 'Aug 2025',
        credentialId: '',
        logo: 'assets/images/um6p_logo.png'
    },
    {
        title: 'Solving Problems with Creative and Critical Thinking',
        issuer: 'IBM',
        date: 'Aug 2025',
        credentialId: '7W7I3Y76KRFT',
        logo: 'assets/images/ibm_logo.png'
    },
    {
        title: 'IT Fundamentals for Cybersecurity – MDA Certificate',
        issuer: 'UM6P - University Mohammed VI Polytechnic',
        date: 'Jul 2025',
        credentialId: '',
        logo: 'assets/images/um6p_logo.png'
    }
];
