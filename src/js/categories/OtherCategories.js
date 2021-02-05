function OtherCategories(category,background) {
	this.category = category.strCategory;
	this.categoryThumb = category.strCategoryThumb;
	this.renderElement = function() {
		return (
			`<div class="d-inline-block w-50 me-3">
				<div class="bg-success bg-gradient p-3">
					<img src="${this.categoryThumb}" alt="" class="img-fluid py-5">
					<h4 class="text-white">${this.category}</h4>
				</div>
			</div>`
		);
	}
}

export default OtherCategories;