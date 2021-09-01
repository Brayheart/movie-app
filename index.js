var url = 'https://api.themoviedb.org/3/search/movie?api_key=31120c140b2c4a915f29868640f1e17f&language=en-US&query=fight%20club&page=1&include_adult=false'


fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));