"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="border-b border-white/10 z-50">
      <div className="container-custom flex justify-between items-center py-2">
        <Link href="/" className="flex items-center">
          <Image src="/glod.png" alt="GLÖD" width={100} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white/80 hover:text-white uppercase tracking-wider text-sm">
            Home
          </Link>
          <Link href="/reserve" className="text-white/80 hover:text-white uppercase tracking-wider text-sm">
            Reserve
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white uppercase tracking-wider text-sm">
            About
          </Link>
          <Link href="/dining" className="text-white/80 hover:text-white uppercase tracking-wider text-sm">
            Dining
          </Link>
          <Link href="/faq" className="text-white/80 hover:text-white uppercase tracking-wider text-sm">
            FAQ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white/80 hover:text-white uppercase tracking-wider text-sm py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/reserve"
              className="text-white/80 hover:text-white uppercase tracking-wider text-sm py-2"
              onClick={toggleMenu}
            >
              Reserve
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white uppercase tracking-wider text-sm py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/dining"
              className="text-white/80 hover:text-white uppercase tracking-wider text-sm py-2"
              onClick={toggleMenu}
            >
              Dining
            </Link>
            <Link
              href="/faq"
              className="text-white/80 hover:text-white uppercase tracking-wider text-sm py-2"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
