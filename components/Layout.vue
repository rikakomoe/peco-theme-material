<template>
  <div :id="`scheme-${$themeConfig.scheme}`" class="lazy">
    <div class="material-layout  mdl-js-layout has-drawer is-upgraded">
      <!--    <% if(theme.scheme === 'Isolation') { %>
          &lt;!&ndash; Isolation Header &ndash;&gt;
          <%- partial('_partial/isolate_info') %>
          <% } %>-->

      <!-- Main Container -->
      <main class="material-layout__content" id="main">

        <!-- Top Anchor -->
        <div id="top"></div>

        <!-- Hamburger Button -->
        <button v-if="$themeConfig.scheme === 'Paradox'" class="MD-burger-icon sidebar-toggle">
          <span id="MD-burger-id" class="MD-burger-layer"></span>
        </button>

        <slot />

        <!--      <% if(theme.scheme === 'Paradox') { %>
              <%- partial('_partial/sidebar') %>
              <% } %>

              <% if( (theme.scheme === 'Paradox') && (is_post() || is_home() || is_archive() || is_category() || (page.totop ===
              true) ) ) { %>
              &lt;!&ndash; Footer Top Button &ndash;&gt;
              <%- partial('_partial/footer_top') %>
              <% } %>

              <%- partial('_partial/footer') %>

              <%- partial('_partial/import_js') %>-->
      </main>
    </div>
  </div>
</template>

<script>
  export default { }
</script>

<style scoped>

</style>