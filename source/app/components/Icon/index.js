import * as React from 'react';

import './Icon.css';

export default (props) => {
	const classes = `${props.className} icon ion-${props.name} icon-${props.size}`
	return (
		<i
			{...props}
			className={classes}
		/>
	)
}