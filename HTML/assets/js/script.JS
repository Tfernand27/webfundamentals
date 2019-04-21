let email = 'joao@example.com';

email = 'lucas@example.com';

console.log(email);
console.log('o seu email e ' + email);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('o botao foi executado');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('o nouse esta  sobre o formulario');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('o nouse esta  fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e => {

    /*e-event captura o evento em questao*/

    e.preventDefault();

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    console.log(email, password);

    let json = {
        /*email a esq e propriedade e email a dta e uma propriedade*/
        /*quando a propriedade e a variavel tem mesmo nome basta por apenas o nome da variavel*/

        email,
        password
    };

    if (!json.email) {

        console.error('o campo email deve ser preenchido');

    } else if(!json.password) {
        console.error('o campo e mandatory');

    } else {
        console.info('dados validados com sucesso');
    }

    /*console.log(json);

    let stringJson = JSON.stringify(json);

    console.log(stringJson);

    let jsonParse = JSON.parse(stringJson);

    console.log(jsonParse.email);*/



});