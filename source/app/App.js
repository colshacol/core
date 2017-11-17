import * as React from "react";

import TestsList from '@app/scenes/TestsList';
import "./styles/App.css";
class App extends React.Component {
  render() {
    return (
				<div>
					{/* TODO: Routng. */}
					<TestsList/>
				</div>
		);
  }
}

export default App;
