import Jumbotron from "./Jumbotron.js";
import FiveMeals from "./FiveMeals.js";

const main = () => {
	const jumbotron = document.querySelector("#jumbotron");
	const five_meals = document.querySelector("#five-meals");

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
			request(section).then(element => five_meals.innerHTML = element);
		}
	}

	function getCategories() {

	}

	function getAreas() {
		
	}
	
	async function request(section) {
		const baseUrl = "https://www.themealdb.com/api/json/v1/1";
		const today_is = { date: getTodayDate() };
		const fiveMeals = new Array();
		let data = "";

		switch (section) {
			case "favorite":	
				await fetch(`${baseUrl}/random.php`)
					.then(response => response.json())
					.then(result => {
						const renderElement = new Jumbotron(result.meals);
						data = renderElement.element();

						localStorage.setItem("favorite", JSON.stringify({...result,...today_is}));
					});

				return data;

			case "five meals":
				for(let i = 0; i < 5; i++) {
					await fetch(`${baseUrl}/random.php`)
						.then(response => response.json())
						.then(result => {
							const renderElement = new FiveMeals(result.meals);
							data += renderElement.element();
							
							fiveMeals.push(...result.meals);
							localStorage.setItem("five-meals", JSON.stringify({fiveMeals,...today_is}));
						});
				}

				return data;
		}
	}

	getFavoriteMeal();
	getFiveMeals();
}

export default main;