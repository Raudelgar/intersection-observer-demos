import loadData from './loadData.js';
import obsFactory from './oberverFactory.js';

export default async function picture() {
	const parentEl = document.getElementById('main'); //parent
	let imagePromises = [];

	function imageLoaded() {
		imagePromises.push(Promise.resolve(true));
	}

	try {
		const data = await loadData();

		for (let d of data) {
			//childs
			const divEl = document.createElement('div');
			divEl.className = 'box';
			const imgEl = document.createElement('img');
			const tagEl = document.createElement('div');
			const titleEl = document.createElement('p');
			titleEl.className = 'pic-name';
			const descriptionEl = document.createElement('p');
			descriptionEl.className = 'pic-desc';

			//verifying when all images load
			imgEl.onload = imageLoaded;

			imgEl.src = d.url; //image url
			titleEl.textContent = d.title; //image title
			descriptionEl.textContent = d.desc; //image description

			//appending to inner div
			tagEl.appendChild(titleEl);
			tagEl.appendChild(descriptionEl);
			//append to outer div
			divEl.appendChild(imgEl);
			divEl.appendChild(tagEl);

			//apendd to main container
			parentEl.appendChild(divEl);
		}

		Promise.all(imagePromises).then(async () => {
			//add some time before completly load
			await new Promise(resolve => setTimeout(resolve, 1500));
			obsFactory.notifyObservers('loadcompleted');
		});
		// obsFactory.notifyObservers('loadcompleted');
	} catch (error) {
		console.log('Error constructing childs elements from #main', error);
	}
}
