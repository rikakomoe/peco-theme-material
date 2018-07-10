<template>
  <div>
    <drawer />
    <slot />
  </div>
</template>

<script>
  import Drawer from "./Drawer";

  export default {
    components: { Drawer }
  }
</script>

<style scoped>
</style>