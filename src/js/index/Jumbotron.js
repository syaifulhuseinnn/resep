function Jumbotron(meals) {
	this.idMeal = meals.idMeal;
	this.meal = meals.strMeal;
	this.mealThumb = meals.strMealThumb;
	this.mealArea = meals.strArea;
	this.renderElement = function () {
		return (
			`
	  	<a href="meal.html?i=${this.idMeal}" class="text-decoration-none text-dark">
			<div class="d-flex justify-content-between">
				<div class="bg-light p-2 me-2 flex-shrink-1">
					<img src="${this.mealThumb}" alt="" class="img-fluid" width="120px" height="120px">
				</div>
				<div class="w-50">
					<h4 class="fw-bold">${this.meal}</h4>
					<h6 class="fw-normal text-secondary"><a href="areas.html?a=${this.mealArea}" class="text-decoration-none text-secondary">${this.mealArea} Food</a></h6>
				</div>
				<div class="align-self-end">
					<span class="badge border border-light rounded-circle bg-light p-1"><i class='bx bx-heart text-center text-secondary fs-3' ></i></span>
				</div>
			</div>
		</a>
		`
		);
	};
}

export default Jumbotron;
