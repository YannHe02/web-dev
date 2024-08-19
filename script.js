//Länder Europas
const laender = ["Albanien","Andorra","Belgien","Bosnien und Herzegowina","Bulgarien","Dänemark","Deutschland","Estland",
"Finnland","Frankreich","Griechenland","Irland","Island","Italien","Kasachstan","Kosovo",
"Kroatien","Lettland","Liechtenstein","Litauen","Luxemburg","Malta","Mazedonien","Moldawien",
"Monaco","Montenegro","Niederlande","Norwegen","Österreich","Polen","Portugal","Rumänien",
"Russland","San Marino","Schweden","Schweiz","Serbien","Slowakei","Slowenien","Spanien",
"Türkei","Tschechien","Ukraine","Ungarn","Vatikanstadt","Vereinigtes Königreich","Weißrussland","Zypern",]
//Hauptstädte
const staede = ["Tirana","Andorra la Vella","Brüssel","Sarajevo","Sofia","Kopenhagen","Berlin","Tallinn",
"Helsinki","Paris","Athen","Dublin","Reykjavík","Rom","Astana","Pristina",
"Zagreb","Riga","Vaduz","Vilnius","Luxemburg","Valletta","Skopje","Kischinau",
"Monaco","Podgorica","Amsterdam","Oslo","Wien","Warschau","Lissabon","Bukarest",
"Moskau","San Marino","Stockholm","Bern","Belgrad","Bratislava","Ljubljana","Madrid",
"Ankara","Prag","Kiew","Budapest","Vatikanstadt","London","Minsk","Nikosia",]



const listTable = document.getElementById("listTable") 


//Tabelle für 1. Lernen erstellen
function createTable(){
  console.log("Test")
  for(let i = 0; i < 48; i++){
    console.log(i)
    let newElement0 = document.createElement("tr")
    newElement0.setAttribute("id",`row${i}`)
    document.getElementById(`listTable`).appendChild(newElement0)

    let newElement = document.createElement("td")
    newElement.innerHTML = laender[i]
    document.getElementById(`row${i}`).appendChild(newElement)

    let newElement2 = document.createElement("td")
    newElement2.innerHTML = staede[i]
    document.getElementById(`row${i}`).appendChild(newElement2)
  }
}

//Auswahl Quiz 
const checkBtnAuswahl = document.getElementById('checkBtnAuswahl')
const selectCountry = document.getElementById('selectCountry');
const auswahl1 = document.getElementById('auswahl1');
const auswahl2 = document.getElementById('auswahl2');
const auswahl3 = document.getElementById('auswahl3');
const auswahl4 = document.getElementById('auswahl4');
const auswahlElements = [auswahl1, auswahl2, auswahl3, auswahl4];
const auswahlQuizUeberschrift = document.getElementById('auswahlQuizUeberschrift')

let indexSelect = 0;
let auswahlStaede = [];
let randomStadt = 0

function auswahlQuiz() {
  //Wenn alle Länder durch sind
  if (verwendeteIndizes.length == laender.length) {
    auswahlQuizUeberschrift.innerHTML = `${allFehler} Fehlerpunkte`
    selectCountry.innerText = "Du hast es geschafft"
    
    for (let i = 0; i < 4; i++) {
      auswahlElements[i].style.visibility = "hidden";
    }

    checkBtnAuswahl.style.visibility = "visible"
    

    return;
  }

  console.log(verwendeteIndizes)
  //Zufälliges Land das noch nicht dran war
  do {
    indexSelect = Math.floor(Math.random() * laender.length);
  } while (verwendeteIndizes.includes(indexSelect));

  verwendeteIndizes.push(indexSelect);

  laenderCounter.innerHTML = `${verwendeteIndizes.length}/48`

  selectCountry.innerText = laender[indexSelect];

  auswahlStaede[0] = indexSelect;
  //Zufällige Städte erstellen
  for (let i = 1; i < 4; i++) {
    do {
      randomStadt = Math.floor(Math.random() * 48);
    } while (auswahlStaede.includes(randomStadt));
    auswahlStaede[i] = randomStadt
  }

 
  auswahlStaede.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 4; i++) {
    auswahlElements[i].innerText = staede[auswahlStaede[i]];
  }
  if (checkBtnAuswahl) {
    checkBtnAuswahl.addEventListener('click', zurueckQuiz)
  }
}

if (auswahl1) {
  auswahl1.addEventListener('click', function() { checkAuswahl(0); });
}
if (auswahl2) {
  auswahl2.addEventListener('click', function() { checkAuswahl(1); });
}
if (auswahl3) {
  auswahl3.addEventListener('click', function() { checkAuswahl(2); });
}
if (auswahl4) {
  auswahl4.addEventListener('click', function() { checkAuswahl(3); });
}

function checkAuswahl(auswahl){
  console.log(auswahlStaede[auswahl])
  console.log(indexSelect)
  //Wenn es richtig ist
  if(auswahlStaede[auswahl] == indexSelect){
    console.log("yes")
    for (let i = 0; i < 4; i++) {
      auswahlElements[i].style.borderColor = 'black';
    }
    auswahlQuiz()
    return
    //Wenn es falsch ist
  } else {
    console.log("nope")
    if (auswahlElements[auswahl]) {
      auswahlElements[auswahl].style.borderColor = 'red';
      allFehler++
    }
    return
  }
}

//Schreiben Quiz
const checkBtn = document.getElementById('checkBtn')
const hauptstadtInput = document.getElementById('hauptstadtInput')
//Für die Vorstellung des Endscreen
const verwendeteIndizes = [/*0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45*/];
const laenderCounter = document.getElementById('laenderCounter')
const fehlermeldung = document.getElementById('fehlermeldung')
const schreibenQuizÜberschrift = document.getElementById('schreibenQuizÜberschrift')

let fehlerCounter = 0;
let allFehler = 0;

function schreibenQuiz(){
  //Wenn alle Länder durch sind
  if (verwendeteIndizes.length == laender.length) {
    schreibenQuizÜberschrift.innerHTML = `${allFehler} Fehlerpunkte`
    selectCountry.innerText = "Du hast es geschafft"
    hauptstadtInput.style.visibility = "hidden"
    checkBtn.innerHTML = "Zurück"
    if (checkBtn) {
      checkBtn.addEventListener('click', zurueckQuiz)
    }
    return;
  }

  console.log(verwendeteIndizes)

  do {
    indexSelect = Math.floor(Math.random() * laender.length);
  } while (verwendeteIndizes.includes(indexSelect));

  // Markiere den Index als verwendet
  verwendeteIndizes.push(indexSelect);

  laenderCounter.innerHTML = `${verwendeteIndizes.length}/48`

  // Setze den Text des Elements
  selectCountry.innerText = laender[indexSelect];

  if (checkBtn) {
    checkBtn.addEventListener('click', checkAntwortSchreiben)
  }
}

function zurueckQuiz(){
  window.location.href="quiz.html"
}

function checkAntwortSchreiben(){
  //Richtig
  if(staede[indexSelect].toUpperCase() == hauptstadtInput.value.toUpperCase()){
    hauptstadtInput.value = "";
    hauptstadtInput.style.borderColor = 'black';
    fehlerCounter = 0;
    fehlermeldung.style.visibility = "hidden"
    schreibenQuiz();
    //Falsch
  } else {
    fehlermeldung.style.visibility = "visible"
    hauptstadtInput.style.borderColor = 'red';
    allFehler++;
    fehlerCounter++;
    if(fehlerCounter>=2){
      hauptstadtInput.value = staede[indexSelect].slice(0, fehlerCounter-1)
    }
  }
}

