const cardContainer = document.querySelector('#card-container')

document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);
document.getElementById("comment-btn").addEventListener("click", postComment)

//Yoda Refresh button 
document.getElementById("refresh-btn").addEventListener("click", startOver);
function startOver(){
  location.reload()
}

function fetchEpisodeData(event) {
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  .then(data => displayInfo(data.result.properties)
  
  )}
 
  //displayInfo function
function displayInfo(movieDetails){
  // cardContainer.innerHTML =  "";
  cardContainer.innerHTML = `<div class="card mb-4" style="width: 18rem; margin: auto;">
  <div class="card-body">
    <h5 class="card-title">${movieDetails.title}</h5>
    <p class="card-text">Episode: ${movieDetails.episode_id}</p>
    <p class="card-text">Release Date: ${movieDetails.release_date}</p>
    <p class="card-text">Director: ${movieDetails.director}</p>
  </div>
</div>`

  }
// Comment section
function postComment() {
  const commentContainer = document.getElementById("comments-container");
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;

  if (commentText) {
    let comment = document.createElement('p');
    comment.innerHTML = commentText;
    commentContainer.innerHTML = "";
    commentContainer.append(comment);
    commentInput.value = "";
  }
}


