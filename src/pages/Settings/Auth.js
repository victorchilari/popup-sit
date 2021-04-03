import React, {useState} from 'react';
// Layout //
import {Space} from 'antd';
// UI Components //
import {Input, Checkbox, Button} from 'antd';
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
// Styles //
import 'antd/dist/antd.css';
import '../../often.css';
import './Auth.css';
// Extract //

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

export function Auth() {
	const [wantToLogin, setWantToLogin] = useState(true);

	function handlerInput(e) {
		console.log(e.target.type);
	}
	function toggleWantToLogin() {
		setWantToLogin(!wantToLogin);
	}
	function clickAuthBtn(e) {
		const btnAntdType = e.currentTarget.className.split(' ')[1].split('-')[2]; // 1 - position of class that is attribe by type
		if (btnAntdType === 'primary') {
			callAuthApi(btnAntdType);
		} else {
			toggleWantToLogin();
		}
	}
	function callAuthApi(params) {
		console.log(wantToLogin ? 'login' : 'register');
	}
	return (
		<Space direction='vertical' className='aligneItemsCenter w100p'>
			<Input
				onChange={handlerInput}
				placeholder='Enter your username'
				suffix={<UserOutlined />}
			/>
			<Input.Password
				onChange={handlerInput}
				placeholder='Enter your password'
				iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
			/>
			<Checkbox onChange={onChange}>Remember</Checkbox>
			<Space>
				<Button type={wantToLogin ? 'primary' : 'default'} onClick={clickAuthBtn} block>
					Login
				</Button>
				<Button type={!wantToLogin ? 'primary' : 'default'} onClick={clickAuthBtn} block>
					Register
				</Button>
			</Space>
			{/* <Input placeholder='Bonus code' allowClear onChange={onChange} /> */}
		</Space>
	);
}
