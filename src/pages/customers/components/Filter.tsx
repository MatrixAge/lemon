import React from 'react'
import { Form, Button, Input, Select, DatePicker } from 'antd'
import Filter, { FilterItem, OptionItem } from '@/components/Filter'
import moment from 'moment'

const { FilterItems, OptionItems } = Filter
const { Item, useForm } = Form

const { Search } = Input
const { Option } = Select
const { RangePicker } = DatePicker

const Index = (props: any) => {
	const { filter, onFilterChange } = props
      const { nickname, realname, mobile, status } = filter
      
	const [ form ] = useForm()
	const { getFieldsValue, setFieldsValue } = form

	const handleFields = (fields) => {
		const { createTime } = fields

		if (createTime.length) {
			fields.startTime = createTime[0].format('YYYY-MM-DD HH:mm:ss')
			fields.endTime = createTime[1].format('YYYY-MM-DD HH:mm:ss')
		}
		delete fields.createTime

		return fields
	}

	const handleSubmit = () => {
		let fields = getFieldsValue()

		fields = handleFields(fields)
		onFilterChange(fields)
	}

	const handleReset = () => {
		let fields = getFieldsValue()

		for (let item in fields) {
			if ({}.hasOwnProperty.call(fields, item)) {
				if (fields[item] instanceof Array) {
					fields[item] = []
				} else {
					fields[item] = undefined
				}
			}
		}

		setFieldsValue(fields)
		handleSubmit()
	}

	let initialCreateTime = []

	if (filter.startTime) {
		initialCreateTime[0] = moment(filter.startTime)
	}
	if (filter.endTime) {
		initialCreateTime[1] = moment(filter.endTime)
	}

	return (
		<Form
			initialValues={{
				nickname,
				realname,
				mobile,
				status,
				createTime: initialCreateTime
			}}
		>
			<Filter>
				<FilterItems>
					<FilterItem>
						<Item name='nickname'>
							<Search placeholder='昵称' onSearch={handleSubmit} />
						</Item>
					</FilterItem>
					<FilterItem>
						<Item name='realname'>
							<Search placeholder='姓名' onSearch={handleSubmit} />
						</Item>
					</FilterItem>
					<FilterItem>
						<Item name='mobile'>
							<Search placeholder='手机号' onSearch={handleSubmit} />
						</Item>
					</FilterItem>
					<FilterItem>
						<Item name='status'>
							<Select style={{ width: '200px' }} placeholder='请选择用户状态'>
								<Option value='1'>新用户</Option>
								<Option value='2'>老用户</Option>
								<Option value='3'>新付费用户</Option>
								<Option value='4'>活跃用户</Option>
								<Option value='5'>污点用户</Option>
							</Select>
						</Item>
					</FilterItem>
					<FilterItem>
						<Item name='createTime'>
							<RangePicker
								style={{ width: '100%' }}
								showTime={{
									defaultValue: [
										moment('00:00:00', 'HH:mm:ss'),
										moment('23:59:59', 'HH:mm:ss')
									]
								}}
								placeholder={[ '登录日期', '登录日期' ]}
								format='YYYY-MM-DD HH:mm:ss'
							/>
						</Item>
					</FilterItem>
				</FilterItems>
				<OptionItems>
					<OptionItem>
						<Button type='primary' onClick={handleSubmit}>
							搜索
						</Button>
					</OptionItem>
					<OptionItem>
						<Button onClick={handleReset}>重置</Button>
					</OptionItem>
				</OptionItems>
			</Filter>
		</Form>
	)
}

export default Index
