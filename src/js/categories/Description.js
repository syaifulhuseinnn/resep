function Description(description) {
	this.description = description;
	this.renderElement = function() {
		return (
			`<div class="bg-secondary p-2">
				<small class="text-white"><i class='bx bxs-quote-alt-left text-dark'></i> ${this.description}.</small>
			</div>`
		);
	}
}

export default Description;