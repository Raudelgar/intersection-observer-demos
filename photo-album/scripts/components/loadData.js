export default async function loadData() {
	const url = 'https://source.unsplash.com/random';

	let imageUrls = await getImages(url);

	console.log({ imageUrls, done: true });
	return { imageUrls, done: true };
}

async function* fetchingGenerator(url) {
	//load 12 images, but render only 6 at a time
	for (let i = 0; i < 12; i++) {
		//waiting 0.5sec between each fetch
		await new Promise(resolve => setTimeout(resolve, 500));
		yield fetch(url);
	}
}

async function getImages(url) {
	let promises = [];

	try {
		const generator = fetchingGenerator(url);
		for await (let p of generator) {
			promises.push(p);
		}

		let response = await Promise.all(promises);

		return response.map(res => {
			if (res.ok && res.status >= 200 && res.status < 300) {
				return res.url;
			}
		});
	} catch (error) {
		console.log('Error getting request from fetch', error);
	}
}
