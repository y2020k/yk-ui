<!--
createTime:2022/11/21 10:41
path:src/components/button/src
proName:myUI
fileName:index
author:俞棵
remark:按钮
-->

<script lang="ts" setup>
import "./index.scss";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: string;
    disabled?: boolean;
  }>(),
  {
    type: "default",
    disabled: false,
  }
);

const classString = computed(() => [
  "yk-button",
  `yk-button-type-${props.type}`,
  props.disabled ? "yk-button-disabled" : "",
]);
</script>

<template>
  <button :class="classString" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
