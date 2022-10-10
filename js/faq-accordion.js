let faqQuestion = document.querySelectorAll('.faq-question');
let faqAnswer = document.querySelectorAll('.faq-answer');

faqQuestion.forEach((el) => {
    el.addEventListener('click', () => {
        let faqAnswer = el.nextElementSibling;
        if (faqAnswer.style.maxHeight) {
            document.querySelectorAll('.faq-answer').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.faq-answer').forEach((el) => el.style.maxHeight = null);
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        }
    })
})