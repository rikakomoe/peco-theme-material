<template>
  <div>
    <!-- Overlay For Active Sidebar -->
    <div class="sidebar-overlay"></div>

    <!-- Material sidebar -->
    <aside id="sidebar" class="sidebar sidebar-colored sidebar-fixed-left" role="navigation">
      <div id="sidebar-main">
        <!-- Sidebar Header -->
        <sidebar-header />

        <!-- Sidebar Navigation  -->
        <sidebar-navigation />

        <!-- Sidebar Footer -->
        <sidebar-footer />
      </div>

      <!-- Sidebar Image -->
      <sidebar-footer-image />
    </aside>
  </div>
</template>

<script>
  import SidebarHeader from './SidebarHeader';
  import SidebarNavigation from './SidebarNavigation';
  import SidebarFooter from './SidebarFooter';
  import SidebarFooterImage from './SidebarFooterImage';

  export default {
    components: {
      SidebarHeader,
      SidebarNavigation,
      SidebarFooter,
      SidebarFooterImage,
    }
  }
</script>

<style scoped>

</style>