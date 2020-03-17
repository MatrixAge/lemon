import request from '@/utils/helpers/request'
import API from '@/api/v1'

export const Service_getContent = (params: object) =>
	request({
		url: API.API_getCustomers,
		method: 'get',
		params
	})
