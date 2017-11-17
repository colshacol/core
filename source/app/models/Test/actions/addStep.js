export default (store) => {
	return (...args) => {
		store.data.steps.push({ test: 'step', hell: true });
	}
}
