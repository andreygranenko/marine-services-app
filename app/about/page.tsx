import Image from "next/image"
import alex from '/public/alex.jpg'

const teamMembers = [
  {
    name: "Alex Granenko",
    position: "Founder & CEO",
    bio: "Alex has over 30 years of experience in marine engine repair and maintenance.",
    image: alex,
  },

]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center ">About AG Ship Services</h1>
      <div className={' px-4 lg:px-24 gap-5'}>
          <div className="prose mx-auto mb-12">
              <p>
                  AG Ship Services is a specialized boat engineering company founded and operated by Alex Granenko. With a deep understanding of boat mechanics, electrical systems, and structural integrity, we provide expert services to ensure the safety, reliability, and performance of your vessel.
              </p>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="flex justify-center gap-8">
              {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 lg:w-1/3  ">
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

    </div>
  )
}

