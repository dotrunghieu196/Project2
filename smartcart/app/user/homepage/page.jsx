"use client"
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProductCatalog from "../../../components/ProductCatalog";
import Banner from "../../../components/Banner";
import ProductShowcase from "../../../components/ProductShowcase";
import Phone from "../../../components/Phone";
import Laptop from "../../../components/Laptop";
import Tablet from "../../../components/Tablet";
import Watch from "../../../components/Watch";
import Earphones from "../../../components/Earphones";
import Accessory from "../../../components/Accessory";

const HomePage = () => {
  return (
    <div className="flex-1 overflow-hidden relative z-10">
      <motion.main 
        className="flex flex-col w-full max-w-7xl py-8 gap-8 mx-auto"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      >
        <div className="flex items-center w-full h-fit gap-8">
          <ProductCatalog/>
          <Banner/>
        </div>

        <ProductShowcase/>
        <Phone/>
        <Laptop/>
        <Tablet/>
        <Watch/>
        <Earphones/>
        <Accessory/>
      </motion.main>
    </div>
  )
}

export default HomePage