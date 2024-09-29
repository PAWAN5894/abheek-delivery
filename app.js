// app.js
const cart = [];
const cartItemsList = document.getElementById("cart-items");
const totalPriceElem = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        const itemName = e.target.getAttribute("data-item");
        const itemPrice = parseFloat(e.target.getAttribute("data-price"));
        
        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = "";  // Clear previous items
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceElem.textContent = total.toFixed(2);
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`Your total is $${totalPriceElem.textContent}. Thanks for ordering!`);
        cart.length = 0;
        updateCart();
    }
});
