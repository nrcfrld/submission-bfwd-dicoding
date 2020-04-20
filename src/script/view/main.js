import '../../component/search-el.js';
import '../../component/movie-list.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-el");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(res => {
                if (res.Search) {
                    renderResult(res);
                } else {
                    fallbackResult(`${searchElement.value} not found`);
                }
            })
            .catch(message => fallbackResult(message));
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;