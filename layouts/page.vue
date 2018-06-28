<template>
  <layout>
    <!-- Post TOC -->
    <!--<% if( (page.toc === true) || (is_post() && page.toc !== false) ) { %>
    <%- partial('_partial/toc_button') %>
    <% } %>-->

    <!-- Layouts -->
    <!--<% if(page.layout === 'tags') { %>
    &lt;!&ndash; Tags Cloud &ndash;&gt;
    <%- partial('_widget/page-tagcloud') %>

    <% } else if(page.layout === 'links') { %>
    &lt;!&ndash; Single Links Page &ndash;&gt;
    <%- partial('_widget/page-links') %>

    <% } else if(page.layout === 'timeline') { %>
    &lt;!&ndash; Single Timeline Page &ndash;&gt;
    <%- partial('_widget/page-timeline') %>

    <% } else { %>-->
    <!-- Post Module -->
    <div class="material-post_container">

      <div class="material-post mdl-grid">
        <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">

          <!-- Post Header(Thumbnail & Title) -->
          <post-header :page="page" />

          <!-- Paradox Post Info -->
          <paradox-post-info v-if="page.hide_post_info !== true && $themeConfig.scheme === 'Paradox'" :page="page" />

          <!-- Post Content -->
          <post-content :page="page" />

          <!-- Isolation Post Info -->
          <!--<%- partial('_partial/Isolation-post-info') %>-->

          <!-- Post Comments -->
          <!--<% if(page.comment !== false) { %>
          <%- partial('_partial/comment') %>
          <% } %>-->
        </div>

        <!-- Post Prev & Next Nav -->
        <!--<%- partial('_partial/post-nav') %>-->
      </div>
    </div>
  </layout>
</template>

<script>

  import Layout from "../components/Layout";
  import PostHeader from "../components/PostHeader";
  import ParadoxPostInfo from "../components/ParadoxPostInfo";
  import PostContent from "../components/PostContent";

  export default {
    components: {
      Layout,
      PostContent,
      PostHeader,
      ParadoxPostInfo,
    },
    /*head() {
      let desc = this.page.attributes.subtitle || this.page.excerpt || ''
      // Strip HTML
      desc = desc.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '')

      return {
        title: `${this.page.attributes.title} - ${this.$siteData.title}`,
        meta: [
          {
            name: 'description',
            content: desc
          }
        ]
      }
    },*/
    props: ['page'],
  }
</script>