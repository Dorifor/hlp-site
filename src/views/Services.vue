<template>
  <main class="services">
    <section class="services-title">
      <NavBar />
      <BigTitle msg="SERVICES" />
      <section class="subtitle">
        <h3>
          Votre
          <strong>différence</strong> ? Une
          <em>force</em> pour vos clients.
        </h3>
      </section>
      <section class="description">
        <p>
          Chez Studio nous prenons le temps de
          <strong>comprendre et d’analyser</strong> votre organisation et vos clients afin de vous recommander une stratégie propre à votre entreprise.
        </p>
        <p>
          Nos spécialistes en marketing digital mesurent et pilotent vos actions de marketing digital en vue d’
          <em>optimiser la fidélisation, la conversion et l’acquisition</em> de votre audience pour ainsi assurer pleinement votre succès.
        </p>
      </section>
    </section>
    <section class="bandes">
      <div class="container">
        <div>
          <h3>CONSEILS & STRATÉGIES</h3>
        </div>
        <div>
          <h3>DIGITAL & PRINT</h3>
        </div>
        <div>
          <h3>INNOVATION</h3>
        </div>
      </div>
    </section>
    <section class="services-body">
      <section class="triade">
        <h2>LA TRIADE DE LA RÉUSSITE</h2>
        <section>
          <div>
            <router-link to="/conseils">
              <button>Conseils & Stratégies</button>
            </router-link>
          </div>
          <div>
            <router-link to="/digital">
              <button>Digital & Print</button>
            </router-link>
          </div>
          <div>
            <router-link to="/innovations">
              <button>innovation</button>
            </router-link>
          </div>
        </section>
      </section>
      <img src="@/assets/services.png" alt="services" />

      <section class="clients">
        <section>
          <h4>Cas clients</h4>
          <h3>
            Découvrez les projets
            <br />que nous avons réalisés.
          </h3>
          <router-link to="/">
            <button>Nos créations</button>
          </router-link>
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

export default {
  name: 'Home',
  components: {
    NavBar,
    BigTitle,
    Footer
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

.services-title {
  min-height: 100vh;
}

.triade {
  min-height: 60vh;
}

.services-title,
.services-body,
.triade,
.clients {
  width: 100%;
}

.services-title {
  text-align: center;

  p {
    font-size: 2em;
  }

  .description {
    display: flex;
    justify-content: center;
    gap: 3em;

    p {
      max-width: 25%;
    }

    p:first-child {
      text-align: left;
    }

    p:last-child {
      text-align: right;
    }
  }
}

.services-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: 1.7em;

  h2 {
    font-size: 3.5em;
    font-weight: 800;
    text-align: left;
    font-family: "AvenirBlack";
    margin-left: 1.5em;
  }
}

.bandes {
  font-size: 3em;
  font-family: "AvenirBlack";
  overflow-x: hidden;
  margin-top: -4em;
  padding-top: 3em;
  padding-bottom: 3em;

  .container {
    // max-width: 100vw;
    div {
      transform: rotate(-10deg) translateX(-1em);
      background: $primary;
      width: 110vw;

      &:first-child h3 {
        padding-left: 3em;
      }

      &:nth-child(2) h3 {
        padding-left: 13em;
      }

      &:last-child h3 {
        padding-left: 20em;
      }
    }
  }
}

.triade {
  section {
    display: flex;
    justify-content: space-evenly;

    div {
      // min-width: max-content;
      // flex: 1 0 30%;
      gap: 3em;
    }
  }
}

.clients {
  margin: 20vh 0;
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