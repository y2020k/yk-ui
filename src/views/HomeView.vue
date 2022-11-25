<script lang="ts" setup>
import { ref } from "vue";

const inputVal = ref("");
</script>

<template>
  <main>
    <YkButton type="error">123</YkButton>
    <div class="input">
      <YkInput v-model="inputVal" prefix="$"></YkInput>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.input {
  margin: 12px 0;
}
</style>
