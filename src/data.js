let newarrayBoats=[];
const showBoats=(array)=>{
  for(let i=0;i<array.length;i++){
    newarrayBoats+=[array[i].Year+" "+array[i].Total_Injured_Persons_Recreational_Boating+" "];
  }
  return newarrayBoats;
};
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
 

