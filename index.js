var genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

document.querySelector('.input-search').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      submit(e)
    }
  }


function submit(e) {
  var searchInput =  document.querySelector('.input-search').value

  var url = `https://api.themoviedb.org/3/search/movie?api_key=31120c140b2c4a915f29868640f1e17f&language=en-US&query=${searchInput}&page=1&include_adult=false`

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])

    var mydate = new Date(data.results[0].release_date);
    mydate = mydate.toDateString()
    mydate = mydate.split('').splice(4).join('')

    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;

    document.querySelector(".title").textContent = data.results[0].original_title

    document.querySelector(".overview").textContent = data.results[0].overview

    document.querySelector(".rating").textContent = `IMBD: ${data.results[0].vote_average} / 10`

    document.querySelector(".date").textContent = mydate

  });
}
