import mockTest from '../mockTest';
import TestModel from '../../';

test('generates a test', () => {
	const result = mockTest();
	expect(result).toBeInstanceOf(TestModel);
});
