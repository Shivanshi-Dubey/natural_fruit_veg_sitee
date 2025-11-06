const products = [
  { name: "Apple", price: 90 },
  { name: "Banana", price: 45 },
  { name: "Tomato", price: 30 },
  { name: "Mango Juice", price: 120 }
];

function loadProducts() {
  const container = document.getElementById("productList");
  if (!container) return;
  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>₹${p.price}/kg</p>
        <button class="btn" onclick="addToCart(${i})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(i) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}

function loadCart() {
  const cartDiv = document.getElementById("cartItems");
  if (!cartDiv) return;
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cartDiv.innerHTML = cart.map(c => `<p>${c.name} - ₹${c.price}</p>`).join("");
}

loadProducts();
loadCart();
