
const homeButton = document.getElementById("home-menu-btn");
const aboutButton = document.getElementById("about-menu-btn");
const contactButton = document.getElementById("contact-menu-btn");
const typeButton = document.getElementById("tipo-menu-btn");
const yearButton = document.getElementById("año-menu-btn");
const homeScreen = document.getElementById("home-screen");
const statisticScreen = document.getElementById("statistic-screen");
const contactScreen = document.getElementById("contact-us-screen");
const typeScreen = document.getElementById("type-accident-screen");
const yearScreen = document.getElementById("year-accident-screen");
const trainScreen = document.getElementById("train-screen");
const trainBtn = document.getElementById("train");
const boatScreen = document.getElementById("boat-screen");
const boatBtn = document.getElementById("boat");
const seeDataBtn = document.getElementById("see-data");
const sortBtnTrain=document.getElementById("sort-por-año");
const sortBtnBoat=document.getElementById("sort-por-año-boat");

statisticScreen.style.display = "none";
contactScreen.style.display = "none";
typeScreen.style.display = "none";
yearScreen.style.display = "none";
boatScreen.style.display = "none";
trainScreen.style.display = "none";



homeButton.addEventListener("click", () => {
  homeScreen.style.display = "flex";
  statisticScreen.style.display = "none";
  contactScreen.style.display = "none";
  typeScreen.style.display = "none";
  boatScreen.style.display = "none";
  yearScreen.style.display="none";
  trainScreen.style.display = "none";

});

aboutButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  contactScreen.style.display = "none";
  typeScreen.style.display = "none";
  yearScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  statisticScreen.style.display = "block";
});

contactButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  typeScreen.style.display = "none";
  yearScreen.style.display = "none";
  statisticScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  contactScreen.style.display = "block";
});

typeButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  contactScreen.style.display = "none";
  yearScreen.style.display = "none";
  statisticScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  typeScreen.style.display = "block";
});

yearButton.addEventListener("click", () => {
  homeScreen.style.display = "none";
  contactScreen.style.display = "none";
  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "none";
  yearScreen.style.display = "block";
});

trainBtn.addEventListener("click", () => {
  homeScreen.style.display = "none";
  contactScreen.style.display = "none";
  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  yearScreen.style.display = "none";
  boatScreen.style.display = "none";
  trainScreen.style.display = "block";
  pintarTrain(arrInjuredPeople);
});

const containerTrain = document.getElementById("data-train");
const arrInjuredPeople = INJURIES;
const pintarTrain = (arrInjuredPeople) => {
  let string = "";
  for (let i = 0; i < arrInjuredPeople.length; i++) {
    string += ` 
        <div class="row display-inline-block">
          <div class="column">
            <div class="boxes-design-type display-inline-block">
            <p>Year: ${arrInjuredPeople[i].Year}</p>
            <p>#: ${arrInjuredPeople[i].Total_Injured_Persons_Train_Accidents_Rail_Roads}</p>
            </div>
          </div>
        </div>`
  }
  containerTrain.innerHTML = string;
};

sortBtnTrain.addEventListener("click", ()=>{
  arrInjuredPeople.sort(function(a,b){
    var x=a.Total_Injured_Persons_Train_Accidents_Rail_Roads;
    var y=b.Total_Injured_Persons_Train_Accidents_Rail_Roads;
    return x>y?-1:x<y?1:0;
  });
  pintarTrain(arrInjuredPeople)
})

boatBtn.addEventListener("click", () => {
  homeScreen.style.display = "none";
  contactScreen.style.display = "none";
  typeScreen.style.display = "none";
  statisticScreen.style.display = "none";
  yearScreen.style.display = "none";
  trainScreen.style.display = "none";
  boatScreen.style.display = "block";
  pintarBoat(arrInjuredPeopleBoat);
});

const containerBoat = document.getElementById("data-boats");
const arrInjuredPeopleBoat = INJURIES;
const pintarBoat = (arrInjuredPeopleBoat) => {
  let string = "";
  for (let i = 0; i < arrInjuredPeopleBoat.length; i++) {
    string += `
        <div class="row display-inline-block">
          <div class="column">
            <div class="boxes-design-type display-inline-block">
            <p>Year: ${arrInjuredPeopleBoat[i].Year}</p>
            <p>#: ${arrInjuredPeopleBoat[i].Total_Injured_Persons_Recreational_Boating}</p>
            </div>
          </div>
        </div>`
  }
  containerBoat.innerHTML = string;
};

sortBtnBoat.addEventListener("click", ()=>{
  arrInjuredPeopleBoat.sort(function(a,b){
    var x=a.Year;
    var y=b.Year;
    return x>y?-1:x<y?1:0;
  });
  pintarBoat(arrInjuredPeopleBoat);
})

seeDataBtn.addEventListener("click", () => {
  const option = document.getElementById("Years").value;
  pintarYear(arrYearInjuredpeople,option);
});

const yearData = document.getElementById("year-data");
const arrYearInjuredpeople = INJURIES;
const pintarYear = (INJURIES,option) => {
  let string = "";
  for (let i = 0; i < INJURIES.length; i++) {
    if(INJURIES[i].Year===option){
    string += `
          <div class="center-items">
            <div class="box-type-year display-inline space text-align-center ">
              <p>Trains</p>
              </br>
              <p>Year: ${INJURIES[i].Year}</p>
              <p>#: ${INJURIES[i].Total_Injured_Persons_Recreational_Boating}</p>
            </div>
            <div class="box-type-year display-inline text-align-center ">
              <p>Boats</p>
              </br>
              <p>Year: ${INJURIES[i].Year}</p>
              <p>#: ${INJURIES[i].Total_Injured_Persons_Train_Accidents_Rail_Roads}</p>
            </div>
          </div>`
    }
  }
  yearData.innerHTML = string;
};

