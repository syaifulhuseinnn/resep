function IngredientsThumb(ingredients) {
	this.ingredients = ingredients.strIngredient;
	this.renderElement = function () {
		return (
			`<div class="d-inline-block me-3">
				<div class="bg-light text-center p-2">
					<img src="https://www.themealdb.com/images/ingredients/${this.ingredients}.png" alt="" class="img-fluid" height="100px" width="100px">
				</div>
			</div>`
		);
	};
}

export default IngredientsThumb;
