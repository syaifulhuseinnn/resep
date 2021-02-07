function Jumbotron(meals) {
  this.meal = meals.strMeal;
  this.mealThumb = meals.strMealThumb;
  this.mealArea = meals.strArea;
  this.renderElement = function () {
    return (
      `<div class="d-flex justify-content-between">
					<div class="bg-light p-2 me-2 flex-shrink-1">
						<img src="${this.mealThumb}" alt="" class="img-fluid" width="120px" height="120px">
					</div>
					<div class="w-50">
						<h4 class="fw-bold">${this.meal}</h4>
						<h6 class="fw-normal text-secondary">${this.mealArea} Food</h6>
					</div>
					<div class="align-self-end">
						<span class="badge border border-light rounded-circle bg-light p-1"><i class='bx bx-heart text-center text-secondary fs-3' ></i></span>
					</div>
				</div>`
    );
  };
}

export default Jumbotron;
