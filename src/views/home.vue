<template>
    <div class="am-list" am-mode="flat chip 43px">
        <div class="am-list-header">页面列表</div>
        <div class="am-list-body">
            <a v-link="'home'" class="am-list-item">
                <div class="am-list-content">首页</div>
                <div class="am-list-arrow"><span class="am-icon" am-mode="arrow-horizontal"></span></div>
            </a>
            <a v-link="'pay'" class="am-list-item">
                <div class="am-list-content">支付</div>
                <div class="am-list-arrow"><span class="am-icon" am-mode="arrow-horizontal"></span></div>
            </a>
            <a v-link="'bill'" class="am-list-item">
                <div class="am-list-content">账单</div>
                <div class="am-list-arrow"><span class="am-icon" am-mode="arrow-horizontal"></span></div>
            </a>
        </div>
    </div>
    <div class="am-wingblank" am-mode="10px">
        <button type="button" class="am-button" am-mode="blue light small">蓝色简易按钮</button>
    </div>
</template>

<script>
    //添加数据加载动画 特殊的时间可以使用到
    module.exports = {
        ready: function () {
            //$.getJSON();
        }
    }
</script>