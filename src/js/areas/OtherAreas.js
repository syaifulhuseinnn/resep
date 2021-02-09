function OtherAreas(areas) {
	this.area = areas.strArea;
	this.renderElement = function () {
		return (
			`<div class="d-inline-block me-4">
				<a href="areas.html?a=${this.area}" class="text-decoration-none description">
					<div class="bg-light food-card bg-gradient text-center p-3">
						<img src="./src/images/flags/${this.area}.svg" alt="" class="py-4 mx-auto area-img">
						<h5 class="text-dark text-start">${this.area}</h5>
					</div>
				</a>
			</div>`
		);
	};
}

export default OtherAreas;
