function FiveMeals(meals) {
	meals.forEach(meal => {
		this.meal = meal.strMeal;
		this.mealThumb = meal.strMealThumb;
		this.mealArea = meal.strArea;
		this.mealCategory = meal.strCategory;
		this.element = function() {
			return (
				`<div id="item-1" class="d-inline-block me-5">
					<div class="d-flex justify-content-between">
						<img src="${this.mealThumb}" alt="" class="me-3" width="110px" height="110px">
						<div class="d-block align-self-start flex-grow-1">
							<h6>${this.meal}</h6>
							<h6 class="fw-normal">${this.mealArea}</h6>
							<h6 class="text-primary fw-normal"><a href="categories.html?c=${this.mealCategory}" class="text-decoration-none">${this.mealCategory}</a></h6>
						</div>
						<span class="text-end align-self-end fs-5">
							<span class="badge border border-light rounded-circle bg-light p-1"><i class='bx bx-heart text-center text-secondary fs-3' ></i></span>
						</span>
					</div>
				</div>`
			)
		}
	});
	
}

export default FiveMeals;