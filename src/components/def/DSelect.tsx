import React from 'react';
import {Form, Select} from 'antd';

const {Option} = Select;

interface IOption {
	value: string;
	title: string;
}

interface ISelect {
	name: string;
	label?: string;
	defaultValue?: string;
	handler: Function;
	options: Array<IOption>;
	width?: 'default' | 'medium' | number;
}
export default function DSelect(props: ISelect) {
	const posible_witdth = {
		default: 80,
		medium: 140
	};
	const width = {'width': 80};
	if (typeof props.width === 'string') {
		width.width = posible_witdth[props.width] || posible_witdth.default;
	} else if (typeof props.width === 'number') {
		width.width = props.width;
	}

	return (
		<Form.Item name={props.name} label={props?.label}>
			<Select
				defaultValue={props?.defaultValue}
				style={width}
				onChange={value => props.handler({key: props.name, value})}
			>
				{props.options.map(d => (
					<Option value={d.value} key={d.value}>
						{d.title}
					</Option>
				))}
			</Select>
		</Form.Item>
	);
}
