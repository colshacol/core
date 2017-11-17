export default (store) => {
	return ({ uid }) => {
		store.steps = store.steps.filter(step => {
			return step.uid !== uid;
		})
	}
}
