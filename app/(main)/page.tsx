import Preloader from "@/components/Preloader";
import { HeroSection } from "../components/HeroSection";
import InfiniteSlider from "../components/InfiniteSlider";
import WelcomeSection from "../components/WelcomeSection";
import LuxuryRooms from "../components/LuxuryRooms";
import MoreThanStay from "../components/MoreThanStay";
import ExperiencesSection from "../components/ExperiencesSection";
import PlannedForYou from "@/app/components/PlannedForYou";
import ReserveSection from "@/app/components/ReserveSection";

import RoomsSection from "../components/RoomsSection";
import MapSection from "../components/MapSection";
import { redirect } from "next/navigation";


export default function Home() {
  // redirect('/booking/over-view');
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
