const quantidadeElement = document.getElementById("quantidade");
const adicionarButton = document.getElementById("adicionar");
const diminuirButton = document.getElementById("diminuir");
const subtotal_SPAN = document.getElementById("total");


adicionarButton.addEventListener("click", () => {

    let quantidadeAtual = parseInt(quantidadeElement.innerText);
    let valorProduto = parseInt(document.getElementById("valorProduto").innerText);

    quantidadeAtual++;


    totalGeral = quantidadeAtual * valorProduto;
    //alert(totalGeral)
    quantidadeElement.innerText = quantidadeAtual;

    const totalElement = document.getElementById('total');
    totalElement.textContent = `R$ ${totalGeral.toFixed(2)}`;
});


diminuirButton.addEventListener("click", () => {
    let quantidadeAtual = parseInt(quantidadeElement.innerText);
    let valorProduto = parseInt(document.getElementById("valorProduto").innerText);

    if (quantidadeAtual > 0) {
        quantidadeAtual--;

        totalGeral = quantidadeAtual * valorProduto; 

        quantidadeElement.innerText = quantidadeAtual;

        const totalElement = document.getElementById('total');
        totalElement.textContent = `R$ ${totalGeral.toFixed(2)}`;
    }
});

function calcularTotal() {
    const precos = document.querySelectorAll('.preco');
    let total = 0;
    let valorProduto = parseInt(document.getElementById("valorProduto").innerText);
    total = valorProduto;



    const totalElement = document.getElementById('total');
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

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


calcularTotal();

