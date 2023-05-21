const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function(){
    input.value = 'Olá mundo!';

    console.log(input.value);           //Pega o valor do elemento em tempo real
    console.log(input.getAttribute('value'))    //Pega o valor pré-definido
});

const valor = document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text';
    //input.setAttribute('text','radio');
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digita algo...'
});

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled);
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something;
    console.log('O valor do atributo data-something é: ' + data);
})