const butao = document.querySelector('#botao');
const mail = document.querySelector('#login');
const password = document.querySelector('#senha');


const salveLogin = (event) => {
    event.preventDefault();

    const login =  JSON.parse(localStorage.getItem('key-login')) || []

    const newLogin = {
        email: mail.value,
        senha: password.value,
    }

    login.push(newLogin);

    mail.value = '',
    password.value = '',
    
   localStorage.setItem('key-login', JSON.stringify(login));

}

butao.addEventListener('click', salveLogin)

//local storage so aceita em formato de string


/* let mail = document.querySelector('#login');
    let text = mail.value;
    let func = objeto.forEach((obj) => obj.email = text)
    return func */