import * as React from "react";

import { EventType } from "@app/components/EventType";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return [
      <EventType type="mouse" />,
      <EventType type="key" />,
      <EventType type="assert" />
    ];
  }
}

export default App;
