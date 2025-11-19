"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCart";
import Link from "next/link";

const Laptop = () => {
    const listRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((err) => console.error("Failed to load products:", err));
    }, []);

    const handleAddToCart = (product) => {
        setCart(prev => [...prev, product])
        console.log("Added to cart:", product)
    }

    return (
    <div className="flex flex-col w-full p-4 gap-4 bg-white rounded-xl shadow-md">
        <div className="flex items-center justify-between w-full pt-2">
            <span className="text-3xl text-black font-bold">Laptop</span>
            <Link href="" 
                className="flex items-center w-fit h-10 p-2 gap-2 bg-white border border-gray-200 hover:border-[#0033CC] text-gray-400 hover:text-[#0033CC] rounded-full shadow-md cursor-pointer"
            >
                <span className="pl-1 text-lg">Xem thêm</span>
                <ChevronRight size={18} className="text-current"/>
            </Link>
        </div>

        <div ref={listRef} className="grid grid-flow-col auto-cols-[calc((100%-48px)/4)] lg:auto-cols-[calc((100%-64px)/5)] pt-2 gap-4 overflow-x-auto scroll-smooth no-scrollbar">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
            ))}
        </div>
    </div>
  );
};

export default Laptop;
