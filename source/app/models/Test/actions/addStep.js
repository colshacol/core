export default (store) => {
	return (newStep) => {
		store.steps.push(newStep);
	}
}
