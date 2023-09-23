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


calcularTotal();