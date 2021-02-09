function Meals(meals) {
	this.idMeal = meals.idMeal;
	this.meal = meals.strMeal;
	this.mealsThumb = meals.strMealThumb;
	this.renderElement = function () {
		return (
			`
			<div class="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
			<div class="d-flex flex-xxl-column flex-xl-column flex-lg-column flex-md-row flex-sm-row justify-content-sm-between justify-content-md-between food-card p-md-3 p-2">
					<a href="meal.html?i=${this.idMeal}" class="text-decoration-none text-dark"> 
						<div class="me-2 me-xxl-0 me-xl-0 me-lg-0 text-center">
							<img src="${this.mealsThumb}" alt="" class="meal-thumb-list img-fluid border border-5 border-light">
						</div>
					</a>
					<div class="d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex d-flex justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-between flex-md-grow-1 flex-sm-grow-1 flex-grow-1 py-xxl-3 py-xl-3 py-lg-3">
						<div class="flex-grow-1">
							<span class="d-xxl-inline-block d-xl-inline-block d-lg-inline-block text-truncate meal-title">
								<h6 class="title-meal">${this.meal}</h6>
							</span>
						</div>
						<div class="align-self-end">
							<span class="badge border border-light rounded-circle bg-light p-1 love"><i class='bx bx-heart text-center text-secondary fs-3'  data-id="${this.idMeal}"></i></span>
						</div>
					</div>
				</div>
			</div>`
		);
	};
}

export default Meals;
