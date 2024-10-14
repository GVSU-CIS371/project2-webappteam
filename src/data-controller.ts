import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
//This section clear the results from the previous click when uncommented it only displays the final one, best sellers
//when commented it displays everything all at once

  /*let everything = document.querySelectorAll("main > div")       
  for(let a of everything){
    a.classList.add("hidden");
  } */

    for(let a of prods){
      const mainTop = document.getElementById("main-container");
      const productDisplay = generateProductHTML(a);
      const showItem = document.createElement("div");
      showItem.innerHTML = (productDisplay);
      mainTop?.appendChild(showItem);
    }
     
}

function getByCategory(category: string): void {
    renderProducts(products.filter((a:Product) => a.category == category))
}

function getByRating(minRating: number): void {
  renderProducts(products.filter((a:Product) => a.rating >= minRating))
}

export { renderProducts, getByCategory, getByRating };