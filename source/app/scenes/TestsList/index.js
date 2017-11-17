import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import './styles/TestsList.css';

export default inject('$tests')(observer((props) => {
	console.log({ props })
	return (
		<div styleName='TestsList'>
			<h2>TESTSLIST</h2>
			<h3 onClick={() => props.$tests.addTest()}>ADD TEST</h3>
			<hr/>
			<For each='test' of={props.$tests.tests}>
				<EventTypeBox type={test.type} />
			</For>
		</div>
	)
}))
