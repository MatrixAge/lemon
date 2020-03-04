import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Base from './Base'

const Index = (props) => (
    <ConfigProvider locale={zhCN}>
        <Base>{props.children}</Base>
    </ConfigProvider>
)

export default Index
