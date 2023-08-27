** 本项目来源于《腾讯云Cloud Studio实战训练营》的参赛作品，该作品在腾讯云Cloud Studio环境中运行无误。**

# Nuxt3-Pro
基于Nuxt3、Element-Plus、TailwindCss的中后台快速开发框架

## 特色  
* 使用Vite打包，启动快，热更新快，可助力程序员快速开发后台应用  
* 继承Nuxt3特色，文件即路由，组件自动导入，全面提高开发效率
* CSS使用tailwind,免去CSS命名烦恼，坚持移动优先原则，可实现PC、平板和手机自适应  

## 快速开始  
1. 克隆代码  
```
git clone https://gitee.com/liuming9157/nuxt3-pro
```
2. 安装依赖  
```
cd nuxt3-pro  
pnpm install  
or 
npm install
```
3. 启动
```
pnpm run dev  
or  
npm run dev  
```
### 在CloudStudio环境中
本项目包含CloudStudio环境中的在线预览脚本`.vscode\preview.yml`,在CloudStudio中打开工作空间时会自动安装依赖并启动预览   

## 默认登录密码
#### 验证码登录
手机号：任意手机号
验证码：1234
#### 密码登录  
账号：admin
密码：123456  
#### 微信扫码登录
在`app.config.ts`文件中配置微信开放平台appid参数后可用  


## 开发文档  

### 应用配置  
修改`app.config.ts`文件，各参数功能参考注释文字  

### 菜单配置  
修改`menu.ts`文件即可修改系统菜单    

## 内置功能  

### 实用组合式函数  
* useRequest(基于useFetch,可设置baseURL，拦截器，增加自动loading)  
* useGet(简化useRequest的get请求)  
* usePost(简化useRequest的post请求)
* useEcharts(按需引入使用echarts库)  
* useWxLogin(微信网页登陆返回登陆url)  

### 自定义指令
* v-qrcode(生成二维码)
  
## 依赖  
* [nuxt v3](https://nuxt.com)  
* [element-plus](https://element-plus.gitee.io)  
* [tailwindcss v3](https://tailwindcss.com)  
* [fontawesome v4](https://fontawesome.dashgame.com/)  
* [pinia v2](https://pinia.vuejs.org/)   
* [Echarts v5](https://echarts.apache.org/)  
* [node-QrCode v1.5](https://github.com/soldair/node-qrcode)  
* [typejs v2](https://mattboldt.com/demos/typed-js/)  
* [@vueuse/integrations v10.1.2](https://github.com/vueuse/vueuse/tree/main/packages/integrations) 


## 关于作者  
刘明，十年创业老兵，开源技术爱好者。
如有问题可扫码联系
![企业微信](http://alioss-cdn.mzyun.tech/common/qrcode.jpg)




  

## 使用插画库 
[iconfont缺省占位图](https://www.iconfont.cn/illustrations/detail?cid=39794) 
