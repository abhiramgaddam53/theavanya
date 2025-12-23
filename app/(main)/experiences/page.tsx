import LuxuriousRetreats from "./components/LuxuriousRetreats";
import OurAwards from "./components/OurAwards";
import DiningTestimonial from "./components/DiningTestimonial";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

import SerenityEscape from "./components/SerenityEscape";

function ExperienceHero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/experiences/Hero.jpg"
                    alt="Serenity Landscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <span className="font-poppins text-xs font-bold tracking-[0.3em] uppercase mb-6 block opacity-90">
                    Discover
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
                    Serenity <span className="italic font-light">Awaits</span> You
                </h1>
                <p className="font-poppins text-xs md:text-sm max-w-lg mx-auto leading-relaxed opacity-90">
                    Uncover a world of blissful solitude and adventure at Avanya Kute, where every moment is a celebration of life.
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <div className="w-px h-12 bg-white/50" />
                </div>
            </div>
        </section>
    );
}

const experiencesFaqs = [
    {
        question: "How do I book a spa treatment?",
        answer: "We recommend booking your spa treatments at least 24 hours in advance to ensure availability. You can book directly through our concierge or via the booking section on this website."
    },
    {
        question: "Is there a dress code for the restaurants?",
        answer: "Our dining venues generally maintain a smart-casual dress code. Swimwear and bathrobes are not permitted in the dining areas during service hours."
    },
    {
        question: "Do you accommodate dietary restrictions?",
        answer: "Absolutely. Our culinary team is well-versed in handling various dietary requirements including vegan, gluten-free, and nut allergies. Please inform us upon booking."
    },
    {
        question: "Are children allowed in the wellness center?",
        answer: "To ensure a serene atmosphere for all guests, the main wellness center and spa facilities are reserved for guests aged 16 and above."
    }
];

export default function ExperiencesPage() {
    return (
        <main>
            <ExperienceHero />
            <SerenityEscape />
            <LuxuriousRetreats />
            <OurAwards />
            <DiningTestimonial />
            <div className="p-16 pb-8 bg-primary-bg">
                <FAQSection
                    tagline="Common Questions"
                    description="Everything you need to know about your experience"
                    faqs={experiencesFaqs}
                />
            </div>
        </main>
    );
}
