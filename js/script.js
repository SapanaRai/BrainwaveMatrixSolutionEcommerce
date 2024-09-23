let cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartSection = document.getElementById('cart');
const checkoutButton = document.getElementById('checkout');

// Add to cart function
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.dataset.name;
        const productPrice = parseFloat(e.target.dataset.price);

        // Add product to cart array
        const item = cart.find(i => i.name === productName);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Update cart UI
        updateCart();
    });
});

// Update cart UI
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        cartItems.appendChild(li);

        total += item.price * item.quantity;
        count += item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

// Show/hide cart
document.getElementById('cart-link').addEventListener('click', (e) => {
    e.preventDefault();
    cartSection.style.display = cartSection.style.display === 'none' || !cartSection.style.display ? 'block' : 'none';
});

// Checkout event
checkoutButton.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
    cartSection.style.display = 'none';
});
