<template>
  <main class="innovation">
    <section class="innovation-title">
      <NavBar />
      <BigTitle msg="Innovation" />
      <section class="subtitle">
        <h3>
          <strong>Développez</strong> votre activité dans un esprit
          <em>d’innovation</em>.
        </h3>
      </section>
      <section class="description">
        <p>
          Parce que le futur est voué à se convertir complètement au
          <strong>virtuel</strong>, nous vous proposons de prendre de l’avance et de vous donner notre vision de la transformation digitale.
        </p>
        <p>
          HLP Studio possède divers pôles afin de toucher le plus grand nombre de domaines numériques.
          Nous disposons des
          <em>clés incontournables pour améliorer votre business</em>.
        </p>
      </section>
    </section>

    <section class="innovation-body">
      <section class="processus">
        <h2>PROCESSUS D’INNOVATION</h2>
        <section>
          <ul class="liste">
            <li>
              <img src="@/assets/1.png" alt />
              <h4>Objectif</h4>
              <p>Nous définissons ensemble vos objectifs et vos ambitions.</p>
            </li>
            <li>
              <img src="@/assets/2.png" alt />
              <h4>Solution</h4>
              <p>Nous choisissons des solutions technologiques et évolutives.</p>
            </li>
            <li>
              <img src="@/assets/3.png" alt />
              <h4>Création</h4>
              <p>Nous créons des contenus innovants, adaptés et porteurs de sens.</p>
            </li>
            <li>
              <img src="@/assets/4.png" alt />
              <h4>Accompagnement</h4>
              <p>Nous vous guidons et vous accompagnons dans votre projet d’acquisition de trafic.</p>
            </li>
          </ul>
          <p>
            Chacune de nos démonstrations ont pour but de montrer à ceux qui hésitent encore, que la technologie est le bienfait essentiel à votre perspective de développement.
            <br />
            <br />
            <strong>Adoptez le réflexe digital pour votre stratégie, creusez l’écart entre vous et la concurrence.</strong>
          </p>
        </section>
      </section>
      <img src="@/assets/tempinnovation.png" alt="temporaire" />
      <section class="ar">
        <div>
          <h4>Réalitée augmentée</h4>
          <div class="content">
            <p>
              Donner vie à un modèle 3D, en le visualisant dans le monde réel, à l’échelle souhaitée, le tout depuis son smartphone ?
              <br />
              <br />
              <strong>C’est maintenant possible grâce à la réalité augmentée.</strong>
            </p>
            <ul>
              <li>Mettre en contexte un catalogue de produits</li>
              <li>Guider un technicien lors d’une intervention de maintenance</li>
              <li>Afficher des informations à travers ou autour d’un équipement réel</li>
              <li>Favoriser l’utilisateur à se projeter dans un espace futur</li>
              <li>Identifier en avance les problèmes liés à l’intégration d’éléments dans le réel</li>
              <li>Visualiser depuis votre smartphones vos produits</li>
              <li>Créer de nouveaux supports de prospection</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Vidéo immersive 360°</h4>
          <div class="content">
            <p>
              En plus de donner une vision à 360°, les vidéos immersives sont devenues aujourd’hui les vecteurs d’une image de marque innovante et d’une entreprise à la pointe de la technologie.
              <br />
              <br />
              <strong>Placez vos spectateurs au cœur de l’action !</strong>
            </p>
            <ul>
              <li>Promouvoir un lieu, faire visiter ses locaux, showroom, stand…</li>
              <li>Film publicitaire 360°</li>
              <li>Photographie 360° de votre espace, évènements, exposition…</li>
              <li>Participation à distance d’un live 360° à votre évènement</li>
              <li>Vidéo de sécurité interactive et dynamique</li>
              <li>Tutoriel</li>
            </ul>
          </div>
        </div>
      </section>
      <img src="@/assets/360.png" alt="360" />
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

.innovation-title {
  min-height: 100vh;
}

.innovation-title,
.innovation-body {
  width: 100%;
}

.innovation-title {
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

.processus {
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
      // gap: 5em;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 15em;
        text-align: center;

        img {
          width: 250px;
        }
      }
    }
  }
}

.innovation-body {
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

.ar {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.5em;

  & > div {
    flex: 1 0 calc(1em - 50%);
    // padding: 2em 2em;
  }

  .content {
    display: flex;
    flex-direction: column;

    ul {
      line-height: 2;
      font-size: .8em;
    }
  }

  div:first-child > .content {
    align-items: flex-end;
  }

  .content > * {
    max-width: 70%;
  }

  h4 {
    font-size: 1.5em;
    padding: 0.5em;
    background: $primary;
    text-align: center;
  }
}
</style>