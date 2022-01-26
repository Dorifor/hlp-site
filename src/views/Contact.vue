<template>
  <main class="clients-page">
    <section class="clients-title">
      <NavBar />
      <BigTitle msg="CONTACT" />
      <section class="subtitle">
        <h3>
          <strong>HLP Studio</strong>, Bonjour ?
        </h3>
      </section>
    </section>

    <section class="clients-body">
      <section class="contact-form">
        <div class="left">
          <form action>
            <h3>Nous contacter</h3>
            <input type="text" placeholder="Nom" id="nom" />
            <input type="text" placeholder="Prénom" id="prenom" />
            <input type="text" placeholder="Entreprise" id="entreprise" />
            <input type="text" placeholder="Email" id="email" />
            <input type="text" placeholder="Téléphone" id="tel" />
            <input type="text" placeholder="Sujet" id="sujet" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </form>
        </div>
        <div class="right">
          <h3>Nous rejoindre</h3>
          <div>
            <h4>Un email ?</h4>
            <p><a href="mailto:baptiste.husson@hlp.group">baptiste.husson@hlp.group</a></p>
          </div>
          <div>
            <h4>Nous appeler ?</h4>
            <p>
              + 33 (0)3 81 91 46 35
              <br />+ 33 (0)6 37 58 81 42
            </p>
          </div>
          <div>
            <h4>Une adresse ?</h4>
            <p>
              Zone Technoland
              <br />205 Allée Henri Hugoniot,
              <br />25600 Brognard
            </p>
          </div>
          <div>
            <h4>Nos horaires d’ouverture ?</h4>
            <p>
              Lundi – Vendredi
              <br />8h30-12h / 13h30-17h
            </p>
          </div>
        </div>
      </section>
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

.contact-form {
  max-width: 90vw;
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: .8em;

  h4 {
    text-decoration: underline;
  }

  & > * {
    flex: 1;
  }

  form {
    max-width: 70%;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      font-size: .8em;
      font-family: "Avenir";
      resize: none;
      background: none;
      color: $text;
      width: 100%;
      border: none;
      border-bottom: 1px solid white;
      padding: 1em;
      margin-top: 1em;

      &::placeholder {
        color: #ffffffaa;
      }
    }

    #message {
      min-height: 10em;
    }
  }
}

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