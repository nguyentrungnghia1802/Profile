// Language translations
const translations = {
    en: {
        // Navigation
        'nav-logo': 'Trung Nghia',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-hobbies': 'Hobbies',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-greeting': 'Hello, I\'m',
        'hero-name': 'Nguyen Trung Nghia',
        'hero-subtitle': 'Full Stack Developer & DevOps Engineer',
        'hero-description': 'Passionate about building robust, efficient, and user-friendly applications. I love solving complex problems and creating scalable solutions.',
        'btn-projects': 'View My Work',
        'btn-contact': 'Contact Me',

        'hero-name': 'グエン・チュン・ギア',
        // About Section
        'about-title': 'About Me',
        'about-intro': 'I\'m a passionate Full Stack Developer and DevOps Engineer with expertise in modern web technologies and infrastructure automation. Currently pursuing my degree at Vietnam National University, I specialize in building and deploying scalable applications using PHP Laravel, Java Spring Boot, modern JavaScript frameworks, and comprehensive DevOps practices with Docker, Ubuntu, and CI/CD pipelines.',
        'info-name': 'Name:',
        'info-birth': 'Date of Birth:',
        'hero-name': 'Nguyễn Trung Nghĩa',
        'info-location': 'Location:',
        'info-university': 'University:',
        'info-email': 'Email:',
        'stat-experience': 'Years Experience',
        'stat-projects': 'Projects Completed',
        'stat-technologies': 'Technologies',

        // Skills Section
        'skills-title': 'Technical Skills',
        'skills-programming': 'Programming Languages',
        'skills-frameworks': 'Frameworks & Libraries',
        'skills-database': 'Database & DevOps',

        // Projects Section
        'projects-title': 'Featured Projects',
        'project-hanaya-desc': 'A modern, responsive e-commerce platform for selling flowers online. Features comprehensive product management, shopping cart, and order tracking system.',
        'project-english-desc': 'A learning platform for students and teachers to practice and manage English exercises. Features responsive design and user-friendly interface.',
        'project-library-desc': 'Desktop application for managing library operations with JavaFX. Features book management, user registration, and borrow/return tracking.',
        'project-game-desc': 'A 2D adventure platformer game built with SDL2 and C++. Features character movement, collision detection, and multiple game levels.',

        // Experience Section
        'experience-title': 'Experience & Education',
        'exp-student-title': 'Information Technology Student',
        'exp-student-desc': 'Studying Information Technology with focus on software engineering, full-stack development, and DevOps engineering (Docker, Ubuntu, CI/CD, Infrastructure Automation)',
        'exp-freelance-title': 'Freelance Developer',
        'exp-freelance-desc': 'Developing web applications and providing technical solutions for various clients',

        // Hobbies Section
        'hobbies-title': 'Hobbies & Interests',
        'hobby-coding': 'Coding',
        'hobby-coding-desc': 'Always exploring new technologies and frameworks',
        'hobby-gaming': 'Gaming',
        'hobby-gaming-desc': 'Strategy games and competitive programming challenges',
        'hobby-reading': 'Reading',
        'hobby-reading-desc': 'Technical books and industry blogs',
        'hobby-music': 'Music',
        'hobby-music-desc': 'Listening to music while coding',

        // Contact Section
        'contact-title': 'Get In Touch',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-location-title': 'Location',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'btn-send': 'Send Message',

        // Footer
        'footer-text': 'All rights reserved.'
    },
    ja: {
        // Navigation
        'nav-logo': 'Trung Nghia',
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-skills': 'スキル',
        'nav-projects': 'プロジェクト',
        'nav-experience': '経験',
        'nav-hobbies': '趣味',
        'nav-contact': 'お問い合わせ',

        // Hero Section
        'hero-greeting': 'こんにちは、私は',
        'hero-subtitle': 'フルスタック開発者 & DevOpsエンジニア',
        'hero-description': '堅牢で効率的、ユーザーフレンドリーなアプリケーションの構築に情熱を注いでいます。複雑な問題を解決し、スケーラブルなソリューションを作成することが大好きです。',
        'btn-projects': '私の作品を見る',
        'btn-contact': 'お問い合わせ',

        // About Section
        'about-title': '私について',
        'about-intro': '私は現代のウェブ技術とインフラ自動化に精通した情熱的なフルスタック開発者兼DevOpsエンジニアです。現在、ベトナム国立大学で学位を取得中で、PHP Laravel、Java Spring Boot、現代のJavaScriptフレームワーク、Docker、Ubuntu、CI/CDパイプラインを使用した包括的なDevOps実践を用いてスケーラブルなアプリケーションの構築と展開を専門としています。',
        'info-name': '名前:',
        'info-birth': '生年月日:',
        'info-location': '場所:',
        'info-university': '大学:',
        'info-email': 'メール:',
        'stat-experience': '年の経験',
        'stat-projects': '完了したプロジェクト',
        'stat-technologies': '技術',

        // Skills Section
        'skills-title': '技術スキル',
        'skills-programming': 'プログラミング言語',
        'skills-frameworks': 'フレームワーク & ライブラリ',
        'skills-database': 'データベース & DevOps',

        // Projects Section
        'projects-title': '注目のプロジェクト',
        'project-hanaya-desc': 'オンラインで花を販売するためのモダンでレスポンシブなeコマースプラットフォーム。包括的な商品管理、ショッピングカート、注文追跡システムを備えています。',
        'project-english-desc': '学生と教師が英語の練習問題を練習・管理するための学習プラットフォーム。レスポンシブデザインとユーザーフレンドリーなインターフェースを特徴としています。',
        'project-library-desc': 'JavaFXを使用した図書館運営のためのデスクトップアプリケーション。書籍管理、ユーザー登録、貸出・返却追跡機能を備えています。',
        'project-game-desc': 'SDL2とC++で作られた2Dアドベンチャープラットフォーマーゲーム。キャラクターの移動、衝突検出、複数のゲームレベルを特徴としています。',

        // Experience Section
        'experience-title': '経験と教育',
        'exp-student-title': '情報技術学生',
        'exp-student-desc': 'ソフトウェアエンジニアリング、フルスタック開発、DevOpsエンジニアリング（Docker、Ubuntu、CI/CD、インフラ自動化）に焦点を当てた情報技術を学習',
        'exp-freelance-title': 'フリーランス開発者',
        'exp-freelance-desc': 'ウェブアプリケーションの開発と様々なクライアントへの技術ソリューションの提供',

        // Hobbies Section
        'hobbies-title': '趣味と興味',
        'hobby-coding': 'コーディング',
        'hobby-coding-desc': '常に新しい技術とフレームワークを探求',
        'hobby-gaming': 'ゲーム',
        'hobby-gaming-desc': 'ストラテジーゲームと競技プログラミングチャレンジ',
        'hobby-reading': '読書',
        'hobby-reading-desc': '技術書と業界ブログ',
        'hobby-music': '音楽',
        'hobby-music-desc': 'コーディング中に音楽を聴く',

        // Contact Section
        'contact-title': 'お問い合わせ',
        'contact-email-title': 'メール',
        'contact-phone-title': '電話',
        'contact-location-title': '場所',
        'form-name': 'お名前',
        'form-email': 'メールアドレス',
        'form-subject': '件名',
        'form-message': 'メッセージ',
        'btn-send': 'メッセージを送信',

        // Footer
        'footer-text': '全著作権所有。'
    },
    vi: {
        // Navigation
        'nav-logo': 'Trung Nghĩa',
        'nav-home': 'Trang chủ',
        'nav-about': 'Về tôi',
        'nav-skills': 'Kỹ năng',
        'nav-projects': 'Dự án',
        'nav-experience': 'Kinh nghiệm',
        'nav-hobbies': 'Sở thích',
        'nav-contact': 'Liên hệ',

        // Hero Section
        'hero-greeting': 'Xin chào, tôi là',
        'hero-subtitle': 'Nhà phát triển Full Stack & DevOps Engineer',
        'hero-description': 'Đam mê xây dựng các ứng dụng mạnh mẽ, hiệu quả và thân thiện với người dùng. Tôi thích giải quyết các vấn đề phức tạp và tạo ra các giải pháp có thể mở rộng.',
        'btn-projects': 'Xem tác phẩm của tôi',
        'btn-contact': 'Liên hệ với tôi',

        // About Section
        'about-title': 'Về tôi',
        'about-intro': 'Tôi là một nhà phát triển Full Stack và DevOps Engineer đầy đam mê với chuyên môn về các công nghệ web hiện đại và tự động hóa hạ tầng. Hiện đang theo học tại Đại học Quốc gia Việt Nam, tôi chuyên xây dựng và triển khai các ứng dụng có thể mở rộng bằng PHP Laravel, Java Spring Boot, các framework JavaScript hiện đại, và các thực hành DevOps toàn diện với Docker, Ubuntu, và CI/CD pipelines.',
        'info-name': 'Tên:',
        'info-birth': 'Ngày sinh:',
        'info-location': 'Địa điểm:',
        'info-university': 'Trường đại học:',
        'info-email': 'Email:',
        'stat-experience': 'Năm kinh nghiệm',
        'stat-projects': 'Dự án hoàn thành',
        'stat-technologies': 'Công nghệ',

        // Skills Section
        'skills-title': 'Kỹ năng kỹ thuật',
        'skills-programming': 'Ngôn ngữ lập trình',
        'skills-frameworks': 'Framework & Thư viện',
        'skills-database': 'Cơ sở dữ liệu & DevOps',

        // Projects Section
        'projects-title': 'Dự án nổi bật',
        'project-hanaya-desc': 'Nền tảng thương mại điện tử hiện đại, responsive để bán hoa trực tuyến. Có tính năng quản lý sản phẩm toàn diện, giỏ hàng và hệ thống theo dõi đơn hàng.',
        'project-english-desc': 'Nền tảng học tập cho học sinh và giáo viên thực hành và quản lý bài tập tiếng Anh. Có thiết kế responsive và giao diện thân thiện người dùng.',
        'project-library-desc': 'Ứng dụng desktop quản lý hoạt động thư viện với JavaFX. Có tính năng quản lý sách, đăng ký người dùng và theo dõi mượn/trả.',
        'project-game-desc': 'Game phiêu lưu 2D được xây dựng bằng SDL2 và C++. Có tính năng di chuyển nhân vật, phát hiện va chạm và nhiều cấp độ game.',

        // Experience Section
        'experience-title': 'Kinh nghiệm & Học vấn',
        'exp-student-title': 'Sinh viên Công nghệ thông tin',
        'exp-student-desc': 'Học ngành Công nghệ thông tin tập trung vào kỹ thuật phần mềm, phát triển full-stack, và kỹ thuật DevOps (Docker, Ubuntu, CI/CD, Tự động hóa hạ tầng)',
        'exp-freelance-title': 'Nhà phát triển Freelance',
        'exp-freelance-desc': 'Phát triển ứng dụng web và cung cấp giải pháp kỹ thuật cho nhiều khách hàng',

        // Hobbies Section
        'hobbies-title': 'Sở thích & Quan tâm',
        'hobby-coding': 'Lập trình',
        'hobby-coding-desc': 'Luôn khám phá các công nghệ và framework mới',
        'hobby-gaming': 'Game',
        'hobby-gaming-desc': 'Game chiến lược và thách thức lập trình thi đấu',
        'hobby-reading': 'Đọc sách',
        'hobby-reading-desc': 'Sách kỹ thuật và blog ngành',
        'hobby-music': 'Âm nhạc',
        'hobby-music-desc': 'Nghe nhạc khi lập trình',

        // Contact Section
        'contact-title': 'Liên hệ',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Điện thoại',
        'contact-location-title': 'Vị trí',
        'form-name': 'Tên của bạn',
        'form-email': 'Email của bạn',
        'form-subject': 'Chủ đề',
        'form-message': 'Tin nhắn của bạn',
        'btn-send': 'Gửi tin nhắn',

        // Footer
        'footer-text': 'Bảo lưu mọi quyền.'
    }
};

// Current language
let currentLanguage = 'en';

// DOM elements
const languageButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    setLanguage('en');
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    // Initialize typing animation
    initializeTypingAnimation();
    
    // Initialize scroll effects
    initializeScrollEffects();
});

// Language switching functionality
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update active language button
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Language button event listeners
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Navigation functionality
function initializeNavigation() {
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu after click
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Typing animation
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;
    
    const texts = {
        en: ['Full Stack Developer', 'DevOps Engineer', 'Infrastructure Automation Specialist', 'Cloud & Container Expert', 'Problem Solver'],
        ja: ['フルスタック開発者', 'DevOpsエンジニア', 'インフラ自動化スペシャリスト', 'クラウド & コンテナエキスパート', '問題解決者'],
        vi: ['Nhà phát triển Full Stack', 'DevOps Engineer', 'Chuyên gia tự động hóa hạ tầng', 'Chuyên gia Cloud & Container', 'Người giải quyết vấn đề']
    };
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentTexts = texts[currentLanguage] || texts.en;
        const currentText = currentTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typingSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % currentTexts.length;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    typeText();
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = level + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Scroll animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
    
    // Observe individual cards and items
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-item, .hobby-card, .timeline-item, .stat-item'
    );
    animatedElements.forEach(element => observer.observe(element));
}

// Initialize other animations
function initializeAnimations() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply initial styles and observe elements
    const revealElements = document.querySelectorAll(
        '.section-title, .about-content, .skills-container, .projects-grid, .timeline, .hobbies-grid, .contact-content'
    );
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(element);
    });
}

// Load saved language preference
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage);
}

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00d4ff;
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particles
setTimeout(createParticles, 1000);

// Smooth scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopButton.className = 'scroll-to-top';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #00d4ff, #0099cc);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.visibility = 'visible';
    } else {
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.visibility = 'hidden';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effects to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click to copy functionality for contact info
document.querySelectorAll('.contact-details p').forEach(detail => {
    detail.style.cursor = 'pointer';
    detail.title = 'Click to copy';
    
    detail.addEventListener('click', () => {
        navigator.clipboard.writeText(detail.textContent)
            .then(() => {
                // Show temporary feedback
                const originalText = detail.textContent;
                detail.textContent = 'Copied!';
                detail.style.color = '#00d4ff';
                
                setTimeout(() => {
                    detail.textContent = originalText;
                    detail.style.color = '';
                }, 1000);
            })
            .catch(() => {
                console.log('Copy failed');
            });
    });
});

// Original smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
