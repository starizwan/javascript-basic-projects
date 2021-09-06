const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const appTitle = document.querySelector('#appTitle');

getMovie(APIURL);

async function getMovie(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log(responseData);

    responseData.results.forEach(movie => {
        const { poster_path, title, vote_average, overview } = movie


        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');
        movieEL.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}" 
                alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getMovieByRate(vote_average)}">${vote_average}</span>
                <div class="overview">
                <h4>Overview</h4>
                ${overview}
                </div>
            </div>
        `

        main.appendChild(movieEL);
    });

    console.log(responseData);
}

function getMovieByRate(vote_average) {
    if (vote_average >= 8) {
        return 'green';
    } else if (vote_average >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

appTitle.addEventListener('click', () => {
    location.reload();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    main.innerHTML = ''

    if (searchTerm) {
        getMovie(SEARCHAPI + searchTerm);
    }
})