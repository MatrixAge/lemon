import React, { Fragment } from 'react'
import { Link, withRouter } from 'umi'
import { Breadcrumb } from 'antd'
import { pathMatchRegexp, queryAncestors } from '../Menu/helpers'
import styles from './index.less'

const Index = (props: any) => {
	const { fix, menu, location } = props

	const generateBreadcrumbs = (paths) => {
		return paths.map((item, key) => {
			const content = item && <Fragment>{item.title}</Fragment>

			return (
				item && (
					<Breadcrumb.Item key={key}>
						{paths.length - 1 !== key ? (
							<Link to={item.url || '#'}>{content}</Link>
						) : (
							content
						)}
					</Breadcrumb.Item>
				)
			)
		})
	}

	const currentRoute = menu.find(
		(item) => item.url && pathMatchRegexp(item.url, location.pathname)
	)

	// for (const item of exception_route) {
	// 	if (pathMatchRegexp(item.path, location.pathname)) {
	// 		return (
	// 			<Breadcrumb className={`${styles.bread} ${fix ? styles.bread_fixed : ''}`}>
	// 				{item.bread.map((it) => (
	// 					<Breadcrumb.Item key={it.name}>
	// 						<Link to={it.path}>{it.name}</Link>
	// 					</Breadcrumb.Item>
	// 				))}
	// 			</Breadcrumb>
	// 		)
	// 	}
	// }

	const paths = currentRoute
		? queryAncestors(menu, currentRoute, 'pid').reverse()
		: [
				menu[0],
				{
					id: 404,
					title: `Not Found`
				}
			]

	return (
		<Breadcrumb className={`${styles.bread} ${fix ? styles.bread_fixed : ''}`}>
			{generateBreadcrumbs(paths)}
		</Breadcrumb>
	)
}

export default withRouter(Index)
