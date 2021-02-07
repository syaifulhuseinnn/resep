import Service from "../misc/Service.js";
import Meals from "./Meals.js";
import OtherCategories from "./OtherCategories.js";

const main = () => {
  const query = window.location.search;
  const head_title = document.querySelector("#head-title");
  const populer = document.querySelector("#populer");
  const list_categories = document.querySelector("#others-categories");
  const other_meals = document.querySelector("#other-foods");

  function getNav() {
	  const title = query.replace("?c=", "");
	  head_title.innerHTML = title;
  }

  function getMeals() {
    const path = "filter.php";
    const service = new Service(path, query);
    const request = service.requestData();
    let populer_element = "";
    let other_meals_element = "";

    request.then((result) => {
      const { meals } = result;
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
    });
  }

  async function getOthersCategories() {
    const path = "categories.php";
    const service = new Service(path);
    const request = service.requestData();
    let other_categories_element = "";
    const background = [
      "#f2a154", "#e97878",
      "#845ec2", "#ee99a0",
      "#1687a7", "#5eaaa8",
      "#c1a1d3", "#f2a154",
      "#e97878", "#845ec2",
      "#ee99a0", "#1687a7",
      "#5eaaa8", "#c1a1d3"];

    await request.then((result) => {
      const { categories } = result;
      categories.forEach((category) => {
        const other_categories = new OtherCategories(category, background);
        other_categories_element += other_categories.renderElement();
        list_categories.innerHTML = other_categories_element;
      });
    });

    const classCategory = document.querySelectorAll(".category");
    for (let i = 0; i < classCategory.length; i += 1) {
      classCategory[i].classList.remove("bg-success");
      classCategory[i].style.backgroundColor = background[i];
    }
  }

  getNav();
  getMeals();
  getOthersCategories();
};

export default main;
