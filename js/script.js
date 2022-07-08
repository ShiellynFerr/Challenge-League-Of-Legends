
let inputs = document.querySelectorAll("input")
let [input1, input2] = inputs    
let btn = document.querySelector("#btn")
let textLogin = document.querySelector('.login-text')


function logar() {
    if (input1.value && input2.value.length >=8) {
        btn.classList.remove("btn")
        btn.classList.add("btn-logado")
        textLogin.style.color = '#2051ff';
    } else {
        seta.classList.remove("btn-on")
        seta.classList.add("btn")
    }
}

input1.addEventListener('input', logar)
input2.addEventListener('input', logar)
