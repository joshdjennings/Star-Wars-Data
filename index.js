const cardContainer = document.querySelector('#card-container')
const commentContainer = document.querySelector('#comment-container')

document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);
document.getElementById("refresh-btn").addEventListener("click", startOver);
document.getElementById('form').addEventListener('submit', commentPost);

function fetchEpisodeData(event) {
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  .then(data => displayInfo(data.result.properties))
  } 
 
function displayInfo(movieDetails){
    cardContainer.innerHTML = `<div class="card mb-4" style="width: 50rem; margin: auto;">
    <div class="card-body">
    <img class="card-img-top" src="https://cdn.europosters.eu/image/750/posters/star-wars-complete-saga-i19317.jpg" alt="Card image cap">
    
      <h4 class="card-title">${movieDetails.title}</h4>
      <h6 class="card-text">Episode: ${movieDetails.episode_id}</h6>
      <h6 class="card-text">Release Date: ${movieDetails.release_date}</h6>
      <h6 class="card-text">Director: ${movieDetails.director}</h6>
      <p class="card-text">${movieDetails.opening_crawl}</p>
      
    </div>
  </div>`;
  }

function startOver(){
  document.getElementById("movie-select").value = '';
  cardContainer.innerText = '';
  commentContainer.innerText = '';
  }

function commentPost(event) {
  event.preventDefault();
  const formInput = document.getElementById("form-input");
  const formText = formInput.value;
  commentContainer.innerHTML = `<div class="card mb-4" style="width: 50rem; margin: auto;">
    <div class="card-body">
      <p>${formText}</p>
    </div>
  </div>`;
  document.getElementById("form-input").value = '';
  // document.createElement("div")
  // document.commentContainer.append(`${formText}`)

console.log(div.textContent)
}

const numStars = 100;
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
  document.body.append(star);
}

function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}