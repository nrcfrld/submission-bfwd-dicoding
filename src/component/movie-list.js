import css from "bootstrap/dist/css/bootstrap.min.css";
import './movie-item.js';

class MovieList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        ${css}
        
        .row{
            margin-top: -150px;
            padding-bottom: 2rem;
        }
        </style>
        <div class="row" id="results">
        <div class="col-12">
        </div>
        </div>
        `;

        const results = this._shadowRoot.querySelector('#results');
        this._movies.Search.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            movieItemElement.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mb-3');
            results.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this._shadowRoot.innerHTML = `
        <style>
        h3{
            font-weight: lighter;
            margin-top: -150px;
        }
        </style>
        <h3>${message}</h3>
        `;
    }
}

customElements.define("movie-list", MovieList);