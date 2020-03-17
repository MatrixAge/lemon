import React, { memo } from 'react'
import { Link } from 'umi'
import { Layout } from 'antd'
import Menu from '../Menu'
import config from 'R/config/config'
import styles from './index.less'

const { Sider } = Layout

const Index = (props: any) => {
	const { menu, fold } = props

	return (
		<Sider
			className={styles._local}
			width={180}
			breakpoint='lg'
			trigger={null}
			collapsible
			collapsed={fold}
		>
			<div className={styles.brand}>
				<div className={styles.logo}>
					<Link to='/dashboard'>
						<img
							alt='logo'
							src={config.logo}
							style={{ width: fold ? '48px' : '64px' }}
						/>
					</Link>
				</div>
			</div>
			<div className={styles.container}>
				<Menu menu={menu} fold={fold} />
			</div>
			<div className='side_footer w_100 border_box flex justify_center align_center'>
				<span>{config.copyright}</span>
			</div>
		</Sider>
	)
}

export default memo(Index)
