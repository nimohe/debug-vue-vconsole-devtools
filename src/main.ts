import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// 引用
import VConsole from "vconsole";
import { initPlugin } from "vue-vconsole-devtools";

// 在创建vue实例之前运行
// new VConsole()
initPlugin(new    VConsole()); 

createApp(App).mount('#app')
