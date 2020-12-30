class DrinkCategory extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-header">
                            <p><strong>Kategori Minuman</strong></p>
                        </div>
                        <span class="float-right text-center p-2">
                            <button class="badge badge-success btn-drink-categories" id="Alcoholic">Alcoholic</button>
                            <button class="badge badge-success btn-drink-categories" id="Non_Alcoholic">Non Alcoholic</button>
                        </span>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("drink-category", DrinkCategory);