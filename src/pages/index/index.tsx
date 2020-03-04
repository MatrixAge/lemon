import React from 'react'
import { connect } from 'umi'

const Index = (props) => {
      const { app } = props

      return <div className="flex">index</div>
}

export default connect(({ app }: any) => ({ app }))(Index)
