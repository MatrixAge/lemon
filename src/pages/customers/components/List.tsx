import React from 'react'
import { Table, Tooltip, Avatar } from 'antd'
import { AlignCenterOutlined } from '@ant-design/icons'
import List from '@/components/List'
import { formatDate } from '@/utils/helpers/time'

const enum_status = {
	1: '新用户',
	2: '老用户',
	3: '新付费用户',
	4: '活跃用户',
	5: '污点用户'
}

const Index = (props: any) => {
	const columns = [
		{
			title: 'ID',
			dataIndex: '_id',
			key: '_id',
			render: (v) => v.substring(0, 8)
		},
		{
			title: '头像',
			dataIndex: 'avatar',
			key: 'avatar',
			render: (v) => <Avatar src={v + `&r=${Math.random()}`} shape='circle' />
		},
		{
			title: '昵称',
			dataIndex: 'nickname',
			key: 'nickname',
			render: (v) => (v ? v : '无')
		},
		{
			title: '姓名',
			dataIndex: 'realname',
			key: 'realname',
			render: (v) => (v ? v : '无')
		},
		{
			title: '手机号',
			dataIndex: 'mobile',
			key: 'mobile',
			render: (v) => v.substring(0, 11)
		},
		{
			title: '微信',
			dataIndex: 'wechat',
			key: 'wechat',
			render: (v) => (v ? v : '无')
		},
		{
			title: '微博',
			dataIndex: 'weibo',
			key: 'weibo',
			render: (v) => (v ? v : '无')
		},
		{
			title: '版本',
			dataIndex: 'version',
			key: 'version',
			render: (v, list) => (
				<div className='flex flex_column align_center'>
					<span className='mb_4'>{v}</span>
					<span>￥ {list.version_cost}</span>
				</div>
			)
		},
		{
			title: '最近登录时间',
			dataIndex: 'last_login',
			key: 'last_login',
			render: (v) => formatDate(v)
		},
		{
			title: '状态',
			dataIndex: 'status',
			key: 'status',
			render: (v) => enum_status[v]
		},
		{
			title: '操作',
			key: 'operation',
			render: () => (
				<div className='flex justify_center'>
					<Tooltip title='查看详情'>
						<a className='btn_form_option mr_10'>
							<AlignCenterOutlined />
						</a>
					</Tooltip>
				</div>
			)
		}
	]

	return <List {...props} columns={columns} />
}

export default Index
