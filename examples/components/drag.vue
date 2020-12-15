<template>
<div class="box">
  <ZDragWrap
  :data="list"
  @watchData="watchData"
  class="drag-wrap"
  >
    <ZDragItem class="item" v-for="(item, index) in list" :key="index">
      <template #drag>
        <div>拖拽Dom</div>
      </template>
      <div>{{item}}</div>
    </ZDragItem>
  </ZDragWrap>
</div>
</template>
<script>
export default {
  data() {
    return {
      list: [111, 222, 333, 444, 555, 666, 777, 888, 999],
    };
  },
  methods: {
    watchData(newList) {
      console.log('newList', newList);
    },
  },
};
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content:space-between;
}
.drag-wrap {
  display: inline-block;
}
</style>
