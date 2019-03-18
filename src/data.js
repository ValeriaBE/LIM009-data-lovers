/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.data = {
  dataKeys: [

    "Total_Injured_Persons_Recreational_Boating",
    "Total_Injured_Persons_Train_Accidents_Rail_Roads",

 ],
  getData: (BuscarData) => {
    let retornarData = [];
    for (let año of INJURIES) {
    retornarData.push({
        year: año.Year.substr(0, 1),
        number: año[BuscarData]
      });
    }
    return retornarData;
  },

  consult: (BuscarData, yearValue) => {
    const añoData = BuscarData.find(element => element.Year === yearValue);
    const nuevoAño = {};
    for (const key of window.data.dataKeys) {
        nuevoAño[key] = añoData[key];
    }
    return nuevoAño;
  }
};

//función para obtener arreglo por año
