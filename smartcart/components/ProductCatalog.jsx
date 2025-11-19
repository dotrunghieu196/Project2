"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductCatalog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.productCategories))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <div className="flex flex-col w-1/4 p-4 gap-4 bg-white rounded-xl shadow-md">
        <div className="flex items-center justify-center w-full h-10 bg-[linear-gradient(180deg,#0033CC,#0865FF)] rounded-md">
            <span className="text-xl text-white font-semibold">Danh mục sản phẩm</span>
        </div>
        <div className="flex flex-col gap-4">
            {categories.map((item, index) => (
                <div key={index} className="flex items-center justify-between w-full h-10 pl-2 py-2 rounded-lg bg-white hover:bg-gray-100 cursor-pointer transition">
                <div className="flex items-center w-full h-full gap-2">
                    <Image src={item.image} alt={item.name} width={0} height={0} sizes="100vw" className="w-auto h-full object-contain"/>
                    <span className="text-lg text-[#0033CC] font-medium">{item.name}</span>
                </div>
                <ChevronRight size={20} className="text-gray-400"/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProductCatalog;
