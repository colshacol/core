import * as React from "react";

import ErrorBoundary from '@app/components/ErrorBoundary';
import Icon from '@app/components/Icon';
import KeyboardIcon from '@app/assets/svgs/keyboard.svg'
import PointerIcon from '@app/assets/svgs/mouse-arrow.svg'
import YieldIcon from '@app/assets/svgs/yield.svg'

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


	const { Icon, size } = do {
		if (props.type === "mouse") {
			({ Icon: PointerIcon, size: 26 })
		} else if (props.type === "keyboard") {
			({ Icon: KeyboardIcon, size: 32 })
		} else if (props.type === "assertion") {
			({ Icon: YieldIcon, size: 28 })
		}
	};

	return (
		<ErrorBoundary>
			<div styleName={`EventTypeBox ${color}`}>
				<Icon width={size} height={size} />
			</div>
		</ErrorBoundary>
	);
};

export default EventTypeBox;
