
class StepModel extends Store({ actions, methods, getters }) {
	@observable label: string;
	@observable type: string;
	data: Event;
}