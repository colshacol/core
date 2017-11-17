import * as React from 'react';
import { observable } from 'mobx';

export default (Store) => (Component) => {
	return @observable class BoundStore extends React.Component {
		store = new Store(this.props);

		render() {
			return (
				<Component
					{...this.props}
					store={{
						actions: this.store.actions,
						data: this.store.__renderData,
					}}
				/>
			);
		}
	}
}