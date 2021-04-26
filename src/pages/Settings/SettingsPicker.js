import React from 'react';
import {connect} from 'react-redux';
// Styles //
import './SettingsPicker.css';
// Components //
import {Form, Divider} from 'antd';
import DSelect from '../../components/def/DSelect';
import ColorPicker from '../../components/ColorPicker';

import {setDealCollor, setUniqueSettings} from '../../redux/settings/actions';
import * as cfg_settings from '../../content/Settings.json';

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
