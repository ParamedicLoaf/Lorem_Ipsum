document.addEventListener('DOMContentLoaded', function() {

    estoque_global = localStorage.getItem('estoque_global')

    let quantidades = document.querySelectorAll('#quantidade')
    let produtos = document.querySelectorAll('#produto')

    menos = document.querySelectorAll('.menos')
    mais = document.querySelectorAll('.mais')

    
    let estoque = {}

    if(estoque_global){
        estoque = JSON.parse(estoque_global)
    } 
    else {
        for (var i=0; i < quantidades.length ; ++i) {
            estoque[produtos[i].innerHTML] = parseInt(quantidades[i].innerHTML)
        
            localStorage.setItem('estoque_global', JSON.stringify(estoque))
        }
    }
    
    function atualizaEstoque() {
        for (var i=0; i < quantidades.length ; i++) {
            quantidades[i].innerHTML = estoque[produtos[i].innerHTML]
            console.log(estoque)
            localStorage.setItem('estoque_global', JSON.stringify(estoque))
            console.log(JSON.parse(localStorage.getItem('estoque_global')))
            
            if (estoque[produtos[i].innerHTML] <= 5) {
                produtos[i].classList.add('acabando')
                quantidades[i].classList.add('acabando')
            } 
            else{
                produtos[i].classList.remove('acabando')
                quantidades[i].classList.remove('acabando')
            }
        }
    }

    atualizaEstoque()

    for (var i=0; i < mais.length ; i++) {
        mais[i].addEventListener('click', function(event) {
            elemento = event.target.parentElement.parentElement
            selecionado = elemento.querySelector('#produto').innerHTML
            estoque[selecionado] = estoque[selecionado]+1
            atualizaEstoque()
        })
    }

    for (var i=0; i < menos.length ; ++i) {
        menos[i].addEventListener('click', function(event) {
            elemento = event.target.parentElement.parentElement
            selecionado = elemento.querySelector('#produto').innerHTML
            estoque[selecionado] = estoque[selecionado]-1
            atualizaEstoque()
            localStorage.setItem('estoque_global', JSON.stringify(estoque))
        })
    }

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
