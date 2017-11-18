type TestModelObservables = {|
	steps: Object[],
		type: string,
|};



export default (props = {}): TestModelObservables => {
	return {
		steps: props.steps || [],
		type: props.type,
	}
}
