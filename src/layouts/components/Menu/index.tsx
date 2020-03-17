import React, { memo, Fragment, useState } from 'react'
import { Link, withRouter } from 'umi'
import { Menu } from 'antd'
import { Icon } from '@ant-design/compatible'
import store from 'store'
import { arrayToTree, queryAncestors, pathMatchRegexp } from './helpers'

const { SubMenu } = Menu

const Index = (props: any) => {
	const { fold, menu, location } = props
	const [ openKeys, setOpenKeys ] = useState(store.get('openKeys') || [])

	const onOpenChange = (openKeys) => {
		const rootSubmenuKeys = menu
			.filter((item) => !String(item.pid))
			.map((item) => String(item.id))

		const latestOpenKey = openKeys.find((key) => openKeys.indexOf(key) == -1)

		let newOpenKeys = openKeys

		if (rootSubmenuKeys.indexOf(latestOpenKey) != -1) {
			newOpenKeys = latestOpenKey ? [ latestOpenKey ] : []
		}

		setOpenKeys(newOpenKeys)

		store.set('openKeys', newOpenKeys)
	}

	const generateMenus = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu
						key={item.id}
						title={
							<Fragment>
								{item.icon && <Icon type={item.icon} />}
								<span>{item.title}</span>
							</Fragment>
						}
					>
						{generateMenus(item.children)}
					</SubMenu>
				)
			}
			return (
				<Menu.Item key={item.id}>
					<Link to={item.url || '#'}>
						{item.icon && <Icon type={item.icon} />}
						<span>{item.title}</span>
					</Link>
				</Menu.Item>
			)
		})
	}

	const currentMenu = menu.find(
		(item) => item.url && pathMatchRegexp(item.url, location.pathname)
	)

	const selectedKeys = currentMenu
		? queryAncestors(menu, currentMenu, 'pid').map((item) => String(item.id))
		: []

	const props_menu = fold ? {} : { openKeys: openKeys }

	return (
		<Menu
			mode='inline'
			onOpenChange={onOpenChange}
			selectedKeys={selectedKeys}
			inlineCollapsed={fold}
			{...props_menu}
		>
			{generateMenus(arrayToTree(menu, 'id', 'pid'))}
		</Menu>
	)
}

export default memo(withRouter(Index))