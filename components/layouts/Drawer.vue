<template>
  <div>
    <md-button class="md-icon-button burger" @click="showNavigation = true">
      <md-icon>menu</md-icon>
    </md-button>
    <md-drawer :md-active.sync="showNavigation">
      <div class="sidebar-header" :style="`background-image: url('${$themeConfig.sidebar_header}')`">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="toolbar-top" />
          <div class="toolbar-top" />
          <span class="md-title">
            <md-avatar>
              <img :src="$themeConfig.avatar" :alt="$siteData.author">
            </md-avatar>
          </span>
          <md-button class="md-icon-button burger-close" @click="showNavigation = false">
            <md-icon>clear_all</md-icon>
          </md-button>
          <div class="toolbar-top" />
        </md-toolbar>
        <md-list>
          <md-list-item md-expand>
            <span class="md-list-item-text">{{ $siteData.email }}</span>

            <md-list slot="md-expand">
              <md-list-item :href="`mailto: ${$siteData.email}`">
                <md-icon>email</md-icon>
                <span class="md-list-item-text">Email Me</span>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>

      <md-list>
        <md-list-item to="/">
          <md-icon>home</md-icon>
          <span class="md-list-item-text" :style="hyperLinkStyle('/')">主页</span>
        </md-list-item>

        <md-divider />

        <md-list-item href="https://github.com/rikakomoe/peco-theme-material" target="_blank">
          <span class="md-list-item-text">主题 - Material</span>
          <md-badge md-content="i" :style="`background-color: ${$themeConfig.theme_color}`" />
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
  export default {
    watch: {
      showNavigation(n) {
        if (n) document.documentElement.style.overflow = 'hidden';
        else document.documentElement.style.overflow = 'auto';
      }
    },
    data: () => ({
      showNavigation: false,
    }),
    mounted() {
      this.showNavigation = false;
      document.documentElement.style.overflow = 'auto';
    },
    methods: {
      hyperLinkStyle(to) {
        return this.$router.currentRoute.path === to ? `color: ${this.$themeConfig.hyperlink_color}` : `color: #0d0d0d`;
      }
    }
  }
</script>

<style scoped>
  .burger {
    margin: 0 0 0 1em;
    position: fixed;
    top: 2em;
    z-index: 8;
  }

  .md-avatar {
    width: 54px;
    height: 54px;
  }

  .md-drawer {
    position: fixed;
    height: 100%;
    width: 280px;
  }

  .badge-count {
    border-radius: 0;
  }

  .md-divider {
    margin: 0.5rem 0 !important;
  }

  .toolbar-top {
    width: 100%;
    height: 20px;
  }

  .sidebar-header {
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;
  }

  .sidebar-header .md-list {
    background: transparent;
  }

  .md-toolbar {
    justify-content: space-between;
  }

  .md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not([disabled]):hover {
    background: inherit;
  }

  .md-list-item-text {

  }
</style>