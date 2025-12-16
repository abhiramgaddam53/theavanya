import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-6 text-center">
            {/* Decorative large text */}
            <h1 className="font-serif text-[15rem] leading-none text-[#1a1a1a] opacity-[0.03] select-none absolute pointer-events-none">
                404
            </h1>

            <div className="relative z-10 flex flex-col items-center">
                <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                    Page Not Found
                </h2>
                <p className="font-poppins text-[#1a1a1a]/60 max-w-md mb-12 font-light text-lg leading-relaxed">
                    The path you seek has wandered into the unknown. <br />
                    Let us guide you back to familiar serenity.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <Link
                        href="/"
                        className="px-10 py-4 bg-[#1a1a1a] text-white font-poppins text-xs font-medium tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300 rounded-full hover:shadow-lg hover:-translate-y-1"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/booking/accommodations"
                        className="px-10 py-4 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a] font-poppins text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 rounded-full hover:shadow-lg hover:-translate-y-1"
                    >
                        Book a Stay
                    </Link>
                </div>
            </div>
        </div>
    );
}
