function Categories(categories) {
  this.categoryThumb = categories.strCategoryThumb;
  this.category = categories.strCategory;
  this.renderElement = function () {
    return (
      `<div class="d-inline-block w-50 me-4">
			<a href="categories.html?c=${this.category}" class="text-decoration-none description">
				<div class="bg-success food-card bg-gradient category p-3">
					<img src="${this.categoryThumb}" alt="" class="img-fluid py-5">
					<h5 class="text-white">${this.category}</h5>
				</div>
			</a>
		</div>`
    );
  };
}

export default Categories;
