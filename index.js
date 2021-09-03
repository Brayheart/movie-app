document.querySelector('form').onsubmit = submit

function submit(e) {
  e.preventDefault()
  console.log("here")
  console.log(e.target.children[0].value)

  var url = `https://api.themoviedb.org/3/search/movie?api_key=31120c140b2c4a915f29868640f1e17f&language=en-US&query=${e.target.children[0].value}&page=1&include_adult=false`

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])

    document.querySelector('.img-fluid').setAttribute('src', "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path)
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;

    document.querySelector('.card-title').textContent = data.results[0].original_title
    document.querySelector('.card-text').textContent = data.results[0].overview
    document.querySelector('.text-muted').textContent = "IMBD Rating: " + data.results[0].vote_average
  });
}

var url = 'https://api.themoviedb.org/3/search/movie?api_key=31120c140b2c4a915f29868640f1e17f&language=en-US&query=interstellar&page=1&include_adult=false'

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])

    document.querySelector('.img-fluid').setAttribute('src', "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path)
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;

    document.querySelector('.card-title').textContent = data.results[0].original_title
    document.querySelector('.card-text').textContent = data.results[0].overview
    document.querySelector('.text-muted').textContent = "IMBD Rating: " + data.results[0].vote_average
  });