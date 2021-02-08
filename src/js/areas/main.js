import Service from "../misc/Service.js";
import Meals from "./Meals.js";
import OtherAreas from "./OtherAreas.js";

const main = () => {
  const query = window.location.search;
  const headTitle = document.querySelector("#head-title");
  const divPopuler = document.querySelector("#populer");
  const divOtherAreas = document.querySelector("#others-areas");
  const divOtherMeals = document.querySelector("#other-foods");

  function getNav() {
	  const title = query.replace("?a=", "");
	  headTitle.innerHTML = title;
  }

  function getMeals() {
    const path = "filter.php";
    const service = new Service(path, query);
    const request = service.requestData();

    request.then((results) => {
      renderMeals(results.meals);
    });
  }

  function getOthersAreas() {
    const path = "list.php";
    const queryArea = "?a=list";
    const service = new Service(path, queryArea);
    const request = service.requestData();

    request.then((results) => {
      renderOthersAreas(results.meals);
    });
  }

  function renderMeals(data) {
    let populerMealsElement = "";
    let otherMealsElement = "";
    for (let i = 0; i < 3; i += 1) {
      const populerMeals = new Meals(data[i]);
      populerMealsElement += populerMeals.renderElement();
      divPopuler.innerHTML = populerMealsElement;
    }

    for (let i = 3; i < data.length; i += 1) {
      const otherMeals = new Meals(data[i]);
      otherMealsElement += otherMeals.renderElement();
      divOtherMeals.innerHTML = otherMealsElement;
    }
  }

  function renderOthersAreas(data) {
    let otherCategoriesElement = "";
    const background = [
      "#f2a154", "#e97878",
      "#845ec2", "#ee99a0",
      "#1687a7", "#5eaaa8",
      "#c1a1d3", "#f2a154",
      "#e97878", "#845ec2",
      "#ee99a0", "#1687a7",
      "#5eaaa8", "#c1a1d3"];
    data.forEach((category) => {
      const OTHERAREAS = new OtherAreas(category);
      otherCategoriesElement += OTHERAREAS.renderElement();
      divOtherAreas.innerHTML = otherCategoriesElement;
    });
    const classCategory = document.querySelectorAll(".category");
    for (let i = 0; i < classCategory.length; i += 1) {
      classCategory[i].classList.remove("bg-success");
      classCategory[i].style.backgroundColor = background[i];
    }
  }

  getNav();
  getMeals();
  getOthersAreas();
};

export default main;
