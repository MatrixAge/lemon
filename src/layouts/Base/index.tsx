import React, { Fragment } from 'react'
import { connect } from 'umi'
import { Layout } from 'antd'
import Sider from '../components/Sider'
import Container from '../components/Container'
import store from 'store'

const Index = (props) => {
	const { children, app, dispatch } = props
	const { fold } = app

	const menu = store.get('menu') || []

	const onChangeFold = () => {
		dispatch({
			type: 'app/updateState',
			payload: {
				fold: !fold
			}
		})
	}

	const props_sider = {
		fold,
		menu
	}

	const props_container = {
		fold,
		menu,
		onChangeFold
	}

	return (
		<Layout>
			<Sider {...props_sider} />
			<Container {...props_container}>{children}</Container>
		</Layout>
	)
}

export default connect(({ app }: any) => ({ app }))(Index)
