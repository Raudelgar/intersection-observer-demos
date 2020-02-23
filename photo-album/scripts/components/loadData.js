import { secret } from '../../../env.js'; //this souldn't be done here, due security risks
import storage from './storage.js';

export default async function loadData() {
	const url = new URL('https://api.unsplash.com/search/photos');
	url.searchParams.append(secret.key, secret.val);
	url.searchParams.append('page', storage.getPage());
	url.searchParams.append('query', 'animal');

	try {
		let response = await fetch(url);
		let data = await response.json();

		//transforming data
		return data.results.map(d => {
			return {
				title: d.alt_description,
				desc: d.description,
				url: d.urls.full
			};
		});
	} catch (error) {
		console.log('Error loading data', error);
	}
}

//setcookie('cross-site-cookie', 'name', ['samesite' => 'None', 'secure' => true]);
