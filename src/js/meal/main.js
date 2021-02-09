import Service from "../misc/Service.js";
import Head from "./Head.js";
import IngredientsThumb from "./IngredientsThumb.js";
import IngredientsList from "./IngredientsList.js";
import OtherMeals from "./OtherMeals.js";

const main = () => {
	const query = window.location.search;
	const divHead = document.querySelector("#head");
	const divIngridientsThumb = document.querySelector("#ingredients-thumb");
	const divIngridientsList = document.querySelector("#list-ingridients");
	const divNumberIngredients = document.querySelector("#number-ingredients");
	const divInstructions = document.querySelector("#instructions");
	const divOtherMeals = document.querySelector("#others-meals");

	function getIngredients() {
		const path = "lookup.php";
		const id = query;
		const request = requestData(path, id);
		request.then((results) => {
			renderHead(results.meals);
	  		renderIngridientsThumb(results.meals[0]);
	  		renderIngridientsList(results.meals[0]);
	  		renderInstructions(results.meals[0]);
		});
	}

	function getOtherMeals() {
		const fiveMealsInLocalStorage = getLocalStorage("five-meals");

		renderOtherMeals(fiveMealsInLocalStorage.results);
	}

	function renderHead(data) {
		const titleTab = document.querySelector("title");
		const coverMeal = document.querySelector("#cover-meal");
		let headElement = "";
		data.forEach((meal) => {
			titleTab.innerHTML = `${meal.strMeal}, ${meal.strArea} Food`;
			coverMeal.style.backgroundImage = `url("${meal.strMealThumb}")`;
			const HEAD = new Head(meal);
			headElement += HEAD.renderElement();
			divHead.innerHTML = headElement;
	  });
	}

	function renderIngridientsThumb(data) {
		let ingredientsThumbElement = "";
		const ingredients = restructureIngredients(data);
		divNumberIngredients.innerHTML = ingredients.length;
		ingredients.forEach((ingredient) => {
			const INGREDIENTS_THUMB = new IngredientsThumb(ingredient);
			ingredientsThumbElement += INGREDIENTS_THUMB.renderElement();
			divIngridientsThumb.innerHTML = ingredientsThumbElement;
		});
	}

	function renderIngridientsList(data) {
		let listElement = "";
		const ingredients = restructureIngredients(data);
		ingredients.forEach((ingredient) => {
			const INGREDIENTS_LIST = new IngredientsList(ingredient);
			listElement += INGREDIENTS_LIST.renderElement();
			divIngridientsList.innerHTML = listElement;
		});
	}

	function renderInstructions(data) {
		divInstructions.innerHTML = data.strInstructions;
	}

	function renderOtherMeals(data) {
		let otherMealsElement = "";
		data.forEach((meal) => {
		  const OTHER_MEALS = new OtherMeals(meal);
		  otherMealsElement += OTHER_MEALS.renderElement();
		});
		divOtherMeals.innerHTML = otherMealsElement;
	  }

	function restructureIngredients(data) {
		const objectIngredients = {};
		const arrayIngredients = [];
		for (let i = 1; i < 21; i += 1) {
			if (data[`strIngredient${i}`] !== null && data[`strIngredient${i}`] !== "") {
				const strIngredient = data[`strIngredient${i}`];
				const strMeasure = data[`strMeasure${i}`];
				const ingridientsObject = {};

				ingridientsObject.strIngridient = strIngredient;
				ingridientsObject.strMeasure = strMeasure;
				arrayIngredients.push({ strIngredient, strMeasure });
			}
		}
		return (objectIngredients.ingridients = arrayIngredients);
	}

	function requestData(path, id) {
		const SERVICE = new Service(path, id);
		return SERVICE.requestData();
	}

	function getLocalStorage(key) {
		const data = localStorage.getItem(key);
		return JSON.parse(data);
	}

	getIngredients();
	getOtherMeals();
};

export default main;
