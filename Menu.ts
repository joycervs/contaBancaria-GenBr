// import readlinesync = require("readline-sync");
// import { colors } from "./src/util/Cores";
// import { Conta } from "./src/model/Conta";
// import { ContaCorrente } from "./src/model/ContaCorrente";
// // import { ContaPoupanca } from "./src/model/ContaPoupanca";

// export function main() {

//     let opcao: number;

//     // // Instanciando um novo Objeto da Classe Conta
//     // console.log("\nCriar o Objeto da Classe Conta")
//     // let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000000);

//     // // Visualizando todos os dados da conta criada
//     // c1.visualizar();

//     // // Modificando o Saldo através do método set
//     // console.log("\nAlterar o Saldo para R$ 1500000.00")
//     // c1.saldo = 1500000;

//     // // Recuperando o valor do Saldo através do método get
//     // console.log(`\nNovo Saldo da Conta: ${c1.saldo}`);

//     // // Verificando se o Saque deu certo
//     // console.log(`\nSacar R$ 2000000.00 da conta: ${c1.sacar(2000000)}`);
//     // c1.visualizar();

//     // // Verificando se o Saque deu certo
//     // console.log(`\nSacar R$ 2000.00 da conta: ${c1.sacar(2000)}`);
//     // c1.visualizar();

//     // // Depositar dinheiro na conta
//     // console.log("\nDepositar R$ 5000.00 na Conta: ");
//     // c1.depositar(5000);
//     // c1.visualizar();

//     // Teste da Classe Conta Corrente

//     const cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Yasmine Lamark", 500000, 1000);
//     cc1.visualizar();

//     cc1.sacar(1000);

//     cc1.visualizar();

//     cc1.depositar(5000);

//     cc1.visualizar();

//     // Teste da Classe ContaPoupanca
//     // const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
//     // contapoupanca.visualizar();
//     // contapoupanca.sacar(200);
//     // contapoupanca.visualizar();
//     // contapoupanca.depositar(1000);
//     // contapoupanca.visualizar();

//     while (true) {

//         console.log(colors.bg.black, colors.fg.yellow, 
//                     "*****************************************************");
//         console.log("                                                     ");
//         console.log("                BANCO DO BRAZIL COM Z                ");
//         console.log("                                                     ");
//         console.log("*****************************************************");
//         console.log("                                                     ");
//         console.log("            1 - Criar Conta                          ");
//         console.log("            2 - Listar todas as Contas               ");
//         console.log("            3 - Buscar Conta por Numero              ");
//         console.log("            4 - Atualizar Dados da Conta             ");
//         console.log("            5 - Apagar Conta                         ");
//         console.log("            6 - Sacar                                ");
//         console.log("            7 - Depositar                            ");
//         console.log("            8 - Transferir valores entre Contas      ");
//         console.log("            9 - Sair                                 ");
//         console.log("                                                     ");
//         console.log("*****************************************************");
//         console.log("                                                     ", 
//         colors.reset);

//         console.log("Entre com a opção desejada: ");
//         opcao = readlinesync.questionInt("");

//         if (opcao == 9) {
//             console.log(colors.fg.greenstrong, 
//                 "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
//             sobre();
//             console.log(colors.reset, "");
//             process.exit(0);
//         }

//         switch (opcao) {
//             case 1:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nCriar Conta\n\n", colors.reset);
                
//                 keyPress()
//                 break;
//             case 2:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nListar todas as Contas\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 3:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 4:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nAtualizar dados da Conta\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 5:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nApagar uma Conta\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 6:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nSaque\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 7:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nDepósito\n\n", colors.reset);

//                 keyPress()
//                 break;
//             case 8:
//                 console.log(colors.fg.whitestrong, 
//                     "\n\nTransferência entre Contas\n\n", colors.reset);

//                 keyPress()
//                 break;
//             default:
//                 console.log(colors.fg.whitestrong, 
//                     "\nOpção Inválida!\n", colors.reset);

//                 keyPress()
//                 break;
//         }
//     }

// }

// /* Função com os dados da pessoa desenvolvedora */
// function sobre(): void {
//     console.log("\n*****************************************************");
//     console.log("Projeto Desenvolvido por: ");
//     console.log("Generation Brasil - generation@generation.org");
//     console.log("github.com/conteudoGeneration");
//     console.log("*****************************************************");
// }

// function keyPress(): void {
//     console.log(colors.reset, "");
//     console.log("\nPressione enter para continuar...");
//     readlinesync.prompt();
// }

// main();






import readlinesync = require('readline-sync');
import { colors } from './src/util/Cores';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';

export  function main() {
  let opcao: number;

  
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