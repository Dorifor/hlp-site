<template>
  <h4>{{ msg }}</h4>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4 {
  font-family: 'Montserrat';
  font-size: 3em;
}
</style>
