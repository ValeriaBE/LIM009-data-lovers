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
  // console.log(newdatat);
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
  // console.log(newdatab);
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
