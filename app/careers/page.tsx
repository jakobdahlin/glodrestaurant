import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chef2.png"
            alt="Join Our Team"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">Join Our Team</h1>
          <p className="text-xl text-white/80 max-w-5xl mx-auto">
            Be part of an exceptional culinary experience that celebrates Scandinavian traditions with modern innovation.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-black">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-sky-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Diversity & Inclusion</h3>
              <p className="text-white/80">
                We celebrate diverse perspectives and create an inclusive environment where everyone can thrive.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-sky-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-white/80">
                We encourage creativity and fresh ideas that push the boundaries of Scandinavian cuisine.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-sky-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Sustainability</h3>
              <p className="text-white/80">
                We are committed to sustainable practices that respect our environment and community.
              </p>
            </div>
          </div>

          <div className="text-center text-white/80 max-w-3xl mx-auto">
            <p className="mb-4">
              At Glöd, we believe that our team is our greatest asset. We are committed to creating a workplace where
              diversity is celebrated, ideas are valued, and growth is encouraged. We provide competitive compensation,
              comprehensive benefits, and opportunities for professional development.
            </p>
            <p>
              We are proud to be an Equal Opportunity Employer. We do not discriminate based upon race, religion, color,
              national origin, gender, sexual orientation, gender identity, age, status as a protected veteran,
              status as an individual with a disability, or other applicable legally protected characteristics.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Current Openings</h2>

          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* Sous Chef */}
            <Card className="bg-zinc-950 border-white/10 hover:border-sky-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Sous Chef</CardTitle>
                <CardDescription className="text-white/60">
                  Work alongside our Executive Chef to create exceptional Nordic-inspired cuisine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Assist the Executive Chef in daily kitchen operations</li>
                    <li>Prepare and cook menu items with a focus on Nordic techniques and flavors</li>
                    <li>Train and supervise kitchen staff</li>
                    <li>Ensure high standards of food quality, hygiene, and safety regulations</li>
                    <li>Develop new dishes and contribute to seasonal menu changes</li>
                    <li>Manage inventory and minimize waste</li>
                    <li>Maintain kitchen equipment and ensure cleanliness</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Minimum 3-5 years of experience in a high-end restaurant</li>
                    <li>Culinary degree or equivalent professional training</li>
                    <li>Strong knowledge of Nordic cuisine and techniques</li>
                    <li>Experience with seasonal and local ingredients</li>
                    <li>Excellent leadership and communication skills</li>
                    <li>Ability to work in a fast-paced environment</li>
                    <li>Food safety certification</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/80">
                    <span className="font-medium text-white">Annual Salary Range:</span> $83,000 - $125,000, based on
                    experience
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full border border-sky-400/50 hover:bg-sky-400/10 transition-colors">
                  Apply for This Position
                </Button>
              </CardFooter>
            </Card>

            {/* Bartender */}
            <Card className="bg-zinc-950 border-white/10 hover:border-sky-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Bartender</CardTitle>
                <CardDescription className="text-white/60">
                  Create innovative cocktails that complement our Nordic culinary experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Craft signature and classic cocktails with precision and creativity</li>
                    <li>Develop seasonal cocktail menus featuring Nordic ingredients and spirits</li>
                    <li>Provide exceptional service to guests at the bar</li>
                    <li>Maintain knowledge of wine list and make appropriate recommendations</li>
                    <li>Ensure bar area is clean, organized, and well-stocked</li>
                    <li>Process payments accurately and efficiently</li>
                    <li>Comply with all food and beverage regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Minimum 2-3 years of experience in craft cocktail creation</li>
                    <li>Knowledge of Nordic spirits and flavor profiles</li>
                    <li>Experience in a fine dining establishment</li>
                    <li>Strong attention to detail and presentation</li>
                    <li>Excellent customer service and communication skills</li>
                    <li>Ability to work evenings and weekends</li>
                    <li>Alcohol service certification</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/80">
                    <span className="font-medium text-white">Annual Salary Range:</span> $63,000 - $95,000, based on
                    experience
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full border border-sky-400/50 hover:bg-sky-400/10 transition-colors">
                  Apply for This Position
                </Button>
              </CardFooter>
            </Card>

            {/* Server */}
            <Card className="bg-zinc-950 border-white/10 hover:border-sky-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Server</CardTitle>
                <CardDescription className="text-white/60">
                  Deliver exceptional dining experiences with knowledge and professionalism
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Provide attentive, personalized service to guests</li>
                    <li>Demonstrate comprehensive knowledge of menu items, ingredients, and preparation methods</li>
                    <li>Explain Nordic culinary concepts and traditions to enhance the dining experience</li>
                    <li>Make informed recommendations for food and wine pairings</li>
                    <li>Coordinate with kitchen and bar staff to ensure seamless service</li>
                    <li>Process payments and handle cash accurately</li>
                    <li>Maintain a clean and organized dining area</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-sky-400">Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Minimum 2 years of experience in fine dining service</li>
                    <li>Knowledge of food and wine pairing principles</li>
                    <li>Excellent communication and interpersonal skills</li>
                    <li>Ability to work in a fast-paced environment</li>
                    <li>Professional appearance and demeanor</li>
                    <li>Flexibility to work evenings and weekends</li>
                    <li>Food handler's certification</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/80">
                    <span className="font-medium text-white">Annual Salary Range:</span> $53,000 - $88,000, based on
                    experience
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full border border-sky-400/50 hover:bg-sky-400/10 transition-colors">
                  Apply for This Position
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-black">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-6">How to Apply</h2>
          <p className="text-white/80 mb-8">
            To apply for any of the positions listed above, please send your resume and a cover letter explaining why
            you would be a good fit for Glöd to:
          </p>
          <p className="text-xl mb-8">
            <a href="mailto:careers@nordnyc.com" className="text-sky-400 hover:underline">
              careers@glodnyc.com
            </a>
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 border border-white/10 rounded-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <span className="text-xl font-light text-sky-400">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Submit Application</h3>
              <p className="text-white/80">Send your resume and cover letter to our careers email.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <span className="text-xl font-light text-sky-400">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Interview Process</h3>
              <p className="text-white/80">Selected candidates will be invited for interviews and skill assessments.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sky-400/10 flex items-center justify-center">
                <span className="text-xl font-light text-sky-400">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Join Our Team</h3>
              <p className="text-white/80">Successful candidates will receive an offer to join the Glöd family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black relative">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image src="/images/chef3.png" alt="Glöd Team" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2>Grow With Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join our team of passionate professionals dedicated to creating exceptional Nordic dining experiences in the
            heart of New York City.
          </p>
          <Link href="mailto:careers@nordnyc.com" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
