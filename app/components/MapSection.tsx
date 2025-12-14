"use client";

export default function MapSection() {
    return (
        <section className="w-full bg-primary-bg text-[#1a1a1a] py-24 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-sm">

                {/* Google Map Iframe */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.450072682199!2d78.48088157463017!3d17.533745798573385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854db6e91eff%3A0xff94bacf06626aa5!2sAsterisks%20Inc%20%7C%20Creative%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1765706513189!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[0.2] opacity-90"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
