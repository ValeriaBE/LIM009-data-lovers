let newarrayBoats=[];
  const showBoats=(array)=>{
    for(let i=0;i<array.length;i++){
      newarrayBoats+=(
        `<br>${array[i].Year}&nbsp;&nbsp;&nbsp;&nbsp;
      ${array[i].Total_Injured_Persons_Recreational_Boating}<br>` );
    }
    return newarrayBoats;
  };
window.showBoats=showBoats;

let newarrayTrains=[];
const showTrains=(INJURIES)=>{
  for(let i=0;i<INJURIES.length;i++){
    newarrayTrains+=(
      `<br>${INJURIES[i].Year}&nbsp;&nbsp;&nbsp;&nbsp;
    ${INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads}<br> `




    );
  }
  return newarrayTrains;
};
window.trains=showTrains;


let newarrayYear=[];
const showAccidentsByYear=(array,option)=>{
  for(let i=0;i<array.length;i++){
  if(array[i].Year===option){
    newarrayYear=(`
    ${array[i].Year}<br>
    <br>${array[i].Total_Injured_Persons_Recreational_Boating}<br>
    ${array[i].Total_Injured_Persons_Train_Accidents_Rail_Roads}<br>` );
  }
  }
  return newarrayYear;
};

//
window.showAccidentsByYear=showAccidentsByYear;

window.roadEye = {

  filtersYears: (dataInjuries) => {
    const result = dataInjuries.filter(
      injurie => {
        return parseInt(injurie.Year) >= 1960 && parseInt(injurie.Year) < 2016;
      }
    );
    return result;
  },



};
//
