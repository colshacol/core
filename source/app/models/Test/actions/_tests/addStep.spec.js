import addStep from '../addStep';

const STUB = 'STUB';

test('adds a step', () => {
	const store = { steps: [] };
	addStep(store)(STUB);
	expect(store.steps[0]).toBe(STUB);
});
