import nanoid from 'nanoid';

type TestModelStatics = {|
	creationDate: string,
	creator: string,
	uid: string
|};

export default (props):TestModelStatics => {
	return {
		creationDate: props.creationDate,
		creator: props.creator || 'mr.rogers',
		uid: nanouid(16);
	}
}
