import { request } from 'umi'

interface IRequest {
	url: string
	method?: string
	data?: string
}

const _request = ({ url, method, data }: IRequest) => {
	let data_name: string

	if (method.toLowerCase() === 'get') {
		data_name = 'data'
	} else {
		data_name = 'param'
	}

	return request(url, {
		method,
		[data_name]: data
	})
}

export default _request
