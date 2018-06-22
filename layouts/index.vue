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

        <!-- Index Module -->
        <div class="material-index mdl-grid">
          <!--        <% if( (theme.scheme === 'Paradox') && (page.current === 1) && (is_home()) ) { %>
                  &lt;!&ndash; Paradox Header &ndash;&gt;
                  <%- partial('_partial/daily_pic') %>
                  <%- partial('_partial/blog_info') %>
                  <% } %>-->
          <div class="locate-thumbnail-symbol"></div>

          <!--        &lt;!&ndash; Pin on top &ndash;&gt;
                  <% if(typeof hasposttop === 'function') { %>
                  <% if(hasposttop(site.posts)) { %>
                  <% getposttop(site.posts).each(function(toppost){ %>
                  <% if(theme.scheme === 'Paradox'){ %>
                  &lt;!&ndash; Paradox Thumbnail &ndash;&gt;
                  <%- partial('_partial/Paradox-post_entry', { post: toppost, index: true, pin: true }) %>
                  <% } %>
                  <% if(theme.scheme === 'Isolation'){ %>
                  &lt;!&ndash; Isolation Thumbnail &ndash;&gt;
                  <%- partial('_partial/Isolation-post_entry', { post: toppost, index: true, pin: true }) %>
                  <% } %>
                  <% }); %>
                  <% } %>
                  <% } %>-->

          <!-- Normal Post -->
          <template v-for="post in page.posts">
            <!--<% if(!((typeof hasposttop === 'function') && post.top)) { %>-->
            <paradox-post-entry v-if="$themeConfig.scheme === 'Paradox'" :post="post" :index="true" :pin="false" />
            <isolation-post-entry v-if="$themeConfig.scheme === 'Isolation'" :post="post" :index="true" :pin="false" />
          </template>

          <!--        <% if (page.total > 1) { %>
                  &lt;!&ndash; Index nav &ndash;&gt;
                  <nav class="material-nav mdl-cell mdl-cell&#45;&#45;12-col">
                    <%- paginator({
                    prev_text: __('<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;icon"><i class="material-icons" role="presentation">arrow_back</i></button>'),
                    next_text: __('<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;icon"><i class="material-icons" role="presentation">arrow_forward</i></button>'),
                    space: ''
                    }) %>
                  </nav>
                  <% } %>

                  <% if(theme.scheme === 'Paradox') { %>
                  <%- partial('_partial/Paradox-post_entry-thumbnail') %>
                  <% } %>-->
        </div>


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

  import ParadoxPostEntry from "../components/ParadoxPostEntry";
  import IsolationPostEntry from "../components/IsolationPostEntry";

  export default {
    components: { IsolationPostEntry, ParadoxPostEntry },
    head() {
      return {
        title: this.$siteData.title,
        meta: [
          {
            name: 'description',
            content: this.$siteData.description
          }
        ],
        link: [
          this.$feedLink
        ].filter(Boolean)
      }
    },
    props: ['page']
  }
</script>
