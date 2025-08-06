// ¹àüº¹¯íüë_ý
document.addEventListener('DOMContentLoaded', function() {
    // ÊÓ²ü·çóêó¯n¹àüº¹¯íüë
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // ¢¯Æ£Ö¯é¹’ô°
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // ¹¯íüëBkÊÓ²ü·çó¢¯Æ£Ö¶K’ô°
    window.addEventListener('scroll', function() {
        // q»¯·çó…nµÖ»¯·çóh×í¸§¯È»¯·çó’þakY‹
        const sections = document.querySelectorAll('#hero, #profile, #strengths, #skills, #about-me, #projects, #contact');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
});