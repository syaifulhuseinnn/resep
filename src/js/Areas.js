function Areas(areas, component = "") {
	this.component = component;
	this.element = function() {
		areas.forEach(area => {
			this.area = area.strArea;
			this.component += `<div id="item-1" class="d-inline-block me-5 w-50 banner-card">
									<div class="bg-white p-4">
										<div class="bg-light banner">
											<img src="./src/images/flags/${this.area}.svg" alt="" class="img-fluid px-3">
										</div>
										<h1 class="mt-4 title-category">${this.area}</h1>
									</div>
								</div>`
			
		});
		
		return this.component;
	}	
}

export default Areas;