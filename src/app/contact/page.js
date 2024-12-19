import Script from "next/script";
export default function ContactPage() {
  return (
    <>
      <div className="">
       
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "30px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "550px",
            // width: "100%",
            margin: "0 auto",
            // backgroundColor: "#f9f9f9",
          }}
        >
          <iframe
            src="https://www.cognitoforms.com/f/R16GRqSqDUauWo4ldCNybw/2"
            style={{
              border: "0",
              width: "100%",
              maxWidth: "800px", // Restrict width for responsiveness
              margin: "0 auto",
              padding: "10px 0",
              height: "600px",
              backgroundColor: "#ffff",
              borderRadius: "12px",
            }}
          ></iframe>
          <Script
            src="https://www.cognitoforms.com/f/seamless.js"
            // data-key="R16GRqSqDUauWo4ldCNybw"
            data-form="2"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </>
  );
}
