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
  const mainTop = document.getElementById("main-container");
  
  //for some reason we have to make sure mainTop is created first, even though it is the line directly above
  if (mainTop){
    //clear the existing innerHTML links
    mainTop.innerHTML = '';

    //add the product information of the passed product array
    for(let a of prods){
      const productDisplay = generateProductHTML(a);
      const showItem = document.createElement("div");
      showItem.innerHTML = (productDisplay);
      mainTop?.appendChild(showItem);//no longer a problem, since we clear the innerHTML first
    }
  }
}

function getByCategory(category: string): void {
    renderProducts(products.filter((a:Product) => a.category == category))
}

function getByRating(minRating: number): void {
  renderProducts(products.filter((a:Product) => a.rating >= minRating))
}

export { renderProducts, getByCategory, getByRating };