import Vue from 'vue';
// Stilos de Quasar
// Quasar Styles
import "quasar-extras/material-icons";
import "quasar-extras/fontawesome";
import "quasar-extras/mdi";
import "quasar-extras/ionicons";
import "quasar-extras/roboto-font";
import "quasar-extras/animate";
import "quasar-framework/dist/quasar.mat.styl";
import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm';
window.__THEME__ = 'mat';
Vue.use(Quasar, {
    components: All,
    directives: All,
    plugins: All,
    animations: All
});


new Vue({
    el: 'main',
    data() {
        return {
            vueMessage : 'Message from Vue'
        };
    },
    mounted() {
        this.$q.notify('Message');
    }
});