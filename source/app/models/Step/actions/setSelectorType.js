export default (store) => {
	return (selectorType: string) => {
		store.selectorType = selectorType;
	}
}
