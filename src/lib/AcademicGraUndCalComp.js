import Image from "next/image";
import ContactUsComp from "./ContactUsComp";

export default function AcademicGraUndCalComp({
  subHeading,
  heading,
  description,
  sections,
}) {
  return (
    <>
      <div>
        <div className="max-w-4xl mx-auto mb-8">
          <h6 className="text-xl font-semibold text-gray-600 uppercase mb-2">
            {subHeading}
          </h6>
          <h1 className="customSubHeading mb-4">{heading}</h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="max-w-7xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div
                className={`flex justify-center ${
                  index % 2 === 0 ? "lg:order-first" : "lg:order-last"
                }`}
              >
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.heading}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* contact us start */}
        <ContactUsComp heading={"Contact Us"} />
      </div>
    </>
  );
}
