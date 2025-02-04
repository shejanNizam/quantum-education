"use client";

import { useEffect } from "react";

export default function CareerConsultation() {
  useEffect(() => {
    // This ensures the script is only executed on the client side after the component mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <h3 className="font-bold text-3xl md:text-4xl md:w-[50%] xl:w-[30%] mx-auto text-center my-4">
        Take The Next Step Toward Your Career Goals
      </h3>
      <p className="font-semibold text-center text-xl my-4 md:my-0">
        Explore how our vocational programs can unlock new opportunities for you
      </p>
      <div
        className="calendly-inline-widget w-full h-[900px] md:h-[700px] "
        data-url="https://calendly.com/quantuminstitute"
      ></div>
    </div>
  );
}
