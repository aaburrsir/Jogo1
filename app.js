// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// function verificarChute() {
//   console.log('O botão foi clicado!');
// }
let numMaximo = 100;
let listaNumerosGerados = [];
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;
//reiniciarJogo()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function ExibirMsgInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numMaximo}`);
}

ExibirMsgInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        limparCampo()
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavra}!`
        exibirTextoNaTela('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo()
    }
}

function gerarNumAleatorio() {
    let numGerado = parseInt(Math.random() * numMaximo + 1);
    let qtdNumLista = listaNumerosGerados.length;

    if (qtdNumLista == numMaximo) {
        listaNumerosGerados = [];
    }
    if (listaNumerosGerados.includes(numGerado)) {
        return gerarNumAleatorio();
    } else {
        listaNumerosGerados.push(numGerado);
        console.log('O numero secreto é', numGerado);
        console.log('Numeros já sorteados: ', listaNumerosGerados);
        return numGerado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    tentativas = 1;
    limparCampo();
    ExibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}