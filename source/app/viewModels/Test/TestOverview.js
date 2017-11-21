import * as React from 'react';
import { observer } from 'mobx-react';

import { Icon } from '@app/components/Icon';
import './styles/TestOverview.css';

const TestOverview = (props) => {
	return (
		<div styleName='TestOverview'>
			<div styleName='tops'>
				<div styleName='label'>
					<h3>{props.label}</h3>
				</div>
				{/*				<div styleName='actions'>
					<Icon styleName='action' name='trash-a' size='small' />
					<Icon styleName='action' name='ios-eye' size='small' />
	</div>*/}
				<div styleName='info'>
					<span>
						<Icon styleName='info-icon' name='ios-list-outline' size='small' /> 18
					</span>
					<span>
						<Icon styleName='info-icon' name='ios-people-outline' size='small' /> 4
					</span>
				</div>
			</div>
		</div>
	);
}

export default observer(TestOverview);