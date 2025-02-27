const form = document.getElementById('form');
const emojiAprovado = '<i class="fa-solid fa-face-laugh-beam"></i>';
const emojiReprovado = '<i class="fa-solid fa-face-frown"></i>';
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('textArea')
    const inputNota = document.getElementById('numberArea');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= 7 ? emojiAprovado : emojiReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNota.value = '';


});

