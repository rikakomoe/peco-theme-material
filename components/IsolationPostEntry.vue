<template>
  <div :class="rootClass">
    <!-- Post_entry Header -->
    <!-- Post Header Info -->
    <div :class="postHeaderInfoClass">
      <!-- Author Avatar & Name -->
      <img :src="url_for($themeConfig.img.avatar)" class="avatar-img" width="44px" height="44px"
           :alt="`${$siteData.author}'s avatar`">
      <span class="name-span">{{ $siteData.author }}</span>
    </div>

    <!-- Custom thumbnail -->
    <div :class="thumbnailClass">
      <img :src="post.attributes.thumbnail">
    </div>

    <!-- Post_entry Content -->
    <div class="post_entry-content mdl-color-text--grey-600 mdl-card__supporting-text">
      <!-- Post Title -->
      <p class="post_entry-title">
        <a :href="url_for(post.slug)"><span v-if="pin">[Top]</span>{{ post.attributes.title }}</a>
      </p>

      <!-- Post Excerpt -->
      <p class="post_entry-excerpt">
        {{ excerpt }}
        &nbsp;&nbsp;&nbsp;
        <span>
                <a :href="url_for(post.slug)" target="_self">{{ $themeConfig.i18n.post.continue }}</a>
            </span>
      </p>

      <!-- Post Tags -->
      <!--<%- list_tags(post.tags, {
      show_count: false,
      class: 'post_entry-tags',
      style: 'list',
      separator: ''
      }) %> TODO: Fix this-->
      {{ post.attributes.tags.join(' ') }}
    </div>

    <!-- Post_entry Footer -->
    <div class="post_entry-footer">
      <div class="post_entry-footer-border"></div>
      <div class="post_entry-footer-info">
        <div class="post_entry-footer-date">
          {{ date(post.attributes.date, 'MMM DD, YYYY') }}
        </div>
        <div class="post_entry-footer-comment">
          <!-- Comment Number -->
          <span v-if="$themeConfig.comment.use === 'duoshuo'" class="ds-thread-count"
                :data-thread-key="$themeConfig.comment.duoshuo_thread_key_type === 'id' ? post.attributes.id : post.slug"
                data-count-type="comments"></span>
          <!-- Comment Number -->
          <span v-if="$themeConfig.comment.use === 'changyan'" class="post_entry-comment">
                            <span
                              :id="`sourceId::${$themeConfig.comment.changyan_thread_key_type === 'id' ? post.attributes.id : post.slug}`"
                              class="cy_cmt_count"></span>条评论
                    </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import date from 'date-fns/format'
  import url_for from '../utils/url_for';
  export default {
    props: ['post', 'index', 'pin'],
    created() {
      this.url_for = url_for.bind(this);
      this.date = date;
    },
    computed: {
      rootClass() {
        let t = '';
        if (this.$themeConfig.card_elevation) t = `mdl-shadow--${this.$themeConfig.card_elevation}dp`;
        return `post_entry-module mdl-card ${t} mdl-cell mdl-cell--12-col fade out`;
      },
      postHeaderInfoClass() {
        return 'post_entry-header_info ' + !this.post.attributes.thumbnail ? 'without-thumbnail' : 'with-thumbnail';
      },
      thumbnailClass() {
        return !this.post.attributes.thumbnail ? 'post_thumbnail-null' : 'post_thumbnail-custom';
      },
      excerpt() {
        let regex = /(<([^>]+)>)/ig;
        if (this.post.excerpt) {
          return this.post.excerpt.replace(regex, '');
        } else {
          return this.post.body.substring(0, this.$themeConfig.reading.entry_excerpt).replace(regex, '')
        }
      }
    }
  }
</script>

<style scoped>

</style>