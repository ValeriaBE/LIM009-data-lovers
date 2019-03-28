
const homeButton = document.getElementById("home-menu-btn");
const aboutButton = document.getElementById("about-menu-btn");
const typeButton = document.getElementById("tipo-menu-btn");
const yearButton = document.getElementById("año-menu-btn");
const homeScreen = document.getElementById("home-screen");
const statisticScreen = document.getElementById("statistic-screen");
const typeScreen = document.getElementById("type-accident-screen");
const yearScreen = document.getElementById("year-accident-screen");
const trainScreen = document.getElementById("train-screen");
const trainBtn = document.getElementById("train");
const boatScreen = document.getElementById("boat-screen");
const boatBtn = document.getElementById("boat");
const seeDataBtn = document.getElementById("see-data");
const sortBtnTrain = document.getElementById("sort-por-año");
const sortBtnBoat = document.getElementById("sort-por-año-boat");

statisticScreen.style.display = "none";
typeScreen.style.display = "none";
yearScreen.style.display = "none";
boatScreen.style.display = "none";
trainScreen.style.display = "none";



homeButton.addEventListener("click", () => {
  homeScreen.style.display = "block";
  statisticScreen.style.display = "none";
  typeScreen.style.display = "none";
  boatScreen.style.display = "none";
  yearScreen.style.display = "none";
  trainScreen.style.display = "none";

});

aboutButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  typeScreen.style.display = "none";
  yearScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  statisticScreen.style.display = "block";
});


typeButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  yearScreen.style.display = "none";
  statisticScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  typeScreen.style.display = "block";
});

yearButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  yearScreen.style.display = "block";
});

trainBtn.addEventListener("click", () => {
  homeScreen.style.display = "none";
  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  yearScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "block";
  pintarTrain(showArrTrain(INJURIES));
});

//pintando data
const containerTrain = document.getElementById("data-train");

const pintarTrain = (data) => {
  let string = "";
  for (let i = 0; i < data.length; i++) {
    string += ` 
        <div class="row display-inline-block">
          <div class="column">
            <div class="boxes-design-type display-inline-block">
            <p>Year: ${data[i].Year}</p>
            <p>#: ${data[i].accidentstrain}</p>
            </div>
          </div>
        </div>`
  }
  containerTrain.innerHTML = string;
};

sortBtnTrain.addEventListener("click", () => {
  pintarTrain(sortData(INJURIES,"Year","D"));
})

boatBtn.addEventListener("click", () => {
  homeScreen.style.display = "none";

  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  yearScreen.style.display = "none";
  trainScreen.style.display = "none";
  boatScreen.style.display = "block";
  pintarBoat(showArrBoat(INJURIES));
});

const containerBoat = document.getElementById("data-boats");
const pintarBoat = (data) => {
  let string = "";
  for (let i = 0; i < data.length; i++) {
    string += ` 
        <div class="row display-inline-block">
          <div class="column">
            <div class="boxes-design-type display-inline-block">
            <p>Year: ${data[i].Year}</p>
            <p>#: ${data[i].accidentsboat}</p>
            </div>
          </div>
        </div>`
  }
  containerBoat.innerHTML = string;
};

// sortBtnBoat.addEventListener("click", () => {
//   arrInjuredPeopleBoat.sort(function (a, b) {
//     let x = a.Total_Injured_Persons_Recreational_Boating;
//     let y = b.Total_Injured_Persons_Recreational_Boating;
//     return x > y ? -1 : x < y ? 1 : 0;
//   });
//   pintarBoat(arrInjuredPeopleBoat);
// })

const yearData = document.getElementById("year-data");
const pintarYear = (data) => {
  let string = "";
  for (let i = 0; i < data.length; i++) {
    string += `
          <div class="center-items">
            <div class="box-type-year display-inline space text-align-center ">
              <p>Trains</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Boats}</p>
            </div>
            <div class="box-type-year display-inline text-align-center ">
              <p>Boats</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Trains}</p>
            </div>
          </div>`
  }
  yearData.innerHTML = string;
}

seeDataBtn.addEventListener("click", () => {
  const option = document.getElementById("Years").value;
  pintarYear(filterData(INJURIES, option));
});

const maxbtn = document.getElementById("max");
maxbtn.addEventListener("click", () => {
  pintarMax(computeStats(INJURIES));
})
const stats = document.getElementById("stats");
const pintarMax = (maximoBoats) => {
  let string = "";
  string += ` ${maximoBoats}`
  stats.innerHTML = string;
}
