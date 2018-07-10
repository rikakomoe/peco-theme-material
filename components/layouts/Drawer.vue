<template>
  <div>
    <md-button class="md-icon-button burger" @click="showNavigation = true">
      <md-icon>menu</md-icon>
    </md-button>
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
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

  .md-drawer {
    position: fixed;
    height: 100%;
    width: 280px;
  }
</style>