/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */
import AboutMe from "domains/landing/AboutMe";
import AtAGlance from "domains/landing/AtAGlance";
import Contact from "domains/landing/Contact";
import Header from "domains/landing/Header";
import HeroStyle from "domains/landing/HeroStyle";
import MySkills from "domains/landing/MySkills";
import Social from "domains/landing/Social";
import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
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
