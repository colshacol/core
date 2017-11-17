export default (store) => {
	return (...args) => {
		store.tests.push({ new: 'test', old: 'dog', tricks: false, type: 'mouse' });
	}
}
