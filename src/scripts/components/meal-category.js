class MealCategory extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-header">
                            <p><strong>Kategori Makanan</strong></p>
                        </div>
                        <span id="mealCat" class="float-right text-center p-2"></span>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("meal-category", MealCategory);