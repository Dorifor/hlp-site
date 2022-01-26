<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'BigTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 12em;
  opacity: .25;
  margin-bottom: 0;
}
</style>
