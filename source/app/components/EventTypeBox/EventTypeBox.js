import * as React from "react";

import { ErrorBoundary } from '@app/components/ErrorBoundary';
import KeyboardIcon from '@app/assets/svgs/keyboard.svg'
import PointerIcon from '@app/assets/svgs/mouse-arrow.svg'
import YieldIcon from '@app/assets/svgs/yield.svg'

import "./styles/EventTypeBox.css";

interface PropTypes {
	type: string
}

const EventTypeBox = (props: PropTypes) => {
	const { Icon, size, color } = do {
		if (props.type === "mouse") {
			({ Icon: PointerIcon, size: 26, color: 'red' })
		} else if (props.type === "keyboard") {
			({ Icon: KeyboardIcon, size: 32, color: 'blue' })
		} else if (props.type === "assertion") {
			({ Icon: YieldIcon, size: 28, color: 'green' })
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
