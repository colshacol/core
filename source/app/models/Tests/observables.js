type Test = {
	uid: string,
	type: string,
};

type TestsStoreObservables = {
	tests: Test[],
	recording: boolean,
};

export default (props): TestsStoreObservables => {
	return {
		tests: props.tests || [],
		recording: false,
	}
}
