(function() {
    const slides = [
        '<div><img src="img/partners_costa.png" alt="lavazza"></div>',
        '<div><img src="img/partners_folders.png" alt="folgers"></div>',
        '<div><img src="img/partners_frontier.png" alt="organic-coffee"></div>',
        '<div><img src="img/partners_melitta.png" alt="meliha"></div>',
        '<div><img src="img/partners_monarch.png" alt="rosasrers"></div>',
        '<div><img src="img/partners_green_mountain.png" alt="monarch"></div>',
        '<div><img src="img/partners_costa.png" alt="costa"></div>'
    ]

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesBrand = document.querySelector('.brand-carusel .slides-brand');
        let defaultAmount = 6;
        if (window.innerWidth < 980) {
            defaultAmount = 3;
        }
        if (window.innerWidth < 768) {
            defaultAmount = 2;
        }
        if (window.innerWidth < 478) {
            defaultAmount = 1;
        }
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + defaultAmount);
        if (currentSlides.length < defaultAmount) {
            currentSlides.push(...slides.slice(0, defaultAmount - currentSlides.length));
        }
        console.log(currentSlides.join(""));
        slidesBrand.innerHTML = currentSlides.join("");

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
    document.querySelector('.brand-carusel .prev-icon').addEventListener('click', prevSlide);
    document.querySelector('.brand-carusel .next-icon').addEventListener('click', nextSlide);



    window.addEventListener('resize', renderSlides);
})();