<template>
    <div>
    <h1> Cakes </h1>
    <div 
    class="card" 
    style="width: 18rem;" 
    v-for="product in products"
    :key="product.prodID">
  <img :src="product.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.prodName}}</h5>
    <p class="card-text">{{product.price}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.Products);
    return {
      products,
    };
  },
};

</script>