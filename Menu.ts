import readlinesync = require("readline-sync");
import { colors } from './src/util/Cores';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino, numeroOrigem: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    let contas: ContaController = new ContaController();

    const contaCorrente: ContaCorrente = new ContaCorrente (contas.gerarNumero(),456, 1, "Joyce Ramos", 400000, 1000);
    contas.cadastrar(contaCorrente);

    const contaPoupanca: ContaPoupanca = new ContaPoupanca (contas.gerarNumero(),456, 1, "Joyce", 50000, 1000);
    contas.cadastrar(contaPoupanca);
    

  while(true){

    console.log(colors.fg.cyanstrong,
                "****************************************************",
                colors.reset);
    console.log(colors.fg.cyanstrong,
                "                    JOY BANK                        ",
    colors.reset);
    console.log(colors.fg.cyanstrong,
                "****************************************************",
    colors.reset);
    console.log(colors.fg.cyanstrong,
                "                                                    ",
    colors.reset);
    console.log(colors.fg.magentastrong,
      "          1 - Criar Conta                           ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          2 - Listar Todas as Contas                ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          3 - Buscar Conta por Numero               ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          4 - Atualizar Dados da Conta              ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          5 - Apagar Conta                          ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          6 - Sacar                                 ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          7 - Depositar                             ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          8 - Transferir Valores entre Contas       ",colors.reset);
    console.log(colors.fg.magentastrong,
      "          9 - Sair                                  ",colors.reset);
    console.log(colors.fg.cyanstrong,
                "                                                    ",
                colors.reset);
    console.log(colors.fg.cyanstrong,
                "****************************************************",
                colors.reset);
    console.log( colors.fg.cyanstrong,
                "                                                    ",
    colors.reset);

    console.log(colors.fg.yellowstrong,
                "Entre com a opcao desejada:                         ",
                colors.reset);
    opcao = readlinesync.questionInt("");

    if(opcao === 9){
      console.log (colors.fg.magentastrong,
        "\nJoy Bank - O seu futuro começa aqui!");
      sobre();
      console.log(colors.reset,"");
      process.exit(0);
    }

    switch(opcao){
      case 1: 
          console.log(colors.fg.magentastrong,"\nCriar Conta\n\n",colors.reset);
          console.log(colors.fg.cyanstrong,"Digite o número da Agência: ",colors.reset);
          agencia = readlinesync.questionInt("");

          console.log(colors.fg.cyanstrong,"Digite o Nome do Titular: ",colors.reset);
          titular = readlinesync.question("");

          console.log(colors.fg.cyanstrong,"Informe o tipo da Conta: ",colors.reset);
          tipo = readlinesync.keyInSelect(tipoContas,"",{cancel: false}) + 1;

          console.log(colors.fg.cyanstrong,"Digite o Saldo da Conta: ",colors.reset);
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
                console.log(colors.fg.cyanstrong,"Digite o Limite da Conta: ",colors.reset)
                limite = readlinesync.questionFloat("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                break;
            case 2:
                console.log(colors.fg.cyanstrong,"Digite o dia do aniversário da Conta: ",colors.reset)
                aniversario = readlinesync.questionInt("")
                contas.cadastrar(
                    new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                )
                break;
        }

        keyPress()
          break;

      case 2: 
          console.log(colors.fg.magentastrong,"\nListar todas as Contas\n\n",colors.reset);
          contas.listarTodas();

          keyPress()
          break;
      
      case 3:
          console.log(colors.fg.magentastrong,"\nBuscar Conta por Número\n\n",colors.reset);
          console.log(colors.fg.cyanstrong,"Digite o Número da Conta: ",colors.reset);
             numero = readlinesync.questionInt("");

             contas.procurarPorNumero(numero);

          keyPress()
          break;

      case 4:
          console.log(colors.fg.magentastrong,"\nAtualizar Dados da Conta\n\n",colors.reset);

          console.log(colors.fg.cyanstrong,"Digite o Número da Conta: ", colors.reset);
          numero = readlinesync.questionInt("");

          let conta = contas.buscarNoArray(numero);

          if (conta !== null) {

              console.log(colors.fg.cyanstrong,"Digite o Número da Agência: ",colors.reset);
              agencia = readlinesync.questionInt("");

              console.log(colors.fg.cyanstrong,"Digite o Nome do Titular: ",colors.reset);
              titular = readlinesync.question("");

              tipo = conta.tipo;

              console.log(colors.fg.cyanstrong,"Digite o Saldo da Conta: ",colors.reset);
              saldo = readlinesync.questionFloat("");

              switch (tipo) {
                  case 1:
                      console.log(colors.fg.cyanstrong,"Digite o Limite da Conta: ", colors.reset);
                      limite = readlinesync.questionFloat("");
                      contas.atualizar(
                          new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                      );
                      break;
                  case 2:
                      console.log(colors.fg.cyanstrong,"Digite o dia do aniversário da Conta: ",colors.reset);
                      aniversario = readlinesync.questionInt("");
                      contas.atualizar(
                          new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                      );
                      break;
              }

              }else {
                  console.log(colors.fg.magentastrong,"A Conta não foi Encontrada!",colors.reset);
              }

              keyPress()
              break;
      case 5:
        console.log(colors.fg.magentastrong,"\nApagar Conta\n\n",colors.reset);

        console.log(colors.fg.magentastrong,"Digite o Número da Conta: ",colors.reset);
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.magentastrong,"\nSacar\n\n",colors.reset);

        console.log(colors.fg.cyanstrong,"Digite o Número da Conta: ",colors.reset);
        numero = readlinesync.questionInt("");

        console.log(colors.fg.cyanstrong,"Digite o valor do Saque: ",colors.reset);
        valor = readlinesync.questionFloat("");

       contas.sacar(numero, valor);

        keyPress()
        break;
      
      case 7:
        console.log(colors.fg.magentastrong,"\nDepositar\n\n",colors.reset);

        console.log(colors.fg.cyanstrong,"Digite o Número da Conta: ",colors.reset);
        numero = readlinesync.questionInt("");

        console.log(colors.fg.cyanstrong,"Digite o valor do Depósito: ",colors.reset);
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.magentastrong,"\nTransferência entre Contas\n\n",colors.reset);

        console.log(colors.fg.cyanstrong,"Digite o Número da Conta de Origem: ",colors.reset);
        numero = readlinesync.questionInt("");

        console.log(colors.fg.cyanstrong,"Digite o Número da Conta de Destino: ",colors.reset)
        numeroDestino = readlinesync.questionInt("");

        console.log(colors.fg.cyanstrong,"Digite o valor do Depósito: ",colors.reset);
        valor = readlinesync.questionFloat("")

        contas.transferir(numero, numeroDestino, valor);

        keyPress()
        break;
      case 9:
        console.log(colors.fg.magentastrong,"\n\nConsultar conta por titular\n\n", colors.reset);

        console.log(colors.fg.cyanstrong,"Digite o Nome do Titular: ",colors.reset);
        titular = readlinesync.question("");

        contas.procurarPorTitular(titular);

        keyPress()
        break;
      default:
        console.log(colors.fg.magentastrong,"\nOpção Inválida!\n",colors.reset);

        keyPress()
        break;
    }
  }
}

export function sobre(): void{
  console.log("\n****************************************************");
  console.log(colors.fg.cyanstrong,
              "Projeto Desenvolvido por: ");
  console.log(colors.fg.cyanstrong,
              "Joyce Ramos                                            ");
  console.log(colors.fg.cyanstrong,
              "Bootcamp FullStack JS - Generation Brasil              ");
  console.log(colors.fg.cyanstrong,
              "github.com/joycervs");
  console.log("*******************************************************",
  colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}


main();