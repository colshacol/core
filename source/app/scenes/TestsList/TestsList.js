import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import AddIcon from '@app/assets/add.svg';
import './styles/TestsList.css';

@inject('$tests')
@observer
export default class TestsList extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='TestsList' className='scene'>
				<AddIcon styleName='AddIcon' width={24} height={24} onClick={() => props.$tests.actions.addTest()} />
				<For each='test' of={props.$tests.tests}>
					<EventTypeBox type={test.type} key={test.uid} />
				</For>
			</div>
		)
	}
}
