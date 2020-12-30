class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="input-group">
                                <input id="searchInput" type="text" class="form-control" placeholder="Pencarian">
                                <div class="input-group-append">
                                    <button id="searchMealButton" class="btn btn-primary">Cari Makanan</button>
                                    <button id="searchDrinkButton" class="btn btn-success">Cari Minuman</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("search-bar", SearchBar);