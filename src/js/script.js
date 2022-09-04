//PEGANDO OS ELEMENTOS HTML
const cartao = document.querySelectorAll('.cartao');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-voltar');

//ÍNDICE QUE VAI AJUDAR A IDENTIFCAR A POSIÇÃO DO CARTAO
let i = 0;

btnNext.addEventListener('click', () => {
  // SE O ÍNDICE FOR IGUAL AO ULTIMO ELEMENTO DO CARTÃO
  //ELE ENCERRA O RESTO DO CÓDIGO
  if (i === cartao.length - 1) {
    return;
  }
  //REMOVE A CLASSE SELECIONADO DO CARTÃO ATUAL FAZENDO O CARTÃO
  //SER ESCONDIDO
  cartao[i].classList.remove('selecionado');
  //INCREMENTA  1 AO ÍNDICE QUE ERA 0 E AGORA É 1
  i++;
  // O CARTÃO QUE ESTÁ NA POSIÇÃO DO VALOR ATUAL DO ÍNDICE, AGORA RECEBE A
  //CLASSE SELECIONADO NO QUAL DEIXA O CARTÃO VISÍVEL
  cartao[i].classList.add('selecionado');
});

btnBack.addEventListener('click', () => {
  //SE O ÍNDICE FOR IGUAL 0 ELE NÃO EXECUTA O RESTO DO CÓDIGO
  if (i === 0) {
    return;
  }
  //REMOVE A CLASSE SELECIONADO DO CARTÃO QUE ESTÁ NA POSIÇÃO
  //DO ÍNDICE
  cartao[i].classList.remove('selecionado');
  //DECREMENTA -1
  i--;
  //E ADICIONA A CLASSE NO CARTÃO ANTERIOR
  cartao[i].classList.add('selecionado');
});
