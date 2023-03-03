<template>
    <div>
        <form class="form">
        <div class="mb-3">
          <h3>Login|</h3>
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</template>

<style scoped>
.form {
  margin-top: 100px;
  margin-left: 300px;
  margin-bottom: 100px;
  color: lightsteelblue;
  width: 60rem;
  background-color: grey;
  padding: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.form-text {
  color: lightgoldenrodyellow;
}
.form h3 {
  font-size: 50px;
  color: lightgoldenrodyellow;
  margin-left: 50px;
}
</style>