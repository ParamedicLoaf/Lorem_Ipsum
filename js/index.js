document.addEventListener('DOMContentLoaded', function() {

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