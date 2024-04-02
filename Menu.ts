import readlinesync = require("readline-sync");
import { colors } from './src/util/Cores';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
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
          console.log("Digite o número da Agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o Nome do Titular: ");
          titular = readlinesync.question("");

          console.log("Informe o tipo da Conta: ");
          tipo = readlinesync.keyInSelect(tipoContas,"",{cancel: false}) + 1;

          console.log("Digite o Saldo da Conta: ");
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
                console.log("Digite o Limite da Conta: ")
                limite = readlinesync.questionFloat("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                break;
            case 2:
                console.log("Digite o dia do aniversário da Conta: ")
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
          console.log("Digite o Número da Conta: ");
             numero = readlinesync.questionInt("");

             contas.procurarPorNumero(numero);

          keyPress()
          break;

      case 4:
          console.log(colors.fg.magentastrong,"\nAtualizar Dados da Conta\n\n",colors.reset);

          console.log("Digite o Número da Conta: ")
          numero = readlinesync.questionInt("");

          let conta = contas.buscarNoArray(numero);

          if (conta !== null) {

              console.log("Digite o Número da Agência: ");
              agencia = readlinesync.questionInt("");

              console.log("Digite o Nome do Titular: ");
              titular = readlinesync.question("");

              tipo = conta.tipo;

              console.log("Digite o Saldo da Conta: ");
              saldo = readlinesync.questionFloat("");

              switch (tipo) {
                  case 1:
                      console.log("Digite o Limite da Conta: ");
                      limite = readlinesync.questionFloat("");
                      contas.atualizar(
                          new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                      );
                      break;
                  case 2:
                      console.log("Digite o dia do aniversário da Conta: ");
                      aniversario = readlinesync.questionInt("");
                      contas.atualizar(
                          new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                      );
                      break;
              }

              }else {
                  console.log("A Conta não foi Encontrada!");
              }

              keyPress()
              break;
      case 5:
        console.log(colors.fg.magentastrong,"\nApagar Conta\n\n",colors.reset);

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.magentastrong,"\nSacar\n\n",colors.reset);

        keyPress()
        break;
      
      case 7:
        console.log(colors.fg.magentastrong,"\nDepositar\n\n",colors.reset);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.magentastrong,"\nTransferência entre Contas\n\n",colors.reset);

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