function validarSenhas(event) {
            var senha = document.getElementById("Senha").value;
            var confirma_senha = document.getElementById("ConfirmaSenha").value;

            if(senha!==confirma_senha) {
                alert("As Senhas digitadas não coincidem. Por favor, Verifique.")

                event.preventDefault();

                document.getElementById("ConfirmaSenha").value = " ";
                return false;
            } else {
                return true;
            }
        }

        const email = document.getElementById("email");
        const togglePassword = document.getElementById("togglePassword");
        const password = document.getElementById("Senha");
        const confirmapassword = document.getElementById("ConfirmaSenha");

        email.addEventListener("keydown", (e) => {
        if (e.key === " ") e.preventDefault();
        });

        password.addEventListener("input", function() {
        if (password.value.length > 0){
            togglePassword.style.display = "block"
        } else {
            togglePassword.style.display = "none"
        }
    });

        togglePassword.addEventListener("click", function() {
            const type = password.type === "password" ? "text" : "password";
            password.type = type;

            this.classList.toggle("bi-eye");
        });

        password.addEventListener("keypress", function(event){
            if (event.key === "  " || event.keyCode === 32) {
                event.preventDefault();
            }
        });

        confirmapassword.addEventListener("keypress", function(event){
            if (event.key === "  " || event.keyCode === 32) {
                event.preventDefault();
            }
        });