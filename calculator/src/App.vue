<template>
  <div id="app">
    <h1>Olá Vue!</h1>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFF;
  background: linear-gradient(90deg, rgba(104,101,168,1) 0%, rgba(59,140,157,1) 100%);
}

</style>