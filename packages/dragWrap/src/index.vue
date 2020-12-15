<template>
  <div ref="wrap" @dragenter.prevent @dragover.prevent>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ZDragWrap',
  props: {
    data: {
      type: Array,
      default() { return []; },
    },
  },
  created() {
    this.toDom = '';
    this.fromDom = '';
    this.children = [];
    this.$on('dragstart', this.onDragstart);
    this.$on('dragenter', this.onDragenter);
    this.$on('dragend', this.onDragend);
    this.$on('putChild', (child) => {
      this.children.push(child);
    });
  },
  methods: {
    onDragstart(el) {
      // 开始拖拽
      this.fromDom = el;
    },
    onDragenter(el) {
      this.toDom = el;
      console.log('emter', el);
      // eslint-disable-next-line
      if (this.fromDom === this.toDom) return;
      if (this.isPrevNode(this.fromDom, this.toDom)) {
        this.$refs.wrap.insertBefore(this.fromDom, this.toDom);
      } else {
        this.$refs.wrap.insertBefore(this.fromDom, this.toDom.nextSibling);
      }
    },
    onDragend() {
      if (!this.data.length) return;
      const realDomOrder = [...this.$el.children].filter((child) => child.classList.contains('__drag_item'));
      this.getDataOrder(realDomOrder, this.children);
    },
    // 获取真实的数据的顺序
    getDataOrder(realList, dragAfterList) {
      const order = realList.map((realItem) => dragAfterList.findIndex((dragItem) => realItem === dragItem));
      // order 现在的排列顺序的index
      const newData = [];
      order.forEach((item, i) => {
        newData[i] = this.data[item];
      });
      this.$emit('watchData', newData);
    },
    // 判断前后关系
    isPrevNode(from, to) {
      /**
       * previousSibling
       * DOM属性
       * 获取上一个兄弟节点
       */
      while (from.previousSibling !== null) {
        if (from.previousSibling === to) return true;
        // eslint-disable-next-line
        from = from.previousSibling;
      }
    },
  },
};
</script>
