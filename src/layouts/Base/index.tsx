import React, { Fragment } from 'react'
import { withRouter } from 'umi'
import { connect } from 'dva'
import config from '@/config/site'

const Index = (props: any) => {
    const { children } = props
    const { location: { pathname } } = props

    console.log(props)

    return (
        <Fragment>
            <title>{config.site_name}</title>
            {children}
        </Fragment>
    )
}

const getApp = ({ app }) => ({ app })

export default withRouter(connect(getApp)(Index))
