function IngredientsThumb(ingredients) {
	this.ingredients = ingredients.strIngredient;
	this.renderElement = function () {
		return (
			`<div class="d-inline-block me-3 me-xxl-4">
				<div class="bg-light text-center p-2">
					<img src="https://www.themealdb.com/images/ingredients/${this.ingredients}.png" alt="" class="thumb-img">
				</div>
			</div>`
		);
	};
}

export default IngredientsThumb;
