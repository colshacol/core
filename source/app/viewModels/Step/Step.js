import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import { Icon } from '@app/components/Icon';
import './styles/Step.css';

@inject('$tests')
@observer
export default class Step extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='Step' className='scene'>
				<Icon name='plus' styleName='AddIcon' size='small' onClick={() => props.$tests.actions.addTest()} />
				<For each='test' of={props.$tests.tests}>
					<EventTypeBox type={test.type} key={test.uid} />
				</For>
			</div>
		)
	}
}
