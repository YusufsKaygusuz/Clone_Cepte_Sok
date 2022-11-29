<template>
    <div>
      <Navbar />


      
      <Slider2 />
      <Products />
      <Category />
      <Kampanya />
      <Footer />
    </div>
  </template>
  <script>
  import Navbar from '../components/navbar.vue';
  import Slider2 from '../components/slider2.vue';
  import Footer from '../components/footer.vue';
  import Products from '../components/urunler.vue';
  import Kampanya from '../components/kampanya.vue';
  import Category from '../components/kategoriler.vue';
 
  export default {
      name: "IndexPage",
      components: { Navbar,Slider2 ,Footer,Category,Kampanya,Products}
  }
  </script>