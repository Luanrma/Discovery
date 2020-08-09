// Procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField);

// Quando clicar no botao
function cloneField() {

    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    //Pegar todos os input
    const fields = newFieldContainer.querySelectorAll('input');

    //limpar os campos
    fields.forEach(function(field) {
        
        //pegar cada field e limpar
        field.value = "";
    });

    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
// Executar uma acao
