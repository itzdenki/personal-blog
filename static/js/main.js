// Cyberpunk Website JavaScript

// Boot sequence animation
document.addEventListener('DOMContentLoaded', function() {
    const bootSequence = document.getElementById('boot-sequence');
    const bootText = document.querySelector('.boot-text');
    const mainContent = document.getElementById('main-content');
    const typingText = document.getElementById('typing-text');
    
    // Boot sequence text
    const bootLines = [
        "SYSTEM BOOT SEQUENCE INITIATED...",
        "LOADING KERNEL...",
        "INITIALIZING HARDWARE...",
        "CHECKING MEMORY INTEGRITY...",
        "ESTABLISHING SECURE CONNECTION...",
        "DECRYPTING DATA STREAMS...",
        "LOADING USER INTERFACE...",
        "SYSTEM READY. ACCESS GRANTED."
    ];
    
    // Typing text for home page
    const typingTextContent = "WELCOME TO THE CYBERPUNK PERSONAL HUB. NAVIGATE THROUGH THE SECTIONS TO EXPLORE.";
    
    // Function to simulate typing
    function typeText(element, text, i, callback) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(function() {
                typeText(element, text, i + 1, callback);
            }, 30);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    
    // Function to simulate boot sequence
    function simulateBootSequence(lines, index) {
        if (index < lines.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            bootText.appendChild(line);
            
            typeText(line, lines[index], 0, function() {
                setTimeout(function() {
                    simulateBootSequence(lines, index + 1);
                }, 300);
            });
        } else {
            // Boot sequence complete, show main content
            setTimeout(function() {
                bootSequence.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Start typing animation on home page
                typeText(typingText, typingTextContent, 0);
            }, 1000);
        }
    }
    
    // Start boot sequence
    setTimeout(function() {
        simulateBootSequence(bootLines, 0);
    }, 500);
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section id from data attribute
            const sectionId = this.getAttribute('data-section');
            
            // Add active class to corresponding section
            document.getElementById(sectionId).classList.add('active');
            
            // Add glitch effect on section change
            document.body.classList.add('glitching');
            setTimeout(() => {
                document.body.classList.remove('glitching');
            }, 500);
        });
    });
});

// Glitch effect on hover for certain elements
document.addEventListener('DOMContentLoaded', function() {
    const glitchElements = document.querySelectorAll('.cyber-glitch, .cyber-glitch-2, .glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.classList.add('glitching-intense');
        });
        
        element.addEventListener('mouseout', function() {
            this.classList.remove('glitching-intense');
        });
    });
});

// Random glitch effect throughout the page
function randomGlitch() {
    const elements = document.querySelectorAll('h2, h3, .cyber-button');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    if (randomElement) {
        randomElement.classList.add('random-glitch');
        
        setTimeout(() => {
            randomElement.classList.remove('random-glitch');
        }, 200);
    }
    
    // Schedule next random glitch
    const nextGlitchTime = 3000 + Math.random() * 5000;
    setTimeout(randomGlitch, nextGlitchTime);
}

// Start random glitches after page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(randomGlitch, 5000);
});

// Terminal cursor effect
document.addEventListener('DOMContentLoaded', function() {
    const terminalElements = document.querySelectorAll('.terminal-cursor');
    
    terminalElements.forEach(element => {
        setInterval(() => {
            element.style.opacity = element.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
});

// Parallax effect on mouse movement
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal');
    
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        terminal.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
    });
});

// Skill bar animation
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate skill bars when they come into view
    function animateSkillBars() {
        skillLevels.forEach(skill => {
            if (isInViewport(skill) && !skill.classList.contains('animated')) {
                skill.classList.add('animated');
                skill.style.width = skill.style.width || '0%';
                
                const targetWidth = skill.getAttribute('style').split('width:')[1].split('%')[0].trim();
                skill.style.width = '0%';
                
                setTimeout(() => {
                    skill.style.transition = 'width 1s ease-in-out';
                    skill.style.width = targetWidth + '%';
                }, 100);
            }
        });
    }
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Check on load
    animateSkillBars();
});

// Admin functionality (placeholder for future implementation)
class AdminPanel {
    constructor() {
        this.isLoggedIn = false;
    }
    
    login(username, password) {
        // This would be replaced with actual authentication
        if (username === 'admin' && password === 'password') {
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }
    
    logout() {
        this.isLoggedIn = false;
    }
    
    addBlogPost(title, content, date, tags) {
        if (!this.isLoggedIn) return false;
        
        // This would be replaced with actual blog post creation
        console.log('Blog post added:', { title, content, date, tags });
        return true;
    }
    
    addCTFWriteup(title, event, category, points, content) {
        if (!this.isLoggedIn) return false;
        
        // This would be replaced with actual CTF writeup creation
        console.log('CTF writeup added:', { title, event, category, points, content });
        return true;
    }
}

// Initialize admin panel
const adminPanel = new AdminPanel();

// Easter egg - Konami code
document.addEventListener('DOMContentLoaded', function() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Konami code completed
                document.body.classList.add('matrix-mode');
                
                // Create falling matrix code effect
                const matrixContainer = document.createElement('div');
                matrixContainer.className = 'matrix-container';
                document.body.appendChild(matrixContainer);
                
                for (let i = 0; i < 100; i++) {
                    const matrixColumn = document.createElement('div');
                    matrixColumn.className = 'matrix-column';
                    matrixColumn.style.left = `${Math.random() * 100}%`;
                    matrixColumn.style.animationDuration = `${5 + Math.random() * 10}s`;
                    
                    for (let j = 0; j < 20; j++) {
                        const matrixChar = document.createElement('div');
                        matrixChar.className = 'matrix-char';
                        matrixChar.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
                        matrixColumn.appendChild(matrixChar);
                    }
                    
                    matrixContainer.appendChild(matrixColumn);
                }
                
                // Remove after 10 seconds
                setTimeout(() => {
                    document.body.classList.remove('matrix-mode');
                    matrixContainer.remove();
                }, 10000);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});
