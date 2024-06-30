import React from "react";
import CodeSnippet from "../ui/code_snippet/codesnippet";
import ElementsList from "../ui/elements_list/elementslist";
import DownloadBlock from "../ui/download_block/download_block";
import RenderPreview from "../ui/preview/preview";
import codeData from "../elements/code_data.json";
import "./elementspage.css";
import RenderPreviewPhone from "../ui/preview/preview_phone";

const ElementsPage: React.FC = () => {
  return (
    <>
      <div className="homepage" style={{ height: "200vh" }}>
        <div className="exp_group">
          <div className="elements_list">
            <ElementsList />
          </div>
          <div className="content_side">
            <div className="container">
              <div className="preview_windows">
                <RenderPreview
                  codes={{
                    html: `<header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo" target="_top">Logo</a>
                <div class="hamburger">
                    <i class='bx bx-menu header__toggle' id="header-toggle"></i>
                </div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                                <!-- <i class='bx bx-home-alt nav__icon'></i> -->
                                <span class="nav__name">Home</span>
                            </a>
                        </li>
                        
                        <li class="nav__item">
                            <a href="#about" class="nav__link">
                                <!-- <i class='bx bx-user nav__icon'></i> -->
                                <span class="nav__name">About</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#skills" class="nav__link">
                                <!-- <i class='bx bx-book-alt nav__icon'></i> -->
                                <span class="nav__name">Skills</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#portfolio" class="nav__link" >
                                <!-- <i class='bx bx-briefcase-alt nav__icon'></i> -->
                                <span class="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#contactme" class="nav__link">
                                <!-- <i class='bx bx-message-square-detail nav__icon'></i> -->
                                <span class="nav__name">Contactme</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <main>
            <!--=============== HOME ===============-->
            <section class="container section section__height" id="home">
                <h2 class="section__title">Home</h2>
            </section>

            <!--=============== ABOUT ===============-->
            <section class="container section section__height" id="about">
                <h2 class="section__title">About</h2>
            </section>

            <!--=============== SKILLS ===============-->
            <section class="container section section__height" id="skills">
                <h2 class="section__title">Skills</h2>
            </section>

            <!--=============== PORTFOLIO ===============-->
            <section class="container section section__height" id="portfolio">
                <h2 class="section__title">Portfolio</h2>
            </section>

            <!--=============== CONTACTME ===============-->
            <section class="container section section__height" id="contactme">
                <h2 class="section__title">Contactme</h2>
            </section>
        </main>`,
                    css: `/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --hue: 174;
  --sat: 63%;
  --first-color: hsl(var(--hue), var(--sat), 40%);
  --first-color-alt: hsl(var(--hue), var(--sat), 36%);
  --title-color: hsl(var(--hue), 12%, 15%);
  --text-color: hsl(var(--hue), 8%, 35%);
  --body-color: hsl(var(--hue), 100%, 99%);
  --container-color: #fff;

  /*========== Font and typography ==========*/
  --body-font: "Open Sans", sans-serif;
  --h1-font-size: 1.5rem;
  --normal-font-size: 0.938rem;
  --tiny-font-size: 0.625rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --h1-font-size: 2.25rem;
    --normal-font-size: 1rem;
  }
}

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: var(--body-font);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: hsl(0deg 0% 92.44%);
  color: var(--text-color);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.section {
  padding: 4.5rem 0 2rem;
}

.section__title {
  font-size: var(--h1-font-size);
  color: var(--title-color);
  text-align: center;
  margin-bottom: 1.5rem;
}

.section__height {
  height: 100vh;
}

/*=============== LAYOUT ===============*/
.container {
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;
}

/*=============== HEADER ===============*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--container-color);
  z-index: var(--z-fixed);
  transition: 0.4s;
}

/*=============== NAV ===============*/
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__img {
  width: 32px;
  border-radius: 50%;
}

.nav__logo {
  color: var(--title-color);
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  /* .nav__menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--container-color);
    box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    display: grid;
    align-content: center;
    border-radius: 1.25rem 1.25rem 0 0;
    transition: .4s;
  } */
}

.nav__list,
.nav__link {
  display: flex;
}

.nav__link {
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  color: var(--title-color);
  font-weight: 600;
}

.nav__list {
  justify-content: space-around;
}

.nav__name {
  font-size: var(--tiny-font-size);
  /* display: none;*/ /* Minimalist design, hidden labels */
}

.nav__icon {
  font-size: 1.5rem;
}

/*Active link*/
.active-link {
  position: relative;
  color: var(--first-color);
  transition: 0.3s;
}

/* Minimalist design, active link */
/* .active-link::before{
  content: '';
  position: absolute;
  bottom: -.5rem;
  width: 4px;
  height: 4px;
  background-color: var(--first-color);
  border-radius: 50%;
} */

/* Change background header */
.scroll-header {
  box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
}

/*=============== MEDIA QUERIES ===============*/
/* For small devices */
/* Remove if you choose, the minimalist design */

/* For medium devices */
@media screen and (min-width: 576px) {
  .nav__list {
    justify-content: center;
    column-gap: 3rem;
  }
}

@media screen and (min-width: 767px) {
  body {
    margin: 0;
  }
  .section {
    padding: 7rem 0 2rem;
  }
  /* .nav {
    height: calc(var(--header-height) + 1.5rem);
  } */
  .nav__img {
    display: none;
  }
  .nav__icon {
    display: none;
  }
  .nav__name {
    font-size: var(--normal-font-size);
    /* display: block; */ /* Minimalist design, visible labels */
  }
  .nav__link:hover {
    color: var(--first-color);
  }

  /* First design, remove if you choose the minimalist design */
  .active-link::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    width: 22px;
    height: 4px;
    background-color: var(--first-color);
    border-radius: 3px;
  }

  /* Minimalist design */
  /* .active-link::before{
      bottom: -.75rem;
  } */
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
}

.header__toggle {
  font-size: 1.7rem;
  cursor: pointer;
}

.nav__menu.active {
  height: 300px;
}

.nav__menu.active ul {
  opacity: 1;
}
.hamburger {
  display: none;
}

@media only screen and (max-width: 600px) {
  .hamburger {
    display: block;
    cursor: pointer;
  }
  .nav__menu {
    height: 0px;
    /* display: none; */
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    width: 100vw;
    background: var(--container-color);
    transition: 0.5s;
    overflow: hidden;
  }

  .nav__list {
    display: block;
    width: fit-content;
    margin: 54px auto 0 auto;
    text-align: center;
    transition: 0.5s;
    opacity: 0;
  }

  .nav__item a {
    margin-bottom: 20px;
  }

  .nav__name {
    font-size: 1rem;
    /* display: block; */ /* Minimalist design, visible labels */
  }
}
`,
                    js: `/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== HAMBURGER TOGGLE ===============*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close nav-menu when a nav-link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
`,
                  }}
                />
                <RenderPreviewPhone
                  codes={{
                    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--=============== BOXICONS ===============-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

        <!--=============== CSS ===============-->
        <link rel="stylesheet" href="assets/css/styles.css">

        <title>Responsive bottom navigation</title>
    </head>
    <body>
        <!--=============== HEADER ===============-->
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo" target="_top">Logo</a>
                <div class="hamburger">
                    <i class='bx bx-menu header__toggle' id="header-toggle"></i>
                </div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                                <!-- <i class='bx bx-home-alt nav__icon'></i> -->
                                <span class="nav__name">Home</span>
                            </a>
                        </li>
                        
                        <li class="nav__item">
                            <a href="#about" class="nav__link">
                                <!-- <i class='bx bx-user nav__icon'></i> -->
                                <span class="nav__name">About</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#skills" class="nav__link">
                                <!-- <i class='bx bx-book-alt nav__icon'></i> -->
                                <span class="nav__name">Skills</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#portfolio" class="nav__link">
                                <!-- <i class='bx bx-briefcase-alt nav__icon'></i> -->
                                <span class="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#contactme" class="nav__link">
                                <!-- <i class='bx bx-message-square-detail nav__icon'></i> -->
                                <span class="nav__name">Contactme</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <main>
            <!--=============== HOME ===============-->
            <section class="container section section__height" id="home">
                <h2 class="section__title">Home</h2>
            </section>

            <!--=============== ABOUT ===============-->
            <section class="container section section__height" id="about">
                <h2 class="section__title">About</h2>
            </section>

            <!--=============== SKILLS ===============-->
            <section class="container section section__height" id="skills">
                <h2 class="section__title">Skills</h2>
            </section>

            <!--=============== PORTFOLIO ===============-->
            <section class="container section section__height" id="portfolio">
                <h2 class="section__title">Portfolio</h2>
            </section>

            <!--=============== CONTACTME ===============-->
            <section class="container section section__height" id="contactme">
                <h2 class="section__title">Contactme</h2>
            </section>
        </main>
    </body>
</html>`,
                    css: `/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --hue: 174;
  --sat: 63%;
  --first-color: hsl(var(--hue), var(--sat), 40%);
  --first-color-alt: hsl(var(--hue), var(--sat), 36%);
  --title-color: hsl(var(--hue), 12%, 15%);
  --text-color: hsl(var(--hue), 8%, 35%);
  --body-color: hsl(var(--hue), 100%, 99%);
  --container-color: #fff;

  /*========== Font and typography ==========*/
  --body-font: "Open Sans", sans-serif;
  --h1-font-size: 1.5rem;
  --normal-font-size: 0.938rem;
  --tiny-font-size: 0.625rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --h1-font-size: 2.25rem;
    --normal-font-size: 1rem;
  }
}

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: var(--body-font);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: hsl(0deg 0% 92.44%);
  color: var(--text-color);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.section {
  padding: 4.5rem 0 2rem;
}

.section__title {
  font-size: var(--h1-font-size);
  color: var(--title-color);
  text-align: center;
  margin-bottom: 1.5rem;
}

.section__height {
  height: 100vh;
}

/*=============== LAYOUT ===============*/
.container {
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;
}

/*=============== HEADER ===============*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--container-color);
  z-index: var(--z-fixed);
  transition: 0.4s;
}

/*=============== NAV ===============*/
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__img {
  width: 32px;
  border-radius: 50%;
}

.nav__logo {
  color: var(--title-color);
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  /* .nav__menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--container-color);
    box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    display: grid;
    align-content: center;
    border-radius: 1.25rem 1.25rem 0 0;
    transition: .4s;
  } */
}

.nav__list,
.nav__link {
  display: flex;
}

.nav__link {
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  color: var(--title-color);
  font-weight: 600;
}

.nav__list {
  justify-content: space-around;
}

.nav__name {
  font-size: var(--tiny-font-size);
  /* display: none;*/ /* Minimalist design, hidden labels */
}

.nav__icon {
  font-size: 1.5rem;
}

/*Active link*/
.active-link {
  position: relative;
  color: var(--first-color);
  transition: 0.3s;
}

/* Minimalist design, active link */
/* .active-link::before{
  content: '';
  position: absolute;
  bottom: -.5rem;
  width: 4px;
  height: 4px;
  background-color: var(--first-color);
  border-radius: 50%;
} */

/* Change background header */
.scroll-header {
  box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
}

/*=============== MEDIA QUERIES ===============*/
/* For small devices */
/* Remove if you choose, the minimalist design */

/* For medium devices */
@media screen and (min-width: 576px) {
  .nav__list {
    justify-content: center;
    column-gap: 3rem;
  }
}

@media screen and (min-width: 767px) {
  body {
    margin: 0;
  }
  .section {
    padding: 7rem 0 2rem;
  }
  /* .nav {
    height: calc(var(--header-height) + 1.5rem);
  } */
  .nav__img {
    display: none;
  }
  .nav__icon {
    display: none;
  }
  .nav__name {
    font-size: var(--normal-font-size);
    /* display: block; */ /* Minimalist design, visible labels */
  }
  .nav__link:hover {
    color: var(--first-color);
  }

  /* First design, remove if you choose the minimalist design */
  .active-link::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    width: 22px;
    height: 4px;
    background-color: var(--first-color);
    border-radius: 3px;
  }

  /* Minimalist design */
  /* .active-link::before{
      bottom: -.75rem;
  } */
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
}

.header__toggle {
  font-size: 1.7rem;
  cursor: pointer;
}

.nav__menu.active {
  height: 300px;
}

.nav__menu.active ul {
  opacity: 1;
}
.hamburger {
  display: none;
}

@media only screen and (max-width: 600px) {
  .hamburger {
    display: block;
    cursor: pointer;
  }
  .nav__menu {
    height: 0px;
    /* display: none; */
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    width: 100vw;
    background: var(--container-color);
    transition: 0.5s;
    overflow: hidden;
  }

  .nav__list {
    display: block;
    width: fit-content;
    margin: 54px auto 0 auto;
    text-align: center;
    transition: 0.5s;
    opacity: 0;
  }

  .nav__item a {
    margin-bottom: 20px;
  }

  .nav__name {
    font-size: 1rem;
    /* display: block; */ /* Minimalist design, visible labels */
  }
}
`,
                    js: `/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== HAMBURGER TOGGLE ===============*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close nav-menu when a nav-link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
`,
                  }}
                />
              </div>
              <div className="sources_block">
                <CodeSnippet
                  codeExamples={{
                    html: codeData[0].classicNav.html,
                    css: codeData[0].classicNav.css,
                    js: `document.querySelector("nav ul").addEventListener("click", function(e) { alert("Clicked"); });`,
                  }}
                />
                <DownloadBlock/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementsPage;
