function Categories(categories, component = "") {
	this.component = component;
	this.element = function() {
		categories.forEach(category => {
			this.categoryDesc = category.strCategoryDescription;
			this.categoryThumb = category.strCategoryThumb;
			this.category = category.strCategory;
			this.component += `<div class="d-inline-block me-5 w-50 banner-card">
							<div class="bg-white p-4">
								<a href="categories.html?c=${this.category}" data-description="${this.categoryDesc}" class="text-decoration-none description">
									<div class="bg-light food-banner">
										<img src="${this.categoryThumb}" alt="" class="img-fluid">
									</div>
									<h1 class="mt-4 title-category text-dark">${this.category}</h1>
								</a>
							</div>
						</div>`
			
		});
		
		return this.component;
	}	
}

export default Categories;