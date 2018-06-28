import url_for from '../utils/url_for';

export default ($siteData, $themeConfig, title, page) => {
  /*      © Material Theme
   *      https://github.com/viosey/hexo-theme-material
   *      Version: 1.5.2
   */

  const description = page.description ||
  page.excerpt ? page.excerpt.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '').replace(/^s*/, '').replace(/s*$/, '') :
    $siteData.description || '';

  let keywords = [$themeConfig.head.keywords];
  if (page.tags instanceof Array) keywords = [keywords, ...page.tags.map(tag => tag.name)];
  keywords = keywords.join(',');

  let meta = [
    {
      name: 'format-detection',
      content: 'telephone=no',
    }, {
      name: 'description',
      itemprop: 'description',
      content: description,
    }, {
      name: 'keywords',
      content: keywords,
    }, {
      name: 'theme-color',
      content: $themeConfig.uiux.android_chrome_color,
    },
    // Disable Fucking Bloody Baidu Tranformation
    {
      httpEquiv: 'Cache-Control',
      content: 'no-transform',
    }, {
      httpEquiv: 'Cache-Control',
      content: 'no-siteapp',
    },
    // WebAPP Icons
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    }, {
      name: 'application-name',
      content: $siteData.title,
    }, {
      name: 'msapplication-starturl',
      content: url_for.bind({$siteData})(page.slug).replace(/index$/, ''),
    }, {
      name: 'msapplication-navbutton-color',
      content: $themeConfig.uiux.android_chrome_color,
    }, {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    }, {
      name: 'apple-mobile-web-app-title',
      content: $siteData.title,
    }, {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black',
    }
  ];

  if ($themeConfig.head.site_verification.google) meta.push({
    name: 'google-site-verification',
    content: $themeConfig.head.site_verification.google,
  });
  if ($themeConfig.head.site_verification.baidu) meta.push({
    name: 'baidu-site-verification',
    content: $themeConfig.head.site_verification.baidu,
  });

  meta = meta.concat([
    {
      propertyName: 'og:url',
      content: url_for.bind({$siteData})(page.slug).replace(/index$/, ''),
    }, {
      propertyName: 'og:type',
      content: 'blog',
    }, {
      propertyName: 'og:title',
      content: title,
    }, {
      propertyName: 'og:image',
      content: url_for.bind({$siteData})($themeConfig.head.high_res_favicon),
    }, {
      propertyName: 'og:description',
      content: description,
    },
  ]);

  if (page.tags instanceof Array) page.tags.forEach(
    tag => meta.push({
      propertyName: 'og:article:tag',
      content: tag.name,
    })
  );

  /*<% if( (is_post()) ) { %>
  <meta property="article:published_time" content="<%= page.date %>">
      <meta property="article:modified_time" content="<%= page.updated %>">
      <% } %> TODO: is post?*/

  meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  });

  return meta;

}