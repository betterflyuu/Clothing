const products = [
  {
    name: "Red Graphic",
    category: "CASUAL / Y2K",
    price: "RBX 7",
    front: "assets/product-01-front.png",
    back: "assets/product-01-back.png",
    buy: "#"
  },
  {
    name: "Blue Denim",
    category: "COUPLE / Y2K",
    price: "RBX 7",
    front: "assets/product-02-front.png",
    back: "assets/product-02-back.png",
    buy: "#"
  },
  {
    name: "Red Set",
    category: "STREETWEAR",
    price: "RBX 7",
    front: "assets/product-03-front.png",
    back: "assets/product-03-back.png",
    buy: "#"
  },
  {
    name: "Dark Romance",
    category: "EMO / Y2K",
    price: "RBX 7",
    front: "assets/product-04-front.png",
    back: "assets/product-04-back.png",
    buy: "#"
  },
  {
    name: "Vintage Denim",
    category: "VINTAGE",
    price: "RBX 7",
    front: "assets/product-05-front.png",
    back: "assets/product-05-back.png",
    buy: "#"
  },
  {
    name: "Pink Rebel",
    category: "STREET / Y2K",
    price: "RBX 7",
    front: "assets/product-06-front.png",
    back: "assets/product-06-back.png",
    buy: "#"
  }
];

const grid = document.getElementById("productGrid");

function card(product, index) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img id="product-img-${index}" src="${product.front}" alt="${product.name} front view"
             onerror="this.src='assets/sample-product.png'">
        <div class="view-toggle">
          <button class="active" data-view="front" data-index="${index}">FRONT</button>
          <button data-view="back" data-index="${index}">BACK</button>
        </div>
      </div>
      <div class="product-info">
        <div>
          <div class="product-name">${product.name}</div>
          <div class="product-type">${product.category}</div>
        </div>
        <div class="product-price">${product.price}</div>
        <a class="buy-btn" href="${product.buy}" target="_blank" rel="noopener">BUY ON ROBLOX ↗</a>
      </div>
    </article>
  `;
}

grid.innerHTML = products.map(card).join("");

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".view-toggle button");
  if (!button) return;

  const index = Number(button.dataset.index);
  const view = button.dataset.view;
  const product = products[index];
  const img = document.getElementById(`product-img-${index}`);

  img.style.opacity = "0";
  setTimeout(() => {
    img.src = view === "front" ? product.front : product.back;
    img.alt = `${product.name} ${view} view`;
    img.onerror = () => { img.src = "assets/sample-product.png"; };
    img.style.opacity = "1";
  }, 150);

  button.parentElement.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
});
