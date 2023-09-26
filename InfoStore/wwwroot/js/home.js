// Função para adicionar um produto ao carrinho.
function addToCart(productCard) {
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));

    // Crie um objeto que representa o produto.
    const product = { name: productName, price: productPrice };

    // Adicione o produto ao carrinho.
    addToCartDropdown(product);
}

// Função para adicionar um produto ao dropdown do carrinho.
function addToCartDropdown(product) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(listItem);
}

// Abra ou feche o dropdown do carrinho.
const cartToggleButton = document.querySelector('.cart-toggle-button');
const cartDropdown = document.querySelector('.cart-dropdown');
cartToggleButton.addEventListener('click', () => {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// Adicione um ouvinte de clique a cada botão "Adicionar ao Carrinho".
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        addToCart(productCard);
    });
});
