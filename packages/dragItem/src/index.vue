<template>
  <div
    :draggable="!$slots.drag || isDrag"
    @dragstart.stop="onDragstart"
    @dragenter.stop="onDragenter"
    @dragend.stop="onDragend"
    class="__drag_item"
    :style="{cursor: !$slots.drag ? 'move': ''}"
  >
    <slot name="drag" />
    <slot />
  </div>
</template>
<script>
import Emitter from '../../utils/emitter';

export default {
  name: 'ZDragItem',
  mixins: [Emitter],
  data() {
    return {
      isDrag: false,
    };
  },
  mounted() {
    if (this.$slots.drag) {
      this.setSlotAttr();
    }
    this.dispatch('ZDragWrap', 'putChild', this.$el);
  },
  methods: {
    onDragstart() {
      this.$el.style.opacity = '0.3';
      this.dispatch('ZDragWrap', 'dragstart', this.$el);
    },
    onDragenter() {
      console.log('dragenter')
      this.dispatch('ZDragWrap', 'dragenter', this.$el);
    },
    onDragend() {
      this.$el.style.opacity = '1';
      this.dispatch('ZDragWrap', 'dragend');
    },
    setSlotAttr() {
      const slotVNode = this.$slots.default.find((vnode) => !vnode.data && vnode.text !== '');
      const dragDom = slotVNode.elm.previousSibling;
      if (dragDom.previousSibling !== null) {
        throw '具名插槽只能有一个根节点';
      }
      dragDom.addEventListener('mouseenter', () => {
        this.isDrag = true;
      });
      dragDom.addEventListener('mouseleave', () => {
        this.isDrag = false;
      });
      dragDom.style.cursor = 'move';
    },
  },
};
</script>
<style lang="css">
.__drag_item {
  display:inline-block;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background: green;
  color: #fff;
  text-align: center;
  animation: shake .3s;
  display:inline-block;
  margin: 10px 10px;
}
@keyframes shake {
  0% {
    transfrom: translatesd(-10%,0,0)
  }
  50% {
    transfrom: translatesd(10%,0,0)
  }
  100% {
    transfrom: translatesd(0%,0,0)
  }
}
</style>
