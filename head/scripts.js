import js_js from '!raw-loader!./scripts/js.js';
import queue_js from '!raw-loader!./scripts/queue.js';
import bing_js from '!ejs-compiled-loader!./scripts/bing.js';
import lazyload_js from '!raw-loader!./scripts/lazyload.js';

if (!window.materialVersion) {
  window.materialVersion = "1.5.2";
  // Delete localstorage with these tags
  window.oldVersion = [
    'codestartv1',
    '1.3.4',
    '1.4.0',
    '1.4.0b1',
    '1.5.0'
  ];
  console.log('\n %c © Material Theme | Version: 1.5.2 | https://github.com/rikakomoe/peco-theme-material %c \n', 'color:#efefef;background:#d5616f;padding:5px 0;border-top-left-radius:5px;border-bottom-left-radius:5px;', 'color:#efefef;background:#d5616f;padding:5px 0;border-top-right-radius:5px;border-bottom-right-radius:5px;');
  console.log('\n %c © Material Theme | Version: 1.5.2 | https://github.com/viosey/hexo-theme-material %c \n', 'color:#455a64;background:#e0e0e0;padding:5px 0;border-top-left-radius:5px;border-bottom-left-radius:5px;', 'color:#455a64;background:#e0e0e0;padding:5px 0;border-top-right-radius:5px;border-bottom-right-radius:5px;');
}

export default ($siteData, $themeConfig) => {
  const $cdn = $themeConfig.vendors.materialcdn || 'https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material/source';
  const scripts = [
    /*{
      innerHTML: lsloader_js
    },*/
    {
      innerHTML: queue_js,
    },
    {
      key: 'jq_js',
      src: `${$cdn}/js/jquery.min.js`,
    },
    {
      key: 'lazyload_js',
      src: `${$cdn}/js/lazyload.min.js`,
      body: true,
    },
    {
      key: new Date().toString(),
      innerHTML: js_js,
      body: true,
    },
  ];
  if ($themeConfig.js_effect.smoothscroll === true) {
    scripts.push({
        key: 'sm_js',
        src: `${$cdn}/js/smoothscroll.js`,
        body: true,
      });
  }
  if ($themeConfig.prettify.enable) {
    scripts.push({
      key: 'prettify_js',
      src: `${$cdn}/js/prettify.min.js`,
      body: true
    })
  }
  if ($themeConfig.hanabi.enable) {
    scripts.push({
      key: 'hanabi',
      src: `${$cdn}/js/hanabi-browser-bundle.js`,
      body: true
    })
  }
  if($themeConfig.background.bing.enable) {
    scripts.push({
      id: 'Bing-Background-script',
      innerHTML: bing_js({ theme: $themeConfig }),
      body: true
    })
  }
  scripts.push({
    id: 'lazy-load',
    innerHTML: lazyload_js,
  });

  return scripts;
}