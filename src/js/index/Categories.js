function Categories(categories, component = "") {
	this.component = component;
	this.element = function() {
		categories.forEach(category => {
			this.categoryDesc = category.strCategoryDescription;
			this.categoryThumb = category.strCategoryThumb;
			this.category = category.strCategory;
			this.component += `<div class="d-inline-block w-50 me-4">
								<a href="categories.html?c=${this.category}" data-description="${this.categoryDesc}" class="text-decoration-none description">
									<div class="bg-success food-card bg-gradient p-3">
										<img src="${this.categoryThumb}" alt="" class="img-fluid py-5">
										<h5 class="text-white">${this.category}</h5>
									</div>
								</a>
								</div>`
			
		});
		
		return this.component;
	}	
}

export default Categories;