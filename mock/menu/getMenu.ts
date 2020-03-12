const menu = [
	{
		id: '1',
		title: 'Dashboard',
		url: '/dashboard',
		icon: 'dashboard'
	},
	{
		id: '2',
		title: 'Customers',
		url: '/customers',
		icon: 'team'
	}
]

export default {
	[`GET /api/v1/getMenu`] (req, res) {
		res.status(200).json(menu)
	}
}
