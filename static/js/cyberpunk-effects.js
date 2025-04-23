// Enhanced Cyberpunk Effects and Animations

// Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-container';
    document.body.appendChild(matrixContainer);
    
    for (let i = 0; i < 50; i++) {
        const matrixColumn = document.createElement('div');
        matrixColumn.className = 'matrix-column';
        matrixColumn.style.left = `${Math.random() * 100}%`;
        matrixColumn.style.animationDuration = `${5 + Math.random() * 10}s`;
        
        for (let j = 0; j < 20; j++) {
            const matrixChar = document.createElement('div');
            matrixChar.className = 'matrix-char';
            matrixChar.style.setProperty('--i', j);
            matrixChar.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
            matrixColumn.appendChild(matrixChar);
        }
        
        matrixContainer.appendChild(matrixColumn);
    }
    
    return matrixContainer;
}

// Enhanced Glitch Effect
function applyGlitchEffect(element) {
    if (!element) return;
    
    element.classList.add('glitching-intense');
    
    setTimeout(() => {
        element.classList.remove('glitching-intense');
    }, 500);
}

// Random Glitch Effect
function randomGlitchEffect() {
    const elements = document.querySelectorAll('h2, h3, .cyber-button, .section-title');
    if (elements.length === 0) return;
    
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    randomElement.classList.add('random-glitch');
    
    setTimeout(() => {
        randomElement.classList.remove('random-glitch');
    }, 200);
    
    // Schedule next random glitch
    const nextGlitchTime = 3000 + Math.random() * 5000;
    setTimeout(randomGlitchEffect, nextGlitchTime);
}

// Terminal Typing Effect
function terminalTypingEffect(element, text, speed = 30, callback) {
    if (!element) return;
    
    let i = 0;
    element.textContent = '';
    
    function typeNextChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, speed);
        } else if (callback) {
            callback();
        }
    }
    
    typeNextChar();
}

// CRT Flicker Effect
function applyCRTFlickerEffect() {
    const terminal = document.querySelector('.terminal');
    if (!terminal) return;
    
    function flicker() {
        if (Math.random() > 0.97) {
            terminal.style.opacity = '0.8';
            setTimeout(() => {
                terminal.style.opacity = '1';
            }, 50);
        }
        
        requestAnimationFrame(flicker);
    }
    
    flicker();
}

// Scan Line Animation
function createScanLine(element) {
    if (!element) return;
    
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    element.appendChild(scanLine);
}

// Data Stream Animation
function createDataStream(element) {
    if (!element) return;
    
    element.classList.add('data-stream');
}

// Holographic Effect
function applyHolographicEffect(element) {
    if (!element) return;
    
    element.classList.add('holographic');
    element.setAttribute('data-text', element.textContent);
}

// Digital Distortion Effect
function applyDigitalDistortionEffect(element) {
    if (!element) return;
    
    element.classList.add('digital-distortion');
}

// Loading Bar Animation
function createLoadingBar(parent, duration = 3000, callback) {
    if (!parent) return;
    
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    
    const loadingProgress = document.createElement('div');
    loadingProgress.className = 'loading-progress';
    loadingBar.appendChild(loadingProgress);
    
    parent.appendChild(loadingBar);
    
    // Animate loading progress
    let progress = 0;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;
    
    const progressInterval = setInterval(() => {
        progress += increment;
        loadingProgress.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            if (callback) {
                setTimeout(callback, 300);
            }
        }
    }, interval);
    
    return loadingBar;
}

// Hexagon Grid Background
function createHexBackground(element) {
    if (!element) return;
    
    const hexBackground = document.createElement('div');
    hexBackground.className = 'hex-background';
    element.appendChild(hexBackground);
}

// Circuit Board Pattern
function createCircuitPattern(element) {
    if (!element) return;
    
    const circuitPattern = document.createElement('div');
    circuitPattern.className = 'circuit-pattern';
    element.appendChild(circuitPattern);
}

// Enhanced Section Transitions
function enhanceSectionTransitions() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px) scale(0.98)';
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section id from data attribute
            const sectionId = this.getAttribute('data-section');
            
            // Add active class to corresponding section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.add('active');
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0) scale(1)';
                }, 300);
            }
            
            // Add glitch effect on section change
            document.body.classList.add('glitching');
            setTimeout(() => {
                document.body.classList.remove('glitching');
            }, 500);
        });
    });
}

// Cyberpunk Card Hover Effects
function applyCyberCardEffects() {
    const cards = document.querySelectorAll('.blog-card, .ctf-card, .award-card');
    
    cards.forEach(card => {
        card.classList.add('cyber-card');
    });
}

// Cyberpunk Form Elements
function applyCyberFormStyles() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
    const selects = document.querySelectorAll('select');
    
    inputs.forEach(input => {
        input.classList.add('cyber-input');
    });
    
    selects.forEach(select => {
        select.classList.add('cyber-select');
    });
}

// Cyberpunk Tooltip
function createCyberTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.classList.add('cyber-tooltip');
    });
}

// Cyberpunk Progress Bars
function createCyberProgressBar(element, progress, label) {
    if (!element) return;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'cyber-progress';
    progressBar.setAttribute('data-label', label || `${progress}%`);
    
    const progressInner = document.createElement('div');
    progressInner.className = 'cyber-progress-bar';
    progressInner.style.setProperty('--progress', `${progress}%`);
    
    progressBar.appendChild(progressInner);
    element.appendChild(progressBar);
    
    return progressBar;
}

// Cyberpunk Badges
function createCyberBadge(text, parent) {
    if (!parent) return;
    
    const badge = document.createElement('span');
    badge.className = 'cyber-badge';
    badge.textContent = text;
    
    parent.appendChild(badge);
    
    return badge;
}

// Cyberpunk Alerts
function createCyberAlert(text, type, parent) {
    if (!parent) return;
    
    const alert = document.createElement('div');
    alert.className = `cyber-alert ${type || 'info'}`;
    alert.textContent = text;
    
    parent.appendChild(alert);
    
    return alert;
}

// Cyberpunk Dividers
function createCyberDivider(parent) {
    if (!parent) return;
    
    const divider = document.createElement('div');
    divider.className = 'cyber-divider';
    
    parent.appendChild(divider);
    
    return divider;
}

// Cyberpunk Accordion
function createCyberAccordion(parent) {
    if (!parent) return;
    
    const accordion = document.createElement('div');
    accordion.className = 'cyber-accordion';
    
    parent.appendChild(accordion);
    
    // Add functionality
    const headers = accordion.querySelectorAll('.cyber-accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        });
    });
    
    return accordion;
}

// Cyberpunk Tabs
function createCyberTabs(parent) {
    if (!parent) return;
    
    const tabs = document.createElement('div');
    tabs.className = 'cyber-tabs';
    
    parent.appendChild(tabs);
    
    // Add functionality
    const tabLinks = tabs.querySelectorAll('.cyber-tab-link');
    const tabContents = tabs.querySelectorAll('.cyber-tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links and contents
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the tab id from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Add active class to corresponding content
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    return tabs;
}

// Cyberpunk Modal
function createCyberModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'cyber-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'cyber-modal-content';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'cyber-modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'cyber-modal-title';
    modalTitle.textContent = title;
    
    const modalClose = document.createElement('button');
    modalClose.className = 'cyber-modal-close';
    modalClose.innerHTML = '&times;';
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalClose);
    
    const modalBody = document.createElement('div');
    modalBody.className = 'cyber-modal-body';
    modalBody.innerHTML = content;
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    return {
        modal: modal,
        show: function() {
            modal.classList.add('active');
        },
        hide: function() {
            modal.classList.remove('active');
        }
    };
}

// Initialize all cyberpunk effects
document.addEventListener('DOMContentLoaded', function() {
    // Apply enhanced boot sequence
    const bootSequence = document.getElementById('boot-sequence');
    const bootText = document.querySelector('.boot-text');
    const mainContent = document.getElementById('main-content');
    
    // Boot sequence text
    const bootLines = [
        "SYSTEM BOOT SEQUENCE INITIATED...",
        "LOADING KERNEL v2.45.7...",
        "INITIALIZING HARDWARE COMPONENTS...",
        "CHECKING MEMORY INTEGRITY... 100% COMPLETE",
        "ESTABLISHING SECURE CONNECTION... CONNECTED",
        "DECRYPTING DATA STREAMS... DECRYPTION SUCCESSFUL",
        "SCANNING FOR INTRUSIONS... NONE DETECTED",
        "LOADING USER INTERFACE... COMPLETE",
        "SYSTEM READY. ACCESS GRANTED."
    ];
    
    // Function to simulate boot sequence with enhanced effects
    function simulateEnhancedBootSequence(lines, index) {
        if (index < lines.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            bootText.appendChild(line);
            
            // Add terminal typing effect
            terminalTypingEffect(line, lines[index], 20, function() {
                // Add small delay between lines
                setTimeout(function() {
                    // Add loading bar for certain messages
                    if (lines[index].includes("CHECKING") || 
                        lines[index].includes("LOADING") || 
                        lines[index].includes("SCANNING")) {
                        
                        const loadingContainer = document.createElement('div');
                        bootText.appendChild(loadingContainer);
                        
                        createLoadingBar(loadingContainer, 1000, function() {
                            loadingContainer.remove();
                            simulateEnhancedBootSequence(lines, index + 1);
                        });
                    } else {
                        simulateEnhancedBootSequence(lines, index + 1);
                    }
                }, 300);
            });
        } else {
            // Boot sequence complete, show main content with glitch effect
            setTimeout(function() {
                bootSequence.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Apply glitch effect to main header
                const mainHeader = document.querySelector('.glitch-header h1');
                if (mainHeader) {
                    applyGlitchEffect(mainHeader);
                }
                
                // Start typing animation on home page
                const typingText = document.getElementById('typing-text');
                if (typingText) {
                    terminalTypingEffect(typingText, "WELCOME TO THE CYBERPUNK PERSONAL HUB. NAVIGATE THROUGH THE SECTIONS TO EXPLORE.", 30);
                }
                
                // Start random glitch effects
                setTimeout(randomGlitchEffect, 3000);
                
                // Apply CRT flicker effect
                applyCRTFlickerEffect();
                
                // Apply other cyberpunk effects
                enhanceSectionTransitions();
                applyCyberCardEffects();
                applyCyberFormStyles();
                createCyberTooltips();
                
                // Add background patterns
                const terminal = document.querySelector('.terminal');
                if (terminal) {
                    createHexBackground(terminal);
                    createCircuitPattern(terminal);
                }
            }, 1000);
        }
    }
    
    // Start enhanced boot sequence
    if (bootSequence && bootText && mainContent) {
        setTimeout(function() {
            simulateEnhancedBootSequence(bootLines, 0);
        }, 500);
    } else {
        // If boot sequence elements don't exist, just apply the effects to the page
        enhanceSectionTransitions();
        applyCyberCardEffects();
        applyCyberFormStyles();
        createCyberTooltips();
        setTimeout(randomGlitchEffect, 3000);
    }
});
