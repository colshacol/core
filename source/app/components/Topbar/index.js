import * as React from 'react';
import { observer } from 'mobx-react';

import CoreIcon from '@app/assets/roboo.svg';
import './styles/Topbar.css';

export default class Topbar extends React.Component {
	render({ props, state } = this) {
		return (
			<header styleName='Topbar'>
				<CoreIcon width={44} />
			</header>
		)
	}
}