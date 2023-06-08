import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "3621",
  description: "3621的个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
