/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.data = {
  dataKeys: [

    "Total_Injured_Persons_Recreational_Boating",
    "Total_Injured_Persons_Train_Accidents_Rail_Roads",

 ],
    getData: (searchData) => {
    let returnData = [];
    for (let years of INJURIES) {
    returnData.push({
        year: years.Year.substr(0, 1),
        number: years[searchData]
      });
    }
    return returnData;
    },

    consult: (searchData, yearValue) => {
    const yaerData = searchData.find(element => element.Year === yearValue);
    const newYear = {};
    for (const key of window.data.dataKeys) {
        newYear[key] = yaerData[key];
    }
    return newYear;
  }
};

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
