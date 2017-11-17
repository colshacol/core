import * as React from "react";

import ErrorBoundary from '@app/components/ErrorBoundary';
import PointerIcon from "@app/assets/PointerIcon";
import KeyIcon from "@app/assets/KeyIcon";
import YieldIcon from "@app/assets/YieldIcon";

import "./styles/EventTypeBox.css";

const colors = {
	mouse: "red",
	keyboard: "green",
	assertion: "blue"
};

interface PropTypes {
	type: string
}

const EventTypeBox = (props: PropTypes) => {
	const color = colors[props.type];


	const Icon = do {
		if (props.type === "mouse") {
			PointerIcon;
		} else if (props.type === "keyboard") {
			KeyIcon;
		} else if (props.type === "assertion") {
			YieldIcon;
		}
	};

	return (
		<ErrorBoundary>
			<div styleName={`EventTypeBox ${color}`}>
				<Icon styleName="icon" width={24} height={24} />
			</div>
		</ErrorBoundary>
	);
};

export default EventTypeBox;
