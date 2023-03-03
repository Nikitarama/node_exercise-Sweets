<template>
    <div class="cont">
      <img src="https://i.postimg.cc/cJLZsXMW/LOGO-Sweet-NC.png" id="contact" />
      <h2 class="head">Contact Us</h2>
      <p class="descrip">Since our opening, we have become masters of our craft, our commitment to quality products,exceptional services and incomparable customers care keep our community coming back again and again. If you would like to know more details on our company, please don't hesitate to contact us by filling in the contact form below and we'll promptly get back to you</p>

      <form action="https://formspree.io/f/mleknwqv" class="forms" method="post">
      <div class="mb-3">
        <p class="contacts">info@sweetyNC@gmail.com
        </p>
        <p class="number">123-456-7890
        </p>

      </div>
      <div class="mb-3">
        <label for="exampleName" class="form-labels" name="username" required>Full Name: </label>
        <input type="text" class="form-controls" id="exampleInputPassword1" name="username" required>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-labels">Email:</label>
        <input type="text" class="form-controls" id="exampleInputPassword1">
      </div>
      <button>Submit</button>
      </form>
    </div>

  
</template>

<script>

</script>

<style scoped>
/* 
.container-fluid {
  height: 98vh;
} */
.head{
  padding:80px;
}
#contact {
  height: 100vh;
  width:45rem;
  float:left;
  padding: 0;
}
.cont {
  background-color: #f3f0ed;
  height:100vh;
  /* width: 52%;
  height: 50vh;
  margin-right: 35rem; */
  font-family: Georgia, "Times New Roman", Times, serif;
}
.form-controls{
  border: 2px solid 
}

.descrip{
  margin-right:60px;
  
}
button {
  background-color: tan;
  border-radius: 5px;
  border-color: tan;
  padding: 1px;
  margin-left: 200px;
  margin-right: 200px;
}


</style>
