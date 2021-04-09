import React, {useState} from 'react';
// Styles //
import './SettingsPicker.css';
// Components //
import {Form, Radio, Select} from 'antd';
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
				<Form.Item name='dealsColors' label='Colors of deals:'>
					<Form {...layout}>
						<Form.Item name='purchased' label='Purchased:'></Form.Item>
					</Form>
				</Form.Item>
			</Form>
		</>
	);
};

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
