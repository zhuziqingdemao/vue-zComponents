function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const { name } = child.$options;

    if (name === componentName) {
      // eslint-disable-next-line
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: { // 混入mixin使用
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root; // 找父组件
      let { name } = parent.$options; // 父组件的name属性

      while (parent && (!name || name !== componentName)) { // 和传入的componentName进行匹配
        parent = parent.$parent; // 一直向上查找

        if (parent) {
          name = parent.$options.name; // 重新赋值name
        }
      }
      if (parent) { // 找到匹配的组件实例
        // eslint-disable-next-line prefer-spread
        parent.$emit.apply(parent, [eventName].concat(params)); // $emit触发自定义事件
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
