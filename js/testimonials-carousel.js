const clients = [
    {
        id: 0,
        name: "Josh Mendel",
        picture: "img/josh_mendel.png",
        feedback: "I really love to drink coffee in the morning, but I hate making it. Therefore, I decided to rent a coffee machine from this company. I am very pleased with the service - everything was done quickly, they brought and set up the coffee machine.",
        date: "December 15, 2021",
    },
    {
        id: 1,
        name: "Jessica Malacks",
        picture: "img/jessica_malacks.png",
        feedback: "We have renovated the office kitchen and decided to delight our employees with automatic coffee machine. However, such equipment is very expensive. So, we simply rented coffee machine from this company and were completely satisfied.",
        date: "February 10, 2022",
    },
    {
        id: 2,
        name: "Daniella Williamson",
        picture: "img/daniella_williamson.png",
        feedback: "When I opened a coffee shop, I couldn't find an affordable coffee machine. Finally, I found this company and I am grateful for their excellent advice. They helped with the choice of the coffee machine and regularly deliver coffee beans and cups.",
        date: "December 15, 2021",
    },
    {
        id: 3,
        name: "Dean Steinberg",
        picture: "img/dean_steinberg.png",
        feedback: "We have been cooperating with this company for 2 years already, and during this time, not a single problem situation has arisen. The service is fast, the coffee is delivered without delay, the prices for coffee machine rental are very low.",
        date: "March 22, 2021",
    },
]

let reviewContainer = document.querySelector('.review-container');

function reviewRender(id) {
    let review = document.createElement("div");
    review.classList.add("review");

    let reviewPic = document.createElement("img");
    reviewPic.src = clients[id].picture;
    reviewPic.alt = "Clients Picture";

    let reviewName = document.createElement("p");
    reviewName.classList.add("client-name");
    reviewName.innerHTML = clients[id].name;

    let reviewText = document.createElement("q");
    reviewText.classList.add("feedback");
    reviewText.innerHTML = clients[id].feedback;

    let reviewDate = document.createElement("p");
    reviewDate.classList.add("feedback-date");
    reviewDate.innerHTML = clients[id].date;

    reviewContainer.appendChild(review);
    review.append(reviewPic);
    review.append(reviewName);
    review.append(reviewText);
    review.append(reviewDate);
}

let currentReviewId = 0;
for (let i = currentReviewId; i < clients.length; i++) {
    reviewRender(i);
}
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    reviewContainer.style.width = width * clients.length + 'px';
    console.log(width);
}

window.addEventListener('resize', init);
init();


const arrowToRight = document.querySelector('.arrow-to-right');
arrowToRight.addEventListener("click", function() {
    currentReviewId++;
    rollSlider();
});

function rollSlider() {
    reviewContainer.style.transform = 'translate(-'+currentReviewId * width + 'px)';
}