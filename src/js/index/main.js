import Jumbotron from "./Jumbotron.js";
import FiveMeals from "./FiveMeals.js";
import Categories from "./Categories.js";
import Areas from "./Areas.js";
import Service from "../misc/Service.js";

const main = () => {
	const jumbotron = document.querySelector("#jumbotron");
	const divFiveMeals = document.querySelector("#five-meals");
	const divCategories = document.querySelector("#categories");
	const divAreas = document.querySelector("#areas");

	function getTodayDate() {
		return new Date().toLocaleString().split(",")[0];
	}

	function getFavoriteMeal() {
		const path = "random.php";
		const todayIs = getTodayDate();
		const favoriteMealsInLocalStorage = getLocalStorage("favorite");

		const d = new Date(2018, 11, 24);
		const e = d.toLocaleString();
		if (favoriteMealsInLocalStorage !== null && todayIs === favoriteMealsInLocalStorage.todayIs) {
			renderJumbotron(favoriteMealsInLocalStorage);
		} else {
			const request = requestData(path);
	  request.then((results) => {
		  renderJumbotron(results.meals[0]);
				setLocalStorage("favorite", JSON.stringify({ ...results.meals[0], todayIs }));
	  });
		}
	}

	async function getFiveMeals() {
		const path = "random.php";
		const todayIs = getTodayDate();
		const fiveMealsInLocalStorage = getLocalStorage("five-meals");

		const d = new Date(2018, 11, 24);
		const e = d.toLocaleString();

		if (fiveMealsInLocalStorage !== null && todayIs === fiveMealsInLocalStorage.todayIs) {
	  return new Promise((resolve, reject) => resolve(fiveMealsInLocalStorage.results));
		} else {
			const storeFiveMeals = [];
			const fiveMeals = [];
			for (let i = 0; i < 5; i += 1) {
				const request = requestData(path);
				storeFiveMeals.push(request);
			}
			const tempFiveMeals = await Promise.all(storeFiveMeals);
			for (let i = 0; i < tempFiveMeals.length; i += 1) {
				fiveMeals.push(tempFiveMeals[i].meals[0]);
			}
			return fiveMeals;
		}
	}

	async function getCategories() {
		const path = "categories.php";
		const request = requestData(path);
		const background = [
			"#f2a154", "#e97878",
			"#845ec2", "#ee99a0",
			"#1687a7", "#5eaaa8",
			"#c1a1d3", "#f2a154",
			"#e97878", "#845ec2",
			"#ee99a0", "#1687a7",
			"#5eaaa8", "#c1a1d3"];
		await request.then((results) => {
			renderCategories(results.categories);
		});
		const classCategory = document.querySelectorAll(".category");
		for (let i = 0; i < classCategory.length; i += 1) {
			classCategory[i].classList.remove("bg-success");
			classCategory[i].style.backgroundColor = background[i];
		}
	}

	function getAreas() {
	  const path = "list.php";
	  const query = "?a=list";
		const request = requestData(path, query);
		request.then((results) => {
			renderAreas(results.meals);
		});
	}

	function getLocalStorage(key) {
		const data = localStorage.getItem(key);
		return JSON.parse(data);
	}

	function setLocalStorage(key, data) {
		localStorage.setItem(key, data);
	}

	function requestData(path, query = "") {
	  const SERVICE = new Service(path, query);
	  return SERVICE.requestData();
	}

	function renderJumbotron(data) {
		let jumbotronElement = "";
		const JUMBOTRON = new Jumbotron(data);
		jumbotronElement = JUMBOTRON.renderElement();
		jumbotron.innerHTML = jumbotronElement;
	}

	function renderFiveMeals(data) {
		let fiveMealsElement = "";
		data.forEach((meal) => {
			const FIVEMEALS = new FiveMeals(meal);
			fiveMealsElement += FIVEMEALS.renderElement();
		});
		divFiveMeals.innerHTML = fiveMealsElement;
	}

	function renderCategories(data) {
		let categoriesElement = "";
		data.forEach((category) => {
			const CATEGORIES = new Categories(category);
			categoriesElement += CATEGORIES.renderElement();
			divCategories.innerHTML = categoriesElement;
		});
	}

	function renderAreas(data) {
		let areasElement = "";
		data.forEach((area) => {
			const AREAS = new Areas(area);
			areasElement += AREAS.renderElement();
			divAreas.innerHTML = areasElement;
		});
	}

	getFavoriteMeal();
	getFiveMeals().then((results) => {
		const todayIs = getTodayDate();
		setLocalStorage("five-meals", JSON.stringify({ results, todayIs }));
		renderFiveMeals(results);
	});
	getCategories();
	getAreas();
};

export default main;
