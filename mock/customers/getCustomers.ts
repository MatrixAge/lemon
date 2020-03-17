import mock from 'mockjs'

const cusomers = {
	success: true,
	result: {
		data: mock.mock({
			'list|100': [
				{
					_id: '@guid',
					avatar: 'https://unsplash.it/100/100/?',
					nickname: '@last',
					realname: '@name',
					mobile: '1' + '3' + '@id',
					wechat: '@first',
					weibo: '@cword(4, 8)',
					version: '@pick(["gvp","svp","vip"])',
					version_cost: '@pick(["88","128","666"])',
					last_login: '@date(T)',
					status: '@pick(["1","2","3","4","5"])'
				}
			]
		}),
		total: 100
	}
}

export default {
	[`GET /api/v1/getCustomers`] (req, res) {
		setTimeout(() => {
			res.status(200).json(cusomers)
		}, Math.floor(Math.random() * 2) * 1000)
	}
}
