<template>
    
  <div class="nav justify-content-start">
    <img src="https://i.postimg.cc/13wd1TXf/LOGO-Sweet-NC.png" style="width:200px; padding-top:10px;">
  </div>

<ul class="nav justify-content-end">
    
  <li class="nav-item">
    <router-link to="/"> Home

</router-link> | 
    
  </li>
  <li class="nav-item">
    <router-link to="/admin"> Admin

</router-link> | 
    
  </li>
  <li class="nav-item">
    <router-link to="/products"> Products
      
</router-link> |
  </li>
  <li class="nav-item">
    <router-link to="/register"> Register
      
</router-link> |
  </li>
  <li class="nav-item">
    <router-link to="/login"> Login
      
</router-link> |
    
  </li>
  
  <li class="nav-item">
    <router-link to="/contact"> Contact
      
</router-link> |
    
  </li>
  
</ul>


</template>



<script>

</script>




<style scoped>

* {
  margin: 0;
}

.nav-item {
  padding-right: 40px;
  margin-bottom: 10px;
  padding-top: -110px;
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
}

.nav a {
  color: antiquewhite;
  text-decoration: none;
  font-family:  Georgia, "Times New Roman", Times, serif;
  font-size: 20px;

}

.nav-item hover:a {
  color: palevioletred;
}

.nav {
  color:antiquewhite;
}

.nav {
  background-color: #be8a62;
  height:85px;
  
}

</style>