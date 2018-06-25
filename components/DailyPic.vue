<template>
  <!-- Daily pic -->
  <div :class="dailyPicClass">

    <!-- Pic & Slogan -->
    <div class="mdl-card__media mdl-color-text--grey-50" :style="`background-image:url(${url_for($themeConfig.img.daily_pic)})`">
      <p class="index-top-block-slogan"><a :href="$themeConfig.url.daily_pic" v-html="picSloganLink">
      </a></p>
    </div>

    <!-- Avatar & Name -->
    <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
      <!-- Author Avatar -->
      <div id="author-avatar">
        <img :src="url_for($themeConfig.img.avatar)" width="32px" height="32px" alt="avatar">
      </div>
      <div>
        <strong>{{ $siteData.author }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
  import url_for from '../utils/url_for';
  export default {
    created() {
      this.url_for = url_for.bind(this);
    },
    computed: {
      dailyPicClass() {
        const t = this.$themeConfig.card_elevation ? `mdl-shadow--${this.$themeConfig.card_elevation}dp` : '';
        return `mdl-card ${t} daily-pic mdl-cell mdl-cell--8-col index-top-block`;
      },
      picSloganLink() {
        if (this.$themeConfig.uiux.slogan) {
          if (Array.isArray(this.$themeConfig.uiux.slogan)) {
            return this.$themeConfig.uiux.slogan.join('<br>');
          } else {
            return this.$themeConfig.uiux.slogan;
          }
        }
        return '';
      },
    }
  }
</script>

<style scoped>

</style>