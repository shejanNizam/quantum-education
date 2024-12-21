export default function FacultyMembersPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-6xl ">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-12">
            Meet Our Esteemed Faculty Members
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            At Quantum, we are proud to have a team of dedicated and
            accomplished faculty members who bring a wealth of knowledge and
            expertise to our educational community. For currently enrolled
            students, we invite you to access your student portal for an
            extensive list of our esteemed faculty members. Here, you can
            discover more about their backgrounds, areas of specialization, and
            contact information.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our faculty members are committed to fostering a dynamic and
            engaging learning environment, and we encourage you to connect with
            them for guidance, support, and to explore your academic interests.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            For all other inquiries or if you’re interested in learning more
            about our faculty, we invite you to explore our{" "}
            <span className="font-bold text-gray-800">
              Leadership and Staff
            </span>{" "}
            section. Here, you’ll find comprehensive general information about
            our faculty, staff, and leadership team.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Your satisfaction and success are important to us, and we are here
            to assist you in any way we can. If you have questions or need
            further information, please don’t hesitate to reach out. We look
            forward to supporting you on your educational journey at Quantum.
          </p>

          {/* Button */}
          <button className="customButton">Leadership and Staff</button>
        </div>
      </div>
    </>
  );
}
