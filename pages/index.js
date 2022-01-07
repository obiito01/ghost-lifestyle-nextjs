import Head from "next/head";
import Image from "next/image";
import { Footer, ProductCard } from "../components";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroSection,
  CategoriesSection,
  AppSection,
  NewsletterSection,
} from "../sections";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>GHOST LIFESTYLE | HOME</title>
        <meta name="description" content="GHOST LIFESTYLE" />
      </Head>
      <main>
        <HeroSection />
        <CategoriesSection />
        <AppSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const products = [
    {
      id: "12416353",
      name: "LEGEND X SONIC",
      price: 49.99,
      description:
        "After a year of trial and error with the SONIC® team (and A TON of “R&D” trips to America’s Favorite Drive-In) we are so stoked to deliver the best, and only official SONIC® Cherry Limeade and SONIC® Ocean Water™ pre-workout experiences.",
      image:
        "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2SonicOW.png?v=1624462174",
    },
    {
      id: "12121354",
      name: "LEGEND X SPACE JAM",
      price: 49.99,
      description: `We're gearing up for the game of the century. It's TUNE SQUAD vs. MONSTARS and this time, the "stuff's" no secret. These are two of our most legendary formulas to date, ensuring you bring your A-Game to the court, the gym and wherever else you wind up on the trip to Moron Mountain.`,
      image:
        "https://cdn.shopify.com/s/files/1/2060/6331/products/TuneSquad.png?v=1633531123",
    },
    {
      id: "12124161",
      name: "LEGEND X SOUR PATCH KIDS",
      price: 49.99,
      description: `More Energy, More Pumps, More Focus and your favorite SOUR PATCH KIDS® flavors. Life. Made.`,
      image:
        "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2RB.png?v=1641330627",
    },
    {
      id: "12311356",
      name: "LEGEND X WELCH'S",
      price: 49.99,
      description: `The authentic O.G. Grape flavor we all know and love.`,
      image:
        "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2Welch_s.png?v=1614032024",
    },
  ];

  return {
    props: {
      products,
    },
  };
};
