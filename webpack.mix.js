let mix = require('laravel-mix');
mix.js('resources/assets/js/app.js', 'public/js');

mix.webpackConfig({
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.common.js'
    }
  }
});