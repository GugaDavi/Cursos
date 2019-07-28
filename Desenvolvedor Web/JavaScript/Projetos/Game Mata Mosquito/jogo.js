
var altura
var largura
var vidas = 1
var tempo = 10
var dificuldade = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    dificuldade = 2000
} else if (nivel === 'médio') {
    dificuldade = 1500
} else {
    dificuldade = 1000
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {

    if (tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        tempo -= 1
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// Função para distribuição da imagem

function posicaoRandomica(){

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vidas).src = 'coracao_vazio.png'
        vidas += 1
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if (posicaoX < 0) {
        posicaoX = 0
    }
    if (posicaoY < 0) {
        posicaoY = 0
    }

    console.log(posicaoX, posicaoY)

    // Criando elemento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + variacaoLado()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
    
}

// Função para variação de tamanho da imagem

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
}

// Função para variação do lado da imagem

function variacaoLado() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}