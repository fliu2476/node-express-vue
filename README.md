#上海电信新微厅项目
================
## 重要功能模块

* 设备绑定
* 套餐使用情况查询
* 套餐使用情况查询
* 设备号码充值
* 账单缴费
* 余额一点通
* 流量订购

## 执行命令

安装必要依赖
```
npm install --production
```

安装开发依赖
```
npm install --dev
```

## 前端调试模式 (http://localhost:8090)
```
npm run watch
```

## 生产部署顺序

安装全部依赖
```
npm install
```

执行项目编译
```
npm run build
```

启动服务(http://localhost:3400)

```
npm run server
```

###开发

###目录结构
<pre>
.
├── README.md
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── views          // 各种页面
│   ├── filters.js     // 各种过滤器
│   └── main.js        // Webpack 预编译入口
├── server.js          // webpack-dev-server服务配置
└── webpack.config.js  // Webpack 配置文件
└── gulpfile.js        // Gulp 配置文件
</pre>

### 参考链接
* [基于vue.js重写Cnodejs.org社区的webapp](https://github.com/shinygang/Vue-cnodejs)
* [AntUI9.0——钱包H5规范库](http://am-team.github.io/antui/nav.html#use)
* [vuejs 官方](http://vuejs.org/)
* [vue-router 文档](http://router.vuejs.org/)
* [gulp 官方](http://gulpjs.com)
* [webpack 官方](http://webpack.github.io/)