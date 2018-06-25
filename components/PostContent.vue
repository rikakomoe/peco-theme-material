<template>
  <div id="post-content" class="mdl-color-text--grey-700 mdl-card__supporting-text fade out">
    <template v-if="$themeConfig.scheme === 'Paradox'">
      <div v-html="page.body" />
      <blockquote v-if="page.attributes.hide_license !== true && $themeConfig.license || page.attributes.license"
                  style="margin: 2em 0 0;padding: 0.5em 1em;border-left: 3px solid #F44336;background-color: #F5F5F5;list-style: none;">
        <p>
          <strong>{{ page.attributes.license ? page.attributes.license : $themeConfig.license }}</strong>
          <br>
          <strong>{{ $themeConfig.post.permalink }}</strong>
          <a :href="page.attributes.permalink">{{ page.attributes.permalink }}</a>
        </p>
      </blockquote>
    </template>

    <div v-if="$themeConfig.scheme === 'Isolation'" class="post-content_wrapper">
      <p class="post-title">
        {{ page.attributes.title }}
      </p>
      <div v-html="page.body" />
      <blockquote v-if="$themeConfig.license || page.attributes.license">
        <p>
          {{ page.attributes.license ? page.attributes.license : $themeConfig.license }}
          <br>
          {{ $themeConfig.post.permalink + ' ' + page.attributes.permalink }}
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['page'],
  }
</script>

<style scoped>

</style>