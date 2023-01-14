const butao = document.querySelector('#botao');
const mail = document.querySelector('#login');
const password = document.querySelector('#senha');
const login = [];

const salveLogin = (event) => {
    event.preventDefault();

    const newLogin = {
        email: mail.value,
        senha: password.value,
    }

    login.push(newLogin);

    mail.value = '',
    password.value = '',
    
   console.log(login);

}

butao.addEventListener('click', salveLogin)

//local storage so aceita em formato de string


/* let mail = document.querySelector('#login');
    let text = mail.value;
    let func = objeto.forEach((obj) => obj.email = text)
    return func */