let faqQuestion = document.querySelectorAll('.faq-question');
let faqAnswer = document.querySelectorAll('.faq-answer');

faqQuestion.forEach((el) => {
    el.addEventListener('click', () => {
        let faqAnswer = el.nextElementSibling;
        let icon = el.querySelector('.faq-icon-vertical');
        // це коли відкрита відповідь
        if (faqAnswer.style.maxHeight) {
            document.querySelectorAll('.faq-answer').forEach((el) => el.style.maxHeight = null);
            document.querySelectorAll('.faq-icon-vertical').forEach((el) => el.style.height = '15px');
            icon.style.top = 0;
        } else {
            document.querySelectorAll('.faq-answer').forEach((el) => el.style.maxHeight = null);
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            document.querySelectorAll('.faq-icon-vertical').forEach((el) => el.style.height = '15px');
            document.querySelectorAll('.faq-icon-vertical').forEach((el) => el.style.top = 0);
            icon.style.height = 1 + 'px';
            icon.style.top = 7 + 'px';
        }
    })
})