<template>
  <div :class="rootClass">
    <!-- Post Thumbnail -->
    <div :class="thumbnailClass" :style="thumbnailStyle" :data-original="thumbnailDataOriginal">

      <!-- Post Title -->
      <p class="article-headline-p"><a :href="$siteData.url + post.path"><span v-if="pin">[Top]</span>{{ post.title
        }}</a></p>
    </div>

    <!-- Post Excerpt -->
    <div class="mdl-color-text--grey-600 mdl-card__supporting-text post_entry-content">
      {{ excerpt }}

      <span>
            <a :href="$siteData.url + post.path" target="_self">{{ $themeConfig[post.continue] }}</a>
        </span>
    </div>
    <!-- Post_entry Info-->
    <div id="post_entry-info">
      <div id="post_entry-left-info" class="mdl-card__supporting-text meta mdl-color-text--grey-600 ">
        <!-- Author Avatar -->
        <div id="author-avatar">
          <img :src="$siteData.url + $themeConfig.img.avatar" width="44px" height="44px"
               :alt="`${$siteData.author}'s avatar`">
        </div>
        <div>
          <strong>{{ $siteData.author }}</strong>
          <span>{{ post.date }}<!--<%= date(post.date, 'MMM DD, YYYY') %> TODO: Fix this--></span>
        </div>
      </div>
      <div id="post_entry-right-info">
        <!-- Category -->
        <span v-if="post.categories && post.categories.length" class="post_entry-category">
<!--                  <%- list_categories(post.categories, {
                      show_count: false,
                      class: 'post_category',
                      style: 'none'
                  }) %> TODO: Fix this-->
              {{ post.categories.join(' ') }}
              </span>

        &nbsp;{{ $themeConfig.comment.use === 'duoshuo' ? '|' : '' }}&nbsp;
        <span v-if="$themeConfig.comment.use === 'duoshuo'" class="post_entry-comment">
                        <span class="ds-thread-count"
                              data-thread-key="<%= theme.comment.duoshuo_thread_key_type === 'id' ? post.id : post.path %>"
                              data-count-type="comments"></span>
                </span>

        <!-- Comment Number -->
        &nbsp;{{ $themeConfig.comment.use === 'changyan' ? '|' : '' }}&nbsp;
        <span v-if="$themeConfig.comment.use === 'changyan'" class="post_entry-comment">
                        <span
                          id="sourceId::<%= theme.comment.changyan_thread_key_type === 'id' ? post.id : post.path  %>"
                          class="cy_cmt_count"></span>条评论
                </span>

        <!-- Post Views -->
        <span class="post_entry-views">
            </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['post', 'index', 'pin'],
    computed: {
      rootClass() {
        let t = '';
        if (this.$themeConfig.card_elevation) t = `mdl-shadow--${this.$themeConfig.card_elevation}dp`;
        return `post_entry-module mdl-card ${t} mdl-cell mdl-cell--12-col fade out`;
      },
      thumbnailClass() {
        let t = 'mdl-card__media mdl-color-text--grey-50';
        if (!this.post.thumbnail) {
          if (!this.$themeConfig.thumbnail.purecolor) return `post_thumbnail-random ${t}`;
          else return `post-thumbnail-pure ${t}`;
        } else return `post_thumbnail-custom ${t} lazy`;
      },
      thumbnailStyle() {
        return !this.post.thumbnail && this.$themeConfig.thumbnail.purecolor ?
          `background-color:${this.$themeConfig.thumbnail.purecolor} !important` : '';
      },
      thumbnailDataOriginal() {
        return this.post.thumbnail ? this.post.thumbnail : '';
      },
      excerpt() {
        let regex = /(<([^>]+)>)/ig;
        if (this.post.excerpt) {
          return this.post.excerpt.replace(regex, '');
        } else {
          return this.post.content.substring(0, this.$themeConfig.reading.entry_excerpt).replace(regex, '')
        }
      }
    }
  }
</script>

<style scoped>

</style>