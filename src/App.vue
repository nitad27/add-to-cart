<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title color="#333" class="mr-7 text-h5 font-weight-bold"
        >Book</v-toolbar-title
      >
      <v-btn class="ma-1" color="#333" plain> สินค้าใหม่ </v-btn>
      <v-btn class="ma-1" color="#333" plain> สินค้าขายดี </v-btn>
      <v-btn class="ma-1" color="#333" plain> สินค้าลดราคา </v-btn>
      <v-btn class="ma-1" color="#333" plain> สินค้าแนะนำ </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon class="no-background-hover">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon :to="`/cart`" class="no-background-hover">
        <v-badge
          v-if="$store.getters.getOrder.length !== 0"
          color="primary"
          :content="$store.getters.getOrder.length"
          class="mr-5"
        >
          <v-icon class="ml-5">mdi-cart-outline</v-icon>
        </v-badge>
        <v-icon v-if="$store.getters.getOrder.length === 0"
          >mdi-cart-outline</v-icon
        >
      </v-btn>
      <v-avatar color="primary" size="30" class="ml-3">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <span>Nitad Wannapokin &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.no-background-hover::before {
  background-color: transparent !important;
}
</style>
