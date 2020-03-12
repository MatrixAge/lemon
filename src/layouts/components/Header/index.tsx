import React from 'react'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { Icon } from '@ant-design/compatible'
import styles from './index.less'

const { Header } = Layout

const Index = (props: any) => {
	const { fold, onChangeFold } = props

	const menu = (
		<Menu className={styles.menu}>
			<Menu.Item key='0'>
				<div className='flex align_center w_100 border_box p_20 pr_0'>
					<Avatar
						src='https://avatars1.githubusercontent.com/u/25472851'
						size={44}
					/>
					<div className='flex flex_column ml_10'>
						<span className='username font_bold fontsize_15'>
							martixage
						</span>
						<span className='email fontsize_12 color_aaa'>
							xiewendao@gmail.com
						</span>
					</div>
				</div>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='profile'>
				<div className='menu_item flex align_center'>
					<Icon
						type='edit'
						style={{ fontSize: '15px', color: '#999', marginRight: '16px' }}
					/>
					<span>修改资料</span>
				</div>
			</Menu.Item>
			<Menu.Item key='update'>
				<div className='menu_item flex align_center'>
					<Icon
						type='safety'
						style={{ fontSize: '16px', color: '#999', marginRight: '16px' }}
					/>
					<span>修改密码</span>
				</div>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='logout'>
				<div className='logout menu_item flex align_center'>
					<Icon
						type='logout'
						style={{ fontSize: '15px', color: '#999', marginRight: '16px' }}
					/>
					<span>退出登录</span>
				</div>
			</Menu.Item>
		</Menu>
	)

	return (
		<Header
			className={`
                        ${styles.header} 
                        ${fold ? styles.fold : ''}
                  `}
			id='layoutHeader'
		>
			<div className={styles.button} onClick={onChangeFold}>
				<Icon type={`${fold ? 'menu-unfold' : 'menu-fold'}`} />
			</div>
			<div className={styles.right}>
				<Dropdown overlay={menu} trigger={[ 'click' ]} placement='bottomRight'>
					<div className='avatar flex justify_center align_center'>
						<Avatar
							src='https://avatars1.githubusercontent.com/u/25472851'
							size={36}
							shape='square'
						/>
					</div>
				</Dropdown>
			</div>
		</Header>
	)
}

export default Index
