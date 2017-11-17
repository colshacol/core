export default (store) => {
	return (label: string) => {
		store.label = label;
	}
}
