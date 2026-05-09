export default function MedBridgeAfrica() { return ( <div className="min-h-screen bg-slate-950 text-white font-sans"> {/* Hero Section */} <section className="relative overflow-hidden"> <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-3xl"></div>

<div className="relative max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
            🌍 International Medical Education Consultancy
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            MedBridge <span className="text-emerald-400">Africa</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Connecting African students to affordable, world-class medical education opportunities abroad.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/27715886256"
              className="bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-2xl"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:admissions@medbridgeafrica.study"
              className="border border-slate-700 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300 px-8 py-4 rounded-2xl"
            >
              Contact Admissions
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                  🩺
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Study Medicine Abroad</h3>
                  <p className="text-slate-400">Affordable global opportunities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold text-emerald-400">2025</h4>
                  <p className="text-slate-400 mt-2">Admissions Open</p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold text-cyan-400">24/7</h4>
                  <p className="text-slate-400 mt-2">Student Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-slate-400 text-lg">
        Supporting students through every step of their medical education journey.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'University Admissions',
          desc: 'Guidance and application support for medical universities abroad.',
          icon: '🎓'
        },
        {
          title: 'Visa Assistance',
          desc: 'Helping students navigate international student visa requirements.',
          icon: '📄'
        },
        {
          title: 'Accommodation Support',
          desc: 'Assistance with student housing and settling abroad.',
          icon: '🏠'
        },
        {
          title: 'Pre-Departure Guidance',
          desc: 'Preparing students for travel and life overseas.',
          icon: '✈️'
        },
        {
          title: 'Student Mentorship',
          desc: 'Continuous support for students during their studies.',
          icon: '🤝'
        },
        {
          title: 'Medical Program Consulting',
          desc: 'Helping students choose the right medical path abroad.',
          icon: '🩺'
        }
      ].map((service, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-300"
        >
          <div className="text-4xl mb-6">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
          <p className="text-slate-400 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="bg-slate-900/60 border-y border-slate-800">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose MedBridge Africa?</h2>

          <div className="space-y-6">
            {[
              'Affordable international medical education opportunities',
              'Personalized admissions guidance',
              'Support for African students abroad',
              'Trusted and student-focused approach',
              'Professional communication with universities'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1">
                  ✓
                </div>
                <p className="text-lg text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-slate-800 rounded-[2rem] p-10">
          <h3 className="text-3xl font-bold mb-6">Start Your Journey</h3>

          <p className="text-slate-300 mb-8 leading-relaxed">
            Interested in studying medicine abroad? Contact MedBridge Africa today and begin your application process.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
              <p className="text-slate-400 text-sm">Website</p>
              <p className="text-lg font-medium">medbridgeafrica.study</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
              <p className="text-slate-400 text-sm">Phone / WhatsApp</p>
              <p className="text-lg font-medium">+27 71 588 6256</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-lg font-medium">admissions@medbridgeafrica.study</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="max-w-7xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h3 className="text-2xl font-bold">MedBridge Africa</h3>
        <p className="text-slate-400 mt-2">
          Bridging Africa to global medical education.
        </p>
      </div>

      <div className="text-slate-500 text-sm">
        © 2025 MedBridge Africa. All rights reserved.
      </div>
    </div>
  </footer>
</div>

) }
