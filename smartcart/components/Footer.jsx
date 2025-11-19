"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[linear-gradient(180deg,#0033CC,#0865FF)] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-4">
                    <div className="flex items-center">
                        <Image src="/images/logo-light.png" alt="SmartCart Logo" width={0} height={0} sizes="100vw" className="w-auto h-20 object-contain"/>
                    </div>
                    <span className="text-white">
                        SmartCart – Nền tảng mua sắm công nghệ hiện đại, nhanh chóng và đáng tin cậy.
                        Mang tới trải nghiệm tốt nhất cho mọi khách hàng.
                    </span>
                </div>
                {/* Links */}
                <div className="flex flex-col items-start gap-4">
                    <span className="text-xl font-semibold">Thông tin</span>
                    <ul className="space-y-2 text-white/80">
                        <li><Link href="/about" className="hover:text-white">Về chúng tôi</Link></li>
                        <li><Link href="/policy" className="hover:text-white">Chính sách bảo hành</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">Chính sách bảo mật</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Điều khoản sử dụng</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                <h3 className="text-xl font-semibold mb-3">Liên hệ</h3>
                <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2"><MapPin size={20}/> 123 Nguyễn Văn Cừ, TP.HCM</li>
                    <li className="flex items-center gap-2"><Phone size={20}/> 0987 654 321</li>
                    <li className="flex items-center gap-2"><Mail size={20}/> support@smartcart.com</li>
                </ul>
                </div>

            </div>

            <div className="border-t border-white/20 text-center py-4 text-white/70 text-sm">
                © {new Date().getFullYear()} SmartCart. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer
