import Head from "next/head";
import React, { useState, useEffect } from "react";

import Preloader from "../components/preloader";
import Navigation from "../components/navigation";
import Introduction from "../components/introduction";
import About from "../components/about";
import Services from "../components/services";
import Achievements from "../components/achievements";
import Details from "../components/details";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import Contact, { SocialLinks } from "../components/contact";
import Footer from "../components/footer";
import FloatingActionButton from "../components/floatingActionButton";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  const socialLinks: SocialLinks = {
    facebookURL: "https://www.facebook.com/Lamptechs",
    twitterURL: "https://www.facebook.com/LampTechs/",
    instagramURL: "https://www.instagram.com/Lamptechs",
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="title" content="Lamptechs Softare" />
        <meta
          name="description"
          content="Lamptechs London is a company established in London with a great team. We offer wide range of web development and social media management services with a wide range of languages at a reasonable cost. This is the official site of Lamptechs London."
        />
        <meta
          name="keywords"
          content="lamptechs, software, london, lamptechs london, Lamptechs, software london, talha, altinel, talha altinel, web, development, web development london, web london, development london, london web development, web development agency, social, media, management, social media management london, media management london, social media london, website designer agency for convenient cost"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Lamptechs London" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lamptechs Software</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Lamp-Techs-white-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Lamp-Techs-white-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Lamp-Techs-white-logo.png"
        />
        <link rel="manifest" href="/Lamp-Techs-white-logo.png" />
      </Head>

      <Navigation />

      <main>
        <Introduction />
        <About />
        <Services />
        <Achievements />
        <Details />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact socialLinks={socialLinks} />
      </main>

      <FloatingActionButton />
      <Footer />
    </React.Fragment>
  );
}
