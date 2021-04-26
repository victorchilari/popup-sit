import React, {useState} from 'react';
import {connect} from 'react-redux';
// Styles //
import './SettingsPicker.css';
// Components //
import reactCSS from 'reactcss';
import {SketchPicker} from 'react-color';
import {Form, Divider} from 'antd';
import Color from '../../utils/Color';
import DSelect from './../../components/def/DSelect';

import {setDealCollor, setUniqueSettings} from './../../redux/settings/actions';
import * as cfg_settings from './../../content/Settings.json';

const layout = {
	labelCol: {
		span: 11
	},
	wrapperCol: {
		span: 11
	}
};

const SettingsPicker = ({settings, setDealCollor, setUniqueSettings}) => {
	const {dealColors, others} = settings;
	// const [value, setValue] = useState('circle');

	// const onChange = e => {
	// 	// console.log('prev:', value);
	// 	// console.log('radio checked', e.target.value);
	// 	// setValue(e.target.value);
	// };

	// function handleChange(data) {
	// 	console.log(`selected ${data}`);
	// 	// debugger;
	// 	setUniqueSettings(data);
	// 	// setValue(value);
	// }
	return (
		<>
			<Form {...layout}>
				{Object.entries(cfg_settings.default.others).map(([key, data]) => (
					<DSelect
						defaultValue={others[data.name]}
						handler={setUniqueSettings}
						key={key}
					/>
				))}
				{/* <Typography.Text style={mard}> Ant Design</Typography.Text> */}
				{/* <Form.Item name='dealsColors' label='Colors of deals:'></Form.Item> */}
			</Form>
			<Form {...layout}>
				<Divider orientation='left' plain>
					Colors of deals
				</Divider>
				<Form.Item name='bought' label='Bought:'>
					<ColorPicker color={dealColors.bought} setDealCollor={setDealCollor} />
				</Form.Item>
				<Form.Item name='listed' label='Listed:'>
					<ColorPicker color={dealColors.listed} setDealCollor={setDealCollor} />
				</Form.Item>
				<Form.Item name='sold' label='Sold:'>
					<ColorPicker color={dealColors.sold} setDealCollor={setDealCollor} />
				</Form.Item>
				<Form.Item name='unlisted' label='Unlisted:'>
					<ColorPicker color={dealColors.unlisted} setDealCollor={setDealCollor} />
				</Form.Item>
			</Form>
		</>
	);
};

const mapStateToProps = state => ({
	settings: state.settings
});
const mapDispatchToProps = dispatch => ({
	setDealCollor: data => dispatch(setDealCollor(data)),
	setUniqueSettings: data => dispatch(setUniqueSettings(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPicker);

function ColorPicker(props) {
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
		const colorithAlfaCanal =
			color.hex.length === 7 ? color.hex + 'ff' : Color.RGBAToHex(color.rgb);
		props.setDealCollor({color: colorithAlfaCanal, dealType: props.id});
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
		<>
			<div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayPicker ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={handleClose} />
					<SketchPicker color={color} onChange={handleChange} />
				</div>
			) : null}
		</>
	);
}

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
