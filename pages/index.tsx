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
import Portfolio from "domains/landing/Portfolio";
import Contact from "domains/landing/Contact";
import { useEffect } from "react";
import Social from "domains/landing/Social";

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
      </Head>

      <main>
        <Header />
        <HeroStyle />
        <AtAGlance />
        <AboutMe />
        <MySkills />
        {/* <Portfolio /> */}
        <Contact />
        <Social />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
