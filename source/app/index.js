// NOTE: Directory for main pop-out application.
import '@babel/polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import './styles/index.css';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<App/>
		</AppContainer>,
		document.getElementById('root')
	);
}

render(App);

module.hot && module.hot.accept('./App', () => {
	render(App);
})


