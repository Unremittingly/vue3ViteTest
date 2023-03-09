<template>
  <div>
    index layout
  </div>
</template>

<style lang="scss">
//全局input+按钮的组合的primary样式 用primary 不用灰色
.el-input-group__append button.el-button {
  background-color: var(--el-button-bg-color);
  color: white;
}
.el-input-group__append button.el-button:hover {
  background-color: var(--el-color-primary-dark-2);
  color: white;
}
</style>
