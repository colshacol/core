import nanoid from 'nanoid';

type TestModelStatics = {|
	creationDate: string | number,
		creator: string,
			uid: string,
|};

export default (props = {}): TestModelStatics => {
	console.log('PROPS', { props })
	return {
		creationDate: props.creationDate || Date.now(),
		creator: props.creator || 'mr.rogers',
		uid: nanoid(16),
	}
}
