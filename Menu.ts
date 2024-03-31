import readlinesync = require("readline-sync");
import { colors } from './src/util/Cores';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;
    
   // Objeto da Classe Conta (Teste)
    const conta: Conta = new Conta(1, 123, 1, "Joyce", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

  
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
          break;
      case 2: 
          console.log(colors.fg.magentastrong,"\nListar todas as Contas\n\n",colors.reset);
          break;
      case 3:
          console.log(colors.fg.magentastrong,"\nBuscar Conta por Numero\n\n",colors.reset);
          break;
      case 4:
          console.log(colors.fg.magentastrong,"\nAtualizar Dados da Conta\n\n",colors.reset);
            break;
      case 5:
        console.log(colors.fg.magentastrong,"\nApagar Conta\n\n",colors.reset);
        break;
      case 6:
        console.log(colors.fg.magentastrong,"\nSacar\n\n",colors.reset);
        break;
      case 7:
        console.log(colors.fg.magentastrong,"\nDepositar\n\n",colors.reset);
        break;
      case 8:
        console.log(colors.fg.magentastrong,"\nTransferência entre Contas\n\n",colors.reset);
        break;
      default:
        console.log(colors.fg.magentastrong,"\nOpção Inválida!\n",colors.reset);
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

main();