import React from 'react';
// Styles //
import '../../often.css';
// Components //
import {Row, Col} from 'antd';
import Auth from './Auth';
import SettingsPicker from './SettingsPicker';

export default function Settings() {
	return (
		<>
			<Row>
				<Col span={6} style={{backgroundColor: 'orange'}}>
					2 / 5
				</Col>
				<Col span={15} offset={3} style={{backgroundColor: 'pink'}}>
					<Auth />
				</Col>
			</Row>
			<Row className='margin-top'>
				<Col span={17} style={{backgroundColor: '#00ea7a'}}>
					<SettingsPicker />
				</Col>
			</Row>
		</>
	);
}
