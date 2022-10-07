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

