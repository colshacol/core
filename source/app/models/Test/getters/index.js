export default {
	lastStep(store) {
		return store.data.steps[store.data.steps.length - 1];
	}
}
