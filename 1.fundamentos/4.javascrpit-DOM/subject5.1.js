function paragraph() {

    return document.getElementById("paragrafo").innerText = "eu me vejo ganhando mais de 10000 reais, e dominando o mercado ";
} paragraph();

function trybeGreen() {
    return document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
} trybeGreen();

function trybeRed() {
    return document.getElementsByClassName("center-content")[0].style.backgroundColor = "white" ;
} trybeRed()

function title() {

    return document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
} title();

function upper () {
    let paragrafo2 = document.getElementsByTagName("p");

    for(let i = 0; i < paragrafo2.length; i += 1 ) {
     return paragrafo2[i].innerText.toLocaleUpperCase();
    }
} upper()

function exibe() {

    return document.querySelectorAll("p");
}