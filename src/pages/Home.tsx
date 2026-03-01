import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Users, Building2, Award, ArrowRight, Calendar } from 'lucide-react';
import AdmissionPopup from '../components/AdmissionPopup';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAdmissionPopupOpen, setIsAdmissionPopupOpen] = useState(false);

  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400368/G3_ublyrk.jpg',
      title: 'Welcome to Darul Uloom Jamia Razvia',
      subtitle: 'Nurturing Faith & Knowledge since 1972',
      urduTitle: 'جامعہ رضویہ میں خوش آمدید',
    },
    {
      image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.23_5236f807_ftwpgb.jpg',
      title: 'Fostering Islamic Scholarship',
      subtitle: 'Traditional Education with Modern Values',
      urduTitle: 'علم دین کی اشاعت',
    },
    {
      image: '/images/hero-architecture.jpg',
      title: 'A Legacy of Excellence',
      subtitle: 'Building Character, Shaping Futures',
      urduTitle: 'احسان کی میراث',
    },
  ];

  const stats = [
    { icon: Users, value: '2000+', label: 'Students', labelUrdu: 'طلباء' },
    { icon: Building2, value: '2+', label: 'Acre Campus', labelUrdu: 'ایکڑ کیمپس' },
    { icon: Users, value: '102+', label: 'Hostel Residents', labelUrdu: '.hostel residents' },
    { icon: Award, value: '25+', label: 'Faculties', labelUrdu: 'اساتذہ' },
  ];

  const programs = [
    {
      title: 'Diniyat Section',
      titleUrdu: 'دینیات سیکشن',
      description: 'Three-year preparatory course equipping students with essential skills in Arabic and Urdu, enabling them to confidently read, write, and understand foundational texts.',
      descriptionUrdu: 'یہ تین سالہ تیاری کا کورس طلباء کو عربی اور اردو میں بنیادی مہارتیں سکھاتا ہے۔',
      icon: BookOpen,
    },
    {
      title: 'Hifz Section',
      titleUrdu: 'حفظ سیکشن',
      description: 'The Hifz program guides students in memorization of the Quran, emphasizing discipline, punctuality, and good behavior.',
      descriptionUrdu: 'حفظ پروگرام طلباء کو قرآن کی حفظ میں رہنمائی دیتا ہے، جس میں نظم و ضبط پر زور دیا جاتا ہے۔',
      icon: BookOpen,
    },
    {
      title: 'Aalimiyat Section',
      titleUrdu: 'عالمیات سیکشن',
      description: 'Eight-year comprehensive course emphasizing the critical role of Arabic as the language of the Quran. Students earn the title of Alim.',
      descriptionUrdu: 'علمیات پروگرام آٹھ سالہ ہے جو قرآن کی زبان کے طور پر عربی کے اہم کردار پر زور دیتا ہے۔',
      icon: Award,
    },
  ];

  const notices = [
    { date: '15 Jan 2025', title: 'Admissions Open for Academic Year 2025-26', category: 'Admission' },
    { date: '10 Jan 2025', title: 'Annual Examination Schedule Announced', category: 'Examination' },
    { date: '05 Jan 2025', title: 'Special Lecture Series on Islamic History', category: 'Event' },
    { date: '01 Jan 2025', title: 'New Library Resources Available', category: 'Notice' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <p className="font-urdu text-gold-light text-xl mb-2 animate-slide-up">{slide.urduTitle}</p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
                <Link
                  to="/institutions"
                  className="inline-flex items-center gap-2 btn-gold animate-slide-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gold-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-deep py-8 pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-gold-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
                <p className="text-xs font-urdu text-gold-light">{stat.labelUrdu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">ہمارے پروگرام</p>
            <h2 className="section-title">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our institute offers a wide range of courses, blending traditional Islamic studies 
              with modern disciplines for holistic education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md card-hover islamic-border"
              >
                <div className="w-14 h-14 bg-emerald-light rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-1">
                  {program.title}
                </h3>
                <p className="font-urdu text-gold-primary text-sm mb-3">{program.titleUrdu}</p>
                <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                <p className="font-urdu text-gray-500 text-xs">{program.descriptionUrdu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* About Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Text Content */}
      <div>
        <p className="section-subtitle mb-2">ہمارے بارے میں</p>
        <h2 className="section-title">Darul Uloom<br />Jamia Razvia</h2>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          Darul Uloom Jamia Razvia is a leading academic and charitable religious educational 
          institution run by Darul Uloom Jamia Razvia Management Society in Kemri, Rampur, 
          Uttar Pradesh, India. This society was registered in 1996 to fulfill its objectives.
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-8">
          Initially, Madarsa Darul Uloom Jamia Razvia was founded in 1972 by Mohtamim 
          al-Haj Abdul Razzaq (R.A). It was a great honor that the foundation stone was 
          laid by Huzoor Maulana Shah Mufti-e-Azam Hind, Huzoor Mustafa Raza Khan Quadri (R.A) 
          – a worthy son of Huzoor Aala Hazrat, Imam Ahmad Raza Khan (R.A).
        </p>

        <Link to="/about" className="inline-flex items-center gap-2 btn-primary">
          Explore More / مزید جانیں
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Right Side - Founder & Manager Cards (Dono images same style & same URL rakhi hain) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* Founder */}
        <div className="text-center">
          <div className="islamic-border rounded-lg overflow-hidden mb-4">
            <img
              src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg"
              alt="Mohtamim al-Haj Abdul Razzaq (R.A.)"
              className="w-full h-auto"
            />
          </div>
          <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-1">
            Mohtamim al-Haj Abdul Razzaq (R.A.)
          </h3>
          <p className="text-gold-primary font-medium text-lg">Founder / بانی</p>
          <div className="mt-3 inline-block bg-emerald-deep text-white text-sm px-4 py-1 rounded-full">
            Since 1972
          </div>
        </div>

        {/* Manager */}
        <div className="text-center">
          <div className="islamic-border rounded-lg overflow-hidden mb-4">
            <img
              src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400560/Manager_sb_hye1dz.jpg"
              alt="Mohtamim Qari Zafruddin Sahib"
              className="w-full h-auto"
            />
          </div>
          <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-1">
            Mohtamim Qari Zafruddin Sahib
          </h3>
          <p className="text-gold-primary font-medium text-lg">Manager / منتظم</p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">کیوں ہم</p>
            <h2 className="section-title">Why Choose Jamia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrated Curriculum', desc: 'Balanced educational approach integrating Islamic and modern perspectives' },
              { title: 'Experienced Faculty', desc: 'Dedicated instructors who are experts in their fields' },
              { title: 'Holistic Development', desc: 'Academic excellence combined with personal growth' },
              { title: 'Vibrant Community', desc: 'Warm, inclusive environment for all students' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <p className="section-subtitle mb-2">تازہ ترین اعلانات</p>
              <h2 className="section-title">Latest Notices</h2>
            </div>
            <Link to="/notice" className="inline-flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors font-medium">
              View All Notices
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex gap-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-deep rounded-lg flex flex-col items-center justify-center text-white">
                  <Calendar className="w-5 h-5 mb-1" />
                  <span className="text-xs">{notice.date.split(' ')[1]}</span>
                  <span className="text-lg font-bold">{notice.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-gold-light/30 text-gold-dark text-xs rounded-full mb-2">
                    {notice.category}
                  </span>
                  <h3 className="font-medium text-gray-800 hover:text-emerald-deep transition-colors">
                    {notice.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-deep pattern-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Admissions Open for 2025-26
          </h2>
          <p className="font-urdu text-gold-light text-lg mb-6">داخلہ کھلا ہے ٢٠٢٥-٢٦</p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our prestigious institution and embark on a journey of knowledge, faith, and character building. 
            Limited seats available for the upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAdmissionPopupOpen(true)}
              className="btn-gold"
            >
              Apply Now
            </button>
            <Link to="/contact" className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-emerald-deep transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Popup */}
      <AdmissionPopup 
        isOpen={isAdmissionPopupOpen} 
        onClose={() => setIsAdmissionPopupOpen(false)} 
      />
    </div>
  );
};

export default Home;
