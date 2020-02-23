import obsFactory from './oberverFactory.js';
import picture from './picture.js';

function ScrollObserver() {
	document.documentElement.onwheel = init;

	function init(e) {
		const footerEl = document.getElementById('footer');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.05
		};

		//activite observer
		let observer = new IntersectionObserver(intercept, options);
		observer.observe(footerEl);
	}

	function intercept(entries, observer) {
		if (entries[0].isIntersecting) {
			//call loader
			obsFactory.notifyObservers('datarequest');
			// request more data
			picture();
		}
	}
}

export default new ScrollObserver();
