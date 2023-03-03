<template>
<div class="container">
  <form class="form">
      <div class="mb-3">
          <span class="material-symbols-outlined">
              cake
          </span>
          <div class="header">
              <h3> Register here to purchase our decadent cakes
              </h3>
          </div>
          <div class="mb-3">
              <label for="exampleName" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
              <label for="exampleSurname" class="form-label">Surname</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
              <label for="exampleNumber" class="form-label">Cellphone number</label>
              <input type="number" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
              <input type="radio" id="female" name="fav_language" value="fenale">
              <label for="female">Female</label><br>
              <input type="radio" id="male" name="fav_language" value="male">
              <label for="male">Male</label><br>
              <input type="radio" id="other" name="fav_language" value="other">
              <label for="other">Other</label>
          </div>
      </div>
      <div class="mb-3">
          <label for="exampleEmail" class="form-label">EmailAddress</label>
          <input type="email" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Create Account</button>
      <p>Already have an account? <router-link to="/login"> Login
</router-link></p>
  </form>
</div>
</template>
<script>
</script>
<style scoped>
.container {
height: 100vh;
margin-bottom: 6rem;
}
.header{
display: flex;
justify-content: center;
align-items: center;
}
.form {
margin-top: 25px;
margin-bottom: 12rem;
padding: 20px;
margin-left: 13rem;
height: 110vh;
font-family: Georgia, "Times New Roman", Times, serif;
font-style: italic;
width: 55rem;
background-color: grey;
}
.form h3 {
font-size: 32px;
color: antiquewhite;
margin-top: 30px;
margin-bottom: 50px;
font-weight: bold;
}
.btn {
background-color: antiquewhite;
color: grey;
border-color: antiquewhite;
margin-bottom: 20px;
}
.material-symbols-outlined {
font-size: 50px;
color: pink;
}
</style>