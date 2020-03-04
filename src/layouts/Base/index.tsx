import React, { Fragment } from 'react'
import { withRouter } from 'umi'
import { connect } from 'umi'
import config from '@/config/site'

const Index = (props: any) => {
      const { app, children } = props
      const { location: { pathname } } = props

      return (
            <Fragment>
                  <title>{config.site_name}</title>
                  {children}
            </Fragment>
      )
}

export default withRouter(connect(({ app }: any) => ({ app }))(Index))
