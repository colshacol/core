import randomNumber from 'random-int';

import TestModel from '../';

export default () => {
	return new TestModel({
		type: ['mouse', 'keyboard', 'assertion'][randomNumber(2)],
		label: 'Test that the things works correctly.',
		steps: [],
	})
}
