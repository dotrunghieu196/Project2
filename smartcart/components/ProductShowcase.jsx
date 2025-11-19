"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCart";

const ProductShowcase = () => {
  const listRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const scrollLeft = () => {
    if (!listRef.current) return;
    const itemWidth = listRef.current.children[0].offsetWidth;
    const gap = 16; // gap giữa các item
    listRef.current.scrollBy({
      left: -(itemWidth + gap),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!listRef.current) return;
    const itemWidth = listRef.current.children[0].offsetWidth;
    const gap = 16;
    listRef.current.scrollBy({
      left: itemWidth + gap,
      behavior: "smooth",
    });
  };
  const handleAddToCart = (product) => {
        setCart(prev => [...prev, product])
        console.log("Added to cart:", product)
    }

  return (
    <div className="flex flex-col w-full p-4 gap-4 bg-[linear-gradient(90deg,#FF6B0040,#0865FF40)] rounded-xl shadow-md">
      <div className="flex items-center justify-center w-full pt-2">
        <h2 className="text-2xl text-[#0033CC] font-bold">GỢI Ý CHO BẠN</h2>
      </div>

      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#FFFFFF]/20 text-white hover:bg-[#FFFFFF]/80 hover:text-gray-600 rounded-full shadow-md text-xl z-10">
          <ChevronLeft />
        </button>

        <div ref={listRef} className="grid grid-flow-col auto-cols-[calc((100%-48px)/4)] lg:auto-cols-[calc((100%-64px)/5)] pt-2 gap-4 overflow-x-auto scroll-smooth no-scrollbar">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>

        <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#FFFFFF]/20 text-white hover:bg-[#FFFFFF]/80 hover:text-gray-600 rounded-full shadow-md text-xl z-10">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;
