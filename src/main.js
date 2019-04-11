const homeButton = document.getElementById('home_menu_btn');
const typeButton = document.getElementById('tipo_menu_btn');
const yearButton = document.getElementById('ano_menu_btn');
const homeScreen = document.getElementById('home_screen');
const statisticScreen = document.getElementById('statistic_screen');
const typeScreen = document.getElementById('type_accident_screen');
const yearScreen = document.getElementById('year_accident_screen');
const trainScreen = document.getElementById('train_screen');
const statsBtn = document.getElementById('stats_menu_btn');
const trainBtn = document.getElementById('train');
const boatScreen = document.getElementById('boat_screen');
const boatBtn = document.getElementById('boat');
const seeDataBtn = document.getElementById('see_data');
const sortBtnTrain = document.getElementById('sort_por_ano');
const sortBtnBoat = document.getElementById('sort_por_ano_boat');
const banner = document.getElementById('banner');
const footer = document.getElementById('footer');

statisticScreen.style.display = 'none';
typeScreen.style.display = 'none';
yearScreen.style.display = 'none';
boatScreen.style.display = 'none';
trainScreen.style.display = 'none';

homeButton.addEventListener('click', () => {
  banner.style.display = 'flex';
  footer.style.position = 'relative';
  homeScreen.style.display = 'block';
  statisticScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  trainScreen.style.display = 'none';
});

typeButton.addEventListener('click', () => {
  banner.style.display = 'none';
  homeScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  typeScreen.style.display = 'block';
  footer.style.position = 'relative';
});

yearButton.addEventListener('click', () => {
  banner.style.display = 'none';
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  yearScreen.style.display = 'block';
  footer.style.position = 'fixed';
});

trainBtn.addEventListener('click', () => {
  banner.style.display = 'none';
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'block';
  footer.style.position = 'relative';
  cargarJson();
});

// pintando data
const containerTrain = document.getElementById('data_train');
const pintarTrain = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div class="inline-block train-boxes card-boxes">
          <p>Year: ${data[i].Year}</p>
          <p>#: ${data[i].accidentstrain}</p>
        </div>`;
  }
  return string;
};

boatBtn.addEventListener('click', () => {
  banner.style.display = 'none';
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  boatScreen.style.display = 'block';
  footer.style.position = 'relative';
  cargarJson();
});

const containerBoat = document.getElementById('data_boats');
const pintarBoat = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += ` 
        <div class="inline-block train-boxes card-boxes">
            <p>Year: ${data[i].Year}</p>
            <p>#: ${data[i].accidentsboat}</p>
        </div>`;
  }
  return string;
};

// sortBtnTrain.addEventListener('click', () => {
//   cargarJson();
// });

// sortBtnBoat.addEventListener('click', () => {
//   pintarBoat((sortData(newArrBoat(INJURIES), 'accidentsboat', 'D')));
// });

const yearData = document.getElementById('year_data');
const pintarYear = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `
          <div class="center_items">
            <div class="box_type_year display_inline space text_align_center ">
              <p>Trains</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Boats}</p>
            </div>
            <div class="box_type_year display_inline text_align_center ">
              <p>Boats</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Trains}</p>
            </div>
          </div>`;
  }
  return string;
};

seeDataBtn.addEventListener('click', () => {
  cargarJson();
});

statsBtn.addEventListener('click', () => {
  banner.style.display = 'none';
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  statisticScreen.style.display = 'block';
  footer.style.position = 'fixed';
});

// pintando máximo boating
const maxbtn = document.getElementById('max');
// maxbtn.addEventListener('click', () => {
//   pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Recreational_Boating'));
// });
const stats = document.getElementById('stats');
const pintarMax = (maximo) => {
  let string = '';
  string += ` 
    <div class="box_stats center_content ">
      <div>
        <p>Injured People:</p>
        <p>#:${maximo}</p>
      </div>
    </div>`;
  return string;
};

// pintando máximo Trains
const maxbtnTrains = document.getElementById('max_trains');
// maxbtnTrains.addEventListener('click', () => {
//   pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Train_Accidents_Rail_Roads'));
// });

// pintando suma total Trains
const sumabtnTrains = document.getElementById('suma_trains');
// sumabtnTrains.addEventListener('click', () => {
//   cargarJson();
// });

// pintando suma total Boating
const sumabtnBoat = document.getElementById('suma_boat');
// sumabtnBoat.addEventListener('click', () => {
//   cargarJson();
// });

const url = './data/injuries/injuries.json';
const cargarJson = () => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      containerTrain.innerHTML = pintarTrain(newArrTrain(data));
      sortBtnTrain.addEventListener('click', () => {
        containerTrain.innerHTML = pintarTrain(sortData(newArrTrain(data), 'Year', 'D'));
      });
      containerBoat.innerHTML = pintarBoat(newArrBoat(data));
      sortBtnBoat.addEventListener('click', () => {
        containerBoat.innerHTML = pintarBoat((sortData(newArrBoat(data), 'accidentsboat', 'D')));
      });
      const option = document.getElementById('years').value;
      yearData.innerHTML = pintarYear(filterData(data, option));
      maxbtn.addEventListener('click', () => {
        stats.innerHTML = pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Recreational_Boating'));
      });
      maxbtnTrains.addEventListener('click', () => {
        stats.innerHTML = pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Train_Accidents_Rail_Roads'));
      });
      sumabtnTrains.addEventListener('click', () => {
        stats.innerHTML = pintarMax(computeSumaBoats(data));
      });
      sumabtnBoat.addEventListener('click', () => {
        stats.innerHTML = pintarMax(computeSumaTrains(data));
      });
    });
};
console.log(cargarJson());
