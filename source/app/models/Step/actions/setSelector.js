export default (store) => {
	return (selector: string) => {
		store.selector = selector;
	}
}
