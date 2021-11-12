document.addEventListener('DOMContentLoaded', function() {

    value = localStorage.getItem('nome')
    imagem = localStorage.getItem('imagem')

    nome_pagina = document.querySelector('h2')

    foto = document.querySelectorAll('img')

    nome_pagina.innerHTML = value
    console.log(foto)
    console.log(foto[1])
    foto[1].src = imagem
})