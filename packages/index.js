import ZDragWrap from './dragWrap/index.js';
import ZDragItem from './dragItem/index.js';
import watermark from './watermark/index.js';
import './common.css';

const components = [
    ZDragItem,
    ZDragWrap
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = Vue => {
    if(install.installed) return;
    components.map(component => Vue.component(component.name,component));
    Vue.use(watermark); // 按需加载
}
// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的方法必须有install  才能够被Vue.uer方法安装
    install,
    ZDragWrap,
    ZDragItem
}