(function () {
    const rentalservices = document.querySelector(".rentalservices");
    const consulting = document.querySelector(".consulting");
    const accessories = document.querySelector(".accessories");
    const repair = document.querySelector(".repair");
    const rentalservices__button = document.querySelector(".rentalservices__button");
    const consulting__button = document.querySelector(".consulting__button");
    const accessories__button = document.querySelector(".accessories__button");
    const repair__button = document.querySelector(".repair__button");
    rentalservices__button.addEventListener("click", function (e) {
        if(!rentalservices.classList.contains("flex")){rentalservices.classList.remove("none");rentalservices.classList.toggle("flex");}
        if(!consulting.classList.contains("none")){consulting.classList.remove("flex");consulting.classList.toggle("none");}
        if(!accessories.classList.contains("none")){accessories.classList.remove("flex");accessories.classList.toggle("none");}
        if(!repair.classList.contains("none")){repair.classList.remove("flex");repair.classList.toggle("none");}
    });
    consulting__button.addEventListener("click", function (e) {
        if(!rentalservices.classList.contains("none")){rentalservices.classList.remove("flex");rentalservices.classList.toggle("none");}
        if(!consulting.classList.contains("flex")){consulting.classList.remove("none");consulting.classList.toggle("flex");}
        if(!accessories.classList.contains("none")){accessories.classList.remove("flex");accessories.classList.toggle("none");}
        if(!repair.classList.contains("none")){repair.classList.remove("flex");repair.classList.toggle("none");}
    });
    accessories__button.addEventListener("click", function (e) {
        if(!rentalservices.classList.contains("none")){rentalservices.classList.remove("flex");rentalservices.classList.toggle("none");}
        if(!consulting.classList.contains("none")){consulting.classList.remove("flex");consulting.classList.toggle("none");}
        if(!accessories.classList.contains("flex")){accessories.classList.remove("none");accessories.classList.toggle("flex");}
        if(!repair.classList.contains("none")){repair.classList.remove("flex");repair.classList.toggle("none");}
    });
    repair__button.addEventListener("click", function (e) {
        if(!rentalservices.classList.contains("none")){rentalservices.classList.remove("flex");rentalservices.classList.toggle("none");}
        if(!consulting.classList.contains("none")){consulting.classList.remove("flex");consulting.classList.toggle("none");}
        if(!accessories.classList.contains("none")){accessories.classList.remove("flex");accessories.classList.toggle("none");}
        if(!repair.classList.contains("flex")){repair.classList.remove("none");repair.classList.toggle("flex");}
    });
  })();