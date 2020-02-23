class ObserverFactory {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	notifyObservers(event = '') {
		for (let obs of this.observers) {
			obs.next(event);
		}
	}
}

export default new ObserverFactory();
