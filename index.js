const card = document.querySelector('#card')
//Event Listener 1 - hit a button and Fetches from Star Wars API https://www.swapi.tech/api
// These are the fetch requests for the "FILMS" dropdown menu
document.getElementById("1").addEventListener("click", fetchEpisodeData);
document.getElementById("2").addEventListener("click", fetchEpisodeData);
document.getElementById("3").addEventListener("click", fetchEpisodeData);
document.getElementById("4").addEventListener("click", fetchEpisodeData);
document.getElementById("5").addEventListener("click", fetchEpisodeData);
document.getElementById("6").addEventListener("click", fetchEpisodeData);

document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);

function fetchEpisodeData(event) {
  console.log(event)
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  .then(data => displayInfo(data.result.properties)
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
    
  )}
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