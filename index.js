const cardContainer = document.querySelector('#card-container')

document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);
document.getElementById("refresh-btn").addEventListener("click", startOver);
document.getElementById("comment-btn").addEventListener("click", postComment)
// listen for submit event with event.preventDefault, rather than a click


//fetch data from API and invoke displayInfo
function fetchEpisodeData(event) {
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  // .then(data => console.log(data))
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
  </div>`
  }

//Yoda clear card button 
function startOver(){
  cardContainer.innerText = ``
  }

// Comment section
function postComment(event) {
  const commentContainer = document.getElementById("comments-container");
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;
  // event.preventDefault();

  if (commentText) {
    let comment = document.createElement('p');
    comment.innerText = commentText;
    commentContainer.append(comment);
    commentInput.value = "";
  }
}

function logSubmit(event) {
  const formInput = document.getElementById("form-input");
  const formText = formInput.value;
  if (formText) {
    log.textContent = `${formText}`;
    event.preventDefault();
  }
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}