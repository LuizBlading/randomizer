let btn = document.querySelector("#btnRand");
let resultNumber = document.querySelector("#txtResult");
let sorteador = document.querySelector("#sorteados");
let btnLimpar = document.querySelector("#limpar");
let boxContent = document.querySelector(".content");
let txtSorteados = document.querySelector("#txtSorteados");
let txtSorteadosHeight = txtSorteados.clientHeight;
let txtSorteadosWidth = txtSorteados.clientWidth;

let numSorted = [];


function showSortedNumbers(){
    txtSorteadosHeight = txtSorteados.clientHeight;
    txtSorteadosWidth = txtSorteados.clientWidth;
        
    console.log('Altura atual: ' + txtSorteadosHeight);

    // verifique se a lista esta vazia
    if(numSorted.length === 0) 
    {
        txtSorteados.innerHTML = numSorted;
        // txtSorteados.innerHTML = 'Não há números sorteados!';
    } else {
        txtSorteados.innerHTML = numSorted;

        if(txtSorteadosHeight == 0)
        {
            boxContent.style.height = '380px';
        }
        else if(txtSorteadosHeight > 33)
        {

            console.log('NOVO ATUAL: ' + txtSorteadosHeight);
            boxContent.style.height = '430px';
            txtSorteados.innerHTML = numSorted;
            // txtSorteados.style.fontSize = '14px';
        }
    }
}

function ClearList(){
    //numSorted.length = 0;
    // remover os items da lista, desde o primeiro, até o final
    numSorted.splice(0, numSorted.length);
    resultNumber.innerHTML = 0;
    txtSorteados.innerHTML = numSorted;

    boxContent.style.height = '300px';

    console.log(numSorted);
    alert("Tudo limpo!");
}

function Randomizer(){
    let aleatorio = Math.random(); 
    aleatorio = Math.floor(aleatorio * 100);

    resultNumber.innerHTML = aleatorio;

    numSorted.push(aleatorio);
    console.log(numSorted);
}

btn.onclick = Randomizer;
sorteador.onclick = showSortedNumbers;
btnLimpar.onclick = ClearList;
