document.addEventListener('DOMContentLoaded', function () {
    var yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    var backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('back-to-top--visible');
            } else {
                backToTopBtn.classList.remove('back-to-top--visible');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    var faqQuestions = document.querySelectorAll('.about-faq dt');
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = question.nextElementSibling;
            if (!answer) return;

            var isOpen = answer.classList.contains('faq-answer--open');

            if (!isOpen) {
                document.querySelectorAll('.about-faq dd.faq-answer--open').forEach(function (openAnswer) {
                    openAnswer.classList.remove('faq-answer--open');
                });
                document.querySelectorAll('.about-faq dt.faq-question--open').forEach(function (openQuestion) {
                    openQuestion.classList.remove('faq-question--open');
                });
            }

            answer.classList.toggle('faq-answer--open');
            question.classList.toggle('faq-question--open');
        });
    });
    
    var currentPage = window.location.pathname.split('/').pop();
    if (!currentPage) {
        currentPage = 'index.html';
    }

    var navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');

        if (href === currentPage) {
            link.classList.add('nav-link-active');
            link.setAttribute('aria-current', 'page');
        }
    }
    )
}
);
    

   