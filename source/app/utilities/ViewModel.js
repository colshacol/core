import * as React from 'react';
import { observer } from 'mobx-react';

export default (Model) => (Component) => {
	return @observer class ViewModel extends React.Component {
		store = new Model(this.props);
		type = 'ViewModel';

		render() {
			return (
				<Component
					{...this.props}
					store={{
						actions: this.store.actions,
						...this.store.__renderData
					}}
				/>
			);
		}
	}
}