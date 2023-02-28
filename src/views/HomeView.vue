<template>
  <Home/>
  <div class="body">
    <div class="introduction">
      <h1>We are <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h1>
      <h3> A Delicious Delight You'll Love</h3>
      <button class="buy-button">Buy now</button>
    </div>
    
    <form class="form">
      <div class="mb-3">
        <h3>Login | Register
        </h3>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
  </div>
  <div class="about" id="ab">
    <img src="https://i.postimg.cc/sgXXkrmJ/ab.jpg" />
  </div>
  <div class="text-block">
    <h2>About Us</h2>
    <h4>
      Lorem ipsum dolor sit amet. Eum magni voluptate qui maxime delectus et
      error blanditiis sit eaque consequuntur et delectus nulla hic
      necessitatibus consequatur ut earum unde. Et autem corrupti quo velit
      possimus et explicabo sint et porro incidunt. Ut nihil atque et sequi quae
      et quaerat enim!
    </h4>
  </div>
</template>

<script>


export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: true,  
      typeArray: ['Sweety NC!!'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false
      }
    },
    erasetext() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;

         this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
         this.charIndex -= 1;
         setTimeout(this.eraseText, this.erasingSpeed); 
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>

<style scoped>


.body {
  background: url("https://i.postimg.cc/C5jfF6M7/brownie-gc671efb18-1920.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 180vh;
  background-color: black;  
  margin: 0;
  padding: 0;
  font-family:  Georgia, "Times New Roman", Times, serif;
}

.introduction {
  color:antiquewhite;
  padding-top: 200px;
  
}

.introduction h1 {
  font-size: 70px;
}

.buy-button {
  border-radius: 30px;
  padding: 8px;
  border: 2px solid pink;
}

button:hover {
  background-color: pink;
}


span.cursor {
  display: inline-block;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% { background-color: #fff; }
  50% { background-color: transparent;}
  99% { background-color: transparent;}
}

.form {
  margin-top: 340px;
  margin-left: 300px;
  color: lightsteelblue;
  width: 60rem;
}

.form-text {
  color: lightgoldenrodyellow;
}

.form h3 {
  font-size: 50px;
  color: lightgoldenrodyellow;
  margin-left: 50px;
}

.about img {
  height: 450px;
  width: 32rem;
  margin-left: 40rem;
  margin-top: 50px;
}
#ab {
  background-color: #AF804F;
  height: 85vh;
}
.about h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-style: italic;
  font-size: 36px;
  text-align: center;
  padding: 10px;
  color: white;
  text-decoration: underline;
}
.text-block {
  background-color: #F3F0ED;
  position: absolute;
  width: 50%;
  height: 50vh;
  top: 99rem;
  left: 80px;
  padding: 60px;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 25px;
}
.about h4 {
  font-size: 18px;
}

</style>
