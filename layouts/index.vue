<template>
  <div class="container">
  </div>
</template>

<script>

export default {
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
