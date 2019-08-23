// 首页
import HomeIndex from '../views/home/index';
import HomeAttention from '../views/home/Attention';
import HomeDetails from '../views/home/HomeDetails';
// 地方
import TourIndex from '../views/tour/index';



export default [
	// 首页
	{
		path: '/',
		id: 'his',
		component: HomeIndex,
	},
	{
		path: '/homeattention/',
		id:'homeattention',
		component: HomeAttention,		
	}, 
	{
		path:'/homedetails/',
		id:"homedetails",
		component:HomeDetails
	},

	
	// 地方
	// {
	// 	path: '/hotel/',
	// 	id:'hotel',
	// 	component: HotelIndex,	
	// },
	// 酒店

	// 旅行
	{
		path: '/tour/',
		id:'tour',
		component: TourIndex,	
	}

	// 我的
]
// export default new Router({
// 	routes:[
// 		{path:'/',component:HomePage},
// 		// {path:'/about/'},
// 	]
// })
