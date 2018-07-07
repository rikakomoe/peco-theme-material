<template>
  <ul class="nav sidebar-nav">
    <!-- User dropdown  -->
    <li class="dropdown">
      <ul id="settings-dropdown" class="dropdown-menu">
        <li v-for="(v, i) in $themeConfig.sidebar.dropdown">
          <router-link :to="v.link" target="_blank" :title="i">
            <i v-if="v.icon" class="material-icons sidebar-material-icons sidebar-indent-left1pc-element">{{v.icon}}</i>
            {{ i }}
          </router-link>
        </li>
      </ul>
    </li>

    <!-- Homepage -->
    <li v-if="$themeConfig.sidebar.homepage.use" id="sidebar-first-li">
      <router-link :to="$siteData.url">
        <i v-if="$themeConfig.sidebar.homepage.icon" class="material-icons sidebar-material-icons">{{$themeConfig.sidebar.homepage.icon}}</i>
        {{ $themeConfig.i18n.sidebar.homepage }}
      </router-link>
    </li>
    <li v-if="$themeConfig.sidebar.homepage.use && $themeConfig.sidebar.homepage.divider" class="divider"></li>

    <!-- Archives  -->
    <li v-if="$themeConfig.sidebar.archives.use" class="dropdown">
      <a href="#" class="ripple-effect dropdown-toggle" data-toggle="dropdown">
        <i v-if="$themeConfig.sidebar.archives.icon" class="material-icons sidebar-material-icons">{{$themeConfig.sidebar.archives.icon}}</i>
        {{$themeConfig.i18n.sidebar.archive}}
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <!--<li>
          <%- list_archives({
          show_count: true,
          amount: 5,
          class: 'sidebar_archives',
          style: 'none',
          separator: '</li><li>'
        }) %> TODO: List Archives-->
      </ul>
    </li>
    <li v-if="$themeConfig.sidebar.archives.use && $themeConfig.sidebar.archives.divider" class="divider"></li>

    <!-- Categories  -->
    <li v-if="$themeConfig.sidebar.categories.use" class="dropdown">
      <a href="#" class="ripple-effect dropdown-toggle" data-toggle="dropdown">
        <i v-if="$themeConfig.sidebar.categories.icon" class="material-icons sidebar-material-icons">{{$themeConfig.sidebar.categories.icon}}</i>
        {{ $themeConfig.i18n.title.category }}
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <!--<li>
          <%- list_categories({
          show_count: true,
          amount: 5,
          class: 'sidebar_archives',
          style: 'none',
          separator: '
        </li>
        <li>'
          }) %>TODO: List Categories-->
      </ul>
    </li>
    <li v-if="$themeConfig.sidebar.categories.use && $themeConfig.sidebar.categories.divider" class="divider"></li>

    <!-- Pages  -->
    <template v-for="(v, i) in $themeConfig.sidebar.pages">
      <li>
        <router-link :to="v.link" :title="i">
          <i v-if="v.icon" class="material-icons sidebar-material-icons">{{ v.icon }}</i>
          {{ i }}
        </router-link>
      </li>
      <li v-if="v.divider" class="divider"></li>
    </template>

    <!-- Article Number  --><!-- TODO: Article Number
    <li v-if="$themeConfig.sidebar.article_num.use">
      <a href="/archives">
        {{ $themeConfig.i18n.sidebar.article_num }}
        <span class="sidebar-badge">{{ site.posts.length }}</span>
      </a>
    </li>
    <li v-if="$themeConfig.sidebar.article_num.use && $themeConfig.sidebar.article_num.divider" class="divider"></li>-->
  </ul>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>