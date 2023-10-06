function elementos(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}

// Função para gerar números aleatórios
function gerarNumeroAleatorio() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (isNaN(result)) {
        result = 'Valor Inválido';
    }

    document.querySelector('#result > span').textContent = result;
}

// Adicionar um ouvinte de evento ao botão
const button = document.getElementById('generate');
button.addEventListener('click', gerarNumeroAleatorio);

