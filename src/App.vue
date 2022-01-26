<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&family=Permanent+Marker&display=swap");

@font-face {
  font-family: "Avenir";
  src: url("./assets/avenir_ff/AvenirNext.ttf");
}

@font-face {
  font-family: "AvenirBlack";
  src: url("./assets/avenir_ff/AvenirLTStd-Black.otf");
}

@font-face {
  font-family: "AvenirBook";
  src: url("./assets/avenir_ff/AvenirLTStd-Book.otf");
}

@font-face {
  font-family: "AvenirRoman";
  src: url("./assets/avenir_ff/AvenirLTStd-Roman.otf");
}

$old_bg: #000;
$background2: #0e0e0e;
$background: $background2;
$text: #fff;
$text2: #f8f8f8;
$primary: #b43d8e;
$secondary: #60c0c4;

html {
  scroll-behavior: smooth;
}

body {
  background: $background2;
  color: $text;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  position: relative;
  margin-top: 2em;
  background: $primary;
  font-size: 1.2em;
  border-style: none;
  color: $text;
  font-weight: 600;
  padding: 0.5em 2em;

  &::before {
    z-index: -1;
    content: "";
    border: 1px solid white;
    background: #ffffff00;
    position: absolute;
    inset: 0;

    transform: translate(0.7em, 0.7em);
    transition: 0.2s all;
  }

  &:hover {
    cursor: pointer;

    &::before {
      transform: translate(0.4em, 0.4em);
      background: white;
      transition: all 0.2s;
    }
  }
}
</style>
 