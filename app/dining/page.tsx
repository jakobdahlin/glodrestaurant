import Image from "next/image"
import Link from "next/link"

export default function Dining() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/int1.png"
            alt="NORD Dining Experience"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">Our Menus</h1>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="section">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-xl text-white/80 mb-8">
            At NORD, we offer two distinct tasting menus that showcase the depth and diversity of Scandinavian cuisine.
            Each dish tells a story of our culinary heritage, reimagined for the modern palate.
          </p>
        </div>
      </section>

      {/* 10 Course Menu */}
      <section className="section bg-zinc-950">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image src="/images/food2.png" alt="10 Course Menu" fill className="object-cover" />
          </div>
          <div>
            <h2>10 Course Journey</h2>
            <p className="text-white/80 mb-6">
              Our 10-course menu is a carefully curated experience that takes you through the essential flavors and
              techniques of Nordic cuisine. Each dish highlights seasonal ingredients at their peak.
            </p>
            <div className="border-t border-white/20 pt-6 mb-6">
              <p className="text-white/80">
                <span className="text-white font-medium">Price:</span> $315 per person
              </p>
              <p className="text-white/80">
                <span className="text-white font-medium">Optional Wine Pairing:</span> $245 per person
              </p>
              <p className="text-white/80">
                <span className="text-white font-medium">Duration:</span> Approximately 2.5 hours
              </p>
            </div>
            <Link href="/reserve" className="btn inline-block">
              Reserve
            </Link>
          </div>
        </div>
      </section>

      {/* 15 Course Menu */}
      <section className="section">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>15 Course Expedition</h2>
            <p className="text-white/80 mb-6">
              Our comprehensive 15-course menu is an immersive journey through the diverse landscapes and culinary
              traditions of Scandinavia. This extended experience allows our chefs to showcase the full breadth of
              Nordic cuisine.
            </p>
            <div className="border-t border-white/20 pt-6 mb-6">
              <p className="text-white/80">
                <span className="text-white font-medium">Price:</span> $415 per person
              </p>
              <p className="text-white/80">
                <span className="text-white font-medium">Optional Wine Pairing:</span> $245 per person
              </p>
              <p className="text-white/80">
                <span className="text-white font-medium">Duration:</span> Approximately 3.5 hours
              </p>
            </div>
            <Link href="/reserve" className="btn inline-block">
              Reserve
            </Link>
          </div>
          <div className="relative h-[600px]">
            <Image src="/images/food10.png" alt="15 Course Menu" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Dietary Restrictions */}
      <section className="section bg-zinc-950">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center">Dietary Accommodations</h2>
          <p className="text-white/80 text-center mb-8">
            We are happy to accommodate dietary restrictions and allergies with advance notice. Please inform us of any
            special requirements when making your reservation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-white/10">
              <h3 className="text-lg mb-3">Vegetarian</h3>
              <p className="text-white/80">We offer complete vegetarian versions of both our tasting menus.</p>
            </div>
            <div className="p-6 border border-white/10">
              <h3 className="text-lg mb-3">Gluten-Free</h3>
              <p className="text-white/80">Most of our menu can be adapted to be gluten-free upon request.</p>
            </div>
            <div className="p-6 border border-white/10">
              <h3 className="text-lg mb-3">Other Allergies</h3>
              <p className="text-white/80">Please inform us of any allergies or dietary restrictions when booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section bg-black relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/int1.png" alt="NORD Dining" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2>Reserve Your Table</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us for an unforgettable culinary journey through the Nordic landscape. Reservations open one month in
            advance.
          </p>
          <Link href="/reserve" className="btn">
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  )
}
