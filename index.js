console.log ("Hi Star Wars Fans.  You can't see this because you're not a console.")

//Event Listener 1 - hit a button and Fetches from Star Wars API https://www.swapi.tech/
document.getElementById("planets").addEventListener("click", fetchPlanet);
function fetchPlanet() {
    fetch('https://www.swapi.tech/api/planets/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }


document.getElementById("starships").addEventListener("click", fetchShip);
function fetchShip() {
    fetch('https://www.swapi.tech/api/starships/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }

document.getElementById("vehicles").addEventListener("click", fetchVehicles);
function fetchVehicles() {
    fetch('https://www.swapi.tech/api/vehicles/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }

document.getElementById("people").addEventListener("click", fetchPeople);
function fetchPeople() {
    fetch('https://www.swapi.tech/api/people/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }

document.getElementById("films").addEventListener("click", fetchFilms);
function fetchFilms() {
    fetch('https://www.swapi.tech/api/films/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }

document.getElementById("species").addEventListener("click", fetchSpecies);
function fetchSpecies() {
    fetch('https://www.swapi.tech/api/species/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)
    )
  }

// display info about selected random content on screen 

//Event Listener 2 - user can click the heart button and the information about that item will save down below

//Event Listener 3 - delete option for saved info

//stretch goal - add to db.json server to save the favorited characters