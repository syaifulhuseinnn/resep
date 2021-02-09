function Ingridients(ingridients) {
  this.renderElement = function () {
    return (
      `<div class="d-flex justify-content-between my-4">
				<div>
					<h5>Bahan</h5>
				</div>
				<div>
					<small class="text-muted">7 bahan</small>
				</div>
			</div>
			<div class="overflow-auto text-nowrap my-4">
				<div id="item-1" class="d-inline-block me-3">
					<div class="bg-light text-center p-2">
						<img src="https://www.themealdb.com/images/ingredients/Lime.png" alt="" class="img-fluid" height="80px" width="80px">
					</div>
					<h6 class="py-2">Lime</h6>
				</div>
				<div id="item-1" class="d-inline-block me-3">
					<div class="bg-light text-center p-2">
						<img src="https://www.themealdb.com/images/ingredients/Salmon.png" alt="" class="img-fluid" height="80px" width="80px">
					</div>
					<h6 class="py-2">Salmon</h6>
				</div>
				<div id="item-1" class="d-inline-block me-3">
					<div class="bg-light text-center p-2">
						<img src="https://www.themealdb.com/images/ingredients/Olive%20oil.png" alt="" class="img-fluid" height="80px" width="80px">
					</div>
					<h6 class="py-2">Olive Oil</h6>
				</div>
			</div>
			<div class="my-4">
				<ul class="ps-3 list-unstyled" id="list-ingridients">
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>`
    );
  };
}

export default Ingridients;
