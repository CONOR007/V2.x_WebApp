<template>
    <div>
        <transition>
            <router-view></router-view>
        </transition>
        <van-tabbar class="bottom" v-model="active" @change="onChageTab">
            <van-tabbar-item name="/shop" icon="shop-o">商城</van-tabbar-item>
            <van-tabbar-item name="/spots" icon="points">现货</van-tabbar-item>
            <van-tabbar-item name="/order" icon="description">订单</van-tabbar-item>
            <van-tabbar-item name="/news" icon="newspaper-o">资讯</van-tabbar-item>
            <van-tabbar-item name="/mine" icon="contact">我的</van-tabbar-item>
            <!-- <van-tabbar-item  name="test"  icon="setting-o"  to="/test" >测试</van-tabbar-item> -->
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: ""
        };
    },
    mounted() {
        //Tabbar的选中功能在有路由嵌套时存在bug。这里用路由参数来判断。
        let url = window.location.pathname;
        var reg = /([^/]+)/g;
        let ary = [];
        url.replace(reg, function($1, $2) {
            ary.push($2);
        });
        this.active = `/${ary[0]}`;
    },
    methods: {
        onChageTab(val) {
            this.$router.push({ path: val });
        }
    }
};
</script>

<style lang="scss">
// 底部选项卡
.bottom.van-tabbar {
    height: 120px;
    @include boxShadow($white, $shadow, 0, 0, 10px);
    border-top: 1px solid $bordergrey;
    .van-tabbar-item {
        .van-tabbar-item__icon {
            .van-icon {
                font-size: 40px;
                color: $lightBlack;
            }
        }
        .van-tabbar-item__text {
            font-size: 20px;
            line-height: 30px;
            color: $lightBlack;
        }
    }
    .van-tabbar-item.van-tabbar-item--active {
        .van-tabbar-item__icon {
            .van-icon {
                color: $blue;
            }
        }
        .van-tabbar-item__text {
            color: $blue;
            font-weight: normal;
        }
    }
}
</style>