import React, {useState} from 'react';

import Color from '../utils/Color';

import {SketchPicker} from 'react-color';
import {Form} from 'antd';

/*
interface IColorPicker {
	name: string;
	label: string;
	color: string;
	setDealCollor: Function;
}

Cant implement TS because:
 Type '{ position: string; zIndex: string; top: string; left: string; }' is not assignable to type 'CSSProperties'.
 Types of property 'position' are incompatible. Type 'string' is not assignable to type 'Position | undefined'.ts(2322)
*/

export default function ColorPicker(props) {
	const propsColorRGBA = Color.hexToRGBA(props.color);
	const color = propsColorRGBA || {
		r: '255',
		g: '255',
		b: '255',
		a: '0.6'
	};
	const [displayPicker, setDisplayPicker] = useState(false);

	const handleClick = () => {
		setDisplayPicker(!displayPicker);
	};
	const handleClose = () => {
		setDisplayPicker(false);
	};
	const handleChange = color => {
		const colorWithAlfaCanal =
			color.rgb.a === 1 ? color.hex + 'ff' : Color.RGBAToHex(color.rgb);
		props.setDealCollor({color: colorWithAlfaCanal, dealType: props.name});
	};

	const styles = {
		color: {
			width: '36px',
			height: '14px',
			borderRadius: '2px',
			background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
		},
		swatch: {
			padding: '5px',
			background: '#fff',
			borderRadius: '1px',
			boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
			display: 'inline-block',
			cursor: 'pointer'
		},
		popover: {
			position: 'absolute',
			zIndex: '2',
			top: '-312px',
			left: '-86px'
		},
		cover: {
			position: 'fixed',
			top: '0px',
			right: '0px',
			bottom: '0px',
			left: '0px'
		}
	};

	return (
		<Form.Item name={props.name} label={props.label}>
			<div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayPicker ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={handleClose} />
					<SketchPicker color={color} onChange={handleChange} />
				</div>
			) : null}
		</Form.Item>
	);
}
