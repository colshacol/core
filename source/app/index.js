import 'babel-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import TestsModel from '@app/models/Tests';
import App from './App';
import './styles/index.css';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider $tests={new TestsModel()}>
				<App />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

module.hot && module.hot.accept('./App', () => {
	render(App);
});


