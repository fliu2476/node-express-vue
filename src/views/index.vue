<template>
    <div>
        <img class="index" src="../assets/images/index.png">
    </div>
</template>
<script>
    require('../assets/scss/iconfont/iconfont.css');
    require('../assets/scss/wx.scss');
    //添加数据加载动画 特殊的时间可以使用到
    module.exports = {
        ready: function () {
            var _self = this;
            setTimeout(function () {
                _self.$route.router.go({name: 'home'});
            }, 2000);
        }
    }
</script>
<style>
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
