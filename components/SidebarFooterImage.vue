<template>
  <div>
  <span v-for="(v, i) in $themeConfig.img.footer_image" :id="footer-image">
        <a :href="url_for(v.link)" target="_blank" :title="i">
            <img :src="url_for(v.src)" :alt="i"><!--
     --></a>
    </span>
  </div>
</template>

<script>
  import url_for from '../utils/url_for';

  export default {
    created() {
      this.url_for = url_for.bind(this);
    },
  }
</script>

<style scoped>

</style>