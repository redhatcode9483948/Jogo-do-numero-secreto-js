//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'O jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Você acertou o número secreto!';

//Evite declarar funções dentro de outras funções, a menos que seja necessário.

//Sempre declare funções antes de usá-las, especialmente se estiver usando let ou const para variáveis.
//declarando a função com dois parâmetros: tag e texto

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10) + 1;
    if (listaNumerosEscolhidos.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
    }else{
        listaNumerosEscolhidos.push(numeroEscolhido); //eu quero colocar um item dentro da lista
        console.log(numeroEscolhido);
        return numeroEscolhido;

    }
}
let listaNumerosEscolhidos = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = Number(document.querySelector('input').value);

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
       
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // só incrementa quando erra
        limparCampo();
    }

}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    
}


//a finalidade da função abaixo é usar as variáveis acima para evitar repetição de código



//Aqui estammos dando valores aos parâmetro da função acima
//exibirTextoNaTela('h1', 'O jogo do número secreto'); todo lugar que tiver "tag" vai ser substituído pelo valor "h1"
//exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');// todo lugar que tiver "tag" vai ser substituído pelo valor "p"

