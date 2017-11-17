import randomNumber from 'random-int';

type TestModelObservables = {|
	steps: Object[],
		type: string,
|};


const eventTypes = ['mouse', 'keyboard', 'assertion'];

export default (props = {}): TestModelObservables => {
	return {
		steps: props.steps || [],
		type: props.type || eventTypes[randomNumber(2)],
	}
}
