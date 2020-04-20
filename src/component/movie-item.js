import css from "bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            ${css}

            .card>img{
                height: 300px;
                object-fit: cover;
            }

            .card:hover{
                cursor: pointer;
            }
        </style>
        <div class="card">
            <img src="${this._movie.Poster}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">${this._movie.Title}</h6>
                <p class="card-text">${this._movie.Year}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);