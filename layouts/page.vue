<template>
  <layout>

  </layout>
</template>

<script>
import format from 'date-fns/format'
import Layout from "../components/Layout";

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