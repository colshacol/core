import nanoid from 'nanoid';

type StepModelStatics = {|
	testAttempts: number,
	testResult: string,
	testMEssage: string,
	uid: string
|};

export default (props):StepModelStatics => {
	return {
		testAttempts: 0,
		testResult: '',
		testMessage: '',
		uid: props.uid || nanoid(16),
	}
}
