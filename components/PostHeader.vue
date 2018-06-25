<template>
  <!-- Paradox Post Header -->
  <!-- Post thumbnail -->
  <div v-if="$themeConfig.scheme === 'Paradox'" :class="paradoxThumbnailClass" :style="paradoxThumbnailStyle">
    <p class="article-headline-p">
      {{ page.attributes.title }}
    </p>
  </div>

  <!-- Isolation Post Header -->
  <!-- Post Header Info -->
  <div v-else-if="$themeConfig.scheme === 'Isolation'">
    <div :class="isolationPostHeaderInfoClass">
      <!-- Author Avatar & Name -->
      <img :src="url_for($themeConfig.img.avatar)" class="avatar-img" width="44px" height="44px"
           :alt="`${$siteData.author}'s avatar`">
      <span class="name-span">{{ $siteData.author }}</span>
    </div>

    <!-- Post thumbnail -->
    <div :class="isolationThumbnailClass">
      <img v-if="page.attributes.thumbnail" :src="page.attributes.thumbnail">
    </div>
  </div>
</template>

<script>
  import url_for from '../utils/url_for';

  export default {
    props: ['page'],
    created() {
      this.url_for = url_for.bind(this);
    },
    computed: {
      paradoxThumbnailClass() {
        let t = 'mdl-card__media mdl-color-text--grey-50';
        if (!this.page.attributes.thumbnail) {
          if (!this.$themeConfig.thumbnail.purecolor) return `post_thumbnail-random ${t}`;
          else return `post-thumbnail-pure ${t}`;
        } else return `post_thumbnail-custom ${t}`;
      },
      paradoxThumbnailStyle() {
        if (!this.page.attributes.thumbnail) {
          if (!this.$themeConfig.thumbnail.purecolor) return '';
          else return `background-color:${this.$themeConfig.thumbnail.purecolor} !important`;
        } else return `background-image:url(${this.page.attributes.thumbnail})`;
      },
      isolationPostHeaderInfoClass() {
        return !page.attributes.thumbnail ? 'post-header_info without-thumbnail' : 'post-header_info with-thumbnail';
      },
      isolationThumbnailClass() {
        return page.attributes.thumbnail ? 'post_thumbnail-custom' : 'post_thumbnail-null';
      }
    }
  }
</script>

<style scoped>

</style>