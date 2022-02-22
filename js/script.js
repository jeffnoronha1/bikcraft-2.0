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
