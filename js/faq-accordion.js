let faqQuestion = document.querySelectorAll('.faq-question');
let faqAnswer = document.querySelectorAll('.faq-answer');

faqQuestion.forEach((el) => {
    el.addEventListener('click', () => {
        console.log(el.nextSibling);
    })
})