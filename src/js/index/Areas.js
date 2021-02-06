function Areas(areas, component = "") {
	this.component = component;
	this.element = function() {
		areas.forEach(area => {
			this.area = area.strArea;
			this.component += `<div class="d-inline-block w-50 me-4">
									<a href="areas.html?a=${this.area}" class="text-decoration-none description">
										<div class="bg-light food-card bg-gradient p-3">
											<img src="./src/images/flags/${this.area}.svg" alt="" class="img-fluid py-4">
											<h5 class="text-dark">${this.area}</h5>
										</div>
									</a>
								</div>`
			
		});
		
		return this.component;
	}	
}

export default Areas;