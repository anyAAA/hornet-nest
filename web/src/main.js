import Vue from 'vue'
import App from './App.vue'

import store from './store'
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
Framework7.use(Framework7Vue);

// 引入css
import '@/assets/css/framework7.bundle.min.css'
import '@/assets/css/icons.css';
import '@/assets/css/basic.scss';

Vue.config.productionTip = false

new Vue({

  store,
  // index,
  render: h => h(App),
  // pushState: true
}).$mount('#app')
