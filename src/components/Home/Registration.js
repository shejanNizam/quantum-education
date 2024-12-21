"use client";
import Script from "next/script";

export default function RegistrationForm() {
  return (
    <div className="">
      <div className="text-center my-12">
        <div className="text-6xl font-bold mb-4"> Register Now </div>
        <p>
          {" "}
          It’s never too late to start new career
          <br />
          <br />
          Countdown is finished! <br /> Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. <br /> Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s
        </p>
      </div>

      <div
        className="iframe-container"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "850px",
          width: "100%",
          margin: "0 auto",
          // backgroundColor: "#f9f9f9",
        }}
      >
        {/* Embed Cognito Forms iframe */}
        <iframe
          src="https://www.cognitoforms.com/f/R16GRqSqDUauWo4ldCNybw/1"
          allow="payment"
          style={{
            border: "0",
            width: "100%",
            // maxWidth: "800px", // Restrict width for responsiveness
            margin: "0 auto",
            padding: "50px 0",
            backgroundColor: "#FAF4F1",
            borderRadius: "12px",
          }}
        ></iframe>

        {/* Dynamically load the Cognito iframe.js script */}
        <Script
          src="https://www.cognitoforms.com/f/iframe.js"
          strategy="lazyOnload" // Loads script only when the page has loaded
        />
      </div>
    </div>
  );
}
