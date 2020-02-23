class Storage {
	constructor() {
		this.page = 1; //default
		sessionStorage;
		sessionStorage.setItem('page', this.page);
	}

	getPage() {
		let pageNumber = sessionStorage.getItem('page');
		this.updatePage(pageNumber);

		return pageNumber;
	}

	updatePage(pageNumber) {
		let curr = Number(pageNumber);
		curr += 1;
		sessionStorage.setItem('page', curr);
	}
}

export default new Storage();
