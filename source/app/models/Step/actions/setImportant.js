export default (store) => {
	return (important: string) => {
		store.important = important;
	}
}
