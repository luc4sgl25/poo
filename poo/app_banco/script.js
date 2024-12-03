
const teclado = require("prompt-sync")({sigint:true}); 

class Conta {
    constructor(numero){
        this.numero = numero;
    }
}

class contaBancaria { 
        constructor() {
            this.NumeroConta = 1000;
            this.contas = [];
        }

    GerarNumC(){ 
        this.NumeroConta += 1;
        return this.NumeroConta
    }

    criaconta(nome, saldoInicial){ 
        const novoNumeroConta = this.GerarNumC();
        const novaConta = new Conta(novoNumeroConta);
        this.contas.push({ numero: novoNumeroConta, titular: nome, saldo: saldoInicial });
        console.log(`Conta criada: ${novoNumeroConta}`);
        return novaConta;
    }
    
    depositar(numeroConta, valor) {  
        const conta = this.contas.find(c => c.numero === numeroConta); 
        if (!conta) {
            console.log("Conta não encontrada");
            return;
        }
        if (typeof valor !== 'number' || valor <= 0) {
            console.log("Valor inválido");
            return;
    }
    conta.saldo += valor;  
        console.log(`Depósito realizado,seu saldo é de: ${conta.saldo}`);
    }   

    sacar(numeroConta, valor) { 
        const conta = this.contas.find(c => c.numero === numeroConta);
        if (!conta) { 
            console.log("Conta não localizada");
            return;
        } 
        if (typeof valor !== 'number' || valor <= 0) { 
            console.log("Valor inválido");
            return;
        }
        if (valor > conta.saldo) {
            console.log("Saldo insuficiente");
            return;
        } 
        conta.saldo -= valor;
        console.log(`Saque realizado,seu saldo é de: ${conta.saldo}`);
    }

    consultar(numeroConta) {
        const conta = this.contas.find(c => c.numero === numeroConta); 
        if (!conta) { 
            console.log("Conta não localizada");
            return;
        } 
        console.log(`Seu saldo é de: ${conta.saldo}`);
    }

    listarContas() { 
        console.log("Contas existentes:");
        this.contas.forEach(conta => {
            console.log(`Número: ${conta.numero}, Titular: ${conta.titular}, Saldo: ${conta.saldo}`);
        });
    }
}

const meuBanco = new contaBancaria();
let aplicativoExe = true

while (aplicativoExe) {

    console.log("---------------------------")
    console.log("1. Criar Conta");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Consultar Saldo");
    console.log("5. Listar Contas Existentes");
    console.log("6. Sair")
    console.log("---------------------------")

    let valor = parseInt(teclado("Digite a sua ação conforme os números: ")); 

    switch (valor) { 

        case 1:
            console.log("** você criou uma nova conta **");
            const nome = teclado("Digite o nome do titular da conta: ");
            const saldoInicial = 0;
            meuBanco.criaconta(nome, saldoInicial);
            break;

        case 2:
            const numeroContaDeposito = parseInt(teclado("Digite o número da conta: "));
            const valorDeposito = parseFloat(teclado("Digite o valor que quer depositar: "));
            meuBanco.depositar(numeroContaDeposito, valorDeposito);
            break;

        case 3:
            const numeroContaSaque = parseInt(teclado("Digite o número da conta: "));
            const valorSaque = parseFloat(teclado("Digite o valor que quer sacar: "));
            meuBanco.sacar(numeroContaSaque, valorSaque);
            break;

        case 4:
            const numeroContaConsulta = parseInt(teclado("Digite o número da conta: "));
            meuBanco.consultar(numeroContaConsulta);
            break;

        case 5:
            meuBanco.listarContas();
            break;

        case 6:
            console.clear();
            console.log("### aplicativo encerrado ###");
            aplicativoExe = false;
            break;

        default:
            console.log("Dados Não identificados, tente novamente");
            aplicativoExe = true
            break;
    }
}
   
