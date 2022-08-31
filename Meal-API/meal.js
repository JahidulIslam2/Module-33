
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
            <div onclick="mealDetailsById(${meal.idMeal})"class="card">
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

const mealDetailsById =(mealId) => {
    // console.log(mealId)

    const urlCode =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(urlCode)

    fetch(urlCode)
    .then(response => response.json())
    .then(data => MealsDetail(data.meals[0]))

}

// MealsSite('meat');
const MealsDetail = (mealCode) =>{
    const getDelatilsCard=document.getElementById('Details-Card');
    getDelatilsCard.innerText=''
    const elementCreate =document.createElement('div');
    elementCreate.classList.add('card-div');
    elementCreate.innerHTML=`
    <img src="${mealCode.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
           <h5 class="card-title">${mealCode.strMeal}</h5>
           <p class="card-text">${mealCode.strInstructions.slice(0,200)}</p>
           <button type="button" class="btn btn-primary" data-bs-toggle="button">Details More</button>
        </div>
        `;
        getDelatilsCard.appendChild(elementCreate);
}