console.log ("Hi Star Wars Fans.  You can't see this because it's a console.log.")

//Event Listener 1 - hit a button and Fetches from Star Wars API https://www.swapi.tech/api
// These are the fetch requests for the "FILMS" dropdown menu
document.getElementById("4").addEventListener("click", fetchEpisodeIV);
function fetchEpisodeIV() {
  fetch("https://www.swapi.tech/api/films/1/")
  .then(res => res.json())
  .then(data => console.log(data.result.properties))
    .catch(err => console.error(err))
    
}

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
 
// display info about selected content on screen 
// make a div and make a card


//Event Listener 2 - user can click the heart button and the information about that item/movie will save down below

//Event Listener 3 - 

document.getElementById("refresh-btn").addEventListener("click", startOver);
function startOver(){
  location.reload()
}

//stretch goal - add to db.json server to save the favorited characters?