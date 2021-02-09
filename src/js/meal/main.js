import Service from "../misc/Service.js";
import Head from "./Head.js";
import Ingridients from "./Ingridients.js";

const main = () => {
  const query = window.location.search;
  const divHead = document.querySelector("#head");
  const divIngridients = document.querySelector("#ingridients");

  function getHead() {
    const path = "lookup.php";
    const id = query;
    const request = requestData(path, id);
    request.then((results) => {
      renderHead(results.meals);
	  renderIngridients(results.meals[0]);
    });
  }

  function getIngridients() {

  }

  function getOthersMeals() {

  }

  function renderHead(data) {
	  const coverMeal = document.querySelector("#cover-meal");
	  let headElement = "";
	  data.forEach((meal) => {
		  coverMeal.style.backgroundImage = `url("${meal.strMealThumb}")`;
		  const HEAD = new Head(meal);
		  headElement += HEAD.renderElement();
		  divHead.innerHTML = headElement;
	  });
  }

  function renderIngridients(data) {
	  console.log(data);
	  const ingridientsElement = "";
	  let tempIngridients = {};
	  const x = [];
	  for (let i = 1; i < 21; i += 1) {
      const ingridients = `strIngredient${i}`;
      const val = _.get(data, ingridients);
      if (val !== null && val !== "") {
		  x.push(val);
        tempIngridients = { aaa: [x] };
      }
    }
    console.log(tempIngridients);
  }

  function requestData(path, id) {
    const SERVICE = new Service(path, id);
    return SERVICE.requestData();
  }

  getHead();
};

export default main;
