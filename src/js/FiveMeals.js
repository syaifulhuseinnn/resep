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
						<img src="${this.mealThumb}" alt="" class="me-3" width="100px" height="100px">
						<div class="d-block align-self-start flex-grow-1">
							<h1 class="fw-bold lh-base">
								${this.meal}
								</br>
								<span class="fw-normal">${this.mealArea}</span>
								</br>
								<span class="fw-normal text-primary">${this.mealCategory}</span>
								</br>
							</h1>
						</div>
						<span class="text-end align-self-end fs-5">
							<i class="icon icon-love-fill text-success text-end"></i>
						</span>
					</div>
				</div>`
			)
		}
	});
	
}

export default FiveMeals;