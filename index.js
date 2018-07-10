import Vue from 'vue'
import 'nprogress/nprogress.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial);

let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons';
document.head.appendChild(link);

document.documentElement.className = 'md-scrollbar md-theme-default';

export default ({ router }) => {
  if (process.browser) {
    const nprogress = require('nprogress');

    const loaded = Object.create(null);

    nprogress.configure({ showSpinner: false });

    router.beforeEach((to, from, next) => {
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