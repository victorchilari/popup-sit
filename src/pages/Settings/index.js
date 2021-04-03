import React from 'react';
import {Row, Col} from 'antd';
import {Auth} from './Auth';

export default function Settings() {
	return (
		<div>
			Hey!
			<Row>
				<Col span={6} style={{backgroundColor: 'orange'}}>
					2 / 5
				</Col>
				<Col span={15} offset={3} style={{backgroundColor: 'pink'}}>
					<Auth />
				</Col>
				{/* <Col flex={2} style={{backgroundColor: 'orange'}}>
					2 / 5
				</Col>
				<Col flex={1}>2 / 5</Col>
				<Col flex={4} style={{backgroundColor: 'pink'}}>
					3 / 5
				</Col> */}
			</Row>
		</div>
	);
}
