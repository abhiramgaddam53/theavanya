"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-[#F5F2EA] pt-32 pb-12 px-6 md:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-24">

                {/* Top Section: Heading + Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-md w-full">
                        <h2 className="font-serif text-3xl md:text-4xl mb-8">Join our newsletter</h2>
                        <div className="flex justify-between items-center border-b border-[#F5F2EA]/30 pb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none outline-none text-[#F5F2EA] placeholder:text-[#F5F2EA]/40 w-full font-poppins font-light"
                            />
                            <button className="uppercase text-xs tracking-widest font-poppins hover:opacity-70">Subscribe</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-16 md:gap-32 font-poppins font-light text-sm">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-serif text-lg mb-2 opacity-50">Explore</h3>
                            <Link href="#" className="hover:opacity-70 transition-opacity">Villas</Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">Dining</Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">Wellness</Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">Gallery</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-serif text-lg mb-2 opacity-50">Contact</h3>
                            <p className="opacity-80">info@theavanya.com</p>
                            <p className="opacity-80">+91 98765 43210</p>
                            <div className="pt-4 flex gap-4 text-[#F5F2EA]/60">
                                <Link href="#" className="uppercase text-xs tracking-widest hover:text-white transition-colors">Instagram</Link>
                                <Link href="#" className="uppercase text-xs tracking-widest hover:text-white transition-colors">Facebook</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Title */}
                <div className="w-full text-center border-t border-[#F5F2EA]/10 pt-24">
                    <h1 className="font-serif text-[12vw] leading-none opacity-20 uppercase tracking-tight select-none">
                        The Avanya
                    </h1>
                </div>

                {/* Bottom Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-poppins font-light opacity-40 uppercase tracking-widest">
                    <p>© 2024 The Avanya. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
