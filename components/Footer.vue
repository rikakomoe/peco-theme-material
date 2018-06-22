<template>
  <!--Footer-->
  <footer class="mdl-mini-footer" id="bottom">
    <!-- Paradox Footer Left Section -->
    <footer-left v-if="$themeConfig.scheme === 'Paradox'" />

    <!--Copyright-->
    <div v-if="$themeConfig.scheme === 'Paradox'" id="copyright">
      {{ copyright }}
    </div>

    <!-- Paradox Footer Right Section -->

    <!--
    I am glad you use this theme, the development is no so easy, I hope you can keep the copyright.
    It will not impact the appearance and can give developers a lot of support :)

    很高兴您使用该主题，开发不易，希望您可以保留一下版权声明。
    它不会影响美观并可以给开发者很大的支持。 :)
    -->

    <div v-if="$themeConfig.scheme === 'Paradox'" class="mdl-mini-footer--right-section">
      <div>
        <div class="footer-develop-div">Powered by <a href="https://github.com/egojump/peco" target="_blank" class="footer-develop-a">Peco</a></div>
        <div class="footer-develop-div">Theme - <a href="https://github.com/rikakomoe/peco-theme-material" target="_blank" class="footer-develop-a">Material</a></div>
      </div>
    </div>
  </footer>
</template>

<script>
  import FooterLeft from './FooterLeft.vue';
  export default {
    components: {
      'footer-left': FooterLeft,
    },
    computed: {
      copyright() {
        let str = 'Copyright&nbsp;©';
        if (this.$themeConfig.copyright_since) {
          const fd = new Date();
          str = `${this.$themeConfig.copyright_since}&nbsp;${fd.getFullYear()}&nbsp;${str}`;
        }
        str += this.$siteData.title;
        if (this.$themeConfig.footer_text) {
          str += '<br>';
          if(Array.isArray(this.$themeConfig.footer_text)) {
            str += this.$themeConfig.footer_text.join('<br>');
          } else {
            str += this.$themeConfig.footer_text;
          }
        }
        return str;
      }
    }
  }
</script>

<style scoped>

</style>