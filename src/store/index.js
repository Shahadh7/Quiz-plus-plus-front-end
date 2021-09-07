import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    auth_key_check(state) {
      state.status = 'auth-check'
    }
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: `${process.env.VUE_APP_REST_API}/login`, data: user, method: 'POST' })
        .then(resp => {
          console.log(resp)
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('auth_success', token, user)
          alert("logged in successfully")
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: `${process.env.VUE_APP_REST_API}/register`, data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          alert("signed in successfully")
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve,reject) => {
        axios({url: `${process.env.VUE_APP_REST_API}/logout`, method: 'POST',headers: {
          "Accept" : "application/json"
        } })
        .then(resp => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          alert(resp.data.message)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
        
      })
    },
    // checkKey ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     commit('auth_key_check')
    //     axios({ 
    //       url: `${process.env.VUE_APP_REST_API}/authcheck`, 
    //       method: 'POST'  
    //     })
    //     .then(resp => {
    //           resolve(resp)
    //           return resp
    //     }).catch(err => {
    //         commit('auth_error')
    //         localStorage.removeItem('token')
    //         reject(err)
    //     })
    //   }
    //   )
    // },
  },
  modules: {
  }
})
