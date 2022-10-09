(function () {
    function updateClock() {
        const clock = document.querySelector('.timer');
        clock.innerText = new Date().toLocaleTimeString();
    }
    const timer = document.querySelector(".timer");
    const data = Date(2020, 0, 0);
    timer.innerText = data;
    setInterval(updateClock, 1000);
    })();