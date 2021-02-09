function Meals(meals) {
  this.idMeal = meals.idMeal;
  this.meal = meals.strMeal;
  this.mealsThumb = meals.strMealThumb;
  this.renderElement = function () {
    return (
      `
	  <a href="meal.html?i=${this.idMeal}" class="text-decoration-none text-dark"> 
	  	<div class="col-12">
				<div class="food-card p-2">
					<div class="d-flex justify-content-between">
						<div class="bg-light p-2 me-2 flex-shrink-1">
							<img src="${this.mealsThumb}" alt="" class="img-fluid" width="120px" height="120px">
						</div>
						<div class="w-50">
							<h6>${this.meal}</h6>
						</div>
						<div class="align-self-end">
							<span class="badge border border-light rounded-circle bg-light p-1"><i class='bx bx-heart text-center text-secondary fs-3' ></i></span>
						</div>
					</div>
				</div>
			</div>
		</a>`
    );
  };
}

export default Meals;
