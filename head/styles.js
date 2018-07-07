import config_css from '!ejs-compiled-loader!./styles/config.css.ejs';

export default ($siteData, $themeConfig) => {
  return [
    {
      innerHTML: config_css({ theme: $themeConfig })
    }
  ]
}