import Image from "next/image"

const teamMembers = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    bio: "John has over 20 years of experience in marine engine repair and maintenance.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jane Smith",
    position: "Head of Operations",
    bio: "Jane ensures smooth operations and excellent customer service across all our services.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mike Johnson",
    position: "Lead Technician",
    bio: "Mike is our expert in diagnosing and repairing complex engine issues.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Marine Engine Experts</h1>
      <div className="prose mx-auto mb-12">
        <p>
          Marine Engine Experts has been providing top-notch boat engine services for over two decades. Our team of
          skilled technicians and industry professionals is dedicated to keeping your marine engines running smoothly
          and efficiently.
        </p>
        <p>
          We pride ourselves on our commitment to quality, customer satisfaction, and staying at the forefront of marine
          engine technology. Whether you need repairs, maintenance, or are looking to buy or sell an engine, we're here
          to help.
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-center">{member.name}</h3>
            <p className="text-gray-600 text-center mb-2">{member.position}</p>
            <p className="text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

