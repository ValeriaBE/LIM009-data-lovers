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


const computeStats=(data)=>{
  let maximo=0;
  for(let i=0;i<data.length;i++){
    if(maximo<data[i].Total_Injured_Persons_Recreational_Boating){
     maximo=data[i].Total_Injured_Persons_Recreational_Boating;
    }
  }
  return maximo;
}
window.computeStats=computeStats;
