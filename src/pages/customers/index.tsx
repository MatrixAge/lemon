import React from 'react'
import { connect, navigateTo } from 'umi'
import Page from '@/components/Page'
import List from './components/List'
import Filter from './components/Filter'
import Modal from './components/Modal'

const Index = ({ customers, dispatch, loading, location }) => {
	const {
		list,
		pagination,
		state_current_item,
		state_modal_visible,
		state_modal_type
	} = customers
	const { query, pathname } = location

	const props_filter = {
		filter: query,
		onFilterChange: (value) => {
			navigateTo(pathname, {
				...value,
				pageNo: 1,
				pageSize: pagination.pageSize
			})
		}
	}

	const props_list = {
		pagination,
		dataSource: list,
		onChange (page) {
			navigateTo(pathname, {
				...query,
				pageNo: page.current,
				pageSize: page.pageSize
			})
		}
	}

	const props_modal = {
		loading,
		dispatch,
		item: state_current_item,
		state_modal_type: state_modal_type,
		visible: state_modal_visible,
		title: state_modal_type === 'view' ? '查看详情' : '',
		onCancel () {
			dispatch({
				type: 'customers/hideModal'
			})
		}
	}

	return (
		<Page inner loading={loading.effects['customers/query']}>
			<Filter {...props_filter} />
			<List {...props_list} />
			<Modal {...props_modal} />
		</Page>
	)
}

export default connect(({ customers, loading }: any) => ({ customers, loading }))(Index)
