import Container from './components/container.js';
import picture from './components/picture.js';
import obsFactory from './components/oberverFactory.js';
import loaderObserver from './components/loaderObserver.js';
import scrollObserver from './components/scrollObserver.js';

function render() {
	const root = document.getElementById('root');
	const containerEl = new Container(root);

	obsFactory.subscribe(loaderObserver); //observers

	picture(); //initial request
}

render();
