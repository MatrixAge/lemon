import React, { memo } from 'react'
import { connect } from 'umi'
import styles from './index.less'

const Index = (props: any) => {
	const { app: { fold }, loading, full } = props

	return (
		<div
			className={`
                        ${styles._local} 
                        ${loading ? styles.show : ''} 
                        ${fold ? styles.fold : ''} 
                        ${full ? styles.full : ''}
                  `}
		>
			<div className='wrap'>
				<div className='inner' />
				<div className='text'>loading</div>
			</div>
		</div>
	)
}

export default memo(connect(({ app }: any) => ({ app }))(Index))
