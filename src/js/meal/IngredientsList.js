function IngredientsList(ingredients) {
	this.ingredient = ingredients.strIngredient;
	this.measure = ingredients.strMeasure;
	this.renderElement = function () {
		return (
			`<li>${this.measure} ${this.ingredient}</li>`
		);
	};
}

export default IngredientsList;
