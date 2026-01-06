    const togglePassword = document.getElementById("togglePassword");
            const password = document.getElementById("Senha");

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