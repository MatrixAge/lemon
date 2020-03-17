import { request } from 'umi'

interface IRequest {
	url: string
	method?: string
	params?: object
}

const _request = ({ url, method, params }: IRequest) => {
	return request(url, {
		method,
		params
	})
}

export default _request
