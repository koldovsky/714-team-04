(function () {

  function showInfo() {
    const product = JSON.parse(localStorage.product || "{}");
    if (!product) return;
    document.querySelector('.product')
      .innerHTML = `
        <article class="product-page__article">
        <img class="product-page__img" data-id=${product.id} src="${product.img}" alt="${product.title} coffee">
        <div class="product-page__div">
          <div class="">
            <p>${product.availability}</p>
            <h1>${product.title}</h1>
            <p>Product code ${product.code}</p>
            <h3>${product.prise}USD</h3>
          </div>
          <div>
            <input type="text" class="quantity-input_2vS" value="1" data-test="quantity-input">
            <button class="" href="" data-id=${product.id}>Add to cart</button>
          </div>
          <h2>Description</h2>
          <div class="description">
            <p>${product.description}</p>
            <p>Aroma: ${product.aroma}</p>
            <p>Taste: ${product.taste}</p>
            <p>Body: ${product.body}</p>
            <p>Aftertaste: ${product.aftertaste}</p>
          </div>
        </div>
        </article>
        `
  }

  showInfo();

})();
