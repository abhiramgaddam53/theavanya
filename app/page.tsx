import Preloader from "../components/Preloader";
import { HeroSection } from "./components/HeroSection";
import InfiniteSlider from "@/app/components/InfiniteSlider";
import WelcomeSection from "@/app/components/WelcomeSection";
import LuxuryRooms from "@/app/components/LuxuryRooms";
import MoreThanStay from "@/app/components/MoreThanStay";
import ExperiencesSection from "@/app/components/ExperiencesSection";
import PlannedForYou from "@/app/components/PlannedForYou";
import ReserveSection from "@/app/components/ReserveSection";

import RoomsSection from "./components/RoomsSection";
import MapSection from "@/app/components/MapSection";


export default function Home() {
  return (
    <>
      <Preloader />

      <HeroSection />
      <WelcomeSection />
      <InfiniteSlider />
      <RoomsSection />
      <MoreThanStay />
      <ExperiencesSection />
      <PlannedForYou />
      <LuxuryRooms />
      <MapSection />
      <ReserveSection />

    </>
  );
}
