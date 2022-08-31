
const MealsSite= (search) => {
            const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => Displayed(data.meals))
}


const Displayed=(Mealdata) => {
    const getElement=document.getElementById('meals-id')
    getElement.innerText='';
    Mealdata.forEach(meal => {
        const mealDiv =document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
              </div>

        `;
        getElement.appendChild(mealDiv)
        
    });
}




const searchMeals = () =>{

    const field =document.getElementById('input-field');
    const inputValue=field.value;
    MealsSite(inputValue);
    field.value="";


}

// MealsSite('meat');