<template>
  <main class="approche">
    <section class="approche-title">
      <NavBar />
      <BigTitle msg="APPROCHE" />
      <section class="subtitle">
        <h3>
          Notre
          <strong>spécialité</strong> ? Le
          <em>digital.</em>
        </h3>
      </section>
      <section class="description">
        <p>
          Créée en 2019 et située entre
          <br />Belfort et Montbéliard, HLP
          <br />Studio est une agence
          <br />
          <strong>créative et passionnée</strong> par le
          <br />digital.
        </p>
        <p>
          Notre but ? Créer un
          <br />accompagnement autour de
          <br />valeurs positives et vous faire
          <br />
          <em>atteindre vos objectifs</em> en
          <br />touchant vos cibles de
          <br />manière optimale.
        </p>
      </section>
    </section>
    <section class="approche-body">
      <section class="marketing">
        <h2>NOTRE APPROCHE MARKETING</h2>
        <section>
          <div>
            <h3>
              <span>01</span> Contenu
            </h3>
            <p>
              Nous créons et produisons des contenus visuels et écrits. Définition de
              <em>vos objectifs</em> et de
              <em>vos besoins</em> sur le marché.
            </p>
          </div>
          <div>
            <h3>
              <span>02</span> Acquisition
            </h3>
            <p>Nous mettons en place des stratégies afin d’attirer vos contacts pertinents ciblés et prêts à acheter vos <em>produits / services</em>.</p>
          </div>
          <div>
            <h3>
              <span>03</span> Conversion
            </h3>
            <p>Transformez vos contacts et prospects ciblés en <em>clients satisfaits</em> prêts à recommander votre marque.</p>
          </div>
          <div>
            <h3>
              <span>04</span> Notoriété
            </h3>
            <p>Nous analysons l’ensemble des résultats pour <em>adapter</em> les prochaines actions à mettre en place.</p>
          </div>
        </section>
      </section>

      <section class="engagements">
        <h2>NOS ENGAGEMENTS</h2>
        <section>
          <p><b>HLP Studio n’est pas là pour vous vendre du rêve, mais pour vous aider à vous transformer de façon durable et pérenne.</b></p>
          <p>HLP Studio poursuit son développement en restant fidèle à ses exigences de qualité, de créativité, d’innovation, de pérennité et continue d’affirmer son souhait de proximité et de réalisations sur mesure.</p>
          <!-- <img src="@/assets/engagements.png" alt="engagements" /> -->
          <ul class="liste">
            <li>
              <img src="@/assets/eng1.png" alt />
              <p>Étude de la faisabilité de votre projet et <em>réponse sous 48h</em>.</p>
            </li>
            <li>
              <img src="@/assets/eng2.png" alt />
              <p>Un <em>interlocuteur unique</em> et compétent sur tout le suivi de votre projet.</p>
            </li>
            <li>
              <img src="@/assets/eng3.png" alt />
              <p>Vous accompagner à 200% dans la réalisation de votre projet et <em>vous rendre autonome</em>.</p>
            </li>
            <li>
              <img src="@/assets/eng4.png" alt />
              <p>À chaque étape clé, nous fournissons un <em>reporting</em> avec nos recommandations.</p>
            </li>
          </ul>
        </section>
      </section>

      <section class="innovations">
        <h2>INNOVATIONS LAB</h2>
        <section>
          <div class="left">
            <h4>
              Marketing Digital,
              Réalité augmentée & virtuelle
            </h4>
            <p>
              Les technologies sont aujourd’hui des leviers qui affirment votre image de marque et vous rendent reconnaissables aux yeux de tous. Elles apportent LE petit plus qui vous démarquera auprès de vos clients.
              <br />
              <br /><em>Alors pourquoi s’en priver ?</em>
            </p>
            <button>Dites-le nous !</button>
          </div>
          <img src="@/assets/oculus.png" alt />
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
    <Footer />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BigTitle from '@/components/BigTitle.vue'
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

.approche-title,
.marketing,
.engagements {
  min-height: 100vh;
  width: 100%;
}

.marketing,
.engagements,
.innovations,
.contact > section {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.innovations,
.contact {
  min-height: 70vh;
  width: 100%;
}

.approche-title {
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

.approche-body {
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

  .marketing {
    h2 {
      text-align: left;
    }

    section {
      display: flex;
      justify-content: center;
      gap: 0;
      flex-wrap: wrap;
      margin: 0 20vw;
      gap: 3em;

      div {
        flex: 1 0 45%;
        text-align: left;
        font-family: "AvenirBook";
        font-weight: lighter;
        max-width: 15em;

        span {
          font-size: 4em;
          font-family: "AvenirBlack";
          color: $primary;
        }
      }
    }
  }

  .engagements {
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
        gap: 0.5em;
        flex-wrap: wrap;

        li {
          display: flex;
          align-items: center;
          flex-direction: column;
          max-width: 15em;
        }

        img {
          width: 250px;
        }
      }
    }
  }

  .innovations {
    section {
      display: flex;
      justify-content: center;
      gap: 3em;

      .left {
        max-width: 40%;

        h4 {
          font-size: 1.5em;
        }
      }
    }
  }

  .contact {
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
}
</style>