import Image from "next/image";
import ALUMNI_ASSOCIATION_IMAGE from "../../../assets/about_us/alumni_association_img.webp";

export default function AlumniAssociationPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image
            src={ALUMNI_ASSOCIATION_IMAGE}
            alt="ALUMNI_ASSOCIATION_IMAGE"
          />
        </div>
        <div></div>
        <p className="font-semibold">
          Thank you for choosing Quantum, where accreditation and certification
          meet a passion for learning and growth.{" "}
        </p>
      </div>
    </>
  );
}
