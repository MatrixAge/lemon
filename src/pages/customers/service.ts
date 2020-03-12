import request from '@/utils/helpers/request'
import API from '@/api/v1'

export const Service_getContent = () => {
	return request({
		url: API.API_getCustomers,
		method: 'get'
	})
}
