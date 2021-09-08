<template>
  <v-app>

    <v-navigation-drawer app
                        v-model="drawer"
                        temporary
                        color="lime accent-2"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="red--text text--accent-3 font-weight-medium"
          
        >
          <router-link 
          v-for="(item, key) in navItems" :key="key"
          :to= item.path
          style="text-decoration: none;"
          >
            <v-list-item>
              <v-list-item-icon >
                <v-icon >{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item>
            </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar app
              color="black"
              dark
              dense
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Quiz++
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom  v-if="!isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="$router.push('/sign-in')">
            <v-icon class="white--text text--accent-4">mdi-login</v-icon>
          </v-btn>
        </template>
        <span>Sign in</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="$router.push('/sign-up')">
            <v-icon class="white--text text--accent-4" >mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <span>Sign up</span>
      </v-tooltip>

      <v-tooltip bottom v-if="isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"  @click="logout">
            <v-icon class="white--text text--accent-4" >mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Sign out</span>
      </v-tooltip>
      
    </v-app-bar>

    

    <!-- Sizes your content based upon application components -->
    <v-main class="back">

      <!-- Provides the application the proper gutter -->
    <v-container fluid>
        <!-- If using vue-router -->
        <router-view class="mt-10"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    navItems: [
      {
        "text": "Home",
        "path" : "/",
        "icon" : "mdi-home",
      },
      {
        "text": "Quiz",
        "path" : "/quiz",
        "icon" : "mdi-file"
      },
      {
        "text": "About",
        "path" : "/about",
        "icon" : "mdi-information"
      },
      {
        "text": "###",
        "path" : "",
        "icon" : ""
      }
    ]
  }),
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    .then(() => {
      this.$router.push('/sign-in')
    })
  }
  },
};
</script>

<style scoped>
.back { 
  background: url(assets/back.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>