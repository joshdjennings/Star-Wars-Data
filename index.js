console.log ("Hi Star Wars Fans.  You can't see this because it's a console.log.")
const card = document.querySelector('#card')
//Event Listener 1 - hit a button and Fetches from Star Wars API https://www.swapi.tech/api
// These are the fetch requests for the "FILMS" dropdown menu
document.getElementById("1").addEventListener("click", fetchEpisodeIV);
function fetchEpisodeIV(event) {
  console.log(event.target.id);
  fetch(`https://www.swapi.tech/api/films/${event.target.id}/`)
  .then(res => res.json())
  .then(data => displayInfo(data.result.properties)
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
    
  )}

document.getElementById("5").addEventListener("click", fetchEpisodeV);
function fetchEpisodeV() {
    fetch('https://www.swapi.tech/api/films/2')
    .then(res => res.json())
    .then(data => console.log(data.result.properties))
    .catch(err => console.error(err))
    
  }

  document.getElementById("6").addEventListener("click", fetchEpisodeVI);
  function fetchEpisodeVI() {
      fetch('https://www.swapi.tech/api/films/3')
      .then(res => res.json())
      .then(data => console.log(data.result.properties))
      .catch(err => console.error(err))
      
    }

document.getElementById("1").addEventListener("click", fetchEpisodeI);
function fetchEpisodeI() {
    fetch('https://www.swapi.tech/api/films/4')
    .then(res => res.json())
    .then(data => console.log(data.result.properties))
    .catch(err => console.error(err))
       
}

document.getElementById("2").addEventListener("click", fetchEpisodeII);
function fetchEpisodeII() {
  fetch('https://www.swapi.tech/api/films/5')
  .then(res => res.json())
  .then(data => console.log(data.result.properties))
  .catch(err => console.error(err))
          
}

document.getElementById("3").addEventListener("click", fetchEpisodeIII);
function fetchEpisodeIII() {
  fetch('https://www.swapi.tech/api/films/6')
  .then(res => res.json())
  .then(data => console.log(data.result.properties))
  .catch(err => console.error(err))
            
}
 //displayInfo function
function displayInfo(properties){
  console.log("input data", properties)
  card.innerHTML =  ""
  card.innerHTML = `<h4>Title: ${properties.title}</h4>
  <h4>Episode: ${properties.episode_id}</h4>
  <h4>Release Date: ${properties.release_date}</h4>
  <h4>Director: ${properties.director}</h4>`;
}


// display info about selected content on screen 
// make a div and make a card


//Event Listener 2 - user can click the heart button and the information about that item/movie will save down below

//Event Listener 3 - 

document.getElementById("refresh-btn").addEventListener("click", startOver);
function startOver(){
  location.reload()
}

//stretch goal - add to db.json server to save the favorited characters?