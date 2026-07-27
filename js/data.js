// ─────────────────────────────────────────────────────────────────────────────
// REGIONAL TARGETING — currently: MOROCCO
//
// The pristine Europe/Spain-facing version of this site is preserved on the
// git branch `europe-snapshot` (`git checkout europe-snapshot`).
//
// Everything below is shared between both versions EXCEPT the strings in the
// `targeting` object immediately below, which are the only location-specific
// copy on the site. To switch back to the Europe-facing version, edit this one
// object — nothing else references a location.
// ─────────────────────────────────────────────────────────────────────────────
const targeting = {
    locationLabel: 'Martil, Morocco — open to relocation',
    availability: 'Available for full-time roles (CDI) across Morocco',
    closing: `I am looking for a full-time role on a product team where I can keep shipping
mobile software to real users. I am based in Martil, open to relocating within Morocco, and
equally comfortable in a hybrid or remote setup.`,
};

const projectsData = [
    {
        title: 'Tomato: AI Pomodoro Timer',
        description: 'Focus and time-blocking app published on the Apple App Store, featuring an AI productivity coach that turns a user\'s focus history into personalized guidance using Google Gemini.',
        fullDescription: `Tomato is a productivity app live on the Apple App Store that helps users manage focus sessions using the Pomodoro technique, with an AI coaching layer built on top of their own usage data.

What I built:
• AI Productivity Coach: Aggregates a user's completed focus sessions, daily goals, and task history, then uses Google Gemini to generate personalized coaching suggestions based on their actual patterns rather than generic advice.
• Background-resilient timers: Uses background task handling and OS-level local notifications so a running timer stays accurate when the app is suspended or the screen is locked.
• BLoC state management: Models the transitions between focus intervals, breaks, and task states as explicit events, which keeps the timer logic testable and separate from the UI.
• Statistics and goals: Daily, weekly, monthly, and yearly breakdowns of focus time against a configurable daily goal, persisted locally on the device.
• Shipped end to end: Designed, built, submitted, and maintained through Apple's review process.`,
        technologies: ['Flutter', 'Dart', 'BLoC', 'Google Gemini API', 'Local Notifications'],
        // No githubUrl: closed source. Add a README-only repo, then link it here.
        demoUrl: 'https://apps.apple.com/us/app/tomato-ai-pomodoro-timer/id6760948116',
        imageUrl: 'assets/apps_screenshots/tomato_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'SealX Manager',
        description: 'Privacy-first local media manager and offline video player for iOS, published on the Apple App Store. Keeps all user media on-device with no cloud upload.',
        fullDescription: `SealX Manager is a utility app live on the Apple App Store that gives users a private, fully offline media library on their iPhone.

What I built:
• On-device file management: Stores and organizes media inside the app's own sandboxed directory, so nothing is uploaded to a server. Privacy is the product, not a feature.
• Offline video playback: Tuned player buffering and cache sizing to keep high-bitrate local video playing smoothly without dropped frames.
• MVVM with Riverpod: Reactive state management with a clear separation between data models, view models, and widgets.
• Release engineering: Kept the shipped bundle to 26 MB and took the app through Apple's review process to publication.`,
        technologies: ['Flutter', 'Dart', 'Riverpod', 'iOS File Sandbox', 'Video Playback'],
        // No githubUrl: closed source. Add a README-only repo, then link it here.
        demoUrl: 'https://apps.apple.com/us/app/sealx-manager/id6760955423',
        imageUrl: 'assets/apps_screenshots/sealx_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'Offline-First Task Management Suite',
        description: 'Local-first task organizer built on SQLite, with categories, priority levels, and scheduled local notifications. Works entirely without a network connection.',
        fullDescription: `A productivity tool built around the constraint that it must remain fully usable with no connectivity — the same requirement any field-facing business app has.

What I built:
• SQLite persistence: Relational schema on the device with indexed queries, so list and filter operations stay fast as the dataset grows.
• Offline-first data flow: All reads and writes go to local storage first, so the app never blocks on the network.
• BLoC state management: Unidirectional data flow between the database layer and the UI, which makes the state transitions straightforward to test.
• Scheduled reminders: Local notifications registered with the OS so task reminders still fire after a device reboot.`,
        technologies: ['Flutter', 'Dart', 'SQLite', 'BLoC', 'Local Notifications'],
        githubUrl: 'https://github.com/mel-adna/task-manager-app',
        imageUrl: 'assets/apps_screenshots/task_manager_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'E-Commerce Mobile Platform',
        description: 'Cross-platform retail app with a dynamic product catalog, cart state shared across screens, and Firebase-backed authentication and order storage. Built on Clean Architecture.',
        fullDescription: `A retail application for iOS and Android, structured the way a data-heavy business app needs to be structured.

What I built:
• Clean Architecture layering: Data sources sit behind repository interfaces, so the UI depends on abstractions rather than on Firebase directly. Swapping a remote source for a mock in tests requires no UI changes.
• Shared cart state: Cart contents, applied discounts, and checkout totals stay consistent across every screen that reads them, using Riverpod/Provider.
• Firebase integration: Authentication, user profiles, and order records in Firestore, with REST endpoints for catalog data.
• Testable boundaries: The repository seam is what makes the data layer mockable — the reason to use the pattern at all.`,
        technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Provider', 'REST APIs'],
        githubUrl: 'https://github.com/mel-adna/e-commerce-app',
        imageUrl: 'assets/apps_screenshots/e_commerce_app_screenshot.png',
        category: 'mobile',
    },
    {
        title: 'FatigueVision — Driver Safety System',
        description: 'Real-time driver drowsiness detection running entirely on-device. Tracks eye aspect ratio from a live camera feed and triggers audio and haptic alerts.',
        fullDescription: `A driver assistance app that detects drowsiness from the front camera without sending any video off the device.

What I built:
• Eye Aspect Ratio analysis: Computes distances between facial landmarks each frame to measure blink rate and detect prolonged eye closure.
• On-device ML inference: Uses Google ML Kit face mesh detection locally, so the app works with no network connection and no video ever leaves the phone.
• Domain-Driven Design: Separates the ML inference layer, domain logic, data mapping, and UI controllers into distinct modules.
• Alert loop: Audio and haptic feedback triggered immediately on detection, with the alert repeating until the driver responds.`,
        technologies: ['Flutter', 'Dart', 'Riverpod', 'Google ML Kit', 'DDD', 'GoRouter'],
        githubUrl: 'https://github.com/mel-adna/FatigueVisionApp',
        imageUrl: 'assets/apps_screenshots/fatigue_vision_app.jpeg',
        category: 'mobile',
    },
];

const experienceData = [
    {
        company: 'Independent Mobile App Development',
        role: 'Flutter Mobile Developer',
        duration: '2025 - Present',
        location: 'Martil, Morocco',
        description: 'Designing, building, and publishing commercial mobile applications to the Apple App Store, handling the full lifecycle from architecture through release and maintenance.',
        responsibilities: [
            'Built and published two applications to the Apple App Store — Tomato: AI Pomodoro Timer and SealX Manager — taking both through Apple\'s review process.',
            'Integrated Google Gemini into Tomato to generate personalized productivity coaching from a user\'s own focus session history.',
            'Applied Clean Architecture with Riverpod and BLoC to keep business logic separated from UI and independently testable.',
            'Implemented offline-first local storage using SQLite and Hive so both apps remain fully functional without a network connection.',
            'Handled release engineering: bundle size optimization, App Store Connect metadata, screenshots, and post-launch fixes from user feedback.',
        ],
        technologies: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'SQLite', 'Google Gemini API'],
    },
    {
        company: '1337 Coding School (42 Network)',
        role: 'Software Engineering Student',
        duration: '2024 - 2026',
        location: 'Morocco',
        description: 'Peer-to-peer, project-based computer science curriculum focused on systems programming, algorithms, and software architecture, with no lectures and mandatory peer code review.',
        responsibilities: [
            'Built low-level Unix utilities and a custom shell interpreter in C, working directly with processes, signals, file descriptors, and pipes.',
            'Implemented a graphics engine and pathfinding algorithms in C and C++ with manual memory management and strict leak-free requirements.',
            'Developed a full-stack real-time web application (ft_transcendence) using React, TypeScript, Node.js, and WebSockets.',
            'Worked in small teams using Git branching workflows, and completed rigorous peer-to-peer code reviews in both directions.',
        ],
        technologies: ['C', 'C++', 'React', 'TypeScript', 'Node.js', 'WebSockets', 'Docker', 'Git'],
    },
];

const skillsData = [
    {
        name: 'Mobile Development',
        description: 'Primary stack',
        icon: 'smartphone',
        skills: ['Flutter', 'Dart', 'iOS', 'Android', 'App Store Connect', 'Google Play Console'],
    },
    {
        name: 'State Management',
        description: 'Application state solutions',
        icon: 'hub',
        skills: ['BLoC', 'Riverpod', 'Provider', 'GetX'],
    },
    {
        name: 'Backend & Data',
        description: 'Storage and server integration',
        icon: 'storage',
        skills: ['Firebase', 'Firestore', 'REST APIs', 'SQLite', 'Hive', 'PostgreSQL', 'Node.js'],
    },
    {
        name: 'Architecture',
        description: 'Code organization & patterns',
        icon: 'architecture',
        skills: ['Clean Architecture', 'MVVM', 'Repository Pattern', 'SOLID Principles', 'Offline-First'],
    },
    {
        name: 'Testing & Quality',
        description: 'Code quality assurance',
        icon: 'verified',
        skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Code Review'],
    },
    {
        name: 'Other Languages & Tools',
        description: 'Foundation from 1337',
        icon: 'code',
        skills: ['C', 'C++', 'TypeScript', 'React', 'Git', 'Docker', 'Xcode', 'Android Studio'],
    },
];

const aboutData = {
    title: 'Flutter Mobile Developer',
    description: `I build cross-platform mobile applications for iOS and Android with Flutter, and I take them through the entire lifecycle — architecture, implementation, App Store review, release, and the maintenance that follows from real user feedback.\n\nMy computer science foundation comes from 1337 Coding School (42 Network), where the curriculum is project-based and every submission is reviewed by peers. Working in C and C++ on shells, graphics engines, and memory management gave me habits that carry directly into mobile work: understanding what the code actually does, and caring about performance and correctness rather than just whether the screen renders.\n\nIn practice I work with Clean Architecture, BLoC and Riverpod for state, and offline-first local storage using SQLite and Hive, with REST and Firebase for synchronization. I care most about apps that stay reliable when the network does not cooperate and stay maintainable as the feature set grows.\n\n${targeting.closing}`,
    highlights: [
        { icon: 'smartphone', label: '2 Apps Live on the Apple App Store' },
        { icon: 'code', label: 'Flutter • Dart • BLoC • Riverpod • Firebase' },
        { icon: 'school', label: '1337 Coding School (42 Network)' },
        { icon: 'location_on', label: targeting.locationLabel },
    ],
    stats: [
        { value: '2', label: 'Apps Live on App Store' },
        { value: 'Flutter', label: 'Primary Stack' },
        { value: '1337', label: '42 Network' },
        { value: 'Clean Arch', label: 'Architecture Focus' },
    ],
};

const contactData = {
    header: "Let's build something together",
    description: 'I am looking for a full-time Flutter developer role on a team building real products for real users. If you need someone who has shipped to the App Store and cares about clean, maintainable mobile code, I would be glad to talk.',
    email: 'mohamedeladnani0@gmail.com',
    location: targeting.locationLabel,
    availability: targeting.availability,
    socials: [
        { platform: 'GitHub', url: 'https://github.com/mel-adna', icon: 'fab fa-github' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mel-adna/', icon: 'fab fa-linkedin' },
    ],
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
