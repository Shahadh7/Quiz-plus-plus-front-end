module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_REST_API,
  },
  transpileDependencies: [
    'vuetify'
  ]
}
