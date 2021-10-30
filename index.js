console.log ("Hi Star Wars Fans.  You can't see this because you're not a console.")

//Event Listener 1 - hit a button and Fetches from Star Wars API
document.getElementById("planets").addEventListener("click", clickPlanets);
function clickPlanets() {
  alert ("I have the high ground Anakin!");
}

document.getElementById("spaceships").addEventListener("click", clickShips);
function clickShips() {
  alert ("I have a BAD FEELING about this!");
}

document.getElementById("vehicles").addEventListener("click", clickVehicles);
function clickVehicles() {
  alert ("I am your FATHER!");
}

document.getElementById("people").addEventListener("click", clickPeople);
function clickPeople() {
  alert ("You were the Chosen one!");
}

document.getElementById("films").addEventListener("click", clickFilms);
function clickFilms() {
  alert ("Now feel the POWAH of the DARK SIDE!");
}

document.getElementById("species").addEventListener("click", clickSpecies);
function clickSpecies() {
  alert ("May the FORCE be with you.");
}

// display info about selected random content on screen 

//Event Listener 2 - user can click the heart button and the information about that item will save down below

//Event Listener 3 - delete option for saved info

//stretch goal - add to db.json server to save the favorited characters