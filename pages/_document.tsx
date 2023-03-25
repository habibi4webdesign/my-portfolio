import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hi, I'm Yashar Habibi. I work as a software engineer and specialize in front-end development. Although I was born in India, I grew up in Iran, and currently, I reside in Sweden."
        />
        <meta
          name="keywords"
          content="web developer, designer, Yashar Habibi, Habibikhamemenh, frontend, front-end, senior front end enginner"
        />
        <meta name="language" content="en" />
        <meta name="author" content="Yashar Habibi" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="http://fonts.cdnfonts.com/css/raleway-5"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
