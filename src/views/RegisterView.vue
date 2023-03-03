<template>
    <div class="container">
    <form class="form">
      <div class="mb-3">
        <h3>Register here to purchase our decadent cakes 
        </h3>

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
      <button type="button" class="btn btn-outline-secondary">Gender</button>
  <button type="button" class="btns btn-outline-secondary dropdown-toggle dropdown-toggle-split gen" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Female</a></li>
    <li><a class="dropdown-item" href="#">Male</a></li>
    <li><a class="dropdown-item" href="#">Other</a></li>
  
  </ul>
  </div>
      </div>
      <div class="mb-3">
        <label for="exampleEmail" class="form-label">EmailAddress</label>
        <input type="email" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</template>

<script>
</script>

<style scoped>

.container{
    height:90vh;
    margin-bottom: 2rem;
}
.form {
  margin-top: 25px;
  margin-bottom: 50rem;
  padding:10px;
  margin-left: 13rem;
  height: 90vh;
  font-family:Georgia, "Times New Roman", Times, serif;
  font-style:italic;
  width: 55rem;
  background-color: rgb(97, 112, 128);
  border-radius: 25px;
}

.form-text {
  color: rgb(145, 87, 30);
}

.form h3 {
  font-size: 20px;
  color: rgb(215, 136, 58);
  margin-left: 50px;
}

.btn{
  background-color: rgb(68, 68, 95);
  color: white;
  border-color: rgb(68, 68, 95);
}

</style>