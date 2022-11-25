<!--
createTime:2022/11/23 9:24
path:src/packages/components/input/src
proName:myUI
fileName:index
author:俞棵
remark:输入框
-->

<script lang="ts" setup>
import "./index.scss";
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
  }>(),
  {
    modelValue: "",
    placeholder: "请输入",
    prefix: "",
    suffix: "",
  }
);

const emit = defineEmits<{
  (_p: "update:modelValue", _v: string): void;
}>();

const text = ref(props.modelValue);
const isFocus = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    text.value = val;
  }
);

watch(text, (val) => {
  emit("update:modelValue", val);
});
</script>

<template>
  <div
    class="yk-input-wrapper"
    :class="{ 'yk-input-wrapper-focused': isFocus }"
  >
    <slot name="prefix">
      <span class="yk-prefix">{{ prefix }}</span>
    </slot>
    <input
      v-model="text"
      class="yk-input"
      type="text"
      @focus="isFocus = true"
      @blur="isFocus = false"
      :placeholder="placeholder"
    />
    <slot name="suffix">
      <span class="yk-suffix">{{ suffix }}</span>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.index {
}
</style>
