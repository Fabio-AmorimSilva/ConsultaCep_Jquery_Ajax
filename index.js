let btnConsulta = document.querySelector('.btnConsulta');
let inputCep = document.querySelector('#cep');
var cep;

function consultaCep(){
    cep = inputCep.value;
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function(response){
            let localidade = document.createElement('ul');
            let liCep = document.createElement('li');
            let liLogradouro = document.createElement('li');
            let liCidade = document.createElement('li');
            let liUf = document.createElement('li');
            liCep.textContent = JSON.stringify(response.cep);
            liLogradouro.textContent = JSON.stringify(response.logradouro);
            liCidade.textContent = JSON.stringify(response.localidade);
            liUf.textContent = JSON.stringify(response.uf);
            localidade.appendChild(liCep);
            localidade.appendChild(liLogradouro);
            localidade.appendChild(liCidade);
            localidade.appendChild(liUf);
            document.body.appendChild(localidade);
        }
    })

}


btnConsulta.addEventListener('click', consultaCep);