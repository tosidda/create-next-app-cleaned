import Head from "next/head";
import styled from "styled-components";
import Carousel from "./Home/Carousel";
import Hero from "./Home/Hero";
import NewsLetter from "./Home/NewsLetter";
import TopCollectibles from "./Home/TopCollectibles";
import { Colors, Devices } from "./Theme";

const HomeEl = styled.article`
  color: ${Colors.White};
`; 

export default function Home() {
  return (
    <HomeEl>
      <Head>
        <title>Renew Tennis </title>
        <meta
          name="description"
          content="Cleaned create-next-app including styled-components and configured theme"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <NewsLetter/>
      <Carousel/>
      <TopCollectibles />
    </HomeEl>
  );
}
