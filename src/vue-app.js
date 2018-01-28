import Vue from 'vue';
import MyComponent from './my-component.vue';

const App = new Vue({
  el: '#vue-app',
  components: { MyComponent },
  template: '<div id="vue-app"><my-component /></div>'
});