import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "VUE",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "VUE",
        icon: "pen-to-square",
        prefix: "VUE/",
        children: [
          "1",
          "11",
          "3",
          "4",
          "8"
        ],
      },
    ],
  },
  {
    text: "JS",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "JS",
        icon: "pen-to-square",
        prefix: "JS/",
        children: [
          "1",
          "2",
          "5",
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
