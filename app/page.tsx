import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/food10.png"
            alt="NORD Restaurant"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
        <h2 className="text-6xl">***</h2>
          <p className="text-xl md:text-2xl font-light tracking-wider uppercase mb-12 max-w-3xl mx-auto">
            A Scandinavian Culinary Journey in New York City
          </p>
          <Link href="/reserve" className="btn">
            Reserve a Table
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-black">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Our Philosophy</h2>
            <p className="text-white/80">
              At NORD, we bring the essence of Scandinavian cuisine to the heart of New York City. Our approach combines
              traditional Nordic techniques with local, seasonal ingredients to create a dining experience that is both
              authentic and innovative.
            </p>
            <Link href="/about" className="btn inline-block mt-4">
              Learn More
            </Link>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/food6.PNG"
              alt="Nordic Ingredients"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>The Dining Experience</h2>
            <p className="text-white/80">
              Choose between our carefully crafted tasting menus, each telling a story of Scandinavian culinary heritage
              through modern interpretations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
              <h3>10 Course Journey</h3>
              <p className="text-white/80">
                A curated experience featuring the finest seasonal ingredients, showcasing the essence of Nordic
                cuisine.
              </p>
              <p className="text-white/60 italic">Optional wine pairing available</p>
            </div>

            <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
              <h3>15 Course Expedition</h3>
              <p className="text-white/80">
                Our comprehensive tasting menu, taking you through the diverse landscapes and flavors of Scandinavia.
              </p>
              <p className="text-white/60 italic">Optional wine pairing available</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/dining" className="btn">
              Explore Our Menus
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section bg-black">
        <div className="container-custom">
          <h2 className="text-center mb-12">A Glimpse of NORD</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="relative h-[400px]">
    <Image
      src="/images/food8.png"
      alt="NORD Restaurant 1"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative h-[400px]">
    <Image
      src="/images/food2.png"
      alt="NORD Restaurant 2"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative h-[400px]">
    <Image
      src="/images/food3.png"
      alt="NORD Restaurant 3"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative h-[400px]">
    <Image
      src="/images/food4.png"
      alt="NORD Restaurant 4"
      fill
      className="object-cover"
    />
  </div>
</div>

        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section bg-black relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/swe1.png" alt="NORD Ambiance" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2>Experience NORD</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us for an unforgettable culinary journey through the Nordic landscape. Reservations open one month in
            advance.
          </p>
          <Link href="/reserve" className="btn">
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  )
}
