import React, { memo } from 'react'
import { Table } from 'antd'

const Index = (props: any) => {
	const { pagination } = props

	return (
		<Table
			{...props}
			pagination={{
				...pagination,
				showTotal: (total) => `共 ${total} 条数据`
			}}
			rowKey={(record) => record._id}
		/>
	)
}

export default memo(Index)
