<template>
  <layout>
    <md-card v-for="page in page.posts">
      <md-card-media :style="`background-image: url('https://ekyu.moe/article/thompson-hack-on-golang/thumbnail.jpg')`">
        <md-card-header>
          <div class="post-title">
            <router-link :to="page.slug">{{ page.attributes.title }}</router-link>
          </div>
        </md-card-header>
      </md-card-media>

      <md-card-content class="post-entry-content" >
        {{ stripHtml(page.excerpt) }}
        <router-link :to="page.slug">阅读全文</router-link>
      </md-card-content>

      <md-card-actions class="post-header bt" md-alignment="space-between">
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
          <router-link class="post-entry-cat" v-for="cat in page.attributes.categories" :to="`/categories/${cat}`">{{ cat }}</router-link>
        </div>
      </md-card-actions>
    </md-card>
    <div class="pagination">
      <md-button class="md-icon-button md-raised">
        <md-icon>arrow_back</md-icon>
      </md-button>
      <md-button class="md-icon-button md-raised">
        <md-icon>arrow_forward</md-icon>
      </md-button>
    </div>
  </layout>
</template>

<script>
  import format from 'date-fns/format';
  import Layout from "../components/layouts/Layout";

  export default {
    components: { Layout },
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
    props: ['page'],
    methods: {
      formatDate(v) {
        return format(v, 'DD MMM YYYY')
      },
      stripHtml(str) {
        return str.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
      }
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 3em;
  }
</style>

<style>
  .bt {
    border-top: solid 1px #ccc;
  }

  .post-entry-content {
    line-height: 1.125rem;
    padding-top: 1.875rem;
  }

  .post-entry-cat {
    margin: 0 0.5rem;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

</style>
