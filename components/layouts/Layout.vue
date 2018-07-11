<template>
  <div>
    <drawer />
    <div class="__container">
      <div class="container">
        <slot />
      </div>
      <v-footer />
    </div>
  </div>
</template>

<script>
  import Drawer from "./Drawer";
  import VFooter from './Footer';

  export default {
    components: { Drawer, VFooter }
  }
</script>

<style scoped>
  .__container {
    padding-top: 10em;
  }

  .container {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>

<style>

</style>