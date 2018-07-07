import Vue from 'vue'
import 'nprogress/nprogress.css'

export default ({ router }) => {
  if (process.browser) {
    const nprogress = require('nprogress');

    const loaded = Object.create(null);

    nprogress.configure({ showSpinner: false });

    router.beforeEach((to, from, next) => {
      document.documentElement.style.overflow = 'auto';
      if (!loaded[to.path]) {
        nprogress.start()
      }
      next()
    });

    router.afterEach(to => {
      loaded[to.path] = true;
      nprogress.done()
    })
  }
}