<template>
  <main class="home">
    <section class="home-title">
      <NavBar />
      <BigTitle msg="HLP STUDIO" />
      <section class="subtitle">
        <h3>
          Vos
          <em>clients</em> n'attendent que
          <em>vous.</em>
        </h3>
        <ul class="home-sub-list">
          <li>MARKETING</li>
          <li>ACCOMPAGNEMENT</li>
          <li>CREATION GRAPHIQUE</li>
          <li>VIDEO</li>
        </ul>
      </section>
      <section class="bandes">
        <div class="container">
          <div>
            <h3>DIGITAL &centerdot; MARKETING &centerdot; COMMUNICATION</h3>
          </div>
          <div>
            <h3>CLIENTS &centerdot; RÉUSSITE &centerdot; PERFORMANCES</h3>
          </div>
        </div>
      </section>
    </section>
    <section class="home-body">
      <section class="besoin">
        <h1>
          BESOIN DE
          <tr></tr>
          <span>
            MARKETING DIGITAL
            <hr />
          </span> ?
        </h1>
        <a href="#bootcamp-form">
          <button>Dites-le nous !</button>
        </a>
      </section>

      <section class="processus">
        <h2>NOTRE PROCESSUS</h2>
        <section class="processus-content">
          <ol>
            <li @click="processText = 1" :class="{processActive: processText == 1}">Nous vous accompagnons</li>
            <li @click="processText = 2" :class="{processActive: processText == 2}">Les outils que nous utilisons</li>
            <li @click="processText = 3" :class="{processActive: processText == 3}">Nous répondons à vos besoins</li>
          </ol>
          <transition name="process" mode="out-in">
            <p
              v-if="processText == 1"
            >Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p
              v-else-if="processText == 2"
            >Quo qui atque iure veniam delectus temporibus ullam provident excepturi modi blanditiis magnam optio iste eum, quibusdam accusantium adipisci tempore autem quaerat?</p>
            <p
              v-else
            >Ipsum dolor sit amet consectetur, adipisicing elit. Nam culpa animi consequatur quidem porro id ipsum totam deleniti asperiores doloremque, distinctio, ut sequi, obcaecati corrupti aspernatur iure magni omnis officiis?</p>
          </transition>
        </section>
      </section>

      <section class="projets">
        <h2>NOS PROJETS RECENTS</h2>
        <section class="projets-content">
          <ul>
            <li @click="projectNumber = 1" :class="{processActive: projectNumber == 1}">Projet 1</li>
            <li @click="projectNumber = 2" :class="{processActive: projectNumber == 2}">Projet 2</li>
            <li @click="projectNumber = 3" :class="{processActive: projectNumber == 3}">Projet 3</li>
          </ul>
          <transition name="process" mode="out-in">
          <img v-if="projectNumber == 1" src="@/assets/imgproj.png" alt="Image Projet" />
          <img v-else-if="projectNumber == 2" src="@/assets/imgproj2.png" alt="Image Projet" />
          <img v-else-if="projectNumber == 3" src="@/assets/imgproj3.png" alt="Image Projet" />
          </transition>
        </section>
        <button @click="$router.push('/clients')">Cas clients</button>
      </section>

      <section class="histoire">
        <section class="histoire-content">
          <h3>Développons ensemble votre entreprise !</h3>
          <h2>
            Racontez-nous
            <br />votre histoire !
          </h2>
          <button>Contactez-nous</button>
        </section>
      </section>

      <section id="bootcamp-form">
        <h2>BOOTCAMP</h2>
        <section>
          <section class="bootcamp-services">
            <h3>De quoi quoi j'ai besoin ?</h3>
            <section class="content">
              <label>
                <input type="checkbox" class="check-service" data-service="Marketing" />
                <span>Marketing</span>
              </label>
              <label>
                <input type="checkbox" class="check-service" data-service="Création Graphique" />
                <span>Création Graphique</span>
              </label>
              <label>
                <input type="checkbox" class="check-service" data-service="Canva" />
                <span>Canva</span>
              </label>
              <label>
                <input type="checkbox" class="check-service" data-service="Communications" />
                <span>Communications</span>
              </label>
              <label>
                <input type="checkbox" class="check-service" data-service="Site Web" />
                <span>Site Web</span>
              </label>
              <label>
                <input type="checkbox" class="check-service" data-service="Vidéo" />
                <span>Vidéo</span>
              </label>
            </section>
          </section>
          <section class="bootcamp-when">
            <h3>Pendant combien de temps ?</h3>
            <section class="content">
              <label>
                <input type="radio" name="bootcamp-duration" data-duration="2 Jours" />
                <span>2 jours</span>
              </label>
              <label>
                <input type="radio" name="bootcamp-duration" data-duration="1 semaine" />
                <span>1 semaine</span>
              </label>
              <label>
                <input type="radio" name="bootcamp-duration" data-duration="2 semaine" />
                <span>2 semaines</span>
              </label>
            </section>
          </section>
          <section class="bootcamp-whereto">
            <h3>On se voit où ?</h3>
            <section class="content">
              <label>
                <input type="radio" name="bootcamp-where" data-where="Chez Nous (HLP)" />
                <span>Chez nous (HLP)</span>
              </label>
              <label>
                <input type="radio" name="bootcamp-where" data-where="Chez Vous" />
                <span>Chez vous</span>
              </label>
              <label>
                <input type="radio" name="bootcamp-where" data-where="À distance" />
                <span>À distance</span>
              </label>
            </section>
          </section>
          <section class="bootcamp-client">
            <h3>D'ailleurs...</h3>
            <h3>C'est qui, "vous" ?</h3>
            <form class="bootcamp-who">
              <section>
                <label for="bootcamp-name">Votre nom complet</label>
                <label for="bootcamp-company">Votre entreprise</label>
                <label for="bootcamp-email">Votre adresse mail</label>
              </section>
              <section>
                <input type="text" id="bootcamp-name" required />
                <input type="text" id="bootcamp-company" required />
                <input type="email" id="bootcamp-email" required />
              </section>
              <input type="submit" id="bootcamp-submit" value="Envoyer" />
            </form>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  </main>
</template>

<script>
import BigTitle from '@/components/BigTitle.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      services: [],
      processText: 1,
      projectNumber: 1
    }
  },
  name: 'Home',
  components: {
    BigTitle,
    NavBar,
    Footer
  },
  methods: {
    scrollFix: function (hashbang) {
      location.hash = hashbang;
    }
  },
  mounted() {
    const services = document.querySelectorAll(".bootcamp-services input");
    const whens = document.querySelectorAll(".bootcamp-when input");
    const wheretos = document.querySelectorAll(".bootcamp-whereto input");
    const whos = document.querySelectorAll(".bootcamp-who input");


    if (this.$route.hash) {
      this.scrollFix(this.$route.hash)
    }

    // const when = document.querySelector(".bootcamp-when");
    // const whereto = document.querySelector(".bootcamp-whereto");
    // const client = document.querySelector(".bootcamp-client");
    // const clientTitles = document.querySelectorAll(".bootcamp-client h2");
    // const clientForm = document.querySelector(".bootcamp-who");

    const submit = document.querySelector("#bootcamp-submit");

    services.forEach((service) => {
      service.addEventListener("change", () => {
        service.parentElement.classList.toggle('label-active')
      });
    });

    whens.forEach((when) => {
      when.addEventListener("change", () => {
        whens.forEach(when => when.parentElement.classList.remove('label-active'))
        when.parentElement.classList.add('label-active')
      });
    });

    wheretos.forEach((where) => {
      where.addEventListener("change", () => {
        wheretos.forEach(where => where.parentElement.classList.remove('label-active'))
        where.parentElement.classList.toggle('label-active')
      });
    });

    whos.forEach((who) => {
      who.addEventListener("change", () => submit.classList.add("trans-visible"));
    });

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const bootcampServices = [...services]
        .filter((service) => service.checked)
        .map((service) => service.attributes["data-service"].nodeValue);
      const bootcampWhen = document
        .querySelector("input[name=bootcamp-duration]:checked")
        .getAttribute("data-duration");
      const bootcampWhere = document
        .querySelector("input[name=bootcamp-where]:checked")
        .getAttribute("data-where");
      const bootcampClientName = document.querySelector("#bootcamp-name").value;
      const bootcampClientCompany =
        document.querySelector("#bootcamp-company").value;
      const bootcampClientEmail = document.querySelector("#bootcamp-email").value;

      let bootcampData = {
        bootcampServices,
        bootcampWhen,
        bootcampWhere,
        bootcampClientName,
        bootcampClientCompany,
        bootcampClientEmail,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bootcampData),
      };

      fetch("http://localhost:1337/emails", requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
    });

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

.label-active {
  background: $primary;
  transition: all 0.2s;
}

.processActive {
  color: $primary;
}

.home-body {
  width: 100%;

  & > section {
    width: 100%;
  }
}

#bootcamp-form,
.projets,
.processus {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.home-title,
.besoin,
.projets {
  min-height: 100vh;
  width: 100%;
}

.bandes {
  text-align: left;
  font-size: 3em;
  font-family: "AvenirBlack";
  overflow-x: hidden;
  margin-top: -2em;
  padding-top: 3em;
  padding-bottom: 3em;

  .container {
    // max-width: 100vw;
    div {
      transform: rotate(-10deg) translateX(-1em);
      background: $background;
      width: 110vw;

      &:first-child h3 {
        padding-left: 1em;
      }

      &:last-child h3 {
        padding-left: 15em;
      }
    }
  }
}

.processus,
.histoire {
  min-height: 70vh;
}

.home-title,
.histoire-content {
  background-image: url("~@/assets/BG-rose.png");
  text-align: center;
}

.histoire {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .histoire-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-clip: padding-box;
    background-position: center;
    padding: 4em 0;
    width: 100vw;
    width: 100%;
    font-size: 1.2em;

    button {
      color: $primary;
      background: white;
      z-index: 1;
    }

    h2 {
      margin: 0.3em;
    }
  }
}

.home-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  h2 {
    font-size: 3.5em;
    font-weight: 800;
    text-align: left;
    font-family: "AvenirBlack";
    margin-left: 1.5em;
  }

  // .processus-content {
  //   height: 25vh;
  // }

  .processus-content,
  .projets-content {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 4em;
    max-width: 70vw;

    ol,
    ul {
      flex: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      font-size: 2.5em;

      li {
        cursor: pointer;
      }
    }

    p {
      flex: 1;
      font-size: 1.5em;
      text-align: left;
    }
  }

  h2 {
    font-size: 4em;
    font-weight: 800;
    text-align: left;
    font-family: "AvenirBlack";
  }
}

.besoin {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 3.3em;
    text-align: left;

    span {
      position: relative;
      color: $primary;
      font-family: "Permanent Marker", cursive;

      hr {
        position: absolute;
        top: 1em;
        width: 90%;
      }
    }
  }
}

strong {
  color: $primary;
  font-weight: normal;
}

em {
  color: $secondary;
  font-style: normal;
}

.subtitle {
  margin: 0 auto;
  width: fit-content;

  h3 {
    margin-top: -1.5em;
    padding-top: 0;
    font-size: 3em;
    font-weight: 400;
  }
}

.home-sub-list {
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
}

#bootcamp-form {
  h3 {
    text-align: left;
  }

  & > section {
    margin-top: 5em;
    max-width: 70vw;
    align-self: center;
  }

  .content {
    display: flex;
    flex-flow: row wrap;
    // flex-wrap: wrap;
    justify-content: space-between;
    gap: 2em;

    label {
      word-break: break-all;
      flex: 1 0 calc(33% - 2.5em);
      padding: 0.5em;
      border: 2px solid $primary;
      border-radius: 20px;
      transition: all 0.2s;
      font-family: "AvenirBlack";
      font-size: 1.5em;
      text-align: center;

      &:hover {
        background: $primary;
        color: white;
        transition: all 0.2s;
      }
    }
  }

  .bootcamp-client {
    display: flex;
    flex-direction: column;

    .bootcamp-who {
      margin-left: 1em;
      font-size: 1.3em;
      display: flex;
      gap: 1em;

      input {
        font-size: 1em;
        border: 1px solid purple;
        border-radius: 10px;
        padding-left: 0.25em;
      }

      section {
        display: flex;
        gap: 0.5em;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  input[type="checkbox"],
  input[type="radio"] {
    display: none;
  }
}

.projets {
  display: flex;
  flex-direction: column;

  .projets-content {
    justify-content: flex-start;
    align-items: flex-start;
  }
  font-size: 1.2em;

  ul {
    margin-top: 3em;
    list-style: none;
    line-height: 2;
  }

  button {
    margin: auto auto;
  }
}

.process-enter-from, .process-leave-to {
  opacity: 0;
}

.process-enter-active,
.process-leave-active {
  transition: opacity 0.3s ease;
  // opacity: 0;
}
.process-enter-to, .process-leave-from
/* .component-fade-leave-active below version 2.1.8 */ {
  // transition: opacity 0.8s ease;
  opacity: 1;
}

@keyframes slide {
  0% {
    transform: translateY(0px);
  }
  18% {
    transform: translateY(0px);
  }
  21% {
    transform: translateY(-50px);
  }
  39% {
    transform: translateY(-50px);
  }
  42% {
    transform: translateY(-100px);
  }
  60% {
    transform: translateY(-100px);
  }
  63% {
    transform: translateY(-150px);
  }
  81% {
    transform: translateY(-150px);
  }
  84% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(-200px);
  }
}
</style>