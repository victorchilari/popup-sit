import React, {useState, CSSProperties} from 'react';

import Color from '../utils/Color';

import {SketchPicker} from 'react-color';
import {Form} from 'antd';

interface IPickedColor {
	hex: string;
	hsl: {h: number; l: number; a: number};
	hsv: {h: number; v: number; a: number};
	oldHue: number;
	rgba: {r: number; g: number; b: number; a: number};
	source: string;
}

interface IStylesDictionary {
	[Key: string]: CSSProperties;
}

interface IColorPicker {
	name: string;
	label: string;
	color: string;
	setDealCollor: Function;
}

export default function ColorPicker(props: IColorPicker) {
	const color = Color.hexToRGBA(props.color);
	const [displayPicker, setDisplayPicker] = useState(false);

	const handleClick = () => {
		setDisplayPicker(!displayPicker);
	};
	const handleClose = () => {
		setDisplayPicker(false);
	};
	const handleChange: any = (color: IPickedColor) => {
		const colorWithAlfaCanal =
			color.rgba.a === 1 ? color.hex + 'ff' : Color.RGBAToHex(color.rgba);
		props.setDealCollor({color: colorWithAlfaCanal, dealType: props.name});
	};

	const styles: IStylesDictionary = {
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
			zIndex: 2,
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
