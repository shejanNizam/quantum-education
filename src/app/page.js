"use client";

import AlumniWork from "@/components/Home/AlumniWork";
import Banner from "@/components/Home/Banner";
import CareerBlueprint from "@/components/Home/CareerBlueprint";
import QuantumUnique from "@/components/Home/QuantumUnique";
import Registration from "@/components/Home/Registration";
import Test from "@/components/Home/Test";
import Testimonials from "@/components/Home/Testimonials";
import Updates from "@/components/Home/Updates";
import { useRef } from "react";

export default function Home() {
  const registrationRef = useRef(null);

  const handleScrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Banner onApplyClick={handleScrollToRegistration} />
      {/* <Test /> */}
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
