<template>
  <layout>
    <h1>喵</h1>
  </layout>
</template>

<script>

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

  props: ['page']
}
</script>
