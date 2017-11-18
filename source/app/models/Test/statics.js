import nanoid from 'nanoid';

type TestModelStatics = {|
	creationDate: string | number,
		creator: string,
			uid: string,
|};

export default (props = {}): TestModelStatics => {
	return {
		creationDate: props.creationDate || Date.now(),
		creator: props.creator || 'mr.rogers',
		uid: props.uid || nanoid(16),
	}
}
