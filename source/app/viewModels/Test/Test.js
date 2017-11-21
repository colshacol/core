import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import { Icon } from '@app/components/Icon';
import './styles/Test.css';

@observer
export default class Test extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='Test' className='scene'>
				<p>I am a test</p>
			</div>
		)
	}
}
