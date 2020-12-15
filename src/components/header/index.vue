<template>
    <div class="headerBar">
        <a v-show="backFlag" @click="onClickLeft"><van-icon name="arrow-left"></van-icon></a>
        <div class="title">{{title}}</div>
        <a v-show="onRightIcon" @click="onClickRight" class="rightIcon"><van-icon :name="onRightIcon"></van-icon></a>
    </div>
</template>

<script>
import mixin from "@/mixin";

export default {
    // 头部属性：'title'：标题,'backFlag'：是否显示返回键,'onRightIcon'：右侧图标名,'rightBack'：右侧回调方法,'goBack':左侧回调方法
    props:['title','backFlag','onRightIcon','rightBack','goBack'],
    data () {
        return {
            
        }
    },
    methods: {
        onClickLeft() {
            // 只暴露方法名，具体操作在父组件的 goBack 方法中写
            this.$emit('goBack')
        },
        onClickRight() {
            this.$emit('rightBack')
        }
    }
};
</script>

<style lang="scss" scoped>
.headerBar {
    text-align: left;
    height: 95px;
    line-height: 95px;
    background-color: $white;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    border-bottom: 1px solid $bordergrey;
    @include flex();
    .van-icon {
        font-size: 40px;
        color: $delete;
        width: 40px;
        line-height: 95px;
        padding: 0 24px;
        z-index: 99;
    };
    .title {
        text-align: center;
        line-height: 1.48438rem;
        font-size: 0.40625rem;
        color: $grey;
        width: 100%;
        flex: 1;
        position: absolute;
    }
    .rightIcon{
        position: fixed;
        right: 0; 
    }
}
</style>