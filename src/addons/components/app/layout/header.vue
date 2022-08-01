
<template>
<nav class="headroom header navbar navbar-expand-xl navbar-togglable fixed-top navbar-dark">
<div class="container">
<a class="navbar-brand" href="index.html"></a>
<button @click="menuToggle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="mainMenu">
<ul class="navbar-nav m-auto">
<li class="nav-item">
<a class="nav-link scroll-link" href="#locations">Locations</a>
</li>
<li class="nav-item">
<a class="nav-link scroll-link" href="#kitchen">Our Kitchen</a>
</li>
<li class="nav-item">
<a class="nav-link scroll-link" href="#catering">Catering</a>
</li>
<li class="nav-item">
<a class="nav-link scroll-link" href="#about-us">About Us</a>
</li>
<li class="nav-item">
<a class="nav-link scroll-link" href="#contact-us">Contact Us</a>
</li>
</ul>
</div>
</div>
</nav>
</template>


<script>
export default {
  name:'header',
  components: {
    
  },
  data(){
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {

    menuToggle(){
      // console.log("in menu function");
        let menu = document.querySelector(".navbar-collapse");
        if(!menu.className.includes("customShow")){
          // console.log("in if");
          menu.className += " customShow";
        }
        else{
          menu.classList.remove("customShow");
        }
    },

    task(){
        // console.log("Triggered just one time >= 80");
    },

    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      const offsetTop = window.scrollY || 0;
      const percentage = (offsetTop * 100) / document.body.scrollHeight;
      
      let header = document.querySelector(".headroom");

      if(!header.className.includes('v-header--bgchange')){
          header.className += " v-header--bgchange";
      }
      if(percentage === 0 && header.className.includes('v-header--bgchange')){
        header.classList.remove("v-header--bgchange");
      }
    },
  },
}
</script>
