import * as React from "react";
import { inject } from 'mobx-react';

import { Topbar } from '@app/components/Topbar';
import { ActionBar } from '@app/components/ActionBar';
import Tests from '@app/viewModels/Tests';
import "./styles/App.css";

// TODO: Connect to FireBase, retrieve user data/tests.
// When data is ready, swap from loading view to Tests
// view.

@inject('$tests')
class App extends React.Component {
	render({ props, state } = this) {

		return (
			<div styleName='body'>
				<div styleName='bottomShadow'>
					yolo
				</div>
				<Topbar />
				{/* TODO: Routng. */}
				<Tests tests={[]} />
				<ActionBar />
			</div>
		);
	}
}

export default App;
