// https://nuxt.com/docs/api/configuration/nuxt-config
import menu from './menu'
export default defineAppConfig({
  // 应用设置
  app: {
    // 应用名称
    name: 'Nuxt3-Pro',
    // 应用Logo
    icon: '',
    // 用户协议
    userAgreement: 'https://superox.cn/index/law/agreement',
    // 隐私政策
    privacyPolicy: 'https://superox.cn/index/law/privacy',
    // 后台请求接口
    apiUrl: 'http://www.example.com',
  },
  // 版权设置
  copyright: {
    // 是否显示版权
    show: true,
    // 版权文字
    text: 'Nuxt3-Pro版权所有',
    // 版权跳转链接
    url: 'https://mzyun.tech'
  },
  // 微信设置
  weixin: {
    // 微信开放平台appid，用于扫码登录
    appid: ''
  },
  // 菜单
  menu: menu
});
