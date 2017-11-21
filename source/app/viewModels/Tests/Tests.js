import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { TestOverview } from '@app/viewModels/Test';
import EventTypeBox from '@app/components/EventTypeBox';
import { Icon } from '@app/components/Icon';
import './styles/Tests.css';

@observer
export default class Tests extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='Tests' className='scene'>
				<Icon name='plus' styleName='AddIcon' size='small' onClick={props.store.actions.addTest} />
				<For each='test' of={props.store.tests}>
					<TestOverview {...test} />
				</For>
			</div>
		)
	}
}
