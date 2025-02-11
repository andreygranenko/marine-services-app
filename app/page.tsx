import Image from "next/image"
import Link from "next/link"
import TestimonialsSection from "./components/TestimonialsSection"

const featuredServices = [
  {
    title: "Engine Sales",
    description: "New and used engines for various boat types.",
    slug: "engine-sales",
  },
  {
    title: "Engine Repairs",
    description: "Expert repair services for all engine types.",
    slug: "engine-repairs",
  },
  {
    title: "Maintenance",
    description: "Regular maintenance to keep your engine running smoothly.",
    slug: "maintenance",
  },
]

const whyChooseUs = [
  { title: "Expert Technicians", description: "Our team has years of experience in marine engines." },
  { title: "Quality Parts", description: "We use only the highest quality parts for all repairs and sales." },
  { title: "Fast Turnaround", description: "We understand the importance of getting you back on the water quickly." },
  { title: "Customer Satisfaction", description: "Our customers' satisfaction is our top priority." },
]

export default function Home() {
  return (
    <div>
      <section className="relative h-[600px]">
        <Image src="https://cdn.denisonyachtsales.com/wp-content/uploads/2022/05/denison_yachting_homepage_hero.webp" alt="Boats and engines" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Marine Engine Experts</h1>
            <p className="text-xl md:text-2xl mb-8">Your trusted partner for boat engine services</p>
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="text-blue-600 hover:text-blue-800">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  )
}

