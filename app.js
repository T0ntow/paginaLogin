let elementLogin = document.getElementById("login");
let elemetCadastro = document.getElementById("cadastro");
  
elementLogin.onclick = function () {
  if (elementLogin.className == "login-active") {

  }
  else {
    elementLogin.classList.add("login-active")
    elemetCadastro.classList.remove("login-active")

    document.getElementById("box-cadastro").style.display = "none";
    document.getElementById("box-login").style.display = "flex";
  }
}

elemetCadastro.onclick = function () {
  if (elemetCadastro.className == "login-active") {

  }
  else {
    elemetCadastro.classList.add("login-active")
    elementLogin.classList.remove("login-active")

    document.getElementById("box-login").style.display = "none";
    document.getElementById("box-cadastro").style.display = "flex";
  }
}

//toggle senha
const input = document.querySelector("#inputSenha");
const button = document.querySelector("#togglePass");
const input2 = document.querySelector("#inputSenha2");
const button2 = document.querySelector("#togglePass2");

button.addEventListener('click', togglePass);
button2.addEventListener('click', togglePass2);

function togglePass() {
  if (input.type == "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function togglePass2() {
  if (input2.type == "password") {
    input2.type = "text";
  } else {
    input2.type = "password";
  }
}