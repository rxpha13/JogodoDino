let character = document.querySelector('#character')
let quadrado = document.querySelector('#quadrado')

function pular(){
	if (character.classList != 'animar') {
		character.classList.add('animar')
	}
	
	setTimeout(function(){
		character.classList.remove('animar')
	}, 500)
}

var testarColisao = setInterval(function(){
	
	var topoPersonagem = parseInt(
		window.getComputedStyle(character).getPropertyValue("top")
	)
	
	var EsquerdaQuadrado = parseInt(
		window.getComputedStyle(quadrado).getPropertyValue("left")
		)
	
		if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
			quadrado.style.animation = "none"
			quadrado.style.display = "none"
			alert("Você perdeu!")
		}
}, 10)

