class Content {
	constructor() {
		this.element = document.createElement('div');
		this.element.className = 'content';
		this.element.setAttribute('id', 'box');
		document.body.appendChild(this.element);
	}

	loadData(elem) {
		console.log('Loading data and sending by 5');
		const data = [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, consequatur?',
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, voluptate tempore? Esse ullam facere architecto tenetur delectus quas, dolore voluptatem assumenda possimus rem pariatur. Sed doloribus excepturi eos minus tenetur.',
			'Lorem ipsum dolor sit amet consectetur adipisicing.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab numquam explicabo laboriosam eius ea?',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem quod fugiat odio quis, quasi, quam temporibus porro quae, atque aut?'
		];
		for (let j = 0; j < data.length; j++) {
			let index = Math.floor(Math.random() * data.length);
			let divEl = document.createElement('div');
			divEl.className = 'data';
			let p = document.createElement('p');
			p.textContent = data[index];

			divEl.appendChild(p);
			elem.appendChild(divEl);
		}
	}
}

export default new Content();
