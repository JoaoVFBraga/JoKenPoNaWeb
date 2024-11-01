const btnJogar = document.querySelector('.btn-jogar');
console.log(btnJogar);
const btnRegras = document.querySelector('.btn-regras');
const fecharRegras = document.querySelector('.close-rules');
const escolha = document.querySelectorAll('.escolha');
console.log(escolha);

btnJogar.addEventListener('click', (e) => {
  const primeiraPagina = document.querySelector('.inicia');
  const segundaPagina = document.querySelector('main');
  const body = document.querySelector('body');
  primeiraPagina.classList.add('desativado');
  segundaPagina.classList.add('ativo');
})

btnRegras.addEventListener('click', () => {
  const regras = document.querySelector('.regras');
  regras.classList.remove('desativado');
  regras.classList.add('ativo');
})

fecharRegras.addEventListener('click', () => {
  const regras = document.querySelector('.regras');
  regras.classList.remove('ativo');
  regras.classList.add('desativado');
})

function sorteiaMaquina() {
  let jogadaMaquina = document.querySelector('.jogada-maquina')
  let numeroSorteado = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (numeroSorteado === 1) {
    jogadaMaquina.style.backgroundImage = 'url(../img/pedra.png)';
  } else if (numeroSorteado === 2) {
    jogadaMaquina.style.backgroundImage = 'url(../img/papel.png)';
  } else {
    jogadaMaquina.style.backgroundImage = 'url(../img/tesoura.png)';
  }
  return numeroSorteado;
}

let vitorias = 0;
let derrotas = 0;
let empates = 0;
const textoResultado = document.querySelector('.resultado');
const spanVitorias = document.querySelector('.span-vitorias');
const spanDerrotas = document.querySelector('.span-derrotas');
const spanEmpates = document.querySelector('.span-empates');

escolha.forEach((item) => {
  item.addEventListener('click', () => {
    let jogadaUsuario = document.querySelector('.jogada-usuario');
    let classe = item.getAttribute('class');
    let sorteio = sorteiaMaquina();
    if (classe.includes('pedra')) {
      jogadaUsuario.style.backgroundImage = 'url(../img/pedra.png)';
      if (sorteio === 1) {
        empates += 1;
        textoResultado.innerText = 'Empate! A máquina também escolheu pedra.';
        spanEmpates.innerText = empates;
      } else if (sorteio === 2) {
        derrotas += 1;
        textoResultado.innerText = 'Derrota! A máquina escolheu papel.';
        spanDerrotas.innerText = derrotas;
      } else {
        vitorias += 1;
        textoResultado.innerText = 'Vitória! A máquina escolheu tesoura.';
        spanVitorias.innerText = vitorias;
      }
    } else if (classe.includes('papel')) {
      jogadaUsuario.style.backgroundImage = 'url(../img/papel.png)';
      if (sorteio === 1) {
        vitorias += 1;
        textoResultado.innerText = 'Vitória! A máquina escolheu pedra.';
        spanVitorias.innerText = vitorias;
      } else if (sorteio === 2) {
        empates += 1;
        textoResultado.innerText = 'Empate! A máquina também escolheu papel.';
        spanEmpates.innerText = empates;
      } else {
        derrotas += 1;
        textoResultado.innerText = 'Derrota! A máquina escolheu tesoura.';
        spanDerrotas.innerText = derrotas;
      }
    } else if (classe.includes('tesoura')) {
      jogadaUsuario.style.backgroundImage = 'url(../img/tesoura.png)';
      if (sorteio === 1) {
        derrotas += 1;
        textoResultado.innerText = 'Derrota! A máquina escolheu pedra.';
        spanDerrotas.innerText = derrotas;
      } else if (sorteio === 2) {
        vitorias += 1;
        textoResultado.innerText = 'Vitória! A máquina escolheu papel.';
        spanVitorias.innerText = vitorias;
      } else {
        empates += 1;
        textoResultado.innerText = 'Empate! A máquina também escolheu tesoura.';
        spanEmpates.innerText = empates;
      }
    }
  })
})



