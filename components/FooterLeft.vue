<template>
  <div class="mdl-mini-footer--left-section sns-list">
    <!-- Twitter -->
    <a v-if="$themeConfig.sns.twitter" :href="$themeConfig.sns.twitter" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-twitter">
        <span class="visuallyhidden">Twitter</span>
      </button><!--
     --></a>

    <!-- Facebook -->
    <a v-if="$themeConfig.sns.facebook" :href="$themeConfig.sns.facebook" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-facebook">
        <span class="visuallyhidden">Facebook</span>
      </button><!--
     --></a>

    <!-- Google + -->
    <a v-if="$themeConfig.sns.googleplus" :href="$themeConfig.sns.googleplus" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-gplus">
        <span class="visuallyhidden">Google Plus</span>
      </button><!--
     --></a>

    <!-- Weibo -->
    <a v-if="$themeConfig.sns.weibo" :href="$themeConfig.sns.weibo" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-weibo">
        <span class="visuallyhidden">Weibo</span>
      </button><!--
     --></a>

    <!-- Instagram -->
    <a v-if="$themeConfig.sns.instagram" :href="$themeConfig.sns.instagram" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-instagram">
        <span class="visuallyhidden">Instagram</span>
      </button><!--
     --></a>

    <!-- Tumblr -->
    <a v-if="$themeConfig.sns.tumblr" :href="$themeConfig.sns.tumblr" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-tumblr">
        <span class="visuallyhidden">Tumblr</span>
      </button><!--
     --></a>

    <!-- Github -->
    <a v-if="$themeConfig.sns.github" :href="$themeConfig.sns.github" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-github">
        <span class="visuallyhidden">Github</span>
      </button><!--
     --></a>

    <!-- LinkedIn -->
    <a v-if="$themeConfig.sns.linkedin" :href="$themeConfig.sns.linkedin" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-linkedin">
        <span class="visuallyhidden">LinkedIn</span>
      </button><!--
     --></a>

    <!-- Zhihu -->
    <a v-if="$themeConfig.sns.zhihu" :href="$themeConfig.sns.zhihu" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-zhihu">
        <span class="visuallyhidden">Zhihu</span>
      </button><!--
     --></a>

    <!-- Bilibili -->
    <a v-if="$themeConfig.sns.bilibili" :href="$themeConfig.sns.bilibili" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-bilibili">
        <span class="visuallyhidden">Bilibili</span>
      </button><!--
     --></a>

    <!-- Telegram -->
    <a v-if="$themeConfig.sns.telegram" :href="$themeConfig.sns.telegram" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-telegram">
        <span class="visuallyhidden">Telegram</span>
      </button><!--
     --></a>

    <!-- V2EX -->
    <a v-if="$themeConfig.sns.v2ex" :href="$themeConfig.sns.v2ex" target="_blank">
      <button class="mdl-mini-footer--social-btn social-btn footer-sns-v2ex">
        <span class="visuallyhidden">V2EX</span>
      </button><!--
     --></a>
  </div>
</template>

<script>
  export default { }
</script>

<style scoped>

</style>