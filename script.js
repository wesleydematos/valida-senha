let paswrd = document.getElementById("pswrd")
let toggleBtn = document.getElementById("toggleBtn")

toggleBtn.addEventListener("click", function(){
    if(paswrd.type === "password"){
        paswrd.setAttribute("type", "text")
        toggleBtn.classList.add("hide")
    } else{
        paswrd.setAttribute("type", "password")
        toggleBtn.classList.remove("hide")
    }
})

let letraMinuscula = document.getElementById("lower")
let letraMaiuscula = document.getElementById("upper")
let numero = document.getElementById("number")
let caractereEspecial = document.getElementById("special")
let tamanhoMinimo = document.getElementById("length")

paswrd.addEventListener("keyup", function(){
    verificaSenha(this.value)
})

function verificaSenha (data){
    const lower = new RegExp ('(?=.*[a-z])')
    const upper = new RegExp ('(?=.*[A-Z])')
    const number = new RegExp ('(?=.*[0-9])')
    const special = new RegExp ('(?=.*[!@#\$%\^&\*])')
    const length = new RegExp ('(?=.{8,})')

    if(lower.test(data)){
        letraMinuscula.classList.add("valid")
    } else{
        letraMinuscula.classList.remove("valid")
    }

    if(upper.test(data)){
        letraMaiuscula.classList.add("valid")
    } else{
        letraMaiuscula.classList.remove("valid")
    }

    if(number.test(data)){
        numero.classList.add("valid")
    } else{
        numero.classList.remove("valid")
    }

    if(special.test(data)){
        caractereEspecial.classList.add("valid")
    } else{
        caractereEspecial.classList.remove("valid")
    }

    if(length.test(data)){
        tamanhoMinimo.classList.add("valid")
    } else{
        tamanhoMinimo.classList.remove("valid")
    }
}

