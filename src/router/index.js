import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/registered',
        name: 'Registered',
        component: () =>
            import ('../views/registered/Registered.vue'),
        meta: {
            title: '注册页',
            path: '/registered',
        }
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue'),
        meta: {
            title: '登录页',
            path: '/login',
        }
    },
    {
        path: '',
        component: Layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: '首页',
                    path: '/'
                }
            },

            {
                path: '/see',
                name: 'see',
                component: () =>
                    import ('../views/details/see/See.vue'),
                meta: {
                    title: "查看",
                    path: '/see',
                }
            },
            {
                path: '/Published',
                name: 'Published',
                component: () =>
                    import ('../views/details/published/Published.vue'),
                meta: {
                    title: '已发布',
                    path: '/Published',
                }
            }, {
                path: '/statistical',
                name: 'statistical',
                component: () =>
                    import ('../views/details/statistical/Statistical.vue'),
                meta: {
                    title: '统计',
                    path: '/statistical',
                }
            }, {
                path: '/article',
                name: 'article',
                component: () =>
                    import ('../views/details/article/Article.vue'),
                meta: {
                    title: '发表文章',
                    path: '/article',
                }
            }, {
                path: '/export',
                name: 'export',
                component: () =>
                    import ('../views/details/export/Export.vue'),
                meta: {
                    title: '导出excel',
                    path: '/export',
                }
            }, {
                path: '/tab',
                name: 'tab',
                component: () =>
                    import ('../views/details/tab/Tab.vue'),
                meta: {
                    title: '标签页',
                    path: '/tab',
                }
            }, {
                path: '/upload',
                name: 'upload',
                component: () =>
                    import ('../views/details/upload/Upload.vue'),
                meta: {
                    title: '图片上传',
                    path: '/upload'
                }
            }, {
                path: '/exit',
                name: 'exit',
                component: () =>
                    import ('../views/details/exit/Exit.vue'),
                meta: {
                    title: '退出',
                    path: '/exit'
                }
            }
        ]

    }, {
        path: '/table',
        name: 'table',
        component: () =>
            import ('../views/table/Table.vue'),
        meta: {
            title: '表格',
            path: '/table'
        }
    }, {
        path: '/form',
        name: 'form',
        component: () =>
            import ('../views/form/Form.vue'),
        meta: {
            title: '表单',
            path: '/form',
        }
    }, {
        path: '*',
        component: () =>
            import ('../views/error/Error.vue'),
        meta: {
            title: '错误页',
            path: '*',
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    let whitePath = ['/registered', '/login'];
    let name = localStorage.getItem('name')
    if (whitePath.includes(to.path)) {
        next()
    } else {
        if (name) {
            next()
        } else {
            next('/login')
        }
    }
    next()
})
export default router