/**
 * 1º passo: capturar valores
 * 2º passo: armazenar os valores de alguma forma
 * 3º passo: desenvolver funções que realizam os cálculos
 * 4º passo: atualizar interface
 */


const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};

const campoEntradaOrcamento = document.querySelector('.ControledeGastos input');
const buttonOrcamento = document.querySelector('.ControledeGastos button');

buttonOrcamento.addEventListener('click', capturarValorOrcamento);

function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value);

    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;

    atualizarInterface();
}

const campoNomeDespesa = document.querySelector('.Nomedespesa__nome');
const campoValorDespesa = document.querySelector('.Nomedespesa__valor');
const buttonDespesa = document.querySelector('.Nomedespesa button');

buttonDespesa.addEventListener('click', capturarValoresDepesa);

function capturarValoresDepesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDepesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDepesa;
    controleGastos.saldo -= valorDepesa;

    atualizarInterface();

    adicionarDespesaInterface(nomeDespesa, valorDepesa);
}

const orcamento = document.querySelector('.secaoImpressaoResultados_orçamento p');
const despesas = document.querySelector('.secaoImpressaoResultados_despesas p');
const saldo = document.querySelector('.secaoImpressaoResultados_saldo p');

function atualizarInterface() {
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}

const listaDespesas = document.querySelector('.containerDespesas__lista');

function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;

    img.src = 'src/image/iconelixeira.png';
    img.alt = 'Icone lixeira';

    img.addEventListener('click', removerDespesa);

    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesas.appendChild(li);
}

function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);

    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;

    atualizarInterface();
    despesaClicada.remove();
}