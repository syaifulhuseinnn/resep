function Service(path, query = "") {
	this.path = path;
	this.query = query;
	this.requestData = function() {
		const base_url = "https://www.themealdb.com/api/json/v1/1";
		
		return fetch(`${base_url}/${this.path}${this.query}`)
				.then(response => response.json())
				.then(result => result)
	}
}

export default Service;