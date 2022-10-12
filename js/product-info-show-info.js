(function () {

  function showInfo() {
    const product = JSON.parse(localStorage.product || "{}");
    if (!product) return;
    document.querySelector('.product')
      .innerHTML += `
        <article class="product-page__article">
        <img class="product-page__img" data-id=${product.id} src="${product.img}" alt="${product.title} coffee">
        <div class="product-page__div">
          <div class="product-prise__div">
            <p class="product-availadility">${product.availability}</p>
            <h1 class="product-title__pages">${product.title}</h1>
            <p class="product-code">Product code ${product.code}</p>
            <h3 class="product-prise__pages">${product.prise}USD</h3>
          </div>
          <div class="button-to-basket">
            <div class="amount">
              <input id="value" type="text" class="quantity-input_2vS" value="1" data-test="quantity-input">
              <div>
                <button class="amount-button-up-down up"><svg class="product__input-quantity-arrow quantity-arrow_1OB js-product-specs-quantity-up" width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z" fill="#9199AB"></path></svg></button>
                <button class="amount-button-up-down down"><svg class="product__input-quantity-arrow quantity-arrow_1OB quantity-arrow-down_1wB js-product-specs-quantity-down" width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z" fill="#9199AB"></path></svg></button>
              </div>
            </div>
            <button class="amount-button" href="" data-id=${product.id}>Add to cart</button>
          </div>
          <h2 class="description-title">Description</h2>
          <div class="description">
            <p class="description-text">${product.description}</p>
            </div>
            </div>
            </article>
            `
            if(product.characteristics!==undefined){
              document.querySelector('.description')
            .innerHTML += `<p class="characteristics description-text">Characteristics:</p>`
              for(let i = 0; i < product.characteristics.length; i++){document.querySelector('.characteristics')
            .innerHTML += `<p class="description-text">-${product.characteristics[i]}</p>`}}
            if(product.aroma!==undefined)document.querySelector('.description')
            .innerHTML += `<p class="description-text">Aroma: ${product.aroma}</p>`
            if(product.taste!==undefined)document.querySelector('.description')
            .innerHTML += `<p class="description-text">Taste: ${product.taste}</p>`
            if(product.body!==undefined)document.querySelector('.description')
            .innerHTML += `<p class="description-text">Body: ${product.body}</p>`
            if(product.aftertaste!==undefined)document.querySelector('.description')
            .innerHTML += `<p class="description-text">Aftertaste: ${product.aftertaste}</p>`
  }
  function amountUp(){
    a++;
    document.getElementById('value').value = a
  }
  function amountDown(){
    if(a>1){
      a--;
    }
    document.getElementById('value').value = a
  }

  showInfo();
  let a = document.getElementById('value').value;
  document.querySelector('.up').addEventListener('click', amountUp);
  document.querySelector('.down').addEventListener('click', amountDown);
})();
