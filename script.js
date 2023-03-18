const suggestBtn = document.getElementById("suggest-btn");
const foodName = document.getElementById("food-name");
const foodIngredients = document.getElementById("food-ingredients");
const foodRecipe = document.getElementById("food-recipe");
const foodDetails = document.getElementById("food-details");

suggestBtn.addEventListener("click", suggestFood);

function suggestFood() {

  fetch("foods.json")
    .then(response => response.json())
    .then(foods => {

      const randomIndex = Math.floor(Math.random() * foods.length);
      const food = foods[randomIndex];

      foodName.textContent = food.name;
      foodIngredients.innerHTML = "";
      food.ingredients.forEach(ingredient => {
        const liElement = document.createElement("li");
        liElement.textContent = ingredient;
        foodIngredients.appendChild(liElement);
      });
      foodRecipe.textContent = food.recipe;

      foodDetails.classList.remove("d-none");

    });
}


fetch("foods.json")
.then(response => response.json())
.then(foods => {
  const table = $('#data-table').DataTable({
    data: foods,
    columns: [
        { data: 'name' },
        { data: 'ingredients' },
    ]
    });
});