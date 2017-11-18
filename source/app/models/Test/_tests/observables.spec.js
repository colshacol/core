import observables from '../observables';

const arraySTUB = [];
const stringSTUB = 'STUB';

test('returns the correct object', () => {
	const argsSTUB = {
		steps: arraySTUB,
		type: stringSTUB,
	};

	const result = observables(argsSTUB);
	expect(result).toEqual(argsSTUB);
});
