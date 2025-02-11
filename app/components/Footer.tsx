import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Marine Engine Experts</h3>
            <p>Specialized boat engine services, sales, and repairs</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-blue-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Marina Way, Seaside, CA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@marineengineexperts.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Marine Engine Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

