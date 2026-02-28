import { Target, Eye, Heart, BookOpen, Users, Award } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1972', title: 'Foundation', description: 'Madarsa Darul Uloom Jamia Razvia was founded by Mohtamim al-Haj Abdul Razzaq (R.A)' },
    { year: '1996', title: 'Registration', description: 'Darul Uloom Jamia Razvia Management Society was registered under Society Act' },
    { year: '2000', title: 'Expansion', description: 'Established Madarsa Jannat-ul-Banaat for girls education' },
    { year: '2010', title: 'Modern Education', description: 'Started Abdul Razzaq Girls Inter College for modern education' },
    { year: '2015', title: 'New Leadership', description: 'Hafiz Mohammad Zafruddin Barkaati took charge as Manager' },
    { year: '2020', title: 'Coaching Academy', description: 'Launched Jamia Razvia Coaching Academy for competitive exams' },
  ];

  const values = [
    { icon: BookOpen, title: 'Knowledge', titleUrdu: 'علم', description: 'Pursuit of Islamic and modern knowledge' },
    { icon: Heart, title: 'Faith', titleUrdu: 'ایمان', description: 'Strengthening faith and spiritual connection' },
    { icon: Users, title: 'Community', titleUrdu: 'برادری', description: 'Building a strong, supportive community' },
    { icon: Award, title: 'Excellence', titleUrdu: 'احسان', description: 'Striving for excellence in all endeavors' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">ہمارے بارے میں</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">About Darul Uloom Jamia Razvia</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Darul Uloom Jamia Razvia is a leading group of Islamic and modern educational institutions managed by the charitable organization "Darul Ulum Jamay Rizwiya Prabandh Samiti", registered in 1996 under Sections 12A and 80G of the Income Tax Act 1961. The institution is located in Kemri, Rampur, Uttar Pradesh.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Madrasa Darul Uloom Jamia Razvia was founded in 1972 by Mohtamim al-Haj Abdul Razzak (R.A.) (1924–2015). After 43 years of dedicated service, he left this world leaving behind a legacy of knowledge, discipline, and Islamic values. It is also a matter of great honor for this institution that its foundation stone was laid by Huzoor Maulana Shah Mufti-e-Azam Hind, Huzoor Mustafa Raza Khan Quadri (R.A.), the beloved son of Aala Hazrat Imam Ahmad Raza Khan Barelvi (R.A.).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since 2015, the institution has been functioning under the guidance of Hafiz Mohammad Zafruddin Barkaati as the Manager (Mohtamim). Under his leadership, the Jamia is continuously progressing towards becoming a distinguished center of Islamic and modern education focusing on character building, community development, and national contribution.
              </p>
              <div className="bg-emerald-light/10 p-4 rounded-lg islamic-border mt-6">
                <p className="text-emerald-deep font-bold mb-2">Along with the existing Islamic institutions for Boys and Girls, Jamia is working to offer high-quality modern education through the following proposed institutions:</p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                  <li>CBSE Boarding/Day School for Boys & Girls</li>
                  <li>Degree College in various disciplines</li>
                  <li>Coaching Centers for NEET & JEE</li>
                  <li>Law Studies & Engineering Studies</li>
                  <li>Medical Studies & Pharmacy Studies</li>
                  <li>And other professional and technical courses</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="islamic-border rounded-lg overflow-hidden">
                <img
                  src="/images/hero-campus.jpg"
                  alt="Jamia Campus"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md islamic-border">
              <div className="w-14 h-14 bg-emerald-deep rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2">Our Mission</h3>
              <p className="font-urdu text-gold-primary mb-4">ہمارا مشن</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide students with a comprehensive education that integrates Islamic values 
                and principles with modern knowledge and skills, fostering intellectual, spiritual, 
                and moral growth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To promote academic excellence, critical thinking, and innovation while remaining grounded in Islamic values and ethics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To cultivate responsible and compassionate individuals who 
                contribute positively to their communities and the global society.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md islamic-border">
              <div className="w-14 h-14 bg-gold-primary rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2">Our Vision</h3>
              <p className="font-urdu text-gold-primary mb-4">ہمارا وژن</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become a leading institution in integrating Islamic and modern education, 
                producing graduates who are knowledgeable, wise, and committed to making a positive 
                impact in the world.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To develop individuals who embody the values of compassion, integrity, and social responsibility, while excelling in their chosen fields.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To foster a culture of community service, social justice, and environmental stewardship, guided by Islamic teachings and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">اہم مقاصد</p>
            <h2 className="section-title">Key Objectives</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md islamic-border max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 leading-relaxed list-none">
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To integrate Islamic sciences and modern disciplines, promoting a holistic understanding of knowledge.
              </li>
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To strengthen students' moral and spiritual character, fostering purpose and responsibility.
              </li>
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To encourage creativity, innovation, and critical thinking.
              </li>
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To promote community service, social responsibility, and justice.
              </li>
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To develop graduates who are intellectually capable and morally sound.
              </li>
              <li className="flex items-start">
                <span className="text-gold-primary mr-2 mt-1">✦</span>
                To nurture individuals who can contribute positively to society and the nation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">ہمارے اصول</p>
            <h2 className="section-title">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-14 h-14 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep">{value.title}</h3>
                <p className="font-urdu text-gold-primary text-sm mb-2">{value.titleUrdu}</p>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-emerald-deep pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-urdu text-gold-light text-xl mb-2">ہمارا سفر</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-primary/30"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="font-serif text-xl font-bold text-emerald-deep">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">قیادت</p>
            <h2 className="section-title">Our Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img
                  src="/images/founder-portrait.jpg"
                  alt="Founder"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-deep to-transparent p-4">
                  <p className="text-gold-light font-urdu text-sm">بانی</p>
                  <h3 className="font-serif text-xl font-bold text-white">Mohtamim al-Haj Abdul Razzaq (R.A)</h3>
                  <p className="text-white/80 text-sm">Founder (1924-2015)</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Founded Madarsa Darul Uloom Jamia Razvia in 1972 with a vision to provide 
                  quality Islamic education to the community. After 43 years of dedicated service, he left behind a legacy of knowledge, discipline, and Islamic values.
                </p>
              </div>
            </div>

            {/* Current Manager */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="relative bg-emerald-deep h-64 flex items-center justify-center">
                <div className="w-32 h-32 bg-gold-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-4xl font-bold">ZB</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-deep to-transparent p-4">
                  <p className="text-gold-light font-urdu text-sm">منتظم</p>
                  <h3 className="font-serif text-xl font-bold text-white">Hafiz Mohammad Zafruddin Barkaati</h3>
                  <p className="text-white/80 text-sm">Manager (Since 2015)</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Leading the institution since 2015 with dedication and vision, expanding 
                  the educational offerings and modernizing the facilities towards becoming a distinguished center of Islamic and modern education.
                </p>
              </div>
            </div>
          </div>

          {/* Manager's Message */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md islamic-border max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-6">Manager's Message</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed italic">
              <p>"Assalamu Alaikum,</p>
              <p>As we embark on this noble journey of integrating Islamic and modern education, we are driven by a shared vision of empowering individuals to excel in both spiritual and intellectual pursuits.</p>
              <p>Our institution is committed to fostering a culture of academic excellence, critical thinking, and moral integrity, guided by the principles of Islam and the insights of modern science.</p>
              <p>We believe that the pursuit of knowledge is a lifelong journey, and our institution is a catalyst for personal growth, community engagement, and social responsibility.</p>
              <p>May Allah guide us and bless us with wisdom, knowledge, and understanding."</p>
              <p className="font-bold text-emerald-deep mt-6 not-italic">— Hafiz Mohammad Zafruddin Barkaati, Manager (Mohtamim)</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;