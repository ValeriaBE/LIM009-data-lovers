/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
const boating=()=>{
  return INJURIES.map(injury => `${injury.Total_Injured_Persons_Recreational_Boating} 
  ${injury.Year}`);
};
window.boating=boating;

const trains=()=>{
  return INJURIES.map(injury => `${injury.Total_Injured_Persons_Train_Accidents_Rail_Roads} 
  ${injury.Year}`);
};
window.trains=trains;