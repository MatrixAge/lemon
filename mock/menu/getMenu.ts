const database = [
	{
		id: '1',
		title: 'Dashboard',
		url: '/dashboard',
		icon: 'dashboard'
	}
]

export default {
	[`GET /api/v1/getMenu`] (req, res) {
		res.status(200).json(database)
	}
}
