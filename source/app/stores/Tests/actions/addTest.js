import nanoid from 'nanoid';

export default (store) => {
	return (...args) => {
		store.tests.push({ uid: nanoid(16), type: 'mouse' });
	}
}
