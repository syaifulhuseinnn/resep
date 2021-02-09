function Head(meal) {
	this.mealThumb = meal.strMealThumb;
	this.meal = meal.strMeal;
	this.mealArea = meal.strArea;
	this.mealCategory = meal.strCategory;
	this.mealTags = meal.strTags;
	this.mealYoutube = meal.strYoutube;
	this.renderElement = function () {
		return (
			`<img src="${this.mealThumb}" alt="" height="200px" width="200px" class="img-fluid mx-auto d-block border border-5 border-light">
			<div class="my-4" id="title">
				<h4 class="text-center">${this.meal}</h4>
				<h6 class="text-center text-muted fw-normal"><a href="areas.html?a=${this.mealArea}" class="text-decoration-none text-muted">${this.mealArea} Food</a></h6>
				<h6 class="text-center text-primary fw-normal"><a href="categories.html?c=${this.mealCategory}" class="text-decoration-none">${this.mealCategory}</a></h6>
				<div class="text-center">
					<small class="text-muted">
						Tags: ${this.mealTags}
					</small>
				</div>
			</div>
			<div class="bg-white food-card my-4" id="tutorial">
				<a href="${this.mealYoutube}" target="_blank" class="text-decoration-none">
					<div class="d-flex justify-content-between align-items-center py-2 px-3">
						<div class="align-self-center">
							<i class='bx bxl-youtube bx-md' style='color:#ff0102'></i>
						</div>
						<div class="flex-grow-1 mx-3">
							<h6 class="text-start text-muted">Lihat tutorial</h6>
						</div>
						<div class="align-self-center">
							<i class='bx bxs-chevron-right fs-4 text-success'></i>
						</div>
					</div>
				</a>
			</div>`
		);
	};
}

export default Head;
