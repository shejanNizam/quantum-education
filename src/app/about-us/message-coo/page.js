import Image from "next/image";
import COO_IMAGE from "../../../assets/about_us/coo_img.webp";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "MessageCoo - Quantum Institute" });
}

export default function MessageCooPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image src={COO_IMAGE} alt="COO_IMAGE" />
        </div>
        <h4 className="text-xl font-semibold">
          Dear Students, Parents, and All,
        </h4>{" "}
        <br />
        <p>
          As the Chief Operating Officer of Quantum Institute of Science and
          Technology, I am honored to extend a heartfelt welcome to each and
          every one of you. I am privileged to introduce myself as a dedicated
          and influential US Military veteran with over 20 years of extensive
          expertise in Finance, Healthcare, and the Military. My life journey
          has been profoundly influenced by my military service, instilling in
          me the values of discipline, teamwork, and an unwavering commitment to
          a higher purpose. These principles have played a pivotal role in
          shaping me into a leader and innovator. My background has instilled a
          deep sense of duty and responsibility within me. Serving our nation in
          the military was a profound privilege, and the experiences gained
          during that time remain an integral part of who I am today. Drawing
          upon the valuable lessons learned in leadership, I have cultivated a
          foundation rooted in trust, transparency, and an unrelenting
          dedication to continuous improvement. Quantum Institute of Science and
          Technology recognizes the significance of supporting military veterans
          as they transition into civilian life and embark on new career paths.
          My personal journey from the military to the corporate world uniquely
          positions me to understand the challenges and opportunities that
          veterans encounter. At Quantum, it is our unwavering commitment to
          provide the necessary resources, guidance, and educational programs to
          empower veterans to thrive in the ever-evolving landscape of emerging
          fields. To students and parents contemplating Quantum Institute of
          Science and Technology, I want to convey our resolute dedication to
          your success. Our institution is more than just a place of learning;
          it is a vibrant community that cherishes innovation, personal growth,
          and career development. We are steadfast in our mission to nurture
          analytical thinking, effective communication, and leadership skills –
          qualities that are indispensable for thriving in today’s dynamic job
          market. For students, Quantum offers an exceptional learning
          environment designed to prepare you for a fulfilling career in
          emerging fields. Our commitment to excellence is exemplified by our
          track record in empowering students to achieve their goals. To
          parents, I wish to offer my assurance that Quantum is a sanctuary
          where your child’s education and future are nurtured with the utmost
          care. Our commitment to their success extends far beyond the
          classroom, as we provide the support and guidance necessary to help
          them unlock their full potential and excel in their chosen career
          paths. In conclusion, I am wholeheartedly dedicated to the success of
          our students and the mission of Quantum Institute of Science and
          Technology. Together, we will embark on a journey characterized by
          discovery, growth, and remarkable achievements. I eagerly anticipate
          welcoming you into our close-knit community and assisting you in
          reaching your full potential.
        </p>
        <br />
        <p>Warm regards,</p>
        <h4 className="text-xl font-semibold">
          Igin Ismat, SAFe 6.0 Practice Consultant | MBA | PMP | RTE | ACP |
          ICP-ACC | AWS-CP | USN Veteran
        </h4>
        <p>Chief Operating Officer</p>
        <p>Quantum Institute of Science and Technology</p>
      </div>
    </>
  );
}
