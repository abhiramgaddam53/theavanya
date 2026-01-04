import { Trophy, Medal, Leaf, Crown } from "lucide-react";

const awards = [
    {
        id: 1,
        label: "ECO-LUXE 2023",
        icon: Leaf,
    },
    {
        id: 2,
        label: "SERENITY AWARD",
        icon: Trophy,
    },
    {
        id: 3,
        label: "GREEN HOSPITALITY",
        icon: Medal,
    },
    {
        id: 4,
        label: "BEST OF 2024",
        icon: Crown,
    }
];

export default function OurAwards() {
    return (
        <section className="bg-primary-bg py-16 px-8 md:px-16 pb-16">
            <div className="max-w-[1400px] mx-auto text-center">
                <span className="font-poppins text-xs font-bold tracking-widest uppercase opacity-40 mb-6 block">
                    Our Awards
                </span>
                <p className="font-poppins text-[#1a1a1a]/60 text-lg  mb-20 max-w-lg mx-auto">
                    Recognized for excellence in luxury and sustainability
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[#1a1a1a]/10">
                    {awards.map((award) => {
                        const Icon = award.icon;
                        return (
                            <div key={award.id} className="flex flex-col items-center gap-6 group">
                                <div className="w-16 h-16 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center text-[#6B6B55] group-hover:bg-[#bea5857d] group-hover:text-white transition-all duration-500">
                                    <Icon strokeWidth={1} size={32} />
                                </div>
                                <span className="font-poppins w-full text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/80">
                                    {award.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
