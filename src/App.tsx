import React from 'react';
import {Tabs, Layout} from 'antd';
// Styles //
import 'antd/dist/antd.css';
import './often.css';
import './App.css';
// Pages //
import Settings from './pages/Settings';
// Extract //
const {TabPane} = Tabs;
const {Content} = Layout;

function callback(key: string) {
	console.log(key);
}

function App() {
	return (
		<div className='layoutMain'>
			<Tabs onChange={callback} type='card' defaultActiveKey='4' centered>
				<TabPane disabled tab='Main' key='1'>
					<Content className='paddingContainerInMenu'>
						<div>Content of Tab Pane 1</div>
					</Content>
				</TabPane>
				<TabPane disabled tab='Details' key='2'>
					<Content className='paddingContainerInMenu'>
						<div>Content of Tab Pane 2</div>
					</Content>
				</TabPane>
				<TabPane disabled tab='State' key='3'>
					<Content className='paddingContainerInMenu'>
						<div>Content of Tab Pane 3</div>
					</Content>
				</TabPane>
				<TabPane tab='Settings' key='4'>
					<Content className='paddingContainerInMenu'>
						<Settings />
					</Content>
				</TabPane>
			</Tabs>
		</div>
	);
}

export default App;
