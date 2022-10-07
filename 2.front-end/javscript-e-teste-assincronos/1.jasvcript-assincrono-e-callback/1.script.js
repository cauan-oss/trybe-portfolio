 const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

 
  const mars = {
    name: 'Marte',
    distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
    },
  };  

 const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  }, 
}; 
 setTimeout(() => {
  console.log(planetDistanceFromSun(mars))
}, 4000); // A
console.log(planetDistanceFromSun(venus), 3000); // B
console.log(planetDistanceFromSun(jupiter), 4000); // C 

/* - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:

A função sendMarsTemperature imprima no console o seguinte texto: “A temperatura de Marte é: temperaturaAtual graus celsius” onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e

A mensagem deve ser impressa no console depois de no máximo 5 segundos.

Dica: utilize a função messageDelay para gerar o tempo de espera necessário */