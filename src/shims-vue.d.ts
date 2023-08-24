/// <reference types="vite/client" />

// 定义 *.vue 文件的类型，否则 import 所有 *.vue 文件都会报错
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
