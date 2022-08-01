
<template>
<nav class="headroom navbar  navbar-togglable navbar-expand-lg fixed-top pt-0 navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-none" href="#">Navbar</a>
    <button @click="addClass()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
          
        <a @click="removeShow()" class="nav-link scroll-link" href="#locations">Locations</a>
        <a @click="removeShow()" class="nav-link scroll-link" href="#kitchen">Our Kitchen</a>
        <a @click="removeShow()" class="nav-link scroll-link" href="#catering">Catering</a> 
        <a @click="removeShow()" class="nav-link scroll-link" href="#about-us">About Us</a>
        <a @click="removeShow()" class="nav-link scroll-link" href="#contact-us">Contact Us</a>
       
      </div>
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

     addClass(){
       let a= document.querySelector(".headroom");
       if(a.classList.contains('navbar-dark')){
           a.classList.remove("navbar-dark");
           a.className += " navbar-light";
       }
       else{
           a.classList.remove("navbar-light");
           a.className += " navbar-dark";
       }
     },

     removeShow(){
       console.log("INNn");
       let b= document.querySelector("#navbarNavAltMarkup");
       if(b.classList.contains('show')){
           b.classList.remove("show");
           if(a.classList.contains('navbar-light')){
             a.classList.remove("navbar-light");
             a.className += " navbar-dark";
           }
           else if(a.classList.contains('navbar-dark')){
             a.classList.remove("navbar-dark");
             a.className += " navbar-light";
           }
       }
     },


     handleScroll(event) {
     
       const offsetTop = window.scrollY || 0;
       const percentage = (offsetTop * 100) / document.body.scrollHeight;
      
       let header = document.querySelector(".headroom");

       if(!header.className.includes('v-header--bgchange')){
           header.className += " v-header--bgchange";
       }
       if(percentage === 0 && header.className.includes('v-header--bgchange')){
         header.classList.remove("v-header--bgchange");
         if(header.classList.contains('navbar-light')){
             header.classList.remove("navbar-light");
             header.className += " navbar-dark";
           }
       }
   },
  },
}
</script>
