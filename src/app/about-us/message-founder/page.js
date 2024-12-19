import Image from "next/image";
import FOUNDER_IMAGE from "@/assets/about_us/founder_chancellor_img.webp";

export default function MessageFounderPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <h2 className="font-bold text-2xl">
          About | Message from the founder and chancellor
        </h2>
        <div className="flex justify-center">
          <Image src={FOUNDER_IMAGE} alt="FOUNDER_IMAGE" />
        </div>
        <h4 className="text-xl font-semibold">
          {" "}
          Welcome to Quantum Institute of Science and Technology!{" "}
        </h4>{" "}
        <br />
        <p>
          {" "}
          Dear students and parents, <br /> Embarking on the journey of
          education has always been shrouded in uncertainty, a path filled with
          questions about passions, career paths, and the alignment of dreams
          with reality. As I reflect on my own journey, I vividly recall the
          challenges of selecting subjects, seeking guidance, and striving for a
          balance between ambition and practicality. Throughout my educational
          odyssey, from school to college, I often found a lack of personalized
          attention and mentors who truly understood the nuances of each
          student’s aspirations. Quantum Institute of Science and Technology is
          conceived with a steadfast commitment to bridging these gaps. We have
          meticulously crafted a curriculum that not only addresses industry
          demands but also transforms education into an engaging, enjoyable, and
          accessible endeavor. Our institution is resolutely focused on
          converging the brilliance of artificial intelligence with the
          creativity of human minds, preparing students to shape a brighter
          tomorrow. In a world where the transition from education to employment
          can be challenging, we have revolutionized our educational approach.
          Our programs are meticulously designed to align with the contemporary
          needs of various industries, including modern healthcare delivery,
          financial institutions, and governmental sectors. Gone are the days of
          uncertainty; our graduates are primed to enter the professional arena
          with confidence, armed with skills that are not only relevant but also
          in high demand. As the Founder and CEO of Quantum, my journey has been
          one of exploration and discovery. With a background in Electrical
          Engineering, a bachelor’s degree in software systems engineering, and
          a wealth of executive education, I have spent over a decade working in
          the corporate realm, dedicated to enhancing the healthcare and
          financial sectors for the betterment of consumers, clinicians, and
          businesses alike. Bringing together my extensive experience in both
          education and corporate America, I am excited to lead a team that is
          deeply committed to transforming lives through quality education in
          emerging fields. Our mission goes beyond the confines of traditional
          academia; we strive to empower our students with the tools they need
          not only for a successful future but also for a future where they
          remain relevant and impactful. As you step into Quantum Institute of
          Science and Technology, you become part of a vibrant community where
          innovation thrives, dreams are nurtured, and possibilities are
          limitless. Our dedicated faculty, state-of-the-art facilities, and
          progressive educational methodologies await your exploration. We
          extend a warm welcome to you, our future leaders and trailblazers, and
          we eagerly anticipate the incredible journey ahead. Together, let us
          embark on a path of enlightenment, discovery, and transformation.{" "}
        </p>{" "}
        <br />
        <h4 className="text-xl font-semibold">With sincere enthusiasm,</h4>
        <p>Syed Tasin Ahmed, P.E. Founder and CEO</p>
        <p>Quantum Institute of Science and Technology</p>
      </div>
    </>
  );
}
