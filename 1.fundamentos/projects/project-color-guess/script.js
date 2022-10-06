

function colorRandom() {
    let r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255);

        var myColor = `rgb(${r}, ${g}, ${b})`;
        return myColor; 
}

function adColorCircles() {
    let circles = document.querySelectorAll(".ball");

    for(let i = 0; i < circles.length; i += 1) {
       let cor = circles[i];
       cor.style.background = colorRandom();
    }
}

function textRandom() {
    let text = document.getElementById("rgb-color");
    text.innerText = colorRandom();
}
function placar() {
    var textPlacar = document.getElementById("score");
    textPlacar.innerText = "Placar"
}


function textVerify() {
    let texto = document.getElementById("answer");
    let circles = document.querySelectorAll(".ball");
    texto.innerText = "Escolha um cor"
    texto.style.color = "white"

    //for(let i = 0; i < circles.length; i += 1) {
        
        circles.addEventListener("click", function() {
            if(circles[i].style.background === textRandom()) {
                texto.innerText = "Acertou!"
            }
            else{
                texto.innerText = "voce errou"
            }
        })
    //}
}

/* function firstText() {
    let texto = document.getElementById("answer");
    texto.innerText = "Escolha uma cor"
}
 */
function boton() {
    var botao = document.getElementById("reset-game");
 
    botao.addEventListener("click", adColorCircles);
    botao.addEventListener("click", textRandom);
    botao.addEventListener("click", textVerify);
 
}




    



colorRandom();
adColorCircles();
boton();
textRandom();
textVerify();
placar();




