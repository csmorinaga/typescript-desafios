let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoFinal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldoFinal += soma
        campoSaldo.innerHTML = saldoFinal.toString();
    }
    
}

function limparSaldo() {
    if (campoSaldo) {
        saldoFinal = 0;
        campoSaldo.innerHTML = saldoFinal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}


botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

