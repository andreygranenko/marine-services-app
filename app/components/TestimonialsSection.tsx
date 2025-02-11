import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Boat Owner",
    content: "Marine Engine Experts provided exceptional service. They fixed my engine quickly and efficiently.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Charter Company Owner",
    content:
      "I've been using their services for years. They're reliable, professional, and always deliver quality work.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Fishing Guide",
    content: "Their expertise in engine repairs has saved me countless times. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

