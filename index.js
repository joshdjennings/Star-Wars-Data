const cardContainer = document.querySelector('#card-container')
//Event Listener 1 - hit a button and Fetches from Star Wars API https://www.swapi.tech/api
// These are the fetch requests for the "FILMS" dropdown menu
document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);
document.getElementById("comment-btn").addEventListener("click", postComment)

function postComment() {
  const commentContainer = document.getElementById("comments-container");
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;

  if (commentText) {
    let comment = document.createElement('p');
    comment.innerHTML = commentText;
    commentContainer.append(comment);
    commentInput.value = "";
  }
}

function fetchEpisodeData(event) {
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  .then(data => displayInfo(data.result.properties)
  
  )}
 //displayInfo function

function displayInfo(movieDetails){
  cardContainer.innerHTML =  ""
  cardContainer.innerHTML = `<div class="card mb-4" style="width: 18rem; margin: auto;">
  <div class="card-body">
    <h5 class="card-title">${movieDetails.title}</h5>
    <p class="card-text">Episode: ${movieDetails.episode_id}</p>
    <p class="card-text">Release Date: ${movieDetails.release_date}</p>
    <p class="card-text">Director: ${movieDetails.director}</p>
  </div>
</div>`
  // card.innerHTML = `<h4>Title: ${movieDetails.title}</h4>
  // <h4>Episode: ${movieDetails.episode_id}</h4>
  // <h4>Release Date: ${movieDetails.release_date}</h4>
  // <h4>Director: ${movieDetails.director}</h4>`;
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