<template>
  <main class="conseils">
    <section class="conseils-title">
      <NavBar />
      <BigTitle msg="Conseils & Stratégies" />
      <section class="subtitle">
        <h3>
          La
          <strong>stratégie</strong> qui
          vous
          <em>correspond.</em>
        </h3>
      </section>
      <section class="description">
        <p>
          Nous vous accompagnons à vous réaliser de la manière la plus
          <strong>authentique et remarquable</strong> possible, tout en utilisant les leviers les plus pertinents.
        </p>
        <p>
          Nous sommes en veille permanente pour vous proposer les formats
          <em>les plus adaptés</em> à votre stratégie.
        </p>
      </section>
    </section>
    <section class="conseils-body">
      <section class="succes">
        <h2>LA ROUTE VERS LE SUCCÈS</h2>
        <section>
          <p>HLP Studio n’est pas là pour vous vendre du rêve, mais pour vous aider à vous transformer de façon durable et pérenne.</p>
          <p>HLP Studio poursuit son développement en restant fidèle à ses exigences de qualité, de créativité, d’innovation, de pérennité et continue d’affirmer son souhait de proximité et de réalisations sur mesure.</p>
          <!-- <img src="@/assets/engagements.png" alt="engagements" /> -->
          <ul class="liste">
            <li>
              <img src="@/assets/1.png" alt />
              <h4>
                Définir
                <br />votre vision
              </h4>
              <p>
                Quoi de plus important pour une entreprise que sa vision et celle de son dirigeant ?
                Grâce à nos outils de collaboration numérique, nous vous aidons à façonner votre vision afin qu’elle représente au mieux vos valeurs.
              </p>
            </li>
            <li>
              <img src="@/assets/2.png" alt />
              <h4>
                Atteindre
                <br />vos objectifs
              </h4>
              <p>
                Autonomisez vos équipes, affinez vos opérations, interagissez avec vos clients.
                Quels que soient vos objectifs, nos équipes vous aideront à définir un chemin clair pour les atteindre.
              </p>
            </li>
            <li>
              <img src="@/assets/3.png" alt />
              <h4>
                Conduire
                <br />le changement
              </h4>
              <p>Nous travaillons de l’abstrait au concret, transformons vos idées en actions significatives qui vous aideront à devenir une entreprise plus indépendante et plus mature.</p>
            </li>
          </ul>
        </section>
      </section>

      <section class="hlp">
        <h2>HLP STUDIO & VOUS</h2>
        <section>
          <div class="left">
            <h4>
              De la transparence pour une relation
              de confiance
            </h4>
            <p>
              Nos services sont les mêmes pour tous ! Pas de jaloux ! Chez HLP Studio nous aimons célébrer et partager des histoires qui vous rendent singuliers. <br> <br>
              Pourquoi les PME ne pourraient pas avoir les mêmes outils que les grandes entreprises ? Peu importe la taille de votre entreprise, chez HLP STUDIO nous vous proposons les mêmes outils et le mêmes expertises en adéquation avec vos besoins. <br><br>
              Afin de répondre à vos attentes, nous établissons une stratégie globale pour toucher vos cibles et faire grandir votre business de façon durable et pérenne.
            </p>
          </div>
          <img src="@/assets/cones.png" alt />
        </section>
      </section>

      <section class="contact">
        <section>
          <h4>Envie d’attirer vos clients ?</h4>
          <h3>
            Mailons nous
            <br />de vos affaires.
          </h3>
          <button>Contactez-nous</button>
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

.conseils-title {
  min-height: 100vh;
}

.conseils-title,
.conseils-body,
.contact,
.hlp {
  width: 100%;
}

.conseils-title {
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

.conseils-body {
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

.succes {
  section {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      max-width: 60vw;
    }

    .liste {
      display: flex;
      justify-content: center;
      list-style: none;
      margin-top: 4em;
      // margin: 5vw;
      gap: 5em;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 15em;

        h4 {
          text-align: center;
        }

        img {
          width: 250px;
        }
      }
    }
  }
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
    // gap: 3em;

    .left {
      max-width: 40%;

      h4 {
        font-size: 1.5em;
      }
    }
  }
}
</style>