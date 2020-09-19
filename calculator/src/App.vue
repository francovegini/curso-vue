<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator/>
  </div>
</template>

<script>
import Calculator from "@/main/Calculator";

export default {
  name: "App",
  components: { Calculator }
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