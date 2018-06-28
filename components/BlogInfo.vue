<template>
  <!-- Blog info -->
  <div :class="blogInfoClassName">

    <!-- Search -->
    <paradox-search />

    <!-- LOGO -->
    <div class="something-else-logo mdl-color--white mdl-color-text--grey-600">
      <a :href="logoAnchorUrl" target="_blank">
        <img :src="url_for($themeConfig.img.logo)" alt="logo" />
      </a>
    </div>

    <!-- Infomation -->
    <div class="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
      <!-- Blog Title -->
      <div>
        <strong>{{ $siteData.title }}</strong>
      </div>
      <div class="section-spacer"></div>

      <!-- Pages -->
      <button id="show-pages-button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
        <i class="material-icons" role="presentation">view_carousel</i>
        <span class="visuallyhidden">Pages</span>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="show-pages-button">
        <a v-for="(v, i) in $themeConfig.sidebar.pages" class="index_share-link" :href="v.link || '#'" :title="i">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ i }}
          </li>
        </a>
      </ul>

      <!-- Menu -->
      <button id="menubtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
        <i class="material-icons" role="presentation">more_vert</i>
        <span class="visuallyhidden">show menu</span>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="menubtn">
        <!-- All Site UV -->
        <a v-if="$themeConfig.busuanzi.all_site_uv" class="index_share-link" href="#">
          <li class="mdl-menu__item mdl-js-ripple-effect">
                        <span id="busuanzi_container_site_uv">
                            <span id="busuanzi_value_site_uv"></span>&nbsp;{{ $themeConfig.post.views }}
                        </span>
          </li>
        </a>

        <a v-if="$themeConfig.url.rss" class="index_share-link" :href="$themeConfig.url.rss || '#'">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.article_rss }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.weibo === true" class="index_share-link"
           :href="shareWeiboLink"
           target="_blank">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.share.toWeibo }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.twitter === true" class="index_share-link"
           :href="shareTwitterLink"
           target="_blank">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.share.toTwitter }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.facebook === true" class="index_share-link"
           :href="shareFacebookLink"
           target="_blank">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.share.toFacebook }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.googleplus === true" class="index_share-link"
           :href="shareGoogleplusLink"
           target="_blank">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.share.toGplus }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.linkedin === true" class="index_share-link"
           :href="shareLinkedinLink"
           target="_blank">
          <li class="mdl-menu__item mdl-js-ripple-effect">
            {{ $themeConfig.share.toLinkedIn }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.qq === true" class="post_share-link"
           :href="shareQqLink"
           target="_blank">
          <li class="mdl-menu__item">
            {{ $themeConfig.share.toQQ }}
          </li>
        </a>

        <a v-if="$themeConfig.sns_share.telegram === true" class="post_share-link"
           :href="shareTelegramLink"
           target="_blank">
          <li class="mdl-menu__item">
            {{ $themeConfig.share.toTelegram }}
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
  import ParadoxSearch from 'ParadoxSearch';
  import url_for from '../utils/url_for';
  export default {
    created() {
      this.url_for = url_for.bind(this);
    },
    components: {
      ParadoxSearch,
    },
    computed: {
      blogInfoClassName() {
        const t = this.$themeConfig.card_elevation ? `mdl-shadow--${this.$themeConfig.card_elevation}dp` : '';
        return `mdl-card ${t} something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop index-top-block`;
      },
      logoAnchorUrl() {
        return this.$themeConfig.url.logo || '#';
      },
      shareWeiboLink() {
        return `http://service.weibo.com/share/share.php?appkey=&title=${this.$siteData.title}&url=${this.$siteData.url}&pic=${this.$siteData.url}${this.$themeConfig.head.favicon}&searchPic=false&style=simple`;
      },
      shareTwitterLink() {
        return `https://twitter.com/intent/tweet?text=${this.$siteData.title}&url=${this.$siteData.url}&via=${this.$siteData.author}`;
      },
      shareFacebookLink() {
        return `https://www.facebook.com/sharer/sharer.php?u=${this.$siteData.url}`;
      },
      shareGoogleplusLink() {
        return `https://plus.google.com/share?url=${this.$siteData.url}`;
      },
      shareLinkedinLink() {
        return `https://www.linkedin.com/shareArticle?mini=true&url=${this.$siteData.url}&title=${this.$siteData.title}`;
      },
      shareQqLink() {
        return `http://connect.qq.com/widget/shareqq/index.html?site=${this.$siteData.title}&title=${this.$siteData.title}&summary=${this.$siteData.description}&pics=${this.$siteData.url}${this.$themeConfig.head.favicon}&url=${this.$siteData.url}`;
      },
      shareTelegramLink() {
        return `https://telegram.me/share/url?url=${this.$siteData.url}&text=${this.$siteData.title}`;
      }
    }
  }
</script>

<style scoped>

</style>