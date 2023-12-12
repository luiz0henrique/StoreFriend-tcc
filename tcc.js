// variaveis
let infoButton = document.querySelector("#info")
let info = document.querySelector(".info_01")
let ifClose = document.querySelector(".back")
let emu = document.querySelector(".emu")
let ifBack = 0
let imgCatego = document.querySelector(".catego-img")
let txtCatego = document.querySelector(".catego-text")
let changeLeft = document.querySelector(".left-catego")
let changeRight = document.querySelector(".right-catego")
let changeValue = 0
let emulador = document.querySelector(".emulador-img") 
let emuImg = document.querySelectorAll(".emulador-img img")
let emuCont = 0   

// Eventos de Click
infoButton.addEventListener("click", abrirOuFecharInfo)

ifClose.addEventListener("click", abrirOuFecharInfo)

emu.addEventListener("click", mostrarEmuladores)

changeLeft.addEventListener("click", trocarCategoriaLeft)

changeRight.addEventListener("click", trocarCategoriaRight)

// Funções
function abrirOuFecharInfo() {
    if (ifBack==0) {
        ifBack=1
        info.classList.remove("unMost")
    } else {
        ifBack=0
        info.classList.add("unMost")

    }
}

function trocarCategoriaLeft() {
    if (changeValue == 0) {
        changeValue = 1
        imgCatego.src = `img/icon-0${changeValue}.png`       
    } else if (changeValue == 1) {
        changeValue = 2
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    } else if (changeValue == 2) {
        changeValue = 3
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    } else if (changeValue == 3) {
        changeValue = 0
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    }
}

function trocarCategoriaRight() {
    if (changeValue == 0) {
        changeValue = 1
        imgCatego.src = `img/icon-0${changeValue}.png`       
    } else if (changeValue == 1) {
        changeValue = 2
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    } else if (changeValue == 2) {
        changeValue = 3
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    } else if (changeValue == 3) {
        changeValue = 0
        imgCatego.src = `img/icon-0${changeValue}.png`
        
    }
}

function mostrarEmuladores() {
    if (emuCont==0) {

        emuCont = 1;
        emulador.classList.remove("unMost")
        setInterval(emuSlide,2000)

    }else {

        emuCont = 0;
        emulador.classList.add("unMost")
    }
}

function emuSlide() {
    
}