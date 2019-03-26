//

let newarrayBoats=[];
const showBoats=(array)=>{
  for(let i=0;i<array.length;i++){
    newarrayBoats+=[array[i].Year+" "+array[i].Total_Injured_Persons_Recreational_Boating+" "];
  }
  return newarrayBoats;
};

// const showBoats = INJURIES.map(function(i) {
//   return i.Year + " " + i.Total_Injured_Persons_Recreational_Boating;
// });
window.showBoats=showBoats;

let newarrayTrains=[];
const showTrains=(INJURIES)=>{
  for(let i=0;i<INJURIES.length;i++){
    newarrayTrains += [INJURIES[i].Year+" " + INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads + " "];
  }
  return newarrayTrains;
};
window.trains=showTrains;


let newarrayYear=[];
const showAccidentsByYear=(array,option)=>{
  for(let i=0;i<array.length;i++){
  if(array[i].Year===option){
    newarrayYear=[array[i].Year+" "+array[i].Total_Injured_Persons_Recreational_Boating+" " +array[i].Total_Injured_Persons_Train_Accidents_Rail_Roads];
  }
  }
  return newarrayYear;
};
window.showAccidentsByYear=showAccidentsByYear;

//ORDENAMIENTO SORT LULÚ
//función ascendente y descendente
/*function sortNumbers(a,b){
  a=a.Total_Injured_Persons_Train_Accidents_Rail_Roads;
  b=b.Total_Injured_Persons_Train_Accidents_Rail_Roads;
 
  if(a>b){
    return 1;
  }else if(a<b){
    return -1;
  }else if(a===b){
    return 0;
  }
}


console.log('arreglo ascendente');
console.log(newarrayTrains.sort(sortNumbers));
console.log('arreglo descendente');
console.log(newarrayTrains.sort(sortNumbers).reverse());
*/




//CÁLCULOS
//aproximación en % de acuerdo al total de los números de accidentados por Trains en años(EEUU)
 let newarrayTrain= [{quantity :0},{quantity :0},{quantity :0},{quantity :0},{quantity :665},{quantity :476}
  ,{quantity :451},{quantity :326},{quantity :171},{quantity :308},{quantity :262},{quantity :294},{quantity :281}
  ,{quantity :183},{quantity :129},{quantity :130},{quantity :275},{quantity :310},{quantity :1884},{quantity :232}
  ,{quantity :346},{quantity :787},{quantity :220},{quantity :309},{quantity :321},{quantity :127},{quantity :110}
  ,{quantity :217},{quantity :462},{quantity :328},{quantity :139},{quantity :558},{quantity :284}];
let totalLocation = 0;
newarrayTrain.forEach(element => {
  totalLocation += element.quantity;
})
newarrayTrain.forEach(element => {
 console.log(element.quantity * 100 / totalLocation)
})

//aproximación en % de acuerdo al total de los números de accidentados por Boating en años(EEUU)
let newarrayBoat= [{quantity :929},{quantity :927},{quantity :780},{quantity :2136},{quantity :2650},{quantity :2757}
  ,{quantity :3822},{quantity :3967},{quantity :3683},{quantity :3559},{quantity :4084},{quantity :4141},{quantity :4442}
  ,{quantity :4555},{quantity :4612},{quantity :4315},{quantity :4355},{quantity :4274},{quantity :4062},{quantity :3888}
  ,{quantity :3363},{quantity :3451},{quantity :3474},{quantity :3673},{quantity :3331},{quantity :3358},{quantity : 3153}
  ,{quantity :3081},{quantity :3000},{quantity :2620},{quantity :2678},{quantity :2679},{quantity :0}];
let totalBoa = 0;
newarrayBoat.forEach(element => {
  totalBoa += element.quantity;
})
newarrayBoat.forEach(element => {
 console.log(element.quantity * 100 / totalLocation)
})



//Suma de personas accidentadas por Trains en EEUU
  let sumaTrains=0;
for(let i=0; i < INJURIES.length; i++){
  
  sumaTrains += INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads;
}

console.log('Suma Total_Injured_Persons_Train_Accidents_Rail_Roads');
console.log(sumaTrains);

//Suma de personas accidentadas por Boating en EEUU


let sumaBoats=0;
for(let i=0; i < INJURIES.length; i++){
  
  sumaBoats += INJURIES[i].Total_Injured_Persons_Recreational_Boating;
}

console.log('Suma Total_Injured_Persons_Recreational_Boating');
console.log(sumaBoats);



//HALLANDO EL MÁXIMO Y/O MÍNIMO DEL NÚMERO DE ACCIDENTES EN BOATING
//El máximo

    maxBoats = 0;

for(let i=0;i<INJURIES.length;i++){
    if(maxBoats < INJURIES[i].Total_Injured_Persons_Recreational_Boating){
        maxBoats = INJURIES[i].Total_Injured_Persons_Recreational_Boating;
    }
}
console.log('Máximo Total_Injured_Persons_Recreational_Boating');
console.log(maxBoats); //4612


//HALLANDO EL MÁXIMO Y/O MÍNIMO DEL NÚMERO DE ACCIDENTES EN TRAINS
//El máximo
maxTrains = 0;

for(let i=0;i<INJURIES.length;i++){
    if(maxTrains < INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads){
        maxTrains = INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads;
    }
}
console.log('Máximo Total_Injured_Persons_Train_Accidents_Rail_Roads');
console.log(maxTrains); //1884