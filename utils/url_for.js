'use strict';

function urlForHelper(path = '/', options) {

  const root = this.$siteData.url;
  // Prepend root path
  path = root.replace(/(.*?)\/$/g, '$1') + '/' + path.replace(/^\/(.*)/g, '$1');

  return path;
}

module.exports = urlForHelper;
