// This is the link to the tmdb we are accessing it throught this api. Api key is different for everyone.

const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f62a1e3c8f3da2d67fa71f78636de82&page=1';

// THis image path is the root part to every single image of the movies

const imgPath = 'https://image.tmdb.org/t/p/w1280';

//This is used to search for a movie. so in this link in the query part will add the query we are searching for 
const searchApi = 'https://api.themoviedb.org/3/search/movie?&api_key=0f62a1e3c8f3da2d67fa71f78636de82&query=';



const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(apiLink);

function returnMovies(url) {
  fetch(url).then(res => res.json())
    .then(function(data) {

      const div_container = document.createElement('div');
      div_container.setAttribute('class', 'container');

      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');


      console.log(data.results);
      data.results.forEach(element => {

        const div_column = document.createElement('div');
        div_column.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const image = document.createElement('img');
        // image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        const title = document.createElement('h6');
        title.setAttribute('id', 'title');

        title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">reviews</a>`;


        image.src = imgPath + element.poster_path;
        // poster_path is a default variable for the element object

        div_card.appendChild(image);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        div_container.appendChild(div_row);


      });
      main.appendChild(div_container);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents from refershing everytime
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(searchApi + searchItem);
    search.value = "";
  }
});
