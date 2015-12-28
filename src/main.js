import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import validator from 'vue-validator'
import config from '../config'
import routerMap from './routers'
import FastClick from 'fastclick'

//根据配置判断开放测试模式
if (config.debug) {
    Vue.config.debug = true;
}

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(validator);

$.ajaxSettings.crossDomain = true;

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");