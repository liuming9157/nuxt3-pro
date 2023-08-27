const  menu = [
  {
    icon: "fa-dashboard",
    title: "DashBoard",
    url: "/",
    sub: [
      { title: "首页", url: "/" },
    ],
  },
  {
    icon: "fa-check-circle-o",
    title: "结果页",
    url: "/result",
    sub: [
      { title: "成功页", url: "/result/success" },
      { title: "失败页", url: "/result/error" },
    ],
  },
  {
    icon: "fa-edit",
    title: "表单页",
    url: "/form",
    sub: [
      { title: "分步表单", url: "/form/step-form" },
    ],
  },
  {
    icon: "fa-warning",
    title: "异常页",
    url: "/exception",
    sub: [
      { title: "403", url: "/exception/403" },
      { title: "404", url: "/exception/404" },
      { title: "500", url: "/exception/500" },
    ],
  },
  {
    icon: "fa-user",
    title: "个人页",
    url: "/account",
    sub: [
      { title: "个人设置", url: "/account/settings" },
    ],
  },
];
export default menu;