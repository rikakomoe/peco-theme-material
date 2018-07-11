<template>
  <layout>
    <md-card>
      <md-card-media :style="`background-image: url('https://ekyu.moe/article/thompson-hack-on-golang/thumbnail.jpg')`">
        <md-card-header>
          <div class="post-title">
            {{ page.attributes.title }}
          </div>
        </md-card-header>
      </md-card-media>

      <md-card-actions class="post-header bb" md-alignment="space-between">
        <div class="author-box">
          <md-avatar>
            <img src="//ekyu.moe/res/img/avatar.jpg" alt="People">
          </md-avatar>
          <div class="author-panel">
            <strong>{{ $siteData.author }}</strong>
            <span>{{ formatDate(page.attributes.date) }}</span>
          </div>
        </div>

        <div>
          <md-button class="md-icon-button">
            <md-icon>devices_other</md-icon>
          </md-button>
          <md-menu md-direction="bottom-end">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-direction="bottom-end">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>share</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-card-actions>

      <md-card-content class="post-content" v-html="page.body" />
    </md-card>
  </layout>
</template>

<script>
  import format from 'date-fns/format';
  import Layout from "../components/layouts/Layout";

  export default {
    components: { Layout },
    head() {
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
    },
    props: ['page'],
    methods: {
      formatDate(v) {
        return format(v, 'DD MMM YYYY')
      }
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 1.5em;
  }
</style>

<style>
  .md-card {
    overflow: hidden;
  }

  .md-card-media {
    height: 280px;
    background-size: cover;
    background-repeat: repeat;
    background-position: 50% 50%;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-end;
    padding: 1.545rem;
  }

  .md-card-actions {
    padding: 1rem !important;
  }

  .post-title {
    color: #fafafa;
    font-size: 2.125rem;
  }

  .author-box {
    display: flex;
    flex-direction: row;
  }

  .author-box > div {
    margin: 0 0.25rem;
  }

  .author-panel {
    display: flex;
    flex-direction: column;
  }

  .bb {
    border-bottom: solid 1px #ccc;
  }

  .post-content {
    max-width: 90%;
    padding: 1rem;
    margin: 0 auto;
  }

</style>