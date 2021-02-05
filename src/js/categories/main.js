import Service from "../misc/Service.js";
import Meals from "./Meals.js";
import Description from './Description.js';

const main = () => {
	
	const query = window.location.search;
	const head_title = document.querySelector("#head-title");
	const populer = document.querySelector("#populer");
	const others_categories = document.querySelector("#others-categories");
	const other_meals = document.querySelector("#other-foods");
	const title_populer = document.querySelector("#title-populer");
	const title_category = document.querySelector("#title-category");

	function getHeader() {
		head_title.innerHTML = query.replace("?c=", "");
	}

	function getMeals(query) {
		const path = "filter.php";
		const service = new Service(path, query)
		const request = service.requestData();
		let populer_element = "";
		let other_meals_element = "";

		request.then(result => {
			const meals = result.meals;
			for (let i = 0; i < 3; i++) {
				const populerMeals = new Meals(meals[i]);
				populer_element += populerMeals.renderElement();
				populer.innerHTML = populer_element;
			}

			for (let i = 3; i < meals.length; i++) {
				const otherMeals = new Meals(meals[i]);
				other_meals_element += otherMeals.renderElement();
				other_meals.innerHTML = other_meals_element;
			}

			title_populer.innerHTML = "Populer";
			title_category.innerHTML = "Kategori";
		});
	}

	getHeader();
	getMeals(query);
}

export default main;