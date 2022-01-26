<template>
  <div id="nav">
    <router-link to="/">
      <img src="~@/assets/hlpstudio.png" alt />
    </router-link>|
    <router-link to="/approche">Approche</router-link>|
    <router-link to="/services">Services</router-link>|
    <router-link to="/clients">Clients</router-link>|
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>

</script>


<style lang="scss">
$text: #fff;
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $text;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>