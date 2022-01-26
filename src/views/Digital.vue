<template>
  <main class="digital">
    <section class="digital-title">
      <NavBar />
      <BigTitle msg="Digital & Print" />
      <section class="subtitle">
        <h3>
          <strong>Vendez</strong> votre produit avec un
          <em>contenu clair</em> et une
          <em>image solide</em>.
        </h3>
      </section>
      <section class="description">
        <p>
          Faites
          <strong>vivre votre marque</strong> avec un contenu pertinent et puissant. Votre contenu doit servir plusieurs objectifs : communication interne, image de marque, prospection de vos clients, marque employeur…
        </p>
        <p>
          Chez HLP Studio, nous construisons un contenu qui vous ressemble et qui saura
          <em>s’adapter à vos objectifs</em>.
          <br />
          <br />Vidéo. Site Web. Campagnes Media. Image de Marque. Social Selling. Charte Graphique.
        </p>
      </section>
    </section>
    <section class="digital-body">
      <section class="identite">
        <section>
          <h3>
            Du digital au print, HLP
            <br />Studio vous accompagne
            <br />dans le développement de
            <br />votre identité.
          </h3>
        </section>
      </section>

      <section class="hlp">
        <h2>CONTENT MARKETING</h2>
        <section>
          <div class="left">
            <h4>
              Un contenu unique
              <br />qui vous ressemble.
            </h4>
            <p>
              Nous définissons ensemble l’univers visuel en adéquation avec vos goûts, les valeurs de votre marque et ceux du marché, afin de développer les meilleurs supports pour porter votre image et la rendre unique.
              <br />
              <br />Nous vous aidons à gagner en notoriété et visibilité le plus rapidement possible quel que soit le support.
            </p>
            <img src="@/assets/wormhole.png" alt />
          </div>
          <div class="right">
            <ul class="liste">
              <li>
                <img src="@/assets/1.png" alt />
                <div>
                  <h4>Contenu</h4>
                  <p>Nous créons et produisons des contenus visuels et écrits. Définition de vos objectifs et de vos besoins sur le marché.</p>
                </div>
              </li>
              <li>
                <img src="@/assets/2.png" alt />
                <div>
                  <h4>Contenu</h4>
                  <p>Nous créons et produisons des contenus visuels et écrits. Définition de vos objectifs et de vos besoins sur le marché.</p>
                </div>
              </li>
              <li>
                <img src="@/assets/3.png" alt />
                <div>
                  <h4>Contenu</h4>
                  <p>Nous créons et produisons des contenus visuels et écrits. Définition de vos objectifs et de vos besoins sur le marché.</p>
                </div>
              </li>
            </ul>
          </div>
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

.digital-title {
  min-height: 100vh;
}

.digital-title,
.digital-body,
.identite,
.hlp {
  width: 100%;
}

.digital-title {
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

.digital-body {
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

  // button {
  //   position: relative;
  //   margin-top: 2em;
  //   background: $primary;
  //   font-size: 1.2em;
  //   border-style: none;
  //   color: $text;
  //   font-weight: 600;
  //   padding: 0.5em 2em;

  //   &::after {
  //     z-index: -1;
  //     content: "";
  //     border: 1px solid white;
  //     background: $background;
  //     position: absolute;
  //     inset: 0;

  //     transform: translate(0.7em, 0.7em);
  //     transition: 0.2s all;
  //   }

  //   &:hover {
  //     cursor: pointer;

  //     &::after {
  //       transform: translate(0.4em, 0.4em);
  //       background: white;
  //       transition: all 0.2s;
  //     }
  //   }
  // }
}

.identite {
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
    align-items: flex-start;
    background-clip: padding-box;
    background-position: center;
    padding: 3em 3em;
    width: 100%;
    font-size: 1.2em;
    text-align: left;

    button {
      color: $primary;
      background: white;
      font-size: 1em;
    }

    h3 {
      margin: 0;
      font-size: 2.5em;
      font-family: "AvenirBlack";
    }
  }
}

.hlp {
  section {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5em;
    // gap: 3em;

    .left {
      max-width: 40%;

      p {
        max-width: 18em;
        margin-bottom: 7em;
      }

      h4 {
        font-size: 1.5em;
      }
    }

    .liste {
      display: flex;
      flex-direction: column;
      justify-content: center;
      list-style: none;
      margin-top: 4em;
      // margin: 5vw;
      flex-wrap: wrap;
      gap: 5em;
    
      li {
        display: flex;
        align-items: center;
        gap: 4em;

        div {
          max-width: 15em;
        }

        h4 {
          text-align: left;
        }

        img {
          width: 250px;
        }
      }
    }
  }
}
</style>