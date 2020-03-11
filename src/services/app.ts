import request from '@/utils/helpers/request'
import API from '@/api/v1'

export const Service_getRouteList = () => {
	return request({
		url: API.API_getMenu,
		method: 'get'
	})
}