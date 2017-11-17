type Test = {
	uid: string,
	type: string,
};

type TestsStoreObservables = {|
	tests: Test[],
|};

export default (): TestsStoreObservables => {
	return {
		tests: [],
	}
}
