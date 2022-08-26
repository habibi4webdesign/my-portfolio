/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import { Button, ButtonBase } from "react-ui-kit-yas";
import Header from "domains/landing/Header";
import HeroStyle from "domains/landing/HeroStyle";
import AtAGlance from "domains/landing/AtAGlance";
import AboutMe from "domains/landing/AboutMe";
import MySkills from "domains/landing/MySkills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yashar Habibi</title>
        <meta
          name="description"
          content="Yashar Habibi Khameneh personal website"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="http://fonts.cdnfonts.com/css/raleway-5"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Header />
        <HeroStyle />
        <AtAGlance />
        <AboutMe />
        <MySkills />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
