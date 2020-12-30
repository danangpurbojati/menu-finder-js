function main(){
    
    // Meal Categories (Beef, Seafood, etc)
    const mealCatURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(mealCatURL)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            mealCats(responseJson.categories);
        })
        .catch(error => {
            dataNotFound();
        });


    //Showing Meals by Category
    const mealbyCat = (category) => {

        let catUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

        fetch(catUrl)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                mealList(responseJson.meals);
            })
            .catch(error => {
                dataNotFound();
            });
    }


    // Showing Drinks by Category non alcoholic or alcoholic
    const drinkbyCat = (category) => {

        let catUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`;

        fetch(catUrl)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                searchDrinkCat(responseJson.drinks);
            })
            .catch(error => {
                dataNotFound();
            });
    }


    // Searching drinks by name
    const onDrinkButtonClicked = () => {

        let searhinput = searchElement.value;
        let catUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searhinput}`;

        fetch(catUrl)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                searchDrinkCat(responseJson.drinks);
            })
            .catch(error => {
                dataNotFound();
            });
    }


    // searching meals by name
    const onMealButtonClicked = () => {

        let searhinput = searchElement.value;
        let catUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searhinput}`;

        fetch(catUrl)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                mealList(responseJson.meals);
            })
            .catch(error => {
                dataNotFound();
            });
    }


    const dataNotFound = () => {
        const mealDetailList = document.querySelector("#mealDetails");
        mealDetailList.innerHTML = `
            <div class="col-lg-12>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Data Not Found</h5>
                    </div>
                </div> 
            </div>`;
    }

    // render meal category
    const mealCats = (array) => {

        const mealcat = document.querySelector("#mealCat");
        mealcat.innerHTML = "";

        array.forEach(element => {
            mealcat.innerHTML += `
                <button class="badge badge-primary btn-meal-categories" id="${element.strCategory}">${element.strCategory}</button>
            `;
        });

        const mealButtons = document.querySelectorAll(".btn-meal-categories");
        mealButtons.forEach(button => {
            button.addEventListener("click", event => {
                const categoryId = event.target.id;
                mealbyCat(categoryId);
            })
        })
    }


    // Render Meal List
    const mealList = (array) => {
        const mealDetailList = document.querySelector("#mealDetails");
        mealDetailList.innerHTML = "";

        array.forEach(element => {
            mealDetailList.innerHTML += `
                <div class="col-lg-4 col-sm-6">
                    <div class="card mb-3">
                        <img src="${element.strMealThumb}" alt="" class="card-img-top">
                        <div class="card-body" style="height: 180px">
                            <h5 class="card-title">${element.strMeal}</h5>
                            <a href="#" class="badge badge-primary"><i class="fas fa-tags"></i> Category Makanan</a>
                        </div>
                    </div> 
                </div>
            `;
        });
    }



    //KATEGORI MINUMAN
    const drinkButtons = document.querySelectorAll(".btn-drink-categories");
    drinkButtons.forEach(button => {
        button.addEventListener("click", event => {
            const categoryId = event.target.id;
            drinkbyCat(categoryId);
        })
    })


    // Render Drink List
    const searchDrinkCat = (array) => {
        const drinkDetailList = document.querySelector("#mealDetails");
        drinkDetailList.innerHTML = "";

        array.forEach(element => {
            drinkDetailList.innerHTML += `
                <div class="col-lg-4 col-sm-6">
                    <div class="card mb-3">
                        <img src="${element.strDrinkThumb}" alt="" class="card-img-top">
                        <div class="card-body" style="height: 180px">
                            <h5 class="card-title">${element.strDrink}</h5>
                            <a href="#" class="badge badge-success"><i class="fas fa-tags"></i> Category Minuman</a>
                        </div>
                    </div> 
                </div>
            `;
        });
    }


    //Search Button
    const searchElement = document.querySelector("#searchInput");
    const searchDrinkButton = document.querySelector("#searchDrinkButton");
    const searchmealButton = document.querySelector("#searcMealButton");
    const selectButton = document.querySelector("#selectButton");

    searchDrinkButton.addEventListener("click", onDrinkButtonClicked);
    searchMealButton.addEventListener("click", onMealButtonClicked);

}

export default main;