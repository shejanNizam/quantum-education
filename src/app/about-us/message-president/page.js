import Image from "next/image";
import PRESIDENT_IMAGE from "../../../assets/about_us/president_img.webp";

export default function MessagePresidentPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image src={PRESIDENT_IMAGE} alt="PRESIDENT_IMAGE" />
        </div>
        <h4 className="text-xl font-semibold">
          Dear Students, Parents, and Visitors,
        </h4>{" "}
        <br />
        <p>
          I am Attorney Tom Scartz, and I am honored to serve as the President
          of Quantum Institute of Science and Technology. I want to extend a
          warm welcome to all of you. With 28 years of experience in the legal
          profession, I’ve witnessed the need for innovation and efficiency in
          our systems, particularly when it comes to addressing pressing issues
          like domestic violence. My passion for adopting Agile and Scrum
          fundamentals has led to the creation of the Early Diversion Program, a
          victim-centered approach that aims to transform the way we address
          domestic violence cases. We’ve been able to make a meaningful impact
          by providing interventive services and support to those in need while
          saving valuable time and resources. Over the decade, I have spent time
          understanding market trends, technological advancements, and
          particularly Scrum and Agile methodologies. Throughout my learning
          journey, I have recognized the efficiency and effectiveness they can
          bring to the table, which I was able to incorporate into the field of
          law. Now, to build the next generation of forward-thinking leaders, we
          are here to share the findings and best practices with our students at
          Quantum Institute. Our goal is to equip individuals with the skills
          and knowledge needed to tackle complex challenges efficiently. At
          Quantum Institute, our mission is to prepare students and aspiring
          leaders to be critical thinkers and problem solvers in the
          ever-evolving field of technology. We believe in equipping individuals
          with the skills and knowledge needed to tackle complex challenges
          efficiently. Whether you’re a student looking to embark on a path of
          innovation or a concerned parent seeking the best education for your
          loved ones, we are here to support you. Our commitment to building
          individuals who can address real-world problems is at the core of our
          mission. If you have any questions or would like to learn more about
          our programs, please reach out to our admissions team. Together, we
          can create a brighter future filled with innovation, transformation,
          and positive change.
        </p>
        <br />
        <p>Warm regards,</p>
        <h4 className="text-xl font-semibold">Thomas E. Scartz, J.D.</h4>
        <p>President, Quantum Institute of Science and Technology</p>
        <p>Attorney at Law</p>
      </div>
    </>
  );
}
