var email_salvo = "$$$$";
var senha_salva = "$$$$";
var nome = "";
var email_registro = "&&&";
var senha_registro = "***";

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("verificaDiv").addEventListener('click', function() {
        var senha_registro = document.getElementById("divSenhaRegistro").value;
        var senha_registro_conf = document.getElementById("divSenhaRegistroConf").value;
        var email_registro = document.getElementById("divEmail_registro").value;
        var rg = document.getElementById("divRG").value;
        var nome = document.getElementById("divNome").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var registrese_text14k = document.getElementById("registrese_text14k");


        console.log("Senha Registro:", senha_registro);
        console.log("Senha Registro Confirmação:", senha_registro_conf);
        console.log("Email:", email_registro);
        console.log("Rg:", rg);
        console.log("Nome:", nome);

        if (rg !== "") {
            if (nome !== "") {
                if (senha_registro.length >= 6) {
                    if (senha_registro === senha_registro_conf) {
                        // As senhas são iguais, continue o código aqui...
                        console.log("As senhas são iguais.");
                        if (emailRegex.test(email_registro)) {
                            // É um email válido, continue o código aqui...
                            console.log("O email é válido: " + email_registro);
                            registrese_text14k.style.opacity = "1";
                            setTimeout(function() {
                                // Redirecionar para a página "index.html"
                                window.location.href = "index.html";
                            }, 2000);
                        } else {
                            // Não é um email válido, mostre um alerta
                            alert("O email não é válido. Por favor, insira um email válido.");
                        }
                    } else {
                        // As senhas não são iguais, mostre um alerta
                        alert("As senhas não são iguais. Por favor, tente novamente.");
                    }
                } else {
                    alert("A senha precisa de ter no mínimo 6 dígitos.")
                }
            } else {
                alert("Você precisa digitar seu nome.")
            }
        } else {
            alert("Você precisa digitar seu CPF ou RG.")
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("botaoVerificar").addEventListener('click', function() {
        var email_login = document.getElementById("divEmail").value;
        var senha_login = document.getElementById("divSenha").value;
        if (email_login.value === email_registro && senha_login.value === senha_registro) {
            window.location.href = "feed.html";
        } else {
            alert("E-mail ou senha inválidos. Tente novamente ou registre-se.");
        }
    });
});





