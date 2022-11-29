<template>
    <div>
        <button  data-v-21137603="" data-v-44114671="" type="button" data-role="none" class="slick-arrow slick-next" style="display: block;background-color:black">Next</button>
      <VueSlickCarousel :arrows="true" :dots="true" >
        <div>  <img src="https://cdnd-tr.ceptesok.com/banner/1440x475/2219d855d62f8cd556af645062db3879.jpg" /></div>
        <div> <img src="https://cdnd-tr.ceptesok.com/banner/1440x475/2219d855d62f8cd556af645062db3879.jpg" /></div>
        <div><img src="https://cdnd-tr.ceptesok.com/banner/1440x475/7afb336398077288df077d089afdbdd4.jpg" /></div>
        <div><img src="https://cdnd-tr.ceptesok.com/banner/1440x475/208131b8e2069f3ecf9e2395ac9db41a.jpg" /></div>
      </VueSlickCarousel>
    </div>
  </template>
   
  <script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
   
    export default {
        data() {
    return {
      slickOptions: {
    
        arrows: true
      }
    }
  },
      name: 'MyComponent',
      components: { VueSlickCarousel },
    }
  </script> 
  <style scoped>
  img{
    margin-left: auto;
    margin-right: auto;
  }
 


</style>