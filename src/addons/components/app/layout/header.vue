
<template>
<nav class="headroom header navbar navbar-expand-xl navbar-togglable fixed-top navbar-dark">
<div class="container">
<a class="navbar-brand" href="index.html"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
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
    task(){
        console.log("Triggered just one time >= 80");
    },
    task2(){
        console.log("Triggered task2");
    },
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      const offsetTop = window.scrollY || 0;
      const percentage = (offsetTop * 100) / document.body.scrollHeight;
      console.log(percentage);
      let header = document.querySelector(".headroom")
      if(!header.className.includes('v-toolbar--bgchange')){
       
          header.className += " v-toolbar--bgchange";
        
      }

      else{
        this.task2();
      }

      // Do something with the percentage
    },
  },
}
</script>
