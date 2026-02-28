import { BookOpen, Heart, Users, Phone, Globe, FileText, MessageCircle } from 'lucide-react';

const Khidmaat = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Darul Ifta',
      titleUrdu: 'دارالافتاء',
      description: 'Our Darul Ifta provides authentic Islamic rulings (Fatwas) on various religious, social, and personal matters. Qualified Muftis are available to answer your queries based on Quran and Sunnah.',
      contact: 'ifta@jamiarazvia.org',
      timing: 'Mon-Sat: 10 AM - 4 PM',
    },
    {
      icon: Heart,
      title: 'Charity & Welfare',
      titleUrdu: 'خیرات و فلاح',
      description: 'We run various charitable programs including food distribution, medical aid, educational scholarships for needy students, and financial assistance for widows and orphans.',
      contact: 'charity@jamiarazvia.org',
      timing: 'Round the year',
    },
    {
      icon: Users,
      title: 'Marriage Counseling',
      titleUrdu: 'شادی کی مشاورت',
      description: 'Professional counseling services for couples and families, providing Islamic guidance for marital issues, family disputes, and relationship building.',
      contact: 'counseling@jamiarazvia.org',
      timing: 'By Appointment',
    },
    {
      icon: Phone,
      title: 'Helpline',
      titleUrdu: 'ہیلپ لائن',
      description: '24/7 helpline for religious queries, emotional support, and crisis management. Our trained counselors are ready to assist you in times of need.',
      contact: '+91-9756-733 335',
      timing: '24/7 Available',
    },
    {
      icon: Globe,
      title: 'Online Education',
      titleUrdu: 'آن لائن تعلیم',
      description: 'Distance learning programs for Quran, Tajweed, and basic Islamic studies through our online platform. Learn from anywhere in the world.',
      contact: 'online@jamiarazvia.org',
      timing: 'Flexible Schedule',
    },
    {
      icon: FileText,
      title: 'Publications',
      titleUrdu: 'اشاعت',
      description: 'We publish Islamic literature, books, and monthly magazines in multiple languages to spread authentic Islamic knowledge.',
      contact: 'publications@jamiarazvia.org',
      timing: 'Mon-Fri: 9 AM - 5 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">خدمات</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Khidmaat (Services)</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Darul Uloom Jamia Razvia offers various community services to help and guide the Ummah 
            in religious, social, and personal matters.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 card-hover islamic-border"
              >
                <div className="w-14 h-14 bg-emerald-deep rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-1">
                  {service.title}
                </h3>
                <p className="font-urdu text-gold-primary text-sm mb-3">{service.titleUrdu}</p>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-gold-primary" />
                    <span className="text-gray-600">{service.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-gold-primary" />
                    <span className="text-gray-600">{service.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Darul Ifta Section */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
                  Darul Ifta - Islamic Guidance
                </h2>
                <p className="font-urdu text-gold-primary mb-4">دارالافتاء - اسلامی رہنمائی</p>
                <p className="text-gray-600 mb-6">
                  Our Darul Ifta is staffed by qualified Muftis who provide authentic Islamic rulings 
                  based on the Quran, Sunnah, and the Hanafi school of thought. You can submit your 
                  queries regarding:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Religious practices and worship',
                    'Family and marital matters',
                    'Business and financial transactions',
                    'Inheritance and wills',
                    'Food and dietary laws',
                    'Social and ethical issues',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:ifta@jamiarazvia.org"
                    className="btn-primary text-center"
                  >
                    Submit Query
                  </a>
                  <a
                    href="tel:+919756733334"
                    className="px-6 py-3 border-2 border-emerald-deep text-emerald-deep rounded-md font-medium hover:bg-emerald-deep hover:text-white transition-colors text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
              <div className="bg-emerald-deep flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <BookOpen className="w-20 h-20 mx-auto mb-4 text-gold-primary" />
                  <h3 className="font-serif text-xl font-bold mb-2">Fatwa Department</h3>
                  <p className="text-white/80 mb-4">Authentic Islamic Rulings</p>
                  <div className="inline-block bg-white/10 rounded-lg px-4 py-2">
                    <p className="text-gold-light font-urdu">فتویٰ کی درخواست کریں</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">خیرات و فلاح</p>
            <h2 className="section-title">Charity & Welfare Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Food Distribution', desc: 'Monthly ration distribution to needy families', count: '500+ Families' },
              { title: 'Educational Scholarships', desc: 'Financial aid for deserving students', count: '200+ Students' },
              { title: 'Medical Aid', desc: 'Free medical camps and medicine distribution', count: '1000+ Patients' },
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center card-hover">
                <Heart className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{program.desc}</p>
                <p className="text-gold-primary font-bold">{program.count}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/donation" className="btn-gold inline-flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Support Our Charity Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Khidmaat;
