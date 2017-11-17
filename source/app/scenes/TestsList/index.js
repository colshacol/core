import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import './styles/TestsList.css';


@inject('$tests')
@observer
export default class TestsList extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='TestsList'>
				<h2>TESTSLIST</h2>
				<h3>ADD TEST</h3>
				<hr />
				<For each='test' of={props.$tests.tests}>
					<EventTypeBox type={test.type} />
				</For>
			</div>
		)
	}
}
