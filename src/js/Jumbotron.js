function Jumbotron(meals) {
	meals.forEach(meal => {
		this.meal = meal.strMeal;
		this.mealThumb = meal.strMealThumb;
		this.mealArea = meal.strArea;
		this.element = function() {
			return (
				`<div class="d-flex justify-content-between">
						<img src="${this.mealThumb}" alt="" class="me-3 img-fluid" width="115px" height="115px">
						<div class="d-block align-self-start flex-grow-1">
							<h1 class="fw-bold display-4">${this.meal} </br><span class="fs-2 fw-normal">${this.mealArea} Food</span></h1>
						</div>
						<span class="text-end align-self-end fs-5">
							<i class="icon icon-love-stroke text-end text-secondary"></i>
						</span>
				</div>`
			);
		}
	})
}

export default Jumbotron;