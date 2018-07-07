import url_for from '../utils/url_for';

export default ($siteData, $themeConfig) => {
  const $cdn = $themeConfig.vendors.materialcdn || 'https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material/source';
  const links = [
    {
      rel: 'icon shortcut',
      type: 'image/ico',
      href: url_for.bind({$siteData})($themeConfig.head.favicon)
    },
    {
      rel: 'icon',
      href: url_for.bind({$siteData})($themeConfig.head.high_res_favicon)
    },
    {
      rel: 'stylesheet',
      key: 'material_css',
      href: $cdn + '/css/material.min.css'
    },
    {
      rel: 'stylesheet',
      key: 'style_css',
      href: $cdn + '/css/style.min.css'
    },
  ];

  if ($themeConfig.prettify.enable /* && is post TODO*/) {
    links.push([
      {
        rel: 'stylesheet',
        key: 'prettify_css',
        href: $cdn + '/css/prettify.min.css'
      },
      {
        rel: 'stylesheet',
        key: 'prettify_theme',
        href: $cdn + 'css/prettify/' + $themeConfig.prettify.theme + '.min.css'
      }
    ])
  }

  if ($themeConfig.scheme === 'Isolation') {
    links.push({
      rel: 'stylesheet',
      href: $cdn + '/css/fontawesome.min.css'
    })
  }

  return links;
}