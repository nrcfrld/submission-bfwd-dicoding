import css from "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
        <style>
            ${css}
            .navbar{
                background-color: #F26B3A;
            }

            .btn-contact{
                background-color: #fff;
                border: none;
                color: #333 !important;
                margin-top: -28px;
                line-height: 38px;
                border-radius: 0;
                margin-bottom: -28px;
            }

            .btn-contact:hover{
                background-color: #333;
                color: #fff !important;
            }

        </style>
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Enrico Feraldo K.</a>
                <a class="navbar-toggler btn btn-white" href="mailto:nrcfrld@gmail.com">
                Contact
                </a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link active btn btn-contact" href="mailto:nrcfrld@gmail.com">Contact<span class="sr-only">(current)</span></a>
                    </div>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define('nav-bar', NavBar);