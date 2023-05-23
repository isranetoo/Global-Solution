

document.getElementById("botaoVerificar").addEventListener("click", function() {
    if (email.value === email_salvo && senha.value === senha_salva) {
        window.location.href = "feed.html";
    } else {
        alert("E-mail ou senha inválidos.");
    }
});

