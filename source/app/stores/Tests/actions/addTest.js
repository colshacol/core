import nanoid from 'nanoid';
import TestModel from '@app/models/Test';

export default (store) => {
	return (...args) => {
		store.tests.push(new TestModel({
			...store.props
		}));
	}
}
