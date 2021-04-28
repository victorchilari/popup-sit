import React from 'react';
import {connect} from 'react-redux';
// Styles //
import './SettingsPicker.css';
// Components //
import {Form, Divider} from 'antd';
import Select from '../../components/Select';
import ColorPicker from '../../components/ColorPicker';

import {setDealCollor, setUniqueSettings} from '../../redux/settings/actions';
import * as cfg_settings from './../../content/SettingsPicker.json';

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
	// console.log(`selected ${data}`);
	console.log(cfg_settings);
	// debugger;
	// 	setUniqueSettings(data);
	// 	// setValue(value);
	// }
	return (
		<>
			<Form {...layout}>
				{Object.entries(cfg_settings.default.others).map(([key, data]) => (
					<Select
						defaultValue={others[data.name]}
						handler={setUniqueSettings}
						key={key}
						{...data}
					/>
				))}
			</Form>
			<Form {...layout}>
				<Divider orientation='left' plain>
					Colors of deals
				</Divider>
				{Object.entries(cfg_settings.default.deals).map(([key, data]) => (
					<ColorPicker
						color={dealColors[data.name]}
						setDealCollor={setDealCollor}
						key={key}
						{...data}
					/>
				))}
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
