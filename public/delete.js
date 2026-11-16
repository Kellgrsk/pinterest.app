function deletarDados() {
  var cpf = document.getElementById('identificadorCPF').value;

  fetch('/pessoas')
    .then(response => response.json())
    .then(data => {
      const pessoa = data.find(pessoa => pessoa.cpf === cpf);

      if (pessoa) {
        
        if (pessoa.email === 'adm@gmail.com') {
          alert('O administrador (adm@gmail.com) não pode ser deletado!');
          return; // Interrompe a função aqui e não executa o DELETE
        }

        fetch(`/pessoas/${pessoa.id}`, {
          method: 'DELETE'
        })
          .then(() => alert('Pessoa deletada com sucesso!'));
      } else {
        alert('CPF não encontrado.');
      }
    });
}
