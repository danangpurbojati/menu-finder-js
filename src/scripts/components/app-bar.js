class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
            <div class="container">
                <h2><a class="navbar-brand" href="#">RestoJs</a></h2>          
            </div>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);