import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const imgVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 500,
      transition: {
        duration: 1,
      },
    },
  };

  const boxVariant = {
    initial: { y: -500 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardChildVariant = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="h-screen bg-neutral-200 flex overflow-hidden">
        {/* left side */}
        <div className="w-full grid place-items-center">
          <div className="relative">
            <motion.img
              key={product.name}
              src={product.image}
              alt={product.name}
              className="h-[400px] object-cover z-50 cursor-grab"
              variants={imgVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <span className="absolute left-[50%] translate-x-[-50%] text-neutral-400 cursor-pointer">
              shake before use*
            </span>
          </div>
        </div>
        {/* right side */}
        <div className="w-full text-3xl bg-white p-14 grid place-items-center ">
          <motion.div
            key={product.name}
            variants={boxVariant}
            initial="initial"
            animate="animate"
            className="w-[480px] relative"
          >
            <Link href="/">
              <a className="text-sm mb-20 inline-block hover:bg-gray-100 py-3 px-4 rounded-xl duration-500 absolute top-[-100px] left-[-16px]">
                &#8592; Back to Products
              </a>
            </Link>
            <h3 className="text-base font-[400] mb-5">Protein</h3>
            <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
            <motion.p
              variants={cardChildVariant}
              className="text-base font-[400] text-gray-500 mb-5"
            >
              {product.description}
            </motion.p>
            <motion.div
              className="flex gap-4 mb-10"
              variants={cardChildVariant}
            >
              <span className="text-base font-[400] ">Soy Free</span>
              <span className="text-base font-[400]">Gluten Free</span>
            </motion.div>

            <motion.div
              className="flex justify-between items-center mb-16"
              variants={cardChildVariant}
            >
              <div className="flex items-center gap-3">
                <button
                  className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </button>
                <span className="text-xl font-medium bg-neutral-200  px-4 py-2 rounded-lg">
                  {count}
                </span>
                <button
                  className=" grid place-items-center hover:bg-gray-200 rounded-full w-10 h-10 duration-500"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-base font-[400]">
                $ {(Math.round(product.price * count * 100) / 100).toFixed(2)}
              </span>
            </motion.div>

            <motion.div className="flex gap-2" variants={cardChildVariant}>
              <button className="h-12 w-36 bg-indigo-600 text-white rounded-lg font-medium text-base duration-500 hover:ring-2 ring-inset ring-indigo-600 hover:bg-white hover:text-indigo-600 hover:shadow-3xl">
                Add to cart
              </button>
              <button className="h-12 w-36  bg-white text-indigo-600 font-[500] rounded-lg text-base duration-500 ring-2 ring-inset ring-indigo-600 hover:text-white hover:bg-indigo-600 hover:shadow-3xl">
                Buy Now
              </button>
            </motion.div>
          </motion.div>
          {/* <motion.div
            variants={testVariant}
            className="ring-2 w-full h-[400px]"
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={testChildVariant}>This is a heading</motion.h1>
            <motion.p variants={testChildVariant}>
              This is a paragraoh.
            </motion.p>
          </motion.div> */}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/api/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/api/products/${context.params.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default Product;
