//showArrTrain y Boat son para crear un nuevo arrays solo con los elementos de tren y bote
const showArrTrain = (data)=>{ 
  let newdatat=[];
  for(let i=0;i<data.length;i++){
    newdatat.push({
      'Year':data[i].Year,
      'accidentstrain': data[i]['Total_Injured_Persons_Train_Accidents_Rail_Roads']
    })
  }
  return newdatat;
}
window.showArrTrain=showArrTrain;

const showArrBoat = (data)=>{ 
  let newdatab=[];
  for(let i=0;i<data.length;i++){
    newdatab.push({
      'Year':data[i].Year,
      'accidentsboat': data[i]['Total_Injured_Persons_Recreational_Boating']
    })
  }
  return newdatab;
}
window.showArrBoat=showArrBoat;

const filterData=(data,condition)=>{
  let filteredArr=[];
  for(let i=0;i<data.length;i++){
    if(data[i].Year===condition){
      filteredArr.push({
        'Year':data[i].Year,
        'Trains':data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads,
        'Boats':data[i].Total_Injured_Persons_Recreational_Boating
      })
    }
  }
  return filteredArr;
}
window.filterData=filterData;

//HALLANDO EL MÁXIMO Y/O MÍNIMO DEL NÚMERO DE ACCIDENTES EN TRAINS
//Cálculo del máximo de boat

const computeStats=(data)=>{
  let maximo=0;
  for(let i=0;i<data.length;i++){
    if(maximo<data[i].Total_Injured_Persons_Recreational_Boating){
     maximo=data[i].Total_Injured_Persons_Recreational_Boating;
    }
  }
  return maximo;
}
window.computeStats=computeStats;//4612


//Cálculo del máximo de Trains
const computeStatsTrains=(data)=>{
  let maximoTrains=0;
  for(let i=0;i<data.length;i++){
    if(maximoTrains<data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads){
      maximoTrains=data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads;
    }
  }
  return maximoTrains;
}
window.computeStatsTrains=computeStatsTrains;//1884

//Suma de personas accidentadas por Trains en EEUU

const computeSumaTrains=(INJURIES)=>{
  let sumaTrains=0;
  for(let i=0; i < INJURIES.length; i++){
  
    sumaTrains += INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads;
  }
  
  return sumaTrains ;
}
 window.computeSumaTrains=computeSumaTrains;//10585


  



//Suma de personas accidentadas por Boat en EEUU

const computeSumaBoat=(INJURIES)=>{
  let sumaBoats=0;
  for(let i=0; i < INJURIES.length; i++){
  
    sumaBoats += INJURIES[i].Total_Injured_Persons_Recreational_Boating;
  }
  
  return sumaBoats ;
}
 window.computeSumaBoat=computeSumaBoat;//105799


  
//
const computeStatsPorcent=(INJURIES)=>{
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
    let porcen= element.quantity * 100 / totalLocation;
    return porcen;
    // console.log( porcen);
  //  console.log( element.quantity * 100 / totalLocation)
  })
}
window.computeStatsPorcent=computeStatsPorcent;

//

//ORDENAMIENTO SORT LULÚ
//función ascendente y descendente


const showArrTrai = (data)=>{ 
  let newdata=[];
  for(let i=0;i<data.length;i++){
    newdata.push({
      'Year':data[i].Year,
      'accidentstrain': data[i]['Total_Injured_Persons_Train_Accidents_Rail_Roads']
    })
  }
  return newdata;
}
console.log(newdata);
// window.showArrTrai=showArrTrai;