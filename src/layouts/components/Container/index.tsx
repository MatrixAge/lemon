import React, { memo, useState, useRef } from 'react'
import { Layout, BackTop } from 'antd'
import Header from '../Header'
import Bread from '../Bread'
import styles from './index.less'

const { Content } = Layout

const Index = (props: any) => {
	const { children, menu, fold, onChangeFold } = props

	const [ state_fix_breadcrumb, setStateFixBreadcrumb ] = useState(false)
	const container: any = useRef()

	const props_header = {
		fold,
		onChangeFold
	}

	const onScrollContainer = () => {
		setStateFixBreadcrumb(container.current.scrollTop > 60)
	}

	return (
		<div
			id='primaryLayout'
			className={styles.container}
			ref={container}
			onScrollCapture={onScrollContainer}
		>
			<Header {...props_header} />
			<Content className={styles.content}>
				{state_fix_breadcrumb && (
					<Bread style={{ visibility: 'hidden' }} menu={menu} />
				)}
				<Bread fix={state_fix_breadcrumb} menu={menu} />
				{children}
			</Content>
			<BackTop
				className={styles.backTop}
				target={(): any => document.querySelector('#primaryLayout')}
			/>
		</div>
	)
}

export default memo(Index)
