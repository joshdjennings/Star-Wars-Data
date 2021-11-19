const cardContainer = document.querySelector('#card-container')

document.getElementById("movie-select").addEventListener("change", fetchEpisodeData);
document.getElementById("comment-btn").addEventListener("click", postComment)
// listen for submit event rather than a click event.preventDefault 


//fetch data from API and invoke displayInfo
function fetchEpisodeData(event) {
  fetch(`https://www.swapi.tech/api/films/${event.target.value}/`)
  .then(res => res.json())
  // .then(data => console.log(data.result.properties))
  .then(data => displayInfo(data.result.properties))
  } 
 
 function displayInfo(movieDetails){
  // console.log(`${movieDetails.title} ${movieDetails.episode_id} ${movieDetails.release_date} ${movieDetails.director}`)
  cardContainer.innerHTML = `<div class="card mb-4" style="width: 50rem; margin: auto;">
  <div class="card-body">
  <img class="card-img-top" src="https://cdn.europosters.eu/image/750/posters/star-wars-complete-saga-i19317.jpg" alt="Card image cap">
  
    <h5 class="card-title">${movieDetails.title}</h5>
    <p class="card-text">Episode: ${movieDetails.episode_id}</p>
    <p class="card-text">Release Date: ${movieDetails.release_date}</p>
    <p class="card-text">Director: ${movieDetails.director}</p>
    
  </div>
</div>`

  }

  //Yoda Refresh button 
document.getElementById("refresh-btn").addEventListener("click", startOver);
function startOver(){
  location.reload()
  // clear card later instead of refresh
  
}

// Comment section
function postComment() {
  const commentContainer = document.getElementById("comments-container");
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;

  if (commentText) {
    let comment = document.createElement('p');
    comment.innerText = commentText;
    commentContainer.append(comment);
    commentInput.value = "";
  }
}



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


