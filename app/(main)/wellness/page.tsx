import WellnessHero from "./components/WellnessHero";
import CuratedDetailsSection from "./components/CuratedDetailsSection";
import FAQSection from "@/components/FAQSection";
import ParallaxImageSection from "./components/ParallaxImageSection";
import DesignedForYouSection from "./components/DesignedForYouSection";
import NatureParallaxSection from "./components/NatureParallaxSection";
import ReserveSection from "@/app/components/ReserveSection";

const wellnessFAQs = [
    {
        question: "Is The Avanya a medical or clinical wellness retreat?",
        answer: "No. Our approach is holistic and preventative, rooted in nature, traditional wisdom, and lifestyle restoration."
    },
    {
        question: "Are wellness programs mandatory?",
        answer: "Never. Every experience is optional, flexible, and designed around your comfort."
    },
    {
        question: "Can wellness sessions be conducted privately?",
        answer: "Yes. Most therapies and practices are offered exclusively in private settings."
    },
    {
        question: "Is the food customizable for dietary needs?",
        answer: "Completely. Meals are crafted daily based on preferences, allergies, and wellness goals."
    },
    {
        question: "Do I need prior yoga or meditation experience?",
        answer: "Not at all. All practices are adapted to your level and intention."
    },
    {
        question: "Is digital detox mandatory?",
        answer: "No. High-speed connectivity is available, with the option to disconnect at will."
    },
    {
        question: "How long should a wellness stay be?",
        answer: "We recommend a minimum of three nights for meaningful impact, though longer stays deepen results."
    },
    {
        question: "Is The Avanya suitable for solo travelers?",
        answer: "Exceptionally so. Privacy, safety, and discretion are central to our design."
    }
];

export default function WellnessPage() {
    return (
        <main>
            <WellnessHero />
            <ParallaxImageSection />
            <DesignedForYouSection />
            <CuratedDetailsSection />
            <NatureParallaxSection />
            <ReserveSection />
            <FAQSection
                tagline="Thoughtfully Answered."
                description="Because true luxury anticipates questions before they are asked."
                faqs={wellnessFAQs}
            />
            <div className="pb-16"></div>
        </main>
    );
}
