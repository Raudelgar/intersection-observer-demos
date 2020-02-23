class LoaderObserver {
	constructor() {
		this.body = document.body;
		this.loader = document.body.querySelector('.loader');
		this.root = document.getElementById('root');
	}

	next(event) {
		if (event === 'loadcompleted') {
			this._stopLoader();
		} else if (event === 'datarequest') {
			this._runLoader();
		}
	}
	_stopLoader() {
		if (!this.body.hasAttribute('load')) {
			this.body.setAttribute('load', '');
		}

		if (!this.root.hasAttribute('load')) {
			this.root.setAttribute('load', '');
		}

		if (this.root.hasAttribute('re-load')) {
			this.root.removeAttribute('re-load');
		}

		if (!this.loader.hasAttribute('load')) {
			this.loader.setAttribute('inactive', '');
		}
	}

	_runLoader() {
		this.root.setAttribute('re-load', '');

		if (this.loader.hasAttribute('inactive')) {
			this.loader.removeAttribute('inactive');
		}
	}
}

export default new LoaderObserver();
