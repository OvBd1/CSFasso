<template>
  <div class="animated-title">
    <div class="text-top">
      <div>
        <span>Une Ecole</span>
        <span>Un Enfant</span>
      </div>
    </div>
    <div class="text-bottom">
      <div>Un Avenir !</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

@keyframes showTopText {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  margin: 50px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vmin;
}

.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.animated-title > div div {
  font-size: 10vmin;
  padding: 2vmin 0;
  position: absolute;
}

.animated-title > div div span {
  display: block;
}

.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}

.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}

.animated-title > div.text-top div span:last-child {
  color: #ffffff;
}

.animated-title > div.text-bottom {
  bottom: 0;
  color: #6b0064;
}

.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}

@media screen and (max-width: 1200px) {
  /* .animated-title {
    margin: 0;
  } */
}
</style>
