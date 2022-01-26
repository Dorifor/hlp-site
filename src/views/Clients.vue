<template>
  <main class="clients-page">
    <section class="clients-title">
      <NavBar />
      <BigTitle msg="NOS CLIENTS" />
      <section class="subtitle">
        <h3>
          Les
          <strong>projets</strong> que nous avons
          <em>développer ensemble</em>.
        </h3>
      </section>
    </section>

    <section class="clients-body">
      <div class="clients-grid">
        <article
          v-for="client in clients"
          :key="client.id"
          :style="`--bg-img: url('${strapi_url + client.fond.url}')`"
        >
          <div class="img">
            <img :src="strapi_url + client.logo.url" :alt="`logo de ${client.nom}`" />
          </div>
          <div class="content">
            <h3>{{ client.nom }}</h3>
            <p>{{ client.services }}</p>
          </div>
        </article>
      </div>

      <section class="contact">
        <section>
          <h4>Et vous ?</h4>
          <h3>
            Vous voulez
            <br />en faire partie ?
          </h3>
          <button>Contactez-nous !</button>
        </section>
      </section>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>
import BigTitle from '@/components/BigTitle.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  data() {
    return {
      clients: [],
      strapi_url: ""
    }
  },
  name: 'Home',
  components: {
    NavBar,
    BigTitle,
    Footer
  },
  mounted() {
    this.strapi_url = process.env.VUE_APP_STRAPI_URL;
    axios.get(`${this.strapi_url}/clients`)
      .then(res => res.data)
      .then(data => {
        this.clients = data
        console.log(this.clients[0].fond)
      })
  }
}
</script>

<style lang="scss">
$background: #000;
$background2: #0e0e0e;
$text: #fff;
$text2: #0e0e0e;
$primary: #b43d8e;
$secondary: #60c0c4;

.clients-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  gap: 0.5em;

  article {
    overflow: hidden;
    position: relative;
    aspect-ratio: 2/3;
    text-align: center;
    display: flex;
    flex-direction: column;
    // background: slategrey;
    $bg-img: var(--bg-img);

    &::before {
      background-size: cover;
      background-image: $bg-img;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      filter: opacity(0.3);
      transition: all 0.2s;
    }

    &:hover::before {
      transition: all 0.2s;
      transform: scale(1.2);
    }

    .img {
      flex: 1 0 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        max-width: 80%;
        max-height: 40%;
      }
    }

    .content {
      flex: 1 0 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        max-width: 60%;
      }

      p {
        flex: 1;
        font-size: 0.7em;
        max-width: 60%;
      }
    }
  }
}

.clients-title,
.clients-body,
.contact {
  width: 100%;
}

.clients-title {
  min-height: 60vh;
  text-align: center;
}

.clients-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: 1.7em;
}

.contact {
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100%;

  section {
    background-image: url("~@/assets/BG-rose.png");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-clip: padding-box;
    background-position: center;
    padding: 2em 0;
    width: 100%;
    font-size: 1.2em;
    text-align: center;

    button {
      color: $primary;
      background: white;
      font-size: 1em;
      z-index: 1;
    }

    h3 {
      margin: 0;
      font-size: 2.5em;
      font-family: "AvenirBlack";
    }
  }
}
</style>