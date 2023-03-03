<template>

<h1>Admin Page</h1>
    <td>
        <table class="list" id="adminList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Image</th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.ID">
                    <td>{{parseInt([storeIndex]) + 1}}</td>
                    <td>{{product.prodName}}</td>
                    <td>{{product.prodDescription}}</td>
                    <td>R{{product.price}}</td>
                    <td><img
          :src="product.imgURL"
          class="card-img-top"
          alt="..."
          style="width:55px; height:60px"
        /></td>
                    <td><button id="{{product.ID}}" class="btn btn-danger">Delete</button></td>
                    <td><button id="{{product.ID}}" class="btn btn-success">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </td>

    <br>
    <h1>User Profile</h1>
    <td>
        <table class="userlist" id="userList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>gender</th>
                    <th>emailAdd</th>
                    <th>userRole</th>
                    <th>userProfile</th>
                    <th>joinDate</th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userID">
                    <td>{{parseInt([storeIndex]) + 1}}</td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.emailAdd}}</td>
                    <td>{{user.userRole}}</td>
                    <td>{{user.userProfile}}</td>
                    <td>{{user.joinDate}}</td>
                    <td><button id="{{user.userID}}" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </td>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    return {
      products, users
    };
  },
};

</script>

<style scoped>

.list, .userlist{
    width: 90rem;
}

</style>