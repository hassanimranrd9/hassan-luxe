// Smooth Scroll
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}


// 🛍️ PRODUCTS DATA (EDIT HERE)
const products = [

  { 
    name: "Product Name Here",
    category: "clothes",
    price: "$00",
    oldPrice: "$00",
    stock: "In Stock", // ya "Limited"
    img: "IMAGE_URL_HERE",
    link: "PASTE_YOUR_AMAZON_AFFILIATE_LINK_HERE"
  },

  { 
    name: "Product Name Here",
    category: "clothes",
    price: "$00",
    oldPrice: "$00",
    stock: "Limited",
    img: "IMAGE_URL_HERE",
    link: "PASTE_YOUR_AMAZON_AFFILIATE_LINK_HERE"
  },

  { 
    name: "Product Name Here",
    category: "clothes",
    price: "$00",
    oldPrice: "$00",
    stock: "In Stock",
    img: "IMAGE_URL_HERE",
    link: "PASTE_YOUR_AMAZON_AFFILIATE_LINK_HERE"
  }

];


// 🎯 RENDER PRODUCTS
const container = document.getElementById("productsContainer");

products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${product.img}" alt="${product.name}">
        </div>

        <h3>${product.name}</h3>

        <p class="category">${product.category}</p>

        <div class="price-section">
            <span class="old-price">${product.oldPrice}</span>
            <span class="new-price">${product.price}</span>
        </div>

        <p class="stock ${product.stock === "Limited" ? "limited" : ""}">
            ${product.stock}
        </p>

        <a href="${product.link}" target="_blank" class="buy-btn">
            BUY NOW ON AMAZON
        </a>
    `;

    container.appendChild(card);
});