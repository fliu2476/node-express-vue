'use strict'

module.exports = function (router) {
    router.map({
        '/': {//首页
            name: 'index',
            component: require('./views/index.vue')
        },
        '/home': {
            name: 'home',
            component: require('./views/home.vue')
        },
        '/pay': {//充值
            name: 'pay',
            component: require('./views/pay.vue')
        },
        '/bill': {//账单
            name: 'bill',
            component: require('./views/bill.vue')
        }
    })
};