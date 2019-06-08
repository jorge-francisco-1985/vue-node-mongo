<template>
  <v-app id="inspire" >
    
    <v-toolbar 
      fixed
      app
      clipped-right
      color="white"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      class=""
      fixed
      app
      
    >
    <v-toolbar 
      
      
      class="white"
    >
      
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
      <v-list dense>
        <v-list-tile :to="{name:'inicio'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inicio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container  >
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>  
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>