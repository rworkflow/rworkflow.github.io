/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuetify);
  options.vuetify=new Vuetify({})
}
