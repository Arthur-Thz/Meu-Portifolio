const btn = document.getElementById("btnEnviar");
const toastSucess = document.getElementById("toast-sucesso");
const toastError = document.getElementById("toast-erro");
const form = document.querySelector("form");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

function mostrarToast(elemento, tempo = 1000) {
    elemento.classList.remove("show");

    void elemento.offsetWidth;
    
    elemento.classList.add("show");
        
        setTimeout(() => {
        elemento.classList.remove("show");
    }, tempo);
}

email.addEventListener("keydown", (e) => {
    if (e.key === " ") e.preventDefault();
});

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let valido = true;

    email.classList.remove("erro");
    mensagem.classList.remove("erro");

    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.classList.add("erro");
        valido = false;
    }

    if (mensagem.value.trim() === "") {
        mensagem.classList.add("erro");
        valido = false;
    }

    if (!valido) {
        mostrarToast(toastError, 2000); // Chama a função com animação
        return;
    }

    // Se for válido
    mostrarToast(toastSucess, 1400);

    // Envia o formulário com delay
    setTimeout(() => {
        form.submit();
    }, 2000);
});