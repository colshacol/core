export default (store) => {
	return (...args) => {
		store.steps.push({ test: 'step' });
	}
}
