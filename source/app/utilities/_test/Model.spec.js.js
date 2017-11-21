import Model from '../Model';

const STUB = 'STUB';

const observablesSTUB = jest.fn();
const staticsSTUB = jest.fn();

const actionsSTUB = {
	do(model) {
		return () => {
			return STUB;
		}
	}
}

const gettersSTUB = {
	getter(model) {
		return STUB;
	}
}

test('creates a Model', () => {
	// const result = Model({
	// 	observables: observablesSTUB,
	// 	statics: staticsSTUB,
	// 	actions: actionsSTUB,
	// 	getters: gettersSTUB,
	// })

	// console.log(Object.keys(new result));

	// const properties = Object.getOwnPropertyNames(result);

	// expect(properties).toContain('actions');
});
