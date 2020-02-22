import Container from './components/container.js';
import loadData from './components/loadData.js';

function render() {
	const root = document.getElementById('root');
	const containerEl = new Container(root);

	loadData();
}

render();
