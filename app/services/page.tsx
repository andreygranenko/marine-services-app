import Link from "next/link"

const services = [
  {
    title: "Engine Sales",
    description: "New and used engines for various boat types.",
    subcategories: ["Inboard", "Outboard"],
    link: "/shop"
  },
  {
    title: "Engine Rentals",
    description: "Short-term and long-term engine rental options.",
    link: "/shop"
  },
  {
    title: "Engine Repairs & Maintenance",
    description: "Expert repair and maintenance services for all engine types.",
    link: "/book"
  },
  {
    title: "Engine Purchases",
    description: "We buy used and new engines.",
    link: "/book"
  },
  {
    title: "Boat Repairs",
    description: "Full-scale repairs for various boat types.",
    link: "/book"
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            {service.subcategories && (
              <ul className="list-disc list-inside mb-4">
                {service.subcategories.map((sub) => (
                  <li key={sub}>{sub}</li>
                ))}
              </ul>
            )}
            <Link
              href={`${service.link}`}
              className="text-blue-600 hover:text-blue-800 mt-auto"
            >
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

