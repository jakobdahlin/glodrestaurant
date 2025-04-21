import Image from "next/image"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/swe3.png"
            alt="About NORD"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">Our Story</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container-custom max-w-5xl">
          <p className="text-xl text-white/80 mb-8">
          Glöd was born from a passion for Scandinavian culinary traditions and a desire to bring authentic Nordic
            flavors to New York City. Our restaurant represents a bridge between the old world and the new, honoring
            traditional techniques while embracing innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center my-16">
            <div className="relative h-[600px]">
              <Image src="/images/chef1.png" alt="Chef Portrait" fill className="object-cover" />
            </div>
            <div>
              <h2>Our Chef</h2>
              <p className="text-white/80">
                Chef Elias Johansson brings over 15 years of experience from renowned restaurants across Scandinavia.
                His approach combines respect for traditional Nordic ingredients with contemporary techniques, creating
                dishes that are both familiar and surprising.
              </p>
              <p className="text-white/80">
                Having worked in Stockholm, Copenhagen, and Oslo, Chef Johansson brings authentic Scandinavian flavors
                and techniques to every dish at Glöd.
              </p>
            </div>
          </div>

          <h2 className="mt-16">Our Philosophy</h2>
          <p className="text-white/80">
            At Glöd, we believe in the Scandinavian principles of simplicity, functionality, and harmony. These
            principles guide not only our cuisine but also our approach to hospitality and the dining experience we
            create.
          </p>
          <p className="text-white/80">
            We work closely with local farmers and suppliers to source the finest ingredients, many of which are organic
            and sustainably produced. Our menu changes with the seasons, reflecting the natural rhythm of the land and
            sea.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center my-16">
            <div>
              <h2>Our Space</h2>
              <p className="text-white/80">
                The design of Glöd reflects the Scandinavian aesthetic of clean lines, natural materials, and thoughtful
                minimalism. Our dining room creates an atmosphere of understated elegance, allowing the food and the
                experience to take center stage.
              </p>
              <p className="text-white/80">
                Every element of our space has been carefully considered, from the custom-made furniture to the lighting
                that changes subtly throughout the evening, creating a dining environment that is both intimate and
                dramatic.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/int1.png"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="mt-16">Sustainability</h2>
          <p className="text-white/80">
            Sustainability is at the core of Nordic culture, and it's a value we embrace wholeheartedly at Glöd. We
            strive to minimize waste, use energy efficiently, and make environmentally conscious choices in all aspects
            of our operation.
          </p>
          <p className="text-white/80">
            From our kitchen practices to our partnerships with suppliers, we are committed to reducing our
            environmental footprint while delivering an exceptional dining experience.
          </p>
        </div>
      </section>
    </div>
  )
}
