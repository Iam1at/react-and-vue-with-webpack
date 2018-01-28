<style>
  #vue-app .red {
    color: #f00;
  }
</style>

<template>
  <div class="red">{{msg}}</div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello Vue!'
      }
    }
  }
</script>