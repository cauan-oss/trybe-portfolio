/* Spread operator, quando se coloca a variavel que tem um array, ex: ...carros
ele tira tudo que esta dentro de um array, resultado: gol, hb20, focus.
se chamarmos o array sem os ...; ele retornara 
da seguinte maneira ["gol", "hb20", "focus"], OBS: isso serve para objetos*/

const carros = ["gol", "hb20", "focus"];

const motos = ["biz", "r1"];
const veiculos = [...carros, ...motos];

console.log(veiculos);