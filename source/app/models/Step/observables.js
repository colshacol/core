type StepModelObservables = {|
	index: number,
	selector: string,
	selectorType: string,
	timeout: number,
	label: string,
	bookmarked: boolean,
	screenshot: boolean,
	important: boolean,
	skip: boolean
|};

export default (props):StepModelObservables => {
	return {
		index: props.index,
		label: props.label || 'add a label (optional)',
		selectorType: props.selectorType,
		selector: props.selector,
		timeout: props.timeout || 10000;
		bookmarked: false,
		screenshot: false,
		important: true,
		skip: false,
	}
}
