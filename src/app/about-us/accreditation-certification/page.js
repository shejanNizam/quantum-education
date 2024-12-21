import Image from "next/image";
import ACCREDITATION_CERTIFICATION_IMAGE from "../../../assets/about_us/accreditation_certification_img.webp";

export default function AccreditationCertificationPage() {
  const accreditationCertification = [
    {
      id: 1,
      heading: "Welcome to Our Accreditation and Certification Page",
      description:
        "We take pride in our commitment to maintaining the highest standards in education. At Quantum, transparency and excellence are at the core of what we do. Here’s how we ensure the quality and legitimacy of our institution:",
    },
    {
      id: 2,
      heading: "State Certification",
      description:
        "Quantum operates as a Limited Liability Company (LLC) and is proudly certified by the State Corporation Commission of the Commonwealth of Virginia. This certification reflects our commitment to the legal and operational standards required for conducting business in Virginia.",
    },
    {
      id: 3,
      heading: "Higher Education Certification",
      description:
        "We go a step further in our dedication to providing quality education. Quantum is certified by the State Council of Higher Education for Virginia (SCHEV). This certification is a testament to our institution’s compliance with the rigorous standards set by the state to ensure that we offer a credible and valuable educational experience.",
    },
    {
      id: 4,
      heading: "What This Means for You",
      description:
        "Our certifications demonstrate our legitimacy as an educational institution. When you choose Quantum, you’re selecting an institution that has met stringent state requirements for operation and educational quality. It means you can trust us to provide you with a valuable and recognized education that will help you achieve your academic and career goals.",
    },
    {
      id: 5,
      heading: "Continuous Commitment",
      description:
        "We remain dedicated to upholding these certifications and continuously improving our educational offerings. At Quantum, we’re committed to providing you with a trusted and high-quality educational experience that will open doors to your future.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image
            src={ACCREDITATION_CERTIFICATION_IMAGE}
            alt="ACCREDITATION_CERTIFICATION_IMAGE"
          />
        </div>
        <div>
          {accreditationCertification.map((ac) => (
            <div key={ac.id}>
              <h3 className="text-xl text-primary font-bold"> {ac.heading} </h3>
              <p className="pb-12"> {ac.description} </p>
            </div>
          ))}
        </div>
        <p className=" font-semibold ">
          Thank you for choosing Quantum, where accreditation and certification
          meet a passion for learning and growth.{" "}
        </p>
      </div>
    </>
  );
}
