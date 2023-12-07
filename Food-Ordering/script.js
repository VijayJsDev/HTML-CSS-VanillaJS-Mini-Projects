document.addEventListener('DOMContentLoaded', function(){
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const addToCart = product.querySelector('.addToCart');
        const increaseButton = product.querySelector('.increase');
        const decreaseButton = product.querySelector('.decrease');
        const productName = product.querySelector('.name').innerText;
        const productPrice = parseFloat(product.querySelector('.price').innerText);
        let quantity = 0;

        addToCart.addEventListener("click", function(){
            const cartItems = document.getElementById('cartItems');
            const cartItem = document.createElement('div');
            const totalPrice = productPrice * quantity;
            
            if(quantity > 0){
                cartItem.innerHTML = `
                <ul style="display:flex; justify-content:space-around; text-decoration:none">
                    <li>Product Name: ${productName}</li>
                    <li>Product Price: $${productPrice}</li>
                    <li>Quantity: ${quantity}</li>
                    <li>Total Price: $${totalPrice}</li>
                </ul>`;
                cartItems.appendChild(cartItem);
            }
        });

        increaseButton.addEventListener("click", function(){
            quantity++;
            updateQuantity();
        });

        decreaseButton.addEventListener("click", function(){
            if(quantity > 0){
                quantity--;
            }
            updateQuantity();
        });

        const updateQuantity = () => {
            const qty = product.querySelector('.quantity');
            qty.innerText = quantity;
        };
    });
});
