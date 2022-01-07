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
  const baseURL =
    "development" === process.env.NEXT_PUBLIC_ENV
      ? "http://localhost:3000"
      : "https://example.com";
  const res = await fetch(`${baseURL}/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
