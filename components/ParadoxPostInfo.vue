<template>
  <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">

    <!-- Author Avatar -->
    <div id="author-avatar">
      <img :src="url_for($themeConfig.img.avatar)" width="44px" height="44px" alt="Author Avatar" />
    </div>
    <!-- Author Name & Date -->
    <div>
      <strong>{{ $siteData.author }}</strong>
      <span>{{ date(page.attributes.date, 'MMM DD, YYYY') }}</span>
    </div>

    <div class="section-spacer"></div>

    <!-- Favorite -->
    <!--
        <button id="article-functions-like-button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon btn-like">
            <i class="material-icons" role="presentation">favorite</i>
            <span class="visuallyhidden">favorites</span>
        </button>
    -->

    <!-- Qrcode -->
    <!--<% if(theme.qrcode.enable === true) { %>
    <%- partial('_widget/qrcode') %>
    <% } %>TODO: Fix-->

    <!-- Tags (bookmark) -->
    <button v-if="page.attributes.tags && page.attributes.tags.length"
            id="article-functions-viewtags-button"
            class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
      <i class="material-icons" role="presentation">bookmark</i>
      <span class="visuallyhidden">bookmark</span>
    </button>
    <ul v-if="page.attributes.tags && page.attributes.tags.length"
        class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="article-functions-viewtags-button">
      <li class="mdl-menu__item">
        {{ page.attributes.tags.join(' ') }}
        <!--<%- list_tags(page.tags, {
        show_count: false,
        class: 'post_tag',
        style: 'none',
        separator: '<li class="mdl-menu__item">' TODO: Fix-->
      </li>
    </ul>

    <!-- Share -->
    <!--<% if(page.hide_share !== true) { %>
    <%- partial('_partial/post-info-share') %>
    <% } %>TODO: Fix-->
  </div>

</template>

<script>
  import date from 'date-fns/format'
  import url_for from '../utils/url_for';

  export default {
    props: ['page'],
    created() {
      this.url_for = url_for.bind(this);
      this.date = date;
    },
  }
</script>

<style scoped>

</style>