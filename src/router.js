const routers = [{
    path: '/',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['./views/login/loginIn.vue'], resolve)
}, {
    path: '/signUp',
    name: 'signUp',
    meta: {
        title: '欢迎注册~'
    },
    component: (resolve) => require(['./views/login/signUp.vue'], resolve)
}, {
    path: '/home',
    name: 'home',
    meta: {
        title: '你来了？犬次郎'
    },
    component: (resolve) => require(['./views/home.vue'], resolve)
}, {
    path: '*',
    component: (resolve) => require(['./views/public/NotFound.vue'], resolve)
}];
export default routers;