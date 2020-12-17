<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="doorsAmount">Quantas portas?</label>
        <input type="text" id="doorsAmount" size="3" v-model.number="doorsAmount">
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  components: { Door },
  data: function () {
    return {
      started: false,
      doorsAmount: 3,
      selectedDoor: null
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  color: #FFF;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}
</style>
