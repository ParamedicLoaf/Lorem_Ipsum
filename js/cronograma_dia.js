document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelectorAll('.nome')
    img = document.querySelectorAll('.img2')

    nome[0].addEventListener('click', function(event) {

        nomex = nome[0].innerHTML
        // img[0].src = "../img/Cliente 1.jpg"
        

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"img/Cliente1.jpg")

    })

    nome[1].addEventListener('click', function(event) {

        nomex = nome[1].innerHTML 
        // img[1].src = "../img/Cliente 2.jpg"

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"img/Cliente2.jpg")

    })

    nome[2].addEventListener('click', function(event) {

        nomex = nome[2].innerHTML 
        // img[2].src = "../img/Cliente 3.jpg"

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"img/Cliente3.jpg")

    })

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