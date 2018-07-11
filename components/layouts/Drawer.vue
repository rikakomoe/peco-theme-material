<template>
  <div>
    <md-button class="md-icon-button burger" @click="showNavigation = true">
      <md-icon>menu</md-icon>
    </md-button>
    <md-drawer :md-active.sync="showNavigation">
      <div class="sidebar-header" :style="`background-image: url('https://ekyu.moe/res/img/header.jpg')`">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="toolbar-top" />
          <div class="toolbar-top" />
          <span class="md-title"><md-avatar class="md-avatar-icon">A</md-avatar></span>
          <md-button class="md-icon-button burger-close">
            <md-icon>clear_all</md-icon>
          </md-button>
          <div class="toolbar-top" />
        </md-toolbar>
        <md-list>
          <md-list-item md-expand>
            <md-icon>whatshot</md-icon>
            <span class="md-list-item-text">News</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">World</md-list-item>
              <md-list-item class="md-inset">Europe</md-list-item>
              <md-list-item class="md-inset">South America</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>

      <md-list>
        <md-list-item to="/">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">主页</span>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>whatshot</md-icon>
          <span class="md-list-item-text">News</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
            <md-list-item class="md-inset">South America</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>

        <md-divider />

        <md-list-item href="https://github.com/rikakomoe/peco-theme-material" target="_blank">
          <span class="md-list-item-text">主题 - Material</span>
          <md-badge md-content="i" />
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
    })
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
</style>