import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchEl extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector('#searchElement').value;
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            ${css}

            .btn-main{
                background-color: #F26B3A;
                color: #fff;
            }

            .btn-main:hover{
                background-color: #cf4f2f;
                color: #fff;
            }
        </style>

        <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="Search film, ex: one piece.." id="searchElement">
            <div class="input-group-append">
                <button class="btn btn-main" type="button" id="searchButtonElement">Search</button>
            </div>
        </div>
        `;

        this._shadowRoot.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-el', SearchEl);