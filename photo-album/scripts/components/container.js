export default class Container {
	constructor(props) {
		this.elem = document.createElement('div');
		this.elem.setAttribute('id', 'main');
		this.elem.className = 'container';
		props.appendChild(this.elem);
	}

	addChilds(child) {
		const main = document.getElementById('main');
		main.appendChild(child);
	}
}
