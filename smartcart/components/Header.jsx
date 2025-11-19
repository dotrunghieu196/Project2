"use client"
import React, { useEffect, useState} from "react";
import { Search, Bell, Mail, ShoppingCart, ShoppingBag, House} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ICONS = { House, ShoppingCart, ShoppingBag, Bell, Mail };

const Header = () => {
    const [navbarItems, setNavbarItems] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => setNavbarItems(data.navbarItems));
    }, []);

  return (
    <div className="flex flex-col items-center w-screen h-40 bg-[linear-gradient(180deg,#0033CC,#0865FF)]">
        <div className="flex items-center w-full max-w-7xl gap-6 lg:gap-10 mx-10 md:mx-auto my-10">
            <div className="flex w-fit h-10">
                <Image src="/images/logo-light.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-auto h-full object-contain"/>
            </div>
            <div className="flex flex-1 items-center gap-4 md:gap-6">
                <div className="flex flex-1 items-center w-full min-w-50 h-10 p-2 gap-2 bg-white border border-gray-400 rounded-full shadow-md">
                    <Search size={20} className="text-gray-600"/>
                    <input type="text" placeholder="Search products..." className="flex-1 text-lg text-black focus:outline-none" />
                </div>
                <div className="flex items-center justify-center w-fit h-10 px-4 bg-[linear-gradient(180deg,#FF6B00,#FFB200)] rounded-full shadow-md">
                    <span className="text-lg text-white font-semibold">Tìm kiếm</span>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                    <Image src="/images/cart-icon.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-auto h-full object-contain"/>
                </div>
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                    <Image src="/images/noti-icon.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-auto h-full object-contain"/>
                </div>
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                    <Image src="/images/message-icon.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-auto h-full object-contain"/>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <Image src="/images/admin.png" alt="admin" width={0} height={0} sizes="100vw" className="w-10 h-auto object-contain rounded-full shadow-md"/>
                <span className="hidden lg:block text-lg text-white">Do Trung Hieu</span>
            </div>
        </div>
        <div className="flex items-center justify-center w-full h-10 bg-white shadow-md">
            <nav className="flex items-center w-full max-w-7xl h-full">
                {navbarItems.map((item) => {
                    const IconComponent = ICONS[item.icon];
                    return (
                        <Link key={item.name} href={item.href} className="flex items-center justify-center w-full h-full">
                            <div
                                className={`
                                    flex items-center justify-center w-full h-full gap-4 text-base font-medium
                                    border-b-2 border-transparent
                                    hover:text-orange-500 hover:font-semibold
                                    transition-all duration-200
                                    ${pathname === item.href ? "border-b-orange-500 text-orange-500 font-semibold" : "text-[#0033CC]"}
                                `}
                            >

                                <IconComponent size = {20} />
                                <span className="text-lg">{item.name}</span>
                            </div>
                        </Link>
                    )
                })}

            </nav>
        </div>
    </div>
  )
}

export default Header