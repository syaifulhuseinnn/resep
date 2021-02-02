import Jumbotron from "./Jumbotron.js";
import FiveMeals from "./FiveMeals.js";
import Categories from "./Categories.js";
import Areas from "./Areas.js";

const main = () => {
	const jumbotron = document.querySelector("#jumbotron");
	const five_meals = document.querySelector("#five-meals");
	const categories = document.querySelector("#categories");
	const areas = document.querySelector("#areas");

	function getTodayDate() {
		return new Date().toLocaleString().split(',')[0]
	}

	function getFavoriteMeal() {
		const section = "favorite";
		const today_is = getTodayDate();
		const mealsInLocalStorage = localStorage.getItem("favorite");
		const mealsToJson = JSON.parse(mealsInLocalStorage);
		
		if (mealsToJson !== null && today_is === mealsToJson.date) {
			const renderElement = new Jumbotron(mealsToJson.meals);
			jumbotron.innerHTML = renderElement.element();
		}
		else {
			request(section).then(result => jumbotron.innerHTML = result);
		}
	}

	function getFiveMeals() {
		const section = "five meals";
		const today_is = getTodayDate();
		const mealsInLocalStorage = localStorage.getItem("five-meals");
		const mealsToJson = JSON.parse(mealsInLocalStorage);

		var d = new Date(2018, 11, 24);
		var e = d.toLocaleString();

		let element = "";

		if (mealsToJson !== null && today_is === mealsToJson.date) {
			for(let i = 0; i < mealsToJson.fiveMeals.length; i++) {		
				const renderElement = new FiveMeals([mealsToJson.fiveMeals[i]]);
				element += renderElement.element()
				five_meals.innerHTML = element;
			}
		}
		else {
			request(section).then(result => five_meals.innerHTML = result);
		}
	}

	function getCategories() {
		const section = "categories";
		request(section).then(result => categories.innerHTML = result);
	}

	function getAreas() {
		const section = "areas";
		request(section).then(result => areas.innerHTML = result);
	}
	
	async function request(section) {
		const baseUrl = "https://www.themealdb.com/api/json/v1/1";
		const today_is = { date: getTodayDate() };
		const fiveMeals = new Array();
		let component = "";

		switch (section) {
			case "favorite":	
				await fetch(`${baseUrl}/random.php`)
					.then(response => response.json())
					.then(result => {
						const renderElement = new Jumbotron(result.meals);
						component = renderElement.element();

						localStorage.setItem("favorite", JSON.stringify({...result,...today_is}));
					});

				return component;

			case "five meals":
				for(let i = 0; i < 5; i++) {
					await fetch(`${baseUrl}/random.php`)
						.then(response => response.json())
						.then(result => {
							const renderElement = new FiveMeals(result.meals);
							component += renderElement.element();
							
							fiveMeals.push(...result.meals);
							localStorage.setItem("five-meals", JSON.stringify({fiveMeals,...today_is}));
						});
				}

				return component;

			case "categories":
				await fetch(`${baseUrl}/categories.php`)
					.then(response => response.json())
					.then(result => {
						const renderElement = new Categories(result.categories);
						component = renderElement.element();
					});

				return component;

			case "areas":
				await fetch(`${baseUrl}/list.php?a=list`)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						const renderElement = new Areas(result.meals);
						component = renderElement.element();
					});

				return component;
		}
	}

	getFavoriteMeal();
	getFiveMeals();
	getCategories();
	getAreas();
}

export default main;