const tema1 = document.getElementById("tema1")
const tema2 = document.getElementById("tema2")
const tema3 = document.getElementById("tema3")
const tema4 = document.getElementById("tema4")
const btn = document.getElementById("btn")

function alterarClass() {


    if (btn.classList.contains("claro-btn")) {

        btn.textContent = "Tema escuro";
        tema1.classList.remove("claro");
        tema1.classList.add("escuro");

        tema2.classList.remove("claro");
        tema2.classList.add("escuro");

        tema3.classList.remove("body-claro");
        tema3.classList.add("body-escuro");

        tema4.classList.remove("claro");
        tema4.classList.add("escuro");

        btn.classList.remove("claro-btn");
        btn.classList.add("escuro-btn");
    } else {
        btn.textContent = "Tema claro";

        tema1.classList.remove("escuro");
        tema1.classList.add("claro");

        tema2.classList.remove("escuro");
        tema2.classList.add("claro");

        tema3.classList.remove("body-escuro");
        tema3.classList.add("body-claro");

        tema4.classList.remove("escuro");
        tema4.classList.add("claro");

        btn.classList.remove("escuro-btn");
        btn.classList.add("claro-btn");
    }
}

const img1 = document.getElementById("livro1")
const img2 = document.getElementById("livro2")
const img3 = document.getElementById("livro3")
const img4 = document.getElementById("livro4")
const img5 = document.getElementById("livro5")

let troca = 1

function avancar() {


    if (troca == 1) {
        img1.src = "imagens/mar-monstros.jpg"
        img2.src = "imagens/tita.jpg"
        img3.src = "imagens/labirinto.jpg"
        img4.src = "imagens/ultimo-olimpiano.jpg"
        img5.src = "imagens/heroiperdido.jpg"
        troca = 2
    } else if (troca == 2) {
        img1.src = "imagens/tita.jpg"
        img2.src = "imagens/labirinto.jpg"
        img3.src = "imagens/ultimo-olimpiano.jpg"
        img4.src = "imagens/heroiperdido.jpg"
        img5.src = "imagens/netuno.jpg"
        troca = 3
    } else if (troca == 3) {
        img1.src = "imagens/labirinto.jpg"
        img2.src = "imagens/ultimo-olimpiano.jpg"
        img3.src = "imagens/heroiperdido.jpg"
        img4.src = "imagens/netuno.jpg"
        img5.src = "imagens/atena.jpg"
        troca = 4
    } else if (troca == 4) {
        img1.src = "imagens/ultimo-olimpiano.jpg"
        img2.src = "imagens/heroiperdido.jpg"
        img3.src = "imagens/netuno.jpg"
        img4.src = "imagens/atena.jpg"
        img5.src = "imagens/hades.jpg"
        troca = 5
    } else if (troca == 5) {
        img1.src = "imagens/heroiperdido.jpg"
        img2.src = "imagens/netuno.jpg"
        img3.src = "imagens/atena.jpg"
        img4.src = "imagens/hades.jpg"
        img5.src = "imagens/olimpo.jpg"


    } else {
        img1.src = "imagens/raios.jpg"
        img2.src = "imagens/mar-monstros.jpg"
        img3.src = "imagens/tita.jpg"
        img4.src = "imagens/labirinto.jpg"
        img5.src = "imagens/ultimo-olimpiano.jpg"

    }
}

function voltar() {
    if (troca == 6) {
        img1.src = "imagens/ultimo-olimpiano.jpg"
        img2.src = "imagens/heroiperdido.jpg"
        img3.src = "imagens/netuno.jpg"
        img4.src = "imagens/atena.jpg"
        img5.src = "imagens/hades.jpg"
        troca = 5
    } else if (troca == 5) {
        img1.src = "imagens/labirinto.jpg"
        img2.src = "imagens/ultimo-olimpiano.jpg"
        img3.src = "imagens/heroiperdido.jpg"
        img4.src = "imagens/netuno.jpg"
        img5.src = "imagens/atena.jpg"
        troca = 4
    } else if (troca == 4) {
        img1.src = "imagens/tita.jpg"
        img2.src = "imagens/labirinto.jpg"
        img3.src = "imagens/ultimo-olimpiano.jpg"
        img4.src = "imagens/heroiperdido.jpg"
        img5.src = "imagens/netuno.jpg"
        troca = 3
    } else if (troca == 3) {
        img1.src = "imagens/mar-monstros.jpg"
        img2.src = "imagens/tita.jpg"
        img3.src = "imagens/labirinto.jpg"
        img4.src = "imagens/ultimo-olimpiano.jpg"
        img5.src = "imagens/heroiperdido.jpg"
        troca = 2
    } else {
        img1.src = "imagens/raios.jpg"
        img2.src = "imagens/mar-monstros.jpg"
        img3.src = "imagens/tita.jpg"
        img4.src = "imagens/labirinto.jpg"
        img5.src = "imagens/ultimo-olimpiano.jpg"
    }
}

const fonte = document.getElementById("fonte")
const body = document.getElementById("tema3")

function mudarFonte() {

    if (fonte.value == "2") {

        body.classList.remove("fonte-45")
        body.classList.remove("fonte-40")
        body.classList.remove("fonte-60")

        body.classList.add("fonte-50")

    } 
    
    else if (fonte.value == "3") {

        body.classList.remove("fonte-45")
        body.classList.remove("fonte-50")
        body.classList.remove("fonte-60")

        body.classList.add("fonte-40")

    } 
    
    else if (fonte.value == "4") {

        body.classList.remove("fonte-45")
        body.classList.remove("fonte-50")
        body.classList.remove("fonte-40")

        body.classList.add("fonte-60")

    } 
    
    else {

        body.classList.remove("fonte-50")
        body.classList.remove("fonte-40")
        body.classList.remove("fonte-60")

        body.classList.add("fonte-45")
    }
}