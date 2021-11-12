document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelectorAll('.nome')
    img = document.querySelectorAll('.img2')

    nome[0].addEventListener('click', function(event) {

        nomex = nome[0].innerHTML
        // img[0].src = "../img/Cliente 1.jpg"
        

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"../img/Cliente1.jpg")

    })

    nome[1].addEventListener('click', function(event) {

        nomex = nome[1].innerHTML 
        // img[1].src = "../img/Cliente 2.jpg"

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"../img/Cliente2.jpg")

    })

    nome[2].addEventListener('click', function(event) {

        nomex = nome[2].innerHTML 
        // img[2].src = "../img/Cliente 3.jpg"

        localStorage.setItem('nome', nomex)
        localStorage.setItem('imagem',"../img/Cliente3.jpg")

    })


})