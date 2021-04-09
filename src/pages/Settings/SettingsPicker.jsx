import React, {useState} from 'react';
// Styles //
import './SettingsPicker.css';
// Components //
import reactCSS from 'reactcss';
import {SketchPicker} from 'react-color';
import {Form, Radio, Select, Divider} from 'antd';
const {Option} = Select;

const layout = {
	labelCol: {
		span: 11
	},
	wrapperCol: {
		span: 11
	}
};

const SettingsPicker = () => {
	// const [value, setValue] = useState('circle');

	const onChange = e => {
		// console.log('prev:', value);
		// console.log('radio checked', e.target.value);
		// setValue(e.target.value);
	};

	function handleChange(value) {
		console.log(`selected ${value}`);
		// setValue(value);
	}
	return (
		<>
			<Form {...layout}>
				<Form.Item name='card-type' label='Show in preview:'>
					<Select defaultValue='circle' style={{width: 140}} onChange={handleChange}>
						<Option value='circle'>Profit after buy</Option>
						<Option value='chart'>Price chart</Option>
					</Select>
				</Form.Item>
				<Form.Item name='currency' label='Currency:'>
					<Select defaultValue='USD' style={{width: 80}} onChange={handleChange}>
						<Option value='USD'>USD</Option>
						<Option value='EURO'>EURO</Option>
						<Option value='RUB'>RUB</Option>
					</Select>
				</Form.Item>
				<Form.Item name='language' label='Language:'>
					<Select defaultValue='en' style={{width: 80}} onChange={handleChange}>
						<Option value='en'>En</Option>
						<Option value='ru'>Ru</Option>
						<Option value='ch'>Ch</Option>
					</Select>
				</Form.Item>
				<Form.Item name='theme' label='Theme:'>
					<Select defaultValue='light' style={{width: 80}} onChange={handleChange}>
						<Option value='light'>Light</Option>
						<Option value='dark'>Dark</Option>
					</Select>
				</Form.Item>
				{/* <Typography.Text style={mard}> Ant Design</Typography.Text> */}
				{/* <Form.Item name='dealsColors' label='Colors of deals:'></Form.Item> */}
				<Divider orientation='left' plain>
					Colors of deals
				</Divider>
				<Form {...layout}>
					<Form.Item name='purchased' label='Purchased:'>
						<ColorPicker color={defColors.purchase} />
					</Form.Item>
					<Form.Item name='listed' label='Listed:'>
						<ColorPicker color={defColors.listed} />
					</Form.Item>
					<Form.Item name='sold' label='Sold:'>
						<ColorPicker color={defColors.sold} />
					</Form.Item>
					<Form.Item name='unlisted' label='Unlisted:'>
						<ColorPicker color={defColors.unlisted} />
					</Form.Item>
				</Form>
			</Form>
		</>
	);
};

const defColors = {
	purchase: {
		r: '255',
		g: '202',
		b: '0',
		a: '1'
	},
	listed: {
		r: '57',
		g: '73',
		b: '221',
		a: '1'
	},
	sold: {
		r: '56',
		g: '187',
		b: '49',
		a: '1'
	},
	unlisted: {
		r: '3',
		g: '9',
		b: '88',
		a: '1'
	}
};

function ColorPicker(props) {
	const [color, setColor] = useState(
		props.color || {
			r: '255',
			g: '255',
			b: '255',
			a: '0.3'
		}
	);
	const [displayPicker, setDisplayPicker] = useState(false);

	const handleClick = () => {
		setDisplayPicker(!displayPicker);
	};
	const handleClose = () => {
		setDisplayPicker(false);
	};
	const handleChange = color => {
		console.log(color.rgb);
		setColor(color.rgb);
	};

	const styles = reactCSS({
		'default': {
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
		}
	});
	return (
		<div>
			<div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayPicker ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={handleClose} />
					<SketchPicker color={color} onChange={handleChange} />
				</div>
			) : null}
		</div>
	);
}

export default SettingsPicker;

{
	/* <Form.Item name='radio-group' label='Show in preview:'>
	<Radio.Group onChange={onChange} value={value}>
		<Radio value='circle'>Profit after buy</Radio>
		<Radio value='chart'>Price chart</Radio>
	</Radio.Group>
</Form.Item>; 

<Form.Item name='currency' label='Currency:'>
				<Radio.Group onChange={onChange} value={value}>
					<Radio value='USD'>USD</Radio>
					<Radio value='EURO'>EURO</Radio>
					<Radio value='RUB'>RUB</Radio>
				</Radio.Group>
			</Form.Item>
	*/
}
