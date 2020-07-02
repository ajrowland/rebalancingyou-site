<template>
  <div class="layout">
    <header class="header" itemscope itemtype="http://schema.org/LocalBusiness">
      <div class="header__top">
        <div class="container">
          <ul class="header__social">
            <li><a href="https://www.facebook.com/rebalancingyou/" title="Visit me on Facebook"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg></a></li>
            <li><a href="https://www.instagram.com/rebalancingyou/" title="Visit me on Instagram"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path><circle cx="351.5" cy="160.5" r="21.5"></circle></svg></a></li>
          </ul>
        </div>
      </div>
      <div class="header__main">
        <div class="container">
          <h1 itemprop="name"><a href="/" title="Home">Rebalancing You <span itemprop="jobTitle">Emma Rowland Nutrition</span></a></h1>

          <ul class="header__nav">
            <li><g-link to="/" >Home</g-link></li>
            <li><g-link to="/about">About</g-link></li>
            <li><g-link to="/articles">Articles</g-link></li>
            <li><g-link to="/recipes">Recipes</g-link></li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__copyright">&copy; Emma Rowland</div>
        <ul class="social social-footer">
          <!--<li><a href="mailto:mail@emmarowland.co.uk" title="Email"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path></svg></a></li>-->
          <li><a href="https://www.facebook.com/rebalancingyou/" title="Visit me on Facebook"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg></a></li>
          <li><a href="https://www.instagram.com/rebalancingyou/" title="Visit me on Instagram"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path><circle cx="351.5" cy="160.5" r="21.5"></circle></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html,
body,
.layout {
  min-width: 320px;
}

body {
  margin: 0;
  font-size: 14px;
  font-family: "Open Sans";
  color: $colour-grey-dark;
}

.header {
  color: $colour-white;

  &__top {
    background-color: $colour-grey-dark;

    & .container {
      padding: 10px 30px;
      align-items: flex-end;
    }
  }

  &__social {
    align-items: flex-end;
  }

  &__main {
    background-color: $colour-coral;

    & .container {
      justify-content: space-between;
      flex-direction: row;
    }
  }

  &__nav {
    display: inline-flex;
    flex-direction: row;
    list-style-type: none;
    font-size: 26px;
    font-family: "Open Sans Condensed";
    font-weight: 300;
    margin: 0;
    align-self: flex-end;

    a {
      color: $colour-white;
      text-decoration: none;
      margin: 10px;
      transition: all  .25s ease-in-out;
      border-bottom: 1px solid transparent;

      &.active--exact,
      &:hover {
        border-color: $colour-white;
      }
    }
  }
}

h1,
h2 {
  font-family: "Open Sans Condensed";
  margin: 0;

  a {
    color: $colour-white;
    text-decoration: none;
  }
}

h1 {
  display: inline-block;
  font-size: 30px;

  span {
    display: block;
    font-weight: 300;
    font-size: 21px;
  }
}

h2 {
  font-weight: 300;
  font-size: 21px;
}

main {
  background-image: linear-gradient(to bottom right, $colour-white 40%, $colour-grey-light 100%);
}

.section {
  &--articles {
    padding-top: 2rem;
  }
  &--recipes {
  }
  &--instagram {
  }
  &--subscribe {
    background: $colour-white;
  }
  &__container {
    margin: -10px -20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    font-family: "Open Sans";
    font-weight: normal;
    margin: 1rem 0;

    a {
      color: $colour-grey-dark;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &__view-more {
    font-size: 18px;
    font-family: 'Bree Serif';
  }
}

.footer {
  background-color: $colour-grey-dark;
  padding: 20px 0;
  color: $colour-white;

  &__copyright {
    margin-bottom: 10px;
  }
}

.container {
  margin: auto;
  max-width: 1200px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.header__social,
.social {
  margin: 0;
  padding: 0;
  position: relative;
  left: -2px;

  li {
    display: inline-block;
    width: 48px;
  }

  a {
    fill: $colour-coral;
    display: block;
  }
}

@include mq($from: tablet) {
  body {
    font-size: 18px;
  }

  .container {
    padding: 30px;
  }

  h1 {
    font-size: 60px;

    span {
      font-size: 34px;
    }
  }

  h2 {
    font-size: 34px;
  }

  .header__social,
  .social {
    li {
      width: 36px;
    }
  }
}
</style>
