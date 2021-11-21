document.addEventListener('DOMContentLoaded', function() {

    value = localStorage.getItem('nome')
    imagem = localStorage.getItem('imagem')

    if (value){
        value = value
    }
    else {
        value = 'Camila'
        imagem = 'img/Cliente1.jpg'
    }

    nome_pagina = document.querySelector('h2')

    foto = document.querySelectorAll('img')

    nome_pagina.innerHTML = value
    console.log(foto)
    console.log(foto[1])
    foto[1].src = imagem

    aberto = false
    menu = document.querySelector('.menu')
    janela = document.querySelector('.janela')

    menu.addEventListener('click', function(event) {
        if (aberto) {
            janela.style.height = 0
            janela.style.opacity = 0
            menu.innerHTML = '&#9776;'
            aberto = false
        }
        else {
            menu.innerHTML = '&#9887;'
            janela.style.height = '30rem'
            janela.style.opacity = '100%'
            aberto = true
        }
    })
})