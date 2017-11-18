import lastStep from '../lastStep';

test('gets the last step', () => {
	const steps = [0, 1, 2, 3];
	const result = lastStep({ steps });

	expect(result).toBe(3);
});
