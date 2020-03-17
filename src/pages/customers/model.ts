import qs from 'qs'
import modelExtend from 'dva-model-extend'
import pageModel from '@/utils/model'
import { Service_getContent } from './service'

export default modelExtend(pageModel, {
	namespace: 'customers',

	state: {
		state_current_item: {},
		state_modal_visible: false,
		state_modal_type: 'view'
	},

	subscriptions: {
		setup ({ dispatch, history }) {
			history.listen((location) => {
				if (location.pathname === '/customers') {
					dispatch({
						type: 'query',
						payload: {
							...location.query
						}
					})
				}
			})
		}
	},

	effects: {
		*query ({ payload = {} }, { call, put }) {
			if (!payload['pageNo']) {
				payload = { ...payload, ...qs.parse(location.search) }
                  }
                  
			const { success, result } = yield call(Service_getContent, payload)

			if (success) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: result.data.list,
						pagination: {
							current: Number(payload['pageNo']) || 1,
							pageSize: Number(payload['pageSize']) || 10,
							total: result.total
						}
					}
				})
			}
		}
	},

	reducers: {
		showModal (state, { payload }) {
			return { ...state, ...payload, state_modal_visible: true }
		},
		hideModal (state) {
			return { ...state, state_modal_visible: false }
		}
	}
})
