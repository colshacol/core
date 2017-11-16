import React from "react";

import PointerIcon from "@app/assets/PointerIcon";
import KeyIcon from "@app/assets/KeyIcon";
import YieldIcon from "@app/assets/YieldIcon";

import "./styles/EventType.css";

const colors = {
  mouse: "red",
  key: "green",
  assert: "blue"
};

interface PropTypes {
  type: string;
}

const EventType = (props: PropTypes) => {
  const color = colors[props.type];

  const Icon = do {
    if (props.type === "mouse") {
      PointerIcon;
    } else if (props.type === "key") {
      KeyIcon;
    } else if (props.type === "assert") {
      YieldIcon;
    }
  };

  return (
    <div styleName={`EventType ${color}`}>
      <Icon styleName="icon" width={24} height={36} />
    </div>
  );
};

export default EventType;
