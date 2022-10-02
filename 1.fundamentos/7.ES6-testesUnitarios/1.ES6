function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  //Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

/* Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals.
Copie o código abaixo: */

/* function testingScope (escopo) {
    if (escopo === true) {
      let ifScope =  'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !'`;
      console.log(ifScope);
    } else {
      const  elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  } */

 /*  testingScope(true);
 */
//Crie uma função que retorne um array em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7; 
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
};
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada
;