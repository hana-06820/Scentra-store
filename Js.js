function toggleDetails(card){

    let details = card.querySelector(".details");

    document.querySelectorAll(".details").forEach(d => {
        if (d !== details) {
            d.classList.remove("open");
        }
    });

    details.classList.toggle("open");
}
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    
}
