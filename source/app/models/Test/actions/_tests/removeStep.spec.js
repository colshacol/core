import removeStep from '../removeStep';

const STUB = { uid: 'STUB' };
const STAB = { uid: 'STAB' };

test('adds a step', () => {
	const store = { steps: [STUB, STAB] };
	removeStep(store)(STUB);
	expect(store.steps[0]).toBe(STAB);
});
