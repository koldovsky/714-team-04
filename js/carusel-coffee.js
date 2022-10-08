(async function () {
    const response = await fetch("api/coffee.json");
    const products = await response.json();
    const slides = [];
    for (const product of products) {
        slides.push(`
        <article>
            <a class="info-link" href="product-info.html">
            <img data-id=${product.id} width="450" src="${product.img}" alt="${product.title} coffee"> 
            <h3 data-id=${product.id}>${product.title}</h3></a>
            <h3>${product.prise}USD</h3>
            <button class="" href="" data-id=${product.id}>Add to cart</button>
        </article>
        `);
    }
    let currentSlideIdx = 0;

    function productInfoClick(ev) {
        const productId = ev.target.dataset.id;
        const product = products.filter(product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }

    function renderSlides() {
        const slidesCoffee = document.querySelector('.carusel-coffee .slides-coffee');
        let defaultAmount = 4;
        if (window.innerWidth < 990) {
            defaultAmount = 2;
        }
        if (window.innerWidth < 765) {
            defaultAmount = 1;
        }
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + defaultAmount);
        if (currentSlides.length < defaultAmount) {
            currentSlides.push(...slides.slice(0, defaultAmount - currentSlides.length));
        }

        slidesCoffee.innerHTML = currentSlides.join("");
        document.querySelectorAll('.info-link')
        .forEach( link => link.addEventListener('click', productInfoClick) );

    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlides();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlides();
    }

    renderSlides();
    document.querySelector('.carusel-coffee .prev-button').addEventListener('click', prevSlide);
    document.querySelector('.carusel-coffee .next-button').addEventListener('click', nextSlide);


    window.addEventListener('resize', renderSlides);
})();