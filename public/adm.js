const emailCorreto = "adm@gmail.com";
const senhaCorreta = "1234";

function verificarAcesso() {
  const emailDigitado = document.getElementById("emailAdmin").value;
  const erroEmail = document.getElementById("erroEmail");

  if (emailDigitado === emailCorreto) {
   
    document.getElementById("etapaEmail").style.display = "none";
    document.getElementById("etapaSenha").style.display = "block";
  } else {
    erroEmail.style.display = "block";
  }
}

function verificarSenha() {
  const senhaDigitada = document.getElementById("senhaAdmin").value;
  const erroSenha = document.getElementById("erroSenha");

  if (senhaDigitada === senhaCorreta) {
    window.location.href = "put.html";
  } else {
    erroSenha.style.display = "block";
  }
}