import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 z-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/glod.png" alt="NORD" width={120} height={40} className="mb-4" />
            <p className="text-white/60 text-sm">
              Exclusive Scandinavian dining experience in the heart of New York City.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Address</h3>
            <p className="text-white/60 text-sm">
              123 Madison Avenue
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
            <p className="text-white/60 text-sm mt-2">
              info@glodnyc.com
              <br />
              +1 (212) 555-1234
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/reserve" className="text-white/60 hover:text-white text-sm">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-white/60 hover:text-white text-sm">
                  Dining Experience
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-white/60 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-white/60 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-white/60 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-4">© {new Date().getFullYear()} Glöd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
