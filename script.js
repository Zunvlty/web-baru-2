// Efek animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('h1, h2, .character-image, .archon-title, .social-links li');
    
    // Set initial state for animation
    elements.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });
    
    // Animate elements sequentially
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Enhanced hover effects for image
    const characterImage = document.querySelector('.character-image');
    
    characterImage.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.6)';
        this.style.transform = 'scale(1.03) translateY(-5px)';
    });
    
    characterImage.addEventListener('mouseout', function() {
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
        this.style.transform = 'scale(1) translateY(0)';
    });
    
    // Add click effect for social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Background water effect
function createWaterEffect() {
    const waterEffect = document.createElement('div');
    waterEffect.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
        background: 
            radial-gradient(circle at 20% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(100, 180, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(80, 160, 255, 0.25) 0%, transparent 50%);
        animation: waterFlow 8s ease-in-out infinite alternate;
    `;
    
    document.body.appendChild(waterEffect);
}

// Add water flow animation
const waterStyle = document.createElement('style');
waterStyle.textContent = `
    @keyframes waterFlow {
        0% {
            transform: translateY(0px) scale(1);
            opacity: 0.1;
        }
        50% {
            transform: translateY(-10px) scale(1.02);
            opacity: 0.15;
        }
        100% {
            transform: translateY(5px) scale(0.98);
            opacity: 0.12;
        }
    }
`;
document.head.appendChild(waterStyle);

// Initialize effects when page loads
window.addEventListener('load', function() {
    createWaterEffect();
    
    // Remove loading state
    const elements = document.querySelectorAll('h1, h2, .character-image, .archon-title, .social-links li');
    elements.forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});