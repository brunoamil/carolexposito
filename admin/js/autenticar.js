var email = document.getElementById('emailLogin');
var senha = document.getElementById('sSenha');

var acessar = document.getElementById('acessarAdmin');

var cadastrar = document.getElementById('cadastrarUsuario');


var displayName = document.getElementById('displayName');

//CRIANDO NOVO USUARIO

cadastrarUsuario.addEventListener('click', function() {
     firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, senha.value)
        .then(function () {
            alert('Bem Vindo ' + email.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar novo usuário, verifique o erro com seu administrador');
        });
});

// AUTENTICAR USUARIO

acessar.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(email.value, senha.value)
        .then(function (result) {
            console.log(result);
            window.location.href = "file:///C:/git/carolexposito/admin/administrar.html";
            //displayName.innerText = 'Bem vindo, ' + email.value;
            //alert('Autenticado ' + email.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Senha incorreta ou e-mail, verifique com o administrador');
        });

});

