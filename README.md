# 项目开发文档

## 项目运行
```
yarn install
yarn run serve
yarn run build
```
## 项目书写规范
```
1.多组件数据共享才能用VUEX;
2.watch监听函数尽量避免使用;
3.配置信息统一放置在config文件中;
4.公共组件放在src/components文件中，注意公共组件中slot插槽，依据组件的方法不建议写具体操作，具体操作应在父组件中写；
```
## 路由
1.路由分两个分支：带tab栏和没有带tab栏的，划分依据：视图
注意：没有tab栏的都是在最外层重新配置路由，具体细看 router.js 文件配置

## 登陆
1.游客登陆
2.交易登陆


## 商品分类
1.挂牌分为市场，市场下面有商品组；
2.拍卖分为市场，市场有场次；