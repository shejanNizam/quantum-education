"use client";

import AlumniWork from "@/components/Home/AlumniWork";
import Banner from "@/components/Home/Banner";
import CareerBlueprint from "@/components/Home/CareerBlueprint";
import QuantumUnique from "@/components/Home/QuantumUnique";
import Registration from "@/components/Home/Registration";
import Testimonials from "@/components/Home/Testimonials";
import Updates from "@/components/Home/Updates";
import { useScroll } from "@/context/ScrollContext";

export default function Home() {
  const { handleScrollToRegistration, registrationRef } = useScroll();

  return (
    <div className="min-h-screen">
      <Banner onApplyClick={handleScrollToRegistration} />
      <Updates />
      <QuantumUnique />
      <CareerBlueprint />
      <Testimonials />
      <AlumniWork />
      <div ref={registrationRef}>
        <Registration />
      </div>
    </div>
  );
}
