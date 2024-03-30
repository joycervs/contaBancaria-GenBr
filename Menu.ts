import readlinesync = require('readline-sync');
import { colors } from './src/util/Cores';

export  function main() {
  let opcao: number;

  while(true){

    console.log(colors.bg.black, colors.fg.cyan,
                "****************************************************",
                colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "                    JOY BANK                        ",
    colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "****************************************************",
    colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "                                                    ",
    colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          1 - Criar Conta                           ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          2 - Listar Todas as Contas                ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          3 - Buscar Conta por Numero               ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          4 - Atualizar Dados da Conta              ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          5 - Apagar Conta                          ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          6 - Sacar                                 ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          7 - Depositar                             ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          8 - Transferir Valores entre Contas       ",colors.reset);
    console.log(colors.bg.black,colors.fg.magenta,
      "          9 - Sair                                  ",colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "                                                    ",
                colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "****************************************************",
                colors.reset);
    console.log(colors.bg.black, colors.fg.cyan,
                "                                                    ",
    colors.reset);

    console.log(colors.bg.black,colors.fg.yellow,
                "Entre com a opcao desejada:                         ",
                colors.reset);
    opcao = readlinesync.questionInt("");

    if(opcao === 9){
      console.log (colors.bg.black,colors.fg.magenta,
        "\nJoy Bank - O seu futuro começa aqui!");
      sobre();
      console.log(colors.reset,"");
      process.exit(0);
    }

    switch(opcao){
      case 1: 
          console.log(colors.fg.magenta,"\nCriar Conta\n\n",colors.reset);
          break;
      case 2: 
          console.log(colors.fg.magenta,"\nListar todas as Contas\n\n",colors.reset);
          break;
      case 3:
          console.log(colors.fg.magenta,"\nBuscar Conta por Numero\n\n",colors.reset);
          break;
      case 4:
          console.log(colors.fg.magenta,"\nAtualizar Dados da Conta\n\n",colors.reset);
            break;
      case 5:
        console.log(colors.fg.magenta,"\nApagar Conta\n\n",colors.reset);
        break;
      case 6:
        console.log(colors.fg.magenta,"\nSacar\n\n",colors.reset);
        break;
      case 7:
        console.log(colors.fg.magenta,"\nDepositar\n\n",colors.reset);
        break;
      case 8:
        console.log(colors.fg.magenta,"\nTransferência entre Contas\n\n",colors.reset);
        break;
      default:
        console.log(colors.fg.magenta,"\nOpção Inválida!\n",colors.reset);
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

