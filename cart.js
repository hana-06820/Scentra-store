// 🔵 عرض المنتجات في صفحة الكارت
function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartArea = document.querySelector(".cart-products-area");
    let emptyMsg = document.querySelector(".empty-cart-msg");
    let totalEl = document.getElementById("total-price");
    let checkoutBtn = document.getElementById("checkoutbtn");

    cartArea.innerHTML = "";

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        totalEl.style.display = "none";
        checkoutBtn.classList.add("hidden");
    } else {
        emptyMsg.style.display = "none";
        totalEl.style.display = "block";
        checkoutBtn.classList.remove("hidden");

        cart.forEach((item, index) => {
            cartArea.innerHTML += `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p class="price">Price: ${item.price} $</p>

                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>
            `;
        });
    }

    updateTotal();
}


// 🟡 زيادة الكمية
function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
}


// 🔴 تقليل الكمية
function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
}


// 💰 حساب التوتال
function updateTotal() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    let el = document.getElementById("total-price");

    el.innerHTML = `
    <span class="total-text">Total:</span> 
    <span class="total-number">${total}</span> 
    <span class="currency">$</span>
`;
}

// "Total:"  + total + " $";
// 🟣 تحويل لصفحة الدفع
function goToCheckout() {
    window.location.href = "payment.html";
}


// ⚡ تشغيل الكارت أول ما الصفحة تفتح
window.onload = function () {
    updateCartUI();
};