import Service from "../misc/Service.js";
import Meals from "./Meals.js";
import Description from './Description.js';
import OtherCategories from './OtherCategories.js';

const main = () => {
	
	const query = window.location.search;
	const head_title = document.querySelector("#head-title");
	const populer = document.querySelector("#populer");
	const list_categories = document.querySelector("#others-categories");
	const other_meals = document.querySelector("#other-foods");
	const title_populer = document.querySelector("#title-populer");
	const title_category = document.querySelector("#title-category");
	const detail_description = document.querySelector("#detail-description");

	function getHeader() {
		head_title.innerHTML = query.replace("?c=", "");
		const get_description = sessionStorage.getItem("description");
		const split_description = get_description.split(".");
		const description = new Description(split_description[0]);
		const description_element = description.renderElement();
		detail_description.innerHTML = description_element;
	}

	function getMeals() {
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

	function getOthersCategories() {
		const path = "categories.php";
		const service = new Service(path);
		const request = service.requestData();
		let other_categories_element = "";
		const background = ["bg-success", "bg-danger", "bg-warning", "bg-info", "bg-primary"];
		
		request.then(result => {
			const categories = result.categories;
			categories.forEach(category => {
				const other_categories = new OtherCategories(category, background);
				other_categories_element += other_categories.renderElement();
				list_categories.innerHTML = other_categories_element;
			});
		})
	}

	getHeader();
	getMeals();
	getOthersCategories();
}

export default main;