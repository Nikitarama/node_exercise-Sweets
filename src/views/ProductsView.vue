<template>
  <div class="products-page">
    <h1>Have A Look At Our Cakes:</h1>
    <div class="row">
      <div
        class="card col-3"
        v-for="product in products"
        :key="product.prodID"
        style="height: 350px"
      >
        <img
          :src="product.imgURL"
          class="card-img-top"
          alt="..."
          style="height: 200px"
        />
        <div class="card-body">
          <p class="name">{{ product.prodName }}</p>
          <p class="price">R{{ product.price }}</p>
          <button class="view" href="#">View Details</button>
        </div>
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
    const products = computed(() => store.state.products);
    return {
      products,
    };
  },
};
</script>

<style scoped>
.products-page {
    background-image: url(https://i.postimg.cc/xd78JhND/SAGE-SPLITSCREEN-081017-BB-117.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 230vh;
    background-color: #F5F5F5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.card {
    margin-bottom: 40px;
    margin-left: 60px;
    width: 300px;
    padding: 0;
}
 img {
    max-width: 350px;
}
.view {
    border-radius: 20px;
    border-color: pink;
    background-color: palevioletred;
}
.view:hover {
    background-color: pink;
}
.row {
   row-gap: 10px;
   grid-template-rows: 1fr 1fr;
}
h1 {
    color: antiquewhite;
    padding-top: 70px;
    padding-bottom: 200px;
    font-size: 60px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
