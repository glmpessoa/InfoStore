// Função para adicionar um produto ao carrinho.
function addToCart(productCard) {
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));

    // Crie um objeto que representa o produto.
    const product = { name: productName, price: productPrice };

    // Adicione o produto ao carrinho.
    addToCartOnCartPage(product);

    // Remova o card de produto da página de produtos.
    productCard.remove();
}

// Adicione um ouvinte de clique a cada botão "Adicionar ao Carrinho".
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        addToCart(productCard);
    });
});
