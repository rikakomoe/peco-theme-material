import url_for from '../utils/url_for';

let uc_alert;

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

  if ($themeConfig.prettify.enable) { // is post
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

  /* const agent = navigator.userAgent.toLowerCase();
  if(agent.indexOf('ucbrowser')>0) {
    links.push({
      rel: 'stylesheet',
      href: `${$cdn}/css/uc.css`,
      type: 'text/css'
    });
    if (!uc_alert) alert('由于 UC 浏览器使用极旧的内核，而本网站使用了一些新的特性。\n为了您能更好的浏览，推荐使用 Chrome 或 Firefox 浏览器。');
    uc_alert = true;
  } */

  return links;
}