//  showArrTrain y Boat son para crear un nuevo arrays solo con los elementos de tren y bote
const newArrTrain = (INJURIES) => {
  const showArrTrain = INJURIES.map(item => {
    const container = {};
    container.Year = item.Year;
    container.accidentstrain = item.Total_Injured_Persons_Train_Accidents_Rail_Roads;
    return container;
  });
  return showArrTrain;
};
window.newArrTrain = newArrTrain;


const newArrBoat = (INJURIES) => {
  const showArrBoat = INJURIES.map(item => {
    const container = {};
    container.Year = item.Year;
    container.accidentsboat = item.Total_Injured_Persons_Recreational_Boating;
    return container;
  });
  return showArrBoat;
};
window.newArrBoat = newArrBoat;

const filterData = (data, condition) => {
  let filteredArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Year === condition) {
      filteredArr.push({
        'Year': data[i].Year,
        'Trains': data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads,
        'Boats': data[i].Total_Injured_Persons_Recreational_Boating
      });
    }
  }
  return filteredArr;
};
window.filterData = filterData;

const sortData = (data, sortBy, sortOrder) => {
  const arrordered = data.sort((avar, bvar) => {
    if (avar[sortBy] > bvar[sortBy]) {
      return 1;
    } else if (avar[sortBy] < bvar[sortBy]) {
      return -1;
    } else if (avar[sortBy] === bvar[sortBy]) {
      return 0;
    }
  });
  if (sortOrder === 'A') {
    return arrordered;
  } else if (sortOrder === 'D') {
    return (arrordered.reverse());
  }
};
window.sortData = sortData;


//  HALLANDO EL MÁXIMO Y/O MÍNIMO DEL NÚMERO DE ACCIDENTES EN TRAINS
//  Cálculo del máximo de boat

const computeStats = (data, statsBy) => {
  let maximoBoats = 0;
  for (let i = 0; i < data.length; i++) {
    if (maximoBoats < data[i][statsBy]) {
      maximoBoats = data[i][statsBy];
    }
  }
  return maximoBoats;
};
window.computeStats = computeStats; // 4612

const computeSumaBoats = (INJURIES) => {
  const totalBoats = INJURIES.reduce((acc, boats) => acc + boats.Total_Injured_Persons_Recreational_Boating, 0);
  return totalBoats;
};
window.computeSumaBoats = computeSumaBoats;

const computeSumaTrains = (INJURIES) => {
  const totalTrains = INJURIES.reduce((acc, trains) => acc + trains.Total_Injured_Persons_Train_Accidents_Rail_Roads, 0);
  return totalTrains;
};
window.computeSumaTrains = computeSumaTrains;
