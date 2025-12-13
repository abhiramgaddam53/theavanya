import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export const HeroSection = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

            {/* Background Image Placeholder - Replace src with actual image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-[0.6]"></div>
                {/* Bottom Shadow / Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-150 bg-linear-to-t from-black/60 to-transparent"></div>
            </div>

            <Navbar />

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
                <h1 className="mb-4 text-6xl font-light tracking-tight">
                    Return to Your Elements.
                </h1>
                <p className="font-poppins text-sm">This is not a destination you visit.It is a state you return to.</p>
                <Button className="relative z-10 mt-4" variant="primary" text="Reserve Your Sanctuary" />
            </main>
        </div>
    );
};