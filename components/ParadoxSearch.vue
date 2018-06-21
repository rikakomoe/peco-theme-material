<template>
  <!-- Google -->
  <div v-if="$themeConfig.search.use === 'google'" class="mdl-textfield mdl-js-textfield mdl-textfield--expandable"
       method="post" action="">
    <label id="google-search-label"
           class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent mdl-shadow--4dp"
           for="google-search">
      <i class="material-icons mdl-color-text--white" role="presentation">search</i>
    </label>

    <form autocomplete="off" id="google-search-form" method="get" action="//google.com/search" accept-charset="UTF-8"
          class="mdl-textfield__expandable-holder" target="_blank">
      <input class="mdl-textfield__input search-input" type="search" name="q" id="google-search" placeholder="">
      <label id="google-search-form-label" class="mdl-textfield__label" for="google-search"></label>

      <input type="hidden" name="sitesearch" value="<%= config.url %>">
    </form>
  </div>

  <div v-else-if="$themeConfig.search.use === 'swiftype'"
       class="mdl-textfield mdl-js-textfield mdl-textfield--expandable" method="post" action="">
    <label id="swiftype-search-label"
           class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent mdl-shadow--4dp"
           for="swiftype-search">
      <i class="material-icons mdl-color-text--white" role="presentation">search</i>
    </label>

    <form autocomplete="off" id="swiftype-search-form" class="mdl-textfield__expandable-holder" action="">
      <input class="mdl-textfield__input search-input st-default-search-input" type="text" name="q"
             id="swiftype-search">
      <label id="swiftype-search-form-label" class="mdl-textfield__label" for="swiftype-search"></label>
    </form>
  </div>

  <!-- Local -->
  <template v-else-if="$themeConfig.search.use === 'local'">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable" method="post" action="">
      <label id="local-search-label"
             class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent mdl-shadow--4dp"
             for="local-search">
        <i class="material-icons mdl-color-text--white" role="presentation">search</i>
      </label>

      <form autocomplete="off" id="search-form" class="mdl-textfield__expandable-holder">
        <input type="text" id="local-search" class="form-control mdl-textfield__input search-input" name="q" results="0"
               placeholder="" />
        <label id="search-form-label" class="mdl-textfield__label" for="local-search"></label>
      </form>
    </div>
    <div id="local-search-result"></div>
  </template>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>