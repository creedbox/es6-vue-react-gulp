import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloVue from './components/hello.vue';
import HelloReact from './components/hello.jsx';

new Vue({
    el: '#vue',
    template: '<HelloVue/>',
    components: {HelloVue},
});

ReactDOM.render(<HelloReact/>, document.getElementById('react'));
