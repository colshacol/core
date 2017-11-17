type TestModelObservables = {|
	steps: Object[],
|};

export default (props):TestModelObservables => {
	return {
		steps: props.steps || [],
	}
}
