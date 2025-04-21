export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container-custom">
          <h1 className="text-center">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2>Reservations</h2>
              <div className="space-y-6 mt-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">How far in advance can I make a reservation?</h3>
                  <p className="text-white/80">
                    Reservations open one month in advance. For example, on May 1st, you can book for any date in June.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">What is your cancellation policy?</h3>
                  <p className="text-white/80">
                    We require 48 hours notice for cancellations. Cancellations made less than 48 hours before your 
                    reservation may be subject to a cancellation fee of $85 per person.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Can I make a reservation for a large group?</h3>
                  <p className="text-white/80">
                    Our online reservation system accommodates parties of up to 4 people. For larger groups, 
                    please contact us directly at reservations@glodnyc.com or call (212) 555-1234.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2>Dining Experience</h2>
              <div className="space-y-6 mt-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">How long does the dining experience last?</h3>
                  <p className="text-white/80">
                    The 10-course menu typically takes about 2.5 hours, while the 15-course menu takes approximately 3.5 hours.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Can I choose between the two menus when I arrive?</h3>
                  <p className="text-white/80">
                    Yes, you can decide which menu you prefer when you arrive at the restaurant. However, everyone at 
                    the table must choose the same menu option for service coordination.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Do you accommodate dietary restrictions?</h3>
                  <p className="text-white/80">
                    Yes, we can accommodate most dietary restrictions with advance notice. Please inform us of any 
                    allergies or dietary requirements when making your reservation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2>Dress Code & Policies</h2>
              <div className="space-y-6 mt-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Is there a dress code?</h3>
                  <p className="text-white/80">
                    We suggest upscale attire. While we don't have a strict dress code, we ask that guests refrain 
                    from wearing athletic wear, sport hats, shorts, or sneakers and flip-flops.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">What is your photography policy?</h3>
                  <p className="text-white/80">
                    Discreet photography of your own food is permitted, but we ask that you refrain from using flash 
                    or disturbing other guests. Photography of other guests or the restaurant interior for commercial 
                    purposes requires prior permission.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Do you allow children?</h3>
                  <p className="text-white/80">
                    We welcome guests of all ages, but please note that our tasting menu format and dining experience 
                    is designed for adults. We do not offer a children's menu.</p>
                </div>
              </div>
            </div>

            <div>
              <h2>Location & Hours</h2>
              <div className="space-y-6 mt-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Where are you located?</h3>
                  <p className="text-white/80">
                    We are located at 123 Madison Avenue, New York, NY 10001.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">What are your hours of operation?</h3>
                  <p className="text-white/80">
                    We offer dinner service Tuesday through Saturday. We have two seatings: 5:00 PM and 7:00 PM.
                    The restaurant is closed on Sundays and Mondays.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-medium mb-2">Is parking available?</h3>
                  <p className="text-white/80">
                    We do not have a private parking lot, but there are several parking garages within walking distance.
                    We recommend using public transportation when possible.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2>Still Have Questions?</h2>
              <p className="text-white/80 mt-4">
                If you have any other questions that weren't answered here, please feel free to contact us at
                info@nordnyc.com or call us at (212) 555-1234.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
