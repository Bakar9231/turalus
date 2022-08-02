
<template>
<nav class="headroom navbar navbar-expand-lg navbar-dark fixed-top">
  <button @click="delayTimer()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a @click="removeShow()" class="nav-link scroll-link" href="#locations">Locations</a>
      </li>
      <li class="nav-item">
        <a @click="removeShow()" class="nav-link scroll-link" href="#kitchen">Our Kitchen</a>
      </li>
      <li class="nav-item dropdown">
         <a @click="removeShow()" class="nav-link scroll-link" href="#catering">Catering</a> 
      </li>
      <li class="nav-item">
        <a @click="removeShow()" class="nav-link scroll-link" href="#about-us">About Us</a>
      </li>
      <li class="nav-item">
        <a @click="removeShow()" class="nav-link scroll-link" href="#contact-us">Contact Us</a>
      </li>
    </ul>
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

      delayTimer() {
        let a= document.querySelector(".headroom");
       if(!a.classList.contains('navbar-dark')){
         timeoutID = setTimeout(this.addClass, 400);
       }else{
        this.addClass();
       }
      },

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
       let b= document.querySelector("#navbarSupportedContent");
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
