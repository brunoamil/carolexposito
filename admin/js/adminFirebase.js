// --------------------------------- DICAS ---------------------------------------------
var listaDicas = document.getElementById('listaDicas');
var dicaName = document.getElementById('dicaName');
var textoArea = document.getElementById('textoArea');
var atualizarDica = document.getElementById('atualizarDica');

// clicando no botao adicionar dica

atualizarDica.addEventListener('click', function() {
    create(dicaName.value, textoArea.value);

});

function create(dica, textoArea) {
    var data = {
        descricaoDica: dica,
        textoArea: textoArea
    };

    return firebase.database().ref().child('dicas').push(data);
}

//teste
firebase.database().ref('dicas').on('value', function (snapshot) {
        listaDicas.innerHTML = '';
        snapshot.forEach(function(item) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item.val().dica + ' : ' + item.val().textoArea));
            listaDicas.appendChild(li);

        });
        
});

// --------------------------------------------- Locais de atendimento ------------


/*
var bairroAtendiment = document.getElementById('bairroAtendimento');
var enderecoAtendiment = document.getElementById('enderecoAtendimento');

var bairroAtendiment1 = document.getElementById('bairroAtendimento1');
var enderecoAtendiment1 = document.getElementById('enderecoAtendimento1');

var bairroAtendiment2 = document.getElementById('bairroAtendimento2');
var enderecoAtendiment2 = document.getElementById('enderecoAtendimento2'); 

var atualizarAtendimento = document.getElementById('atualizarAtendimento');

atualizarAtendimento.addEventListener('click', function() {
    create(bairroAtendiment.value, enderecoAtendiment.value);

});

function create(bairroAtendiment, enderecoAtendiment) {
    var data = {
        tituloBairro: bairroAtendiment,
        enderecoBairro: enderecoAtendiment
    };

    return firebase.database().ref().child('locaisAtendimento').push(data);


}

console.log("brunoo");*/