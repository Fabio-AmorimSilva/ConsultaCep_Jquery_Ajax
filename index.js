let btnConsulta = document.querySelector('.btnConsulta');
let inputCep = document.querySelector('#cep');
let numeroCep = document.querySelector('#numeroCep');
let logradouroCep = document.querySelector('#logradouroCep');
let localidadeCep = document.querySelector('#localidadeCep');
let ufCeo = document.querySelector('#ufCep');
let tabelaCep = document.querySelector('#tableCep');
var cep;

//Esconde a tabela até que a culsta seja feita
tabelaCep.hidden = true;


function consultaCep(){
    cep = inputCep.value;
    tabelaCep.hidden = false;
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function(response){
            numeroCep.textContent = "Cep: " + JSON.stringify(response.cep);
            logradouroCep.textContent = "Logradouro: " + JSON.stringify(response.logradouro);
            localidadeCep.textContent = "Cidade: " + JSON.stringify(response.localidade);
            ufCep.textContent = "UF: " + JSON.stringify(response.uf);
        }
    })

}

function enterConsultaCep(event){
    if(event.keyCode == 13){
        consultaCep();
    }
}


btnConsulta.addEventListener('click', consultaCep);
document.addEventListener('keyup', enterConsultaCep);