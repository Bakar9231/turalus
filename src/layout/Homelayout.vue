<template>
  <Header />
    <slot></slot>
  <Footer />
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import Header from '../addons/components/app/layout/header.vue'
import Footer from '../addons/components/app/layout/footer.vue'
export default {
  name:'Homelayout',
  components: {
    Header,
    Footer,
  },
  data(){
  },
  methods : {
    
  },
}
</script>