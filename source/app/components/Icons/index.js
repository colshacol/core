import * as React from 'react';
import nanoid from 'nanoid';

import _Add from './Add';
import _Record from './Record';
import _Play from './Play';
import _Stop from './Stop';
import * as Gradients from './gradients';
import './index.css';

const G = () => <g></g>

const SvgWithGradient = (SvgComponent) => (props) => {
	const Gradient = Gradients[props.gradient ? `${props.gradient[0].toUpperCase()}${props.gradient.substr(1)}` : 'white'] || Gradients.White;
	const className = `${props.className} svg-gradient-${props.gradient || 'White'}`
	return (
		<SvgComponent {...props} className={className} id={nanoid(16)}>
			<Gradient />
		</SvgComponent >
	)
};


export const Add = SvgWithGradient(_Add);
export const Record = SvgWithGradient(_Record);
export const Play = SvgWithGradient(_Play);
export const Stop = SvgWithGradient(_Stop);