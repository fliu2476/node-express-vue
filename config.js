var path = require('path');

var config = {
    app: 'wx',
    debug: true,

    name: 'WX',//项目名称
    description: '上海电信微厅',
    keywords: '',

    //cdn host ,example http://cnodejs.wap.com
    site_static_host: '',//静态文件存储域名
    // wap 的域名
    host: 'http://192.168.1.20:3400',

    // mongodb 配置
    db: 'mongodb://192.168.199.8/wx_dev',
    db_name: 'wx_dev',
    restUrl: 'http://101.95.49.5',

    session_secret: 'shtelecom_wx_secret',
    auth_cookie_name: 'shtelecom_wx',

    //程序运行端口
    port: 3400,

    //上海市  区信息
    areas: ['黄浦区', '浦东新区', '徐汇区', '长宁区', '静安区', '普陀区', '闸北区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '金山区',
        '松江区', '青浦区', '奉贤区', '崇明县']

};

module.exports = config;
