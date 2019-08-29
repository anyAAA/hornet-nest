## 前言

最近在蚂蜂窝公司辞职了，思来想去觉得重构下马蜂窝App页面比较好，毕竟公司这款软件我也一直在使用，在用户交互和创造粘度这一块，公司做的很棒，也是我这一次想仿写公司app的重要原因。



## 技术栈

vue2 + vuex + vue-router + framework7-ui + cli3.x + ES6 + axios + sass + flex + svg


## 项目运行

cd web

npm install

npm run serve

## 效果演示

 扫描下方二维码
 
![](http://oano.cn/images/chroma.png)

Android 下载地址：[下载地址](http://service.dcloud.net.cn/build/download/815e1970-c5a3-11e9-886f-1d8291cceed9)

## 目标功能 

- [x] 首页 —— 关注
- [x] 首页 ——  推荐
- [x] 首页 ——  附近
- [ ] 北京(定位)  —— 怎么玩
- [ ] 北京(定位)  —— 住哪里
- [ ] 北京(定位)  —— 吃什么
- [ ] 北京(定位)  —— 买什么
- [ ] 订酒店 —— 
- [ ] 去旅行 —— 酒店
- [ ] 去旅行 —— (定位)周边
- [ ] 去旅行 —— 当地热销
- [ ] 去旅行 —— 限时特惠
- [ ] 去旅行 —— 精选
- [ ] 去旅行 —— 周边
- [ ] 去旅行 —— 国内
- [ ] 去旅行 —— 境外
- [ ] 去旅行 —— 取景地巡礼
- [ ] 我的 —— 设置

## 最终目标
1、用node.js构建好应用到的接口

2、用清晰思路 将目标功能一一实现

## 部分截图

首页-关注

![](https://github.com/anyAAA/hornet-nest/web/screenshots/nod1.png)
![](https://github.com/anyAAA/hornet-nest/web/screenshots/nod2.png)

首页-推荐

![](https://github.com/anyAAA/hornet-nest/web/screenshots/nod3.png)

首页-附近

 ![](https://github.com/anyAAA/hornet-nest/web/screenshots/nod4.png)

去旅行

 ![](https://github.com/anyAAA/hornet-nest/web/screenshots/nod5.png)

项目布局
```
.
├── public                                      // 入口
│   ├── favicon.ico                             // 图标
│   ├── index.html                              // 入口html文件
├── src                                         // 源码目录
│   ├── assets                                  // 静态文件+公共图片
│   │   ├── css                                 // css样式
│   │   └── fonts                               // framework7字体文件
│   ├── components                              // 公共组件
│   │   ├── Search.vue                          // 搜索组件
│   │   └── searchtes.vue  
│   ├── router
│   │   └── index.js                            // 路由配置
│   ├── views
│   │   ├── home                                // 首页组件
│   │   │   ├── Attention.vue                   // 首页页面
│   │   │   └── index.vue                       // home 根页面
│   │   ├── hotel
│   │   │   └── index.vue                       // 订酒店组件
│   │   ├── location 
│   │   │   └── index.vue                       // 定位地点组件
│   │   ├── me
│   │   │   └── index.vue                       // 我的
│   │   └──  tour
│   │   │   └── index.vue                       // 去旅行组件 
│   ├── App.vue                                 // 页面入口文件 
│   ├── main.js                                 // 程序入口文件，加载各种公共组件 
│   ├── store.js                                // vuex的状态管理 创建 store
├── babel.config.js  
├── package.json
├── package-lock.json
├── vue.config.js
```