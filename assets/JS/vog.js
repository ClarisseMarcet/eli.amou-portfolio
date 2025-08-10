document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar ul');
    
    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Changement de thème
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
    
    // Animation des articles au scroll
    const articles = document.querySelectorAll('.vog-article');
    
    function animateArticles() {
        articles.forEach(article => {
            const articlePosition = article.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(articlePosition < screenPosition) {
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialisation
    articles.forEach(article => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateArticles);
    animateArticles(); // Pour les éléments déjà visibles
});