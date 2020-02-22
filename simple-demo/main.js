import content from './content.js';

function requestData(initial = true) {
	const loader = document.body.querySelector('.loader');
	const welcome = document.body.querySelector('.welcome');
	const contentEl = document.getElementById('box');
	const shadow = document.body.querySelector('.hide-data');

	if (initial) {
		setTimeout(() => {
			content.loadData(contentEl);
			loader.hidden = !loader.hidden;
			shadow.hidden = !shadow.hidden;

			//chaging bg color
			document.body.setAttribute('load', '');
			//Transition on title
			welcome.style.display = 'block';
			contentEl.style.display = 'block';
			setTimeout(() => {
				welcome.style.opacity = '1';
				contentEl.style.opacity = '1';
			}, 50);

			//display the First 5 div's from content
		}, 3000);
	} else {
		content.loadData(contentEl);
	}
}

function loadMoreData(e) {
	console.log('onwheel event');
	const options = {
		root: null,
		rootMargin: '-90px 0px',
		threshold: 0.5
	};

	//activite observer
	let observer = new IntersectionObserver(fetching, options);

	//requesting more data
	requestData(false);

	document.body.querySelectorAll('.data').forEach(d => {
		console.log('observing divs');
		observer.observe(d);
	});
}

function fetching(entries, obs) {
	// console.log('fetching');
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log('itersepted');
			if (entry.target.classList.contains('inactive')) {
				entry.target.classList.remove('inactive');
			}
			// obs.unobserve(entry.target); //if you want to stop observing this element
		} else {
			console.log('it is out');
			entry.target.classList.add('inactive');
		}
	});
}

function render() {
	//Initial loading
	requestData();

	//observer in accion
	document.documentElement.addEventListener('wheel', loadMoreData);
}

render();
