
<template> 
<Header />
<Navbar />
<div class="container-fluid">
<div class="row">
<main class="col-md-12 ms-sm-auto col-lg-12 px-md-4"> 
<section class="mt-3">
<Breadcrumb />
<div class="card w-100"> 
<div class="card-body">
<h5 class="card-title"></h5>
<router-view></router-view> 
<p class="card-text"></p>
</div>
</div>
</section>
</main>
</div>
</div>
<Footer />
</template>

<script setup>
import Header from './components/Layout/Header.vue' 
import Navbar from './components/Layout/Navbar.vue'
import Breadcrumb from './components/Layout/Breadcrumb.vue' 
import Footer from './components/Layout/Footer.vue' 
</script>