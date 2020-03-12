import React from 'react'
import { Table } from 'antd'

const Index = (props: any) => {
	const { columns, pagination, dataSource } = props

	return (
		<Table
			dataSource={dataSource}
			pagination={{
				...pagination,
				showTotal: (total) => `共 ${total} 条数据`
			}}
                  columns={columns}
                  rowKey={(record) => record._id}
		/>
	)
}

export default Index
