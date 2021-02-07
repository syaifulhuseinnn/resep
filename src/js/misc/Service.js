function Service(path, query = "") {
  this.path = path;
  this.query = query;
  this.requestData = function () {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    return fetch(`${baseUrl}/${this.path}${this.query}`)
      .then((response) => response.json())
      .then((result) => result);
  };
}

export default Service;
