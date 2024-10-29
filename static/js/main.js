// Skills Data
const skills = [
    {
        name: 'Frontend Development',
        description: 'Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript.',
        icon: '💻'
    },
    {
        name: 'Web Design',
        description: 'Creating beautiful and functional designs with attention to UX/UI principles.',
        icon: '🎨'
    },
    {
        name: 'Version Control',
        description: 'Managing code using Git and GitHub for efficient collaboration and deployment.',
        icon: '🔄'
    },
    {
        name: 'Performance Optimization',
        description: 'Optimizing websites for speed, accessibility, and search engine visibility.',
        icon: '⚡'
    }
];

// Works Data
const works = [
    {
        title: 'Modern Portfolio',
        description: 'A responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations and modern design.',
        image: '/api/placeholder/400/300'
    },
    {
        title: 'E-commerce Platform',
        description: 'Full-featured online store with shopping cart, user authentication, and payment integration.',
        image: '/api/placeholder/400/300'
    },
    {
        title: 'Business Website',
        description: 'Corporate website with modern design, blog functionality, and contact form integration.',
        image: '/api/placeholder/400/300'
    }
];

// Loading Screen Handler
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        const content = document.querySelector('.content-wrapper');
        
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        content.classList.add('visible');
        
        // Initialize animations after content is visible
        initializeAnimations();
    }, 1500); // 1.5 seconds loading time
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Populate Skills
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
    `;
    skillsGrid.appendChild(skillCard);
});

// Populate Works
const worksGrid = document.querySelector('.works-grid');
works.forEach(work => {
    const workCard = document.createElement('div');
    workCard.className = 'work-card';
    workCard.innerHTML = `
        <div class="work-image">
            <img src="${work.image}" alt="${work.title}">
        </div>
        <div class="work-content">
            <h3 class="work-title">${work.title}</h3>
            <p class="work-description">${work.description}</p>
        </div>
    `;
    worksGrid.appendChild(workCard);
});

// Enhanced Intersection Observer for Animations
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optional: Unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2,
    rootMargin: '50px'
});

function initializeAnimations() {
    document.querySelectorAll('.skill-card, .work-card, .contact-form').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});

// Optional: Add hover effect to tech stack
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'translateY(-5px)';
    });
    
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'translateY(0)';
    });
});