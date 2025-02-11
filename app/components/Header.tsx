"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Marine Engine Experts
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-300">
            Services
          </Link>
          <Link href="/shop" className="hover:text-blue-300">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
          <Link href="/admin" className="hover:text-blue-300">
            Admin
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-blue-300">
            Home
          </Link>
          <Link href="/services" className="block py-2 hover:text-blue-300">
            Services
          </Link>
          <Link href="/shop" className="block py-2 hover:text-blue-300">
            Shop
          </Link>
          <Link href="/about" className="block py-2 hover:text-blue-300">
            About Us
          </Link>
          <Link href="/contact" className="block py-2 hover:text-blue-300">
            Contact
          </Link>
          <Link href="/admin" className="block py-2 hover:text-blue-300">
            Admin
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header

