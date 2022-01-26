<template>
  <section class="footer">
    <hr />
    <div class="footer-content">
      <section class="footer-content-left">
        <img src="~@/assets/hlpstudiox2.png" alt="logo HLP" />
        <p>
          <strong>MARKETING</strong> &centerdot;
          <em>ACCOMPAGNEMENT</em> &centerdot;
          <strong>CREATION GRAPHIQUE</strong> &centerdot;
          <em>VIDEO</em>
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum vero sunt, perspiciatis esse labore ullam sit in alias quaerat recusandae nihil odio quae error voluptatibus unde laborum minima facilis!</p>
      </section>
      <section class="footer-content-right">
        <ul>
          <li>hlp@studio</li>
          <li>666666666666</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </section>
    </div>
    <hr />
    <p>HLP STUDIO © 2021. Tous droits réservés. Mentions légales.</p>
  </section>
</template>

<style lang="scss" scoped>
hr {
  width: 90%;
}

.footer {
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: left;
  // margin: 2em 6em;

  & > p {
    margin: 1em 6em;
  }

  .footer-content {
    display: flex;
    align-items: center;
    margin: 2em 6em;
    &-left {
      flex: 1 0 40%;

      img {
        height: 10em;
      }

      p {
        font-family: "AvenirBlack";
      }
    }

    &-right {
      flex: 1 0 33%;
      // padding-left: 50%;

      ul {
        list-style: none;
        margin-left: 50%;
      }
    }
  }
}
</style>