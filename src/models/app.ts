import store from 'store'
import { Service_getRouteList } from '@/services/app'

export default {
	namespace: 'app',

	state: {
		fold: false
	},

	subscriptions: {
		setup ({ dispatch }) {
			dispatch({ type: 'query' })
		}
	},

	effects: {
		*query ({}, { call }) {
			const res = yield call(Service_getRouteList)

			store.set('menu', res)
		}
	},

	reducers: {
		updateState (state, { payload }) {
			return {
				...state,
				...payload
			}
		}
	}
}
