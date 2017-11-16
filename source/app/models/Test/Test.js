
class TestModel extends Store({ actions, methods, getters }) {
	@observable steps: Step[];
	creationDate: string;
	creator: string;
}