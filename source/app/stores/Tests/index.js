import { extendObservable, observable, action, computed } from 'mobx';
import nanoid from 'nanoid';

// TODO: Create modx store generator.
export default class Tests {
	@observable tests = [];

	@computed get testCount() {
		return this.tests.length;
	}

	@action addTest = () => {
		this.tests.push({ type: 'mouse' });
	}
}
