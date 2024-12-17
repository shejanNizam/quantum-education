import AlumniWork from "@/components/Home/AlumniWork";
import Banner from "@/components/Home/Banner";
import QuantumUnique from "@/components/Home/QuantumUnique";
import Registration from "@/components/Home/Registration";
import Testimonials from "@/components/Home/Testimonials";
import Updates from "@/components/Home/Updates";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Updates />
      <QuantumUnique />
      <Testimonials />
      <AlumniWork />
      {/* Registration From Here */}
      <Registration />
    </div>
  );
}
