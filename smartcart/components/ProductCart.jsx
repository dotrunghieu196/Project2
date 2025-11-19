"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      key={product.id}
      className="flex flex-col items-center w-full min-w-[200px] p-4 gap-2 bg-white border border-gray-200 rounded-lg shadow-md"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center w-full h-50 bg-[linear-gradient(180deg,#0033CC,#0865FF)] rounded-md">
        {/* Thêm Image nếu có */}
      </div>
      <div className="text-xl text-[#0033CC] font-medium text-center">{product.name}</div>
      <div className="text-2xl text-[#FF6B00] font-semibold text-center">{product.price}</div>
      <button 
        className="flex items-center justify-center w-full p-2 bg-[#FF6B00] rounded-md text-base text-white font-semibold cursor-pointer transition "
        onClick={() => onAddToCart(product)}
      >
        Thêm vào giỏ hàng
      </button>
      <Link href={`/product/${product.id}`} className="flex items-center justify-center w-full p-2 bg-gray-100 border border-gray-200 rounded-md text-base text-[#0033CC] cursor-pointer transition">
        Xem chi tiết
      </Link>
    </motion.div>
  )
}

export default ProductCard
