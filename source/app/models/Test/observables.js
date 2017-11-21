type TestModelObservables = {
	steps: Object[],
	label: string,
	type: string,
};



export default (props = {}): TestModelObservables => {
	return {
		steps: props.steps || [],
		label: props.label || '',
		type: props.type,
	}
}
