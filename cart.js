let cart = [];
let cartTotal = 0;

const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, productPrice);
    });
});

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'delete';
        removeButton.addEventListener('click', () => {
            removeItemFromCart(item);
        });
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    cartTotalSpan.textContent = cartTotal.toFixed(2);
}
function removeItemFromCart(item) {
    cart.splice(cart.indexOf(item), 1);
    cartTotal -= item.price;
    updateCart();
}
