<template>
  <div class="sidebar-header header-cover"
       :style="`background-image: url(${url_for($themeConfig.img.sidebar_header)});`">
    <!-- Top bar -->
    <div class="top-bar"></div>

    <!-- Sidebar toggle button -->
    <button type="button" class="sidebar-toggle mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
            style="display: initial;" data-upgraded=",MaterialButton,MaterialRipple">
      <i class="material-icons">clear_all</i>
      <span class="mdl-button__ripple-container">
            <span class="mdl-ripple">
            </span>
        </span>
    </button>

    <!-- Sidebar Avatar -->
    <div class="sidebar-image">
      <img :src="url_for($themeConfig.img.avatar)" :alt="`${$siteData.author}'s avatar`">
    </div>

    <!-- Sidebar Email -->
    <a data-toggle="dropdown" class="sidebar-brand" href="#settings-dropdown">
      {{$themeConfig.sns.email}}
      <b class="caret"></b>
    </a>
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