"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // 🔥 Force autoplay on every navigation
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {
      // Safari fallback
      video.muted = true;
      video.play();
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden font-serif text-[#F5F2EA]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/homepage/Hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
        <motion.div style={{ y: yParallax }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 2.6 }}
          >
            <Image
              src="/logos/white.png"
              alt="Logo"
              height={720}
              width={720}
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};
