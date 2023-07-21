const robotron = document.querySelector("#robotron");
/* função anonima com seta => ou pode ser escrito function antes do ()*/
robotron.addEventListener("click", () => {

    console.log("Cliquei no robo");
})

function dizOi(nome) {
    console.log("Olá " + nome);
    console.log("brabo");
}

dizOi("maicon");