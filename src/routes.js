import Login from './views/login.vue'
import Register from './views/register.vue'
import Forget from './views/forgetPassword.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import PeopleManage from './views/nav1/peopleManage.vue'
import PeopleInfo from './views/nav1/peopleInfo1.vue'
import RealtimeResults from './views/nav2/realtimeResults.vue'
import AttendanceRate from './views/nav2/attendanceRate.vue'
import Settings from './views/nav3/settings.vue'
import Signs from './views/nav4/signs.vue'

// 前端路由配置
let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/forget',
        component: Forget,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '管理',
        iconCls: 'el-icon-message',
        children: [
            { path: '/peopleManage', component: PeopleManage, name: '人员管理' },
            { path: '/peopleInfo', component: PeopleInfo, name: '添加人员' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '统计',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/realtimeResults', component: RealtimeResults, name: '实时考勤结果' },
            { path: '/attendanceRate', component: AttendanceRate, name: '出勤率' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '设置',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/settings', component: Settings, name: '账号配置' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '签到',
        iconCls: '	fa fa-angellist',
        children:[
            { path: '/signs' , component: Signs,name: '用户签到' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;