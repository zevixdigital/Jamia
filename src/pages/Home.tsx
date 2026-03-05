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
    { date: '15 Jan 2026', title: 'Admissions Open for Academic Year 2026-27', category: 'Admission' },
    { date: '10 Jan 2026', title: 'Annual Examination Schedule Announced', category: 'Examination' },
    { date: '05 Jan 2026', title: 'Special Lecture Series on Islamic History', category: 'Event' },
    { date: '01 Jan 2026', title: 'New Library Resources Available', category: 'Notice' },
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




      {/* Darul Uloom Jamia Razvia Section */}
<section className="py-24 bg-emerald-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-20">
      <p className="font-urdu text-2xl text-gold-primary mb-3">
        دارالعلوم جامعہ رضویہ
      </p>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900">
        Darul Uloom Jamia Razvia
      </h2>

      <div className="w-24 h-1 bg-gold-primary mx-auto mt-5"></div>
    </div>

    {/* Introduction Box */}
    <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-10 max-w-5xl mx-auto mb-20 text-center">
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Darul Uloom Jamia Razvia is a leading Islamic & Modern educational institute 
        managed by “Darul Ulum Jamay Rizwiya Prabandh Samiti”, registered in 1996 
        under Sections 12A and 80G of the Income Tax Act, 1961.
      </p>

      <p className="font-urdu text-gray-700 text-lg leading-relaxed">
        دارالعلوم جامعہ رضویہ ایک نمایاں اسلامی و عصری تعلیمی ادارہ ہے جو 
        "دارالعلوم جمعی رضویہ پربندھ سمیتی" کے زیر انتظام چلایا جا رہا ہے، 
        جو 1996 میں انکم ٹیکس ایکٹ 1961 کی دفعات 12A اور 80G کے تحت رجسٹرڈ ہے۔
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Image Section */}
      <div className="relative">
        <div className="border-4 border-gold-primary rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/WhatsApp_Image_2026-02-26_at_2.44.55_PM_1_gio1tb.jpg"
            alt="Jamia Event"
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Decorative Corner */}
        <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white px-6 py-3 rounded-md shadow-md">
          Since 1972
        </div>
      </div>

      {/* Highlights */}
      <div className="space-y-10">

        {/* Highlight 1 */}
        <div className="border-l-4 border-gold-primary pl-6">
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Founded in 1972
          </h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Established by Mohtamim al-Haj Abdul Razzak (R.A.) (1924–2015), 
            leaving behind a legacy of knowledge and discipline.
          </p>
          <p className="font-urdu text-gray-700">
            1972 میں حضرت الحاج عبدالرزاق (رحمتہ اللہ علیہ) نے اس ادارے کی بنیاد رکھی۔
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="border-l-4 border-gold-primary pl-6">
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Honored Foundation
          </h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            The foundation stone was laid by Huzoor Mufti-e-Azam Hind 
            Mustafa Raza Khan Quadri (R.A.).
          </p>
          <p className="font-urdu text-gray-700">
            اس ادارے کی بنیاد حضور مفتی اعظم ہند مصطفیٰ رضا خان قادری (رحمتہ اللہ علیہ) نے رکھی۔
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="border-l-4 border-gold-primary pl-6">
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Leadership Since 2015
          </h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Currently guided by Hafiz Mohammad Zafruddin Barkaatia as Mohtamim,
            focusing on character building and national contribution.
          </p>
          <p className="font-urdu text-gray-700">
            2015 سے حافظ محمد ظفرالدین برکاتی کی سرپرستی میں ادارہ ترقی کی راہ پر گامزن ہے۔
          </p>
        </div>

      </div>

    </div>

  </div>
</section>



     {/* Programs Section */}
<section className="py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Header */}
    <div className="text-center mb-16">
      <p className="text-gold-primary font-urdu text-lg mb-2 tracking-wide">
        ہمارے پروگرام
      </p>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-deep relative inline-block">
        Our Programs
        <span className="block w-20 h-1 bg-gold-primary mx-auto mt-3 rounded-full"></span>
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
        Our institute offers a wide range of courses, blending traditional 
        Islamic studies with modern disciplines for holistic education.
      </p>
    </div>

    {/* Programs Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {programs.map((program, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-50"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-primary transition-all duration-500"></div>

          {/* Icon */}
          <div className="w-16 h-16 bg-emerald-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-deep transition-all duration-500">
            <program.icon className="w-8 h-8 text-emerald-deep group-hover:text-white transition-all duration-500" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
            {program.title}
          </h3>

          {/* Urdu Title */}
          <p className="font-urdu text-gold-primary text-base mb-4">
            {program.titleUrdu}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {program.description}
          </p>

          {/* Urdu Description */}
          <p className="font-urdu text-gray-500 text-xs leading-relaxed">
            {program.descriptionUrdu}
          </p>

          {/* Learn More Button */}
          <div className="mt-6">
            <button className="text-sm font-semibold text-emerald-deep hover:text-gold-primary transition-colors duration-300">
              Learn More →
            </button>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


     {/* About Section */}
<section className="py-20 bg-gradient-to-b from-white to-emerald-light/10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Side - Text Content */}
      <div>
        <p className="text-gold-primary font-urdu text-lg mb-2">
          ہمارے بارے میں
        </p>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-deep mb-6 leading-tight">
          Jamia Razvia <br />
          <span className="text-gold-primary">Founder & Manager</span>
        </h2>

        <div className="w-20 h-1 bg-gold-primary mb-6 rounded-full"></div>

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

        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-emerald-deep text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-gold-primary transition duration-300"
        >
          Explore More / مزید جانیں
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Right Side - Founder & Manager Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Founder Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-2xl transition duration-500">
          
          <div className="relative mx-auto w-[200px] mb-5">
            <div className="absolute inset-0 bg-gold-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>

            <div className="relative rounded-full overflow-hidden border-4 border-gold-primary shadow-md">
              <img
                src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg"
                alt="Mohtamim al-Haj Abdul Razzaq (R.A.)"
                className="w-[200px] h-[200px] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-emerald-deep mb-1">
            Mohtamim al-Haj Abdul Razzaq (R.A.)
          </h3>
          <p className="text-gold-primary font-medium text-sm">
            Founder / بانی
          </p>
        </div>

        {/* Manager Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-2xl transition duration-500">
          
          <div className="relative mx-auto w-[200px] mb-5">
            <div className="absolute inset-0 bg-emerald-deep/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>

            <div className="relative rounded-full overflow-hidden border-4 border-emerald-deep shadow-md">
              <img
                src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400560/Manager_sb_hye1dz.jpg"
                alt="Mohtamim Qari Zafruddin Sahib"
                className="w-[200px] h-[200px] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-emerald-deep mb-1">
            Mohtamim Qari Zafruddin Sahib
          </h3>
          <p className="text-gold-primary font-medium text-sm">
            Manager / منتظم
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Why Choose Us - Premium Version */}
<section className="py-28 bg-gradient-to-b from-white via-emerald-light/5 to-white relative overflow-hidden">

  {/* Subtle Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-primary/10 blur-[150px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 relative">

    {/* Header */}
    <div className="text-center mb-24">
      <p className="text-gold-primary font-urdu text-2xl mb-3 tracking-wide">
        کیوں ہم؟
      </p>

      <h2 className="font-serif text-5xl md:text-6xl font-bold text-emerald-deep">
        Why Choose Jamia?
      </h2>

      <div className="w-28 h-[3px] bg-gradient-to-r from-gold-primary to-emerald-deep mx-auto mt-6 rounded-full"></div>

      <p className="text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed text-lg">
        Discover what makes Jamia Razvia a distinguished institution where
        tradition, discipline and academic excellence come together.
      </p>

      <p className="font-urdu text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed text-lg">
        جانئے وہ نمایاں خصوصیات جو جامعہ رضویہ کو ایک ممتاز تعلیمی ادارہ بناتی ہیں۔
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {[
        {
          title: "Integrated Curriculum",
          urdu: "مربوط نصاب",
          desc: "Islamic and modern education combined in a balanced system.",
          descUrdu: "اسلامی اور عصری تعلیم کا متوازن نظام۔",
        },
        {
          title: "Experienced Faculty",
          urdu: "ماہر اساتذہ",
          desc: "Highly qualified and dedicated scholars and teachers.",
          descUrdu: "تجربہ کار اور باصلاحیت اساتذہ۔",
        },
        {
          title: "Character Building",
          urdu: "کردار سازی",
          desc: "Focus on moral discipline, ethics and leadership.",
          descUrdu: "اخلاق، نظم و ضبط اور قیادت پر خصوصی توجہ۔",
        },
        {
          title: "Community Impact",
          urdu: "سماجی خدمات",
          desc: "Committed to social welfare and national development.",
          descUrdu: "سماجی بہبود اور قومی ترقی کے لیے کوشاں۔",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="group relative bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-5"
        >

          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary to-emerald-deep scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl"></div>

          {/* Decorative Circle */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold-primary to-emerald-deep flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition duration-500">
            {index + 1}
          </div>

          <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
            {item.title}
          </h3>

          <p className="font-urdu text-gold-primary text-base mb-4">
            {item.urdu}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-2">
            {item.desc}
          </p>

          <p className="font-urdu text-gray-600 text-sm leading-relaxed">
            {item.descUrdu}
          </p>

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




{/* Events Section */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-deep">
              Events
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Explore our recent academic activities, prize distributions,
              staff meetings and institutional events.
            </p>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden">
            {/* Added classes to hide the default browser scrollbar for a cleaner look */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* Event 1 */}
              <div className="min-w-[90vw] md:min-w-[65%] lg:min-w-[55%] snap-center relative group rounded-3xl overflow-hidden shadow-xl border border-gray-100/20">
                <a href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/WhatsApp_Image_2026-02-26_at_2.44.55_PM_1_gio1tb.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/WhatsApp_Image_2026-02-26_at_2.44.55_PM_1_gio1tb.jpg"
                    alt="Madarsa Toppers"
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-10">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-auto">
                    <h3 className="text-white text-2xl md:text-4xl font-serif font-bold drop-shadow-lg">
                       Staff Meeting
                    </h3>
                    <p className="text-gray-200 mt-3 md:text-lg max-w-xl drop-shadow-md">
                       Darul Uloom Jamia Razvia – Academic Planning Session
                    </p>
                    <a
                      href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/WhatsApp_Image_2026-02-26_at_2.44.55_PM_1_gio1tb.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center bg-gold-primary/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-primary hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      View Full Poster
                    </a>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="min-w-[90vw] md:min-w-[65%] lg:min-w-[55%] snap-center relative group rounded-3xl overflow-hidden shadow-xl border border-gray-100/20">
                <a href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg"
                    alt="Staff Meeting"
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-10">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-auto">
                    <h3 className="text-white text-2xl md:text-4xl font-serif font-bold drop-shadow-lg">
                      Annual Prize Distribution
                    </h3>
                    <p className="text-gray-200 mt-3 md:text-lg max-w-xl drop-shadow-md">
                      Madarsa Toppers – Academic Year 2025-26
                    </p>
                    <a
                      href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center bg-gold-primary/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-primary hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      View Full Poster
                    </a>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="min-w-[90vw] md:min-w-[65%] lg:min-w-[55%] snap-center relative group rounded-3xl overflow-hidden shadow-xl border border-gray-100/20">
                <a href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg"
                    alt="Community Event"
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-10">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-auto">
                    <h3 className="text-white text-2xl md:text-4xl font-serif font-bold drop-shadow-lg">
                      Community Gathering
                    </h3>
                    <p className="text-gray-200 mt-3 md:text-lg max-w-xl drop-shadow-md">
                      Educational & Institutional Development Program
                    </p>
                    <a
                      href="https://res.cloudinary.com/dadqwaqis/image/upload/v1772386715/IMG-20260226-WA0005_n0hedh.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center bg-gold-primary/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-primary hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      View Full Poster
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <p className="text-center text-sm font-medium text-emerald-deep/60 mt-4 flex items-center justify-center gap-2">
            <span className="hidden md:inline">←</span> Swipe to explore <span className="hidden md:inline">→</span>
          </p>

        </div>
      </section>


{/* Our Philosophy Section - Ultra Premium Design */}
<section className="relative py-32 bg-white overflow-hidden">

  {/* Elegant Soft Background Shapes */}
  <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-gold-primary/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

      {/* LEFT SIDE */}
      <div className="relative">

        {/* Decorative Vertical Line */}
        <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-gold-primary to-emerald-600 rounded-full hidden lg:block"></div>

        <p className="font-urdu text-2xl text-gold-primary mb-4 tracking-wide">
          ہمارا نظریہ
        </p>

        <h2 className="font-serif text-5xl font-bold text-emerald-900 leading-tight mb-8">
          Education
          <span className="block text-gold-primary">Matters</span>
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          Education is a fundamental necessity for the holistic development of individuals. 
          Broadly defined, education shapes the mind, character, and physical abilities, 
          preparing people to lead meaningful and impactful lives.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          It is the process through which society imparts its accumulated knowledge, skills, 
          and values—referred to as <strong>Taalim</strong>—from one generation to the next. 
          At our institutions, we are committed to providing high-quality education that 
          equips students with the tools they need to thrive and contribute to society.
        </p>

        <p className="font-urdu text-gray-700 leading-relaxed mb-12 text-lg">
          تعلیم انسان کی ہمہ جہت ترقی کے لیے بنیادی ضرورت ہے۔ یہ ذہن، کردار اور صلاحیتوں 
          کو سنوارتی ہے اور انسان کو بامقصد اور مؤثر زندگی گزارنے کے قابل بناتی ہے۔ 
          ہمارے ادارے میں اعلیٰ معیار کی تعلیم فراہم کی جاتی ہے تاکہ طلبہ معاشرے میں 
          مثبت کردار ادا کر سکیں۔
        </p>

        {/* Highlight Features */}
        <div className="grid sm:grid-cols-2 gap-10">

          <div className="group bg-emerald-50 p-8 rounded-3xl border border-emerald-100 hover:bg-white hover:shadow-xl transition duration-500">
            <h4 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-gold-primary transition">
              Quality Education
            </h4>
            <p className="text-gray-600 text-sm">
              Excellence in learning
            </p>
            <p className="font-urdu text-gray-600 text-sm mt-2">
              معیاری تعلیم
            </p>
          </div>

          <div className="group bg-emerald-50 p-8 rounded-3xl border border-emerald-100 hover:bg-white hover:shadow-xl transition duration-500">
            <h4 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-gold-primary transition">
              Holistic Growth
            </h4>
            <p className="text-gray-600 text-sm">
              Complete development
            </p>
            <p className="font-urdu text-gray-600 text-sm mt-2">
              ہمہ جہت ترقی
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE - VIDEO */}
      <div className="relative group">

        {/* Outer Glow Border */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-gold-primary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition"></div>

        <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-emerald-100">

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-emerald-900">
              Institutional Overview
            </h3>
            <p className="font-urdu text-gray-600 text-sm mt-1">
              ادارے کا تعارفی ویڈیو
            </p>
          </div>

          {/* Responsive 16:9 Ratio */}
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/L4csGN8nfak?si=oOYaJGmmi4QfUyL2"
              title="Institution Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-deep pattern-bg">
  <div className="max-w-4xl mx-auto px-4 text-center">
    
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
      Admissions Open for 2026–2027
    </h2>

    <p className="font-urdu text-gold-light text-lg mb-6">
      تعلیمی سال ٢٠٢٦–٢٠٢٧ کے لیے داخلے کھل گئے ہیں
    </p>

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

      <Link
        to="/contact"
        className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-emerald-deep transition-colors"
      >
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
