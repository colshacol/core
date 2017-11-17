export default (store) => {
	return (timeout: string) => {
		store.timeout = timeout;
	}
}
