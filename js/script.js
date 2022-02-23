const links = document.querySelectorAll('.header-menu a')
//Função para ativar o link quando a pagina é carregada
function ativarLink(link) {
  const url = link.href
  const href = window.location.href

  //Verifica se a palavra href está contida na url
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}
//Ativar uma função para cada link
links.forEach(ativarLink)

//Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search)

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro)
  if (elemento) {
    elemento.checked = true
  }
}

parametros.forEach(ativarProdutos)

// Toggle perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  //Adicionar e remover classe ativo
  resposta.classList.toggle('ativo')
  //Adicionar e remover atributo aria-expanded
  if (resposta.classList.contains('ativo')) {
    pergunta.setAttribute('aria-expanded', 'true')
  } else {
    pergunta.setAttribute('aria-expanded', 'false')
  }
}
//Função para ativar o click na pergunta
function togglePerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(togglePerguntas)

// Galeria de imagens
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
  const img = event.currentTarget
  // Faz a verificação da media query para desativar o efeito da geleria em telas menores
  const media = matchMedia('(min-width: 1000px)').matches
  if (media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animações
if (window.SimpleAnime) {
  new SimpleAnime()
}
