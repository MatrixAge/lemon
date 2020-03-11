import React, { memo, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Layout from './Layout'
import config from '../../config/config'

const Index = (props: any) => {
	const { children } = props

	return (
		<Fragment>
			<Helmet>
				<title>{config.name}</title>
			</Helmet>
			<Layout>{children}</Layout>
		</Fragment>
	)
}

export default memo(Index)
