function Categories(categories, component = "") {
	this.component = component;
	this.element = function() {
		categories.forEach(category => {
			this.categoryThumb = category.strCategoryThumb;
			this.category = category.strCategory;
			this.component += `<div id="item-1" class="d-inline-block me-5 w-50 banner-card">
							<div class="bg-white p-4">
								<div class="bg-light food-banner">
									<img src="${this.categoryThumb}" alt="" class="img-fluid">
								</div>
								<h1 class="mt-4 title-category">${this.category}</h1>
							</div>
						</div>`
			
		});
		
		return this.component;
	}	
}

export default Categories;