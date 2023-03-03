<template>
  <Home />
  <div class="body">
    <div class="introduction">
      <h1>
        We are <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
      <h3>A Delicious Delight You'll Love</h3>
      <button class="login"><router-link to="/login"> Login
</router-link></button> <button class="register"><router-link to="/register"> Create An Account
</router-link></button>
    </div>
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/7P9TVxcw/carrot-cake.jpg" style="height:550px;" class="d-block rounded mx-auto d-block w-75" alt="CapeTown">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/X7wP8fzB/Tiramisu-8s-1.jpg" style="height:550px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/9QD72bHr/Simply-Recipes-Perfect-Cheesecake-LEAD-6-97a8cb3a60c24903b883c1d5fb5a69d3.jpg" style="height:550px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/HxmGH6Rm/60564-Strawberry-Cake-From-Scratch-ddfms-4-X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg" style="height:550px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
</div>
  </div>

    </div>
  

  <div class="about" id="ab">
    <img src="https://i.postimg.cc/sgXXkrmJ/ab.jpg" />
  </div>
  <div class="text-block">
    <h2>About Us</h2>
    <p class="para">
      Sweety NC is a South African-styled bakery established in 2023, to bring
      the eccentric taste of South-African homes. We offer our customers a
      variety of cakes and baked goods
    </p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: true,
      typeArray: ["Sweety NC!!"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
      }
    },
    erasetext() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
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
button a {
  text-decoration: none;
  color: grey;
}
.login, .register {
  margin-top: 50px;
  margin-left: 50px;
  border-radius: 10px;
  padding: 8px;
  border: 2px solid pink;
  background-color: antiquewhite;
}
button:hover{
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
.carousel {
  margin-top: 100px;
  margin-left: 130px;
  height: 300px;
  width: 80rem;
}
.carousel button {
  top: 300px;
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
  height: 52vh;
  top: 92rem;
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
