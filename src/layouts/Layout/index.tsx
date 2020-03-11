import React, { Fragment } from 'react'
import { withRouter, connect } from 'umi'
import Base from '../Base'
import Loader from '@/components/Loader'

const Index = (props: any) => {
	const { children, location: { pathname }, loading } = props

	if (pathname === 'signin' || pathname === 'reset_password') {
		return (
			<Fragment>
				<Loader loading={loading.effects['app/query']} full />
				{children}
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<Loader loading={loading.effects['app/query']} />
				<Base>{children}</Base>
			</Fragment>
		)
	}
}

export default withRouter(connect(({ loading }: any) => ({ loading }))(Index))
