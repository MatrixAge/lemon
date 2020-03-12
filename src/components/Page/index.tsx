import React from 'react'
import Loader from '@/components/Loader'
import styles from './index.less'

const Index = (props: any) => {
	const { className, children, loading , inner } = props

	return (
		<div
			className={`
                        ${className} 
                        ${styles._local}
                        ${inner ? styles.inner : ''}
                  `}
		>
			{loading ? <Loader loading /> : ''}
			{loading ? null : children}
		</div>
	)
}

export default Index
