import React from 'react'
import { Form } from 'antd'
import Modal from '@/components/Modal'
import styles from './Modal.less'

const Index = (props: any) => {
	return (
		<Modal className={`${styles._local}`} {...props}>
			<Form>modal</Form>
		</Modal>
	)
}

export default Index
