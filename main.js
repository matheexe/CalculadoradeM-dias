const form = document.getElementById('form');
const emojiAprovado = '<i class="fa-solid fa-face-laugh-beam"></i>';
const emojiReprovado = '<i class="fa-solid fa-face-frown"></i>';
const mediaFinal = document.getElementById('mediafinal');
const resultado = document.getElementById('textoResultado');
const notaMinima = '';
const atividades = [];
const notas = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculoFinal();
    
    
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('textArea')
    const inputNota = document.getElementById('numberArea');
    const notaMinima = parseFloat(document.getElementById('notaMinima').value)


    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`);
    } else{

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNota.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? emojiAprovado : emojiReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }



    inputNomeAtividade.value = '';
    inputNota.value = '';
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function calculoFinal(){
    let somaNotas = 0;
    const notaMinima = parseFloat(document.getElementById('notaMinima').value)
    
    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    const media = somaNotas / notas.length;
    mediaFinal.innerHTML = media;
    
    if(media >= notaMinima){
        resultado.innerHTML = ('Aprovado');
        resultado.style.backgroundColor = ('#86d52e');
    } else{
        resultado.innerHTML = ('Reprovado');
        resultado.style.backgroundColor = ('#cb4f42');
    }

}

