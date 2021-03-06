// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Icon from 'vue-svg-icon/Icon.vue';
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.component('icon', Icon);
//Vue.component('icon',Icon);
/* eslint-disable no-new */
Vue.component('testComponent',{
  template:'<div>Hello I am a test component</div>'
});

let app=new Vue({
  /*el: '#app',*/
  router,
  store,
  template: '<App/>',
  components: { App }
});

app.$mount('#app')
