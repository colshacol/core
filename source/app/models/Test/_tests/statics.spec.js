import statics from '../statics';

const stringSTUB = 'STUB';

// TODO: Mock nanoid.

test('returns the correct object', () => {
	const argsSTUB = {
		creationDate: stringSTUB,
		creator: stringSTUB,
		uid: stringSTUB,
	};

	const result = statics(argsSTUB);
	expect(result).toEqual(argsSTUB);
});
