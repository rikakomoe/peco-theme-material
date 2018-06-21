<template>
  <!-- Daily pic -->
  <div :class="dailyPicClass">

    <!-- Pic & Slogan -->
    <div class="mdl-card__media mdl-color-text--grey-50" :style="picSloganStyle">
      <p class="index-top-block-slogan"><a :href="$themeConfig.url.daily_pic" v-html="picSloganLink">
      </a></p>
    </div>

    <!-- Avatar & Name -->
    <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
      <!-- Author Avatar -->
      <div id="author-avatar">
        <img :src="authorAvatarUrl" width="32px" height="32px" alt="avatar">
      </div>
      <div>
        <strong>{{ $siteData.author }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      dailyPicClass() {
        const t = this.$themeConfig.card_elevation ? `mdl-shadow--${this.$themeConfig.card_elevation}dp` : '';
        return `mdl-card ${t} daily-pic mdl-cell mdl-cell--8-col index-top-block`;
      },
      picSloganStyle() {
        return `background-image:url(${this.$siteData.url + this.$themeConfig.img.daily_pic})`;
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
      authorAvatarUrl() {
        return this.$siteData.url + this.$themeConfig.img.avatar;
      }
    }
  }
</script>

<style scoped>

</style>