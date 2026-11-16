function enviarDados() {
    // 1. Captura o e-mail e a senha digitados nos inputs
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha'); // ID do campo de senha do seu HTML
    
    const emailDigitado = emailInput.value.trim().toLowerCase();
    const senhaDigitada = senhaInput.value.trim();

    // 2. Faz a requisição GET na sua API local para buscar os usuários
    fetch('/pessoas', {
        method: 'GET'
    })
    .then(resposta => {
        if (!resposta) {
            throw new Error("Erro ao conectar com o servidor.");
        }
        return resposta.json();
    })
    .then(dados => {
        // Busca um usuário onde o E-MAIL e a SENHA coincidem com o banco
        const usuarioEncontrado = dados.find(pessoa => {
            return pessoa.email && pessoa.email.toLowerCase() === emailDigitado && 
                   pessoa.senha && pessoa.senha.toString() === senhaDigitada;
        });

        if (usuarioEncontrado) {
            // Se as credenciais estiverem corretas, redireciona
            window.location.href = 'home.html';
        } else {
            // Mensagem genérica por segurança (boa prática de programação)
            alert("E-mail ou senha incorretos.");
        }
    })
    .catch(erro => {
        console.error("Erro no login:", erro);
        alert("Não foi possível conectar ao servidor (localhost:3000).");
    });
}
