import { Link } from 'react-router-dom';
import { ArrowRight, School, BookOpen, GraduationCap, Users } from 'lucide-react';

const Institutions = () => {
  const institutions = [
    {
      id: 'madarsa-darul-loom',
      name: 'Madarsa Darul Uloom Jamia Razvia',
      nameUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      description: 'Our flagship boys madrasa offering comprehensive Islamic education including Hifz, Diniyat, and Aalimiyat programs. Established in 1972, it has been the cornerstone of our educational mission.',
      image: '/images/hero-campus.jpg',
      icon: School,
      established: '1972',
      students: '1200+',
    },
    {
      id: 'madarsa-jannat-ul-banaat',
      name: 'Madarsa Jannat-ul-Banaat',
      nameUrdu: 'مدرسہ جنت البنات',
      description: 'Dedicated Islamic education institution for girls, providing a safe and nurturing environment for sisters to pursue religious studies alongside modern education.',
      image: '/images/girls-institution.jpg',
      icon: BookOpen,
      established: '2000',
      students: '800+',
    },
    {
      id: 'abdul-razzaq-girls-college',
      name: 'Abdul Razzaq Girls Inter College',
      nameUrdu: 'عبدالرزاق گرلز انٹر کالج',
      description: 'Modern intermediate college for girls following the state board curriculum, empowering young women with quality secular education in an Islamic environment.',
      image: '/images/coaching-academy.jpg',
      icon: GraduationCap,
      established: '2010',
      students: '500+',
    },
    {
      id: 'jamia-razvia-coaching',
      name: 'Jamia Razvia Coaching Academy',
      nameUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      description: 'Professional coaching center preparing students for competitive examinations including NEET, JEE, and other entrance tests with experienced faculty.',
      image: '/images/classroom-scene.jpg',
      icon: Users,
      established: '2020',
      students: '300+',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">ہمارے ادارے</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Institutions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover our diverse range of educational institutions catering to different needs 
            while maintaining the highest standards of Islamic values.
          </p>
        </div>
      </div>

      {/* Institutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutions.map((institution) => (
              <div
                key={institution.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-56">
                  <img
                    src={institution.image}
                    alt={institution.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold-primary rounded-lg flex items-center justify-center">
                    <institution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-deep to-transparent p-4">
                    <p className="font-urdu text-gold-light text-sm">{institution.nameUrdu}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold text-emerald-deep mb-2">
                    {institution.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{institution.description}</p>
                  
                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gold-primary font-bold">Est:</span>
                      <span className="text-gray-700">{institution.established}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-primary font-bold">Students:</span>
                      <span className="text-gray-700">{institution.students}</span>
                    </div>
                  </div>

                  <Link
                    to={`/institutions/${institution.id}`}
                    className="inline-flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Facilities */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">ہماری سہولیات</p>
            <h2 className="section-title">Common Facilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Library', titleUrdu: 'کتب خانہ', desc: 'Well-stocked with Islamic and modern books' },
              { title: 'Hostel', titleUrdu: ' hostel', desc: 'Comfortable residential facilities for students' },
              { title: 'Computer Lab', titleUrdu: 'کمپیوٹر لیب', desc: 'Modern computer education facilities' },
              { title: 'Sports Ground', titleUrdu: 'کھیل کا میدان', desc: 'Outdoor sports and recreational area' },
            ].map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <h3 className="font-serif text-lg font-bold text-emerald-deep">{facility.title}</h3>
                <p className="font-urdu text-gold-primary text-sm mb-2">{facility.titleUrdu}</p>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institutions;
