import React, { memo } from 'react'
import { Modal } from 'antd'

const Index = (props: any) => {
	const { children } = props

	const props_preset = {
		destroyOnClose: true,
		maskClosable: false,
		centered: true
	}

	return (
		<Modal {...props_preset} {...props}>
			{children}
		</Modal>
	)
}

export default memo(Index)
