function OtherCategories(category) {
	this.category = category.strCategory;
	this.categoryThumb = category.strCategoryThumb;
	this.renderElement = function () {
		return (
			`<div class="d-inline-block me-4">
	  		<a href="categories.html?c=${this.category}" class="text-decoration-none description">
				<div class="bg-success bg-gradient category p-3">
					<img src="${this.categoryThumb}" alt="" class="meal-thumb-img py-5">
					<h4 class="text-white">${this.category}</h4>
				</div>
			</a>
		</div>`
		);
	};
}

export default OtherCategories;
