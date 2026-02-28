import { useParams, Navigate, Link } from 'react-router-dom';
import { Users, BookOpen, Building2, Home, GraduationCap, User, FileText, ArrowRight } from 'lucide-react';

const InstitutionDetail = () => {
  const { id } = useParams<{ id: string }>();

  const institutionsData: Record<string, {
    name: string;
    nameUrdu: string;
    subtitle?: string;
    image: string;
    established: string;
    description: string;
    extendedDetails?: {
      aboutMadarsa?: string[];
      aboutInstitution?: string[];
      futurePlans?: string[];
    };
    quickLinks: { name: string; path: string; icon: any; description: string }[];
  }> = {
    'madarsa-darul-loom': {
      name: 'Madarsa Darul Uloom Jamia Razvia',
      nameUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      subtitle: 'Leading Islamic & Modern Educational English Medium Senior Secondary School (Class I–XII)',
      image: '/images/hero-campus.jpg',
      established: '1972',
      description: 'Our flagship boys madrasa offering comprehensive Islamic education. The institution follows the traditional Dars-e-Nizami curriculum while incorporating modern teaching methodologies.',
      extendedDetails: {
        aboutMadarsa: [
          'Madarsa Darul Uloom Jamia Razvia was founded in 1972 by Mohtamim al-Haj Abdul Razzaq (R.A). The foundation stone was laid by Huzoor Maulana Shah Mufti-e-Azam Hind, Huzoor Mustafa Raza Khan Quadri (R.A.), worthy son of Huzoor Aala Hazrat, Imam Ahmad Raza Khan (R.A).',
          'The Madarsa is committed to providing comprehensive Islamic education while fostering intellectual, spiritual, and moral growth.'
        ],
        aboutInstitution: [
          'Darul Uloom Jamia Razvia is a leading Islamic & Modern Educational Institution, registered under sections 12A & 80G of the Income Tax Act 1961. Located in Kemri, Rampur (UP), it offers Islamic and modern education through various institutions.',
          'The Madarsa was established in 1972 by Mohtamim al-Haj Abdul Razzak (R.A.) (1924–2015). After 43 years of service, he passed away while blessing the success of this institution.',
          'Since 2015, Hafiz Mohammad Zafruddin Barkaati has been serving as the Manager (Mohtamim), guiding the institution to blend Islamic & Modern education to produce future leaders.'
        ],
        futurePlans: [
          'CBSE Boarding Inter Colleges for Girls & Boys',
          'Degree College in various disciplines',
          'Coaching Centers for NEET/JEE',
          'Law Studies',
          'Engineering Studies',
          'Medical Studies',
          'Pharmacy Studies'
        ]
      },
      quickLinks: [
        { name: "Principal's Message", path: 'principal', icon: User, description: 'Message from the Principal' },
        { name: 'Teaching Staff', path: 'staff', icon: Users, description: 'Meet our qualified teachers' },
        { name: 'Facilities', path: 'facilities', icon: Building2, description: 'Campus facilities and amenities' },
        { name: 'Library', path: 'library', icon: BookOpen, description: 'Our book collection' },
        { name: 'Hostel', path: 'hostel', icon: Home, description: 'Residential facilities' },
        { name: 'Students', path: 'students', icon: GraduationCap, description: 'Student life and activities' },
        { name: 'Syllabus', path: 'syllabus', icon: FileText, description: 'Course curriculum' },
      ],
    },
    'madarsa-jannat-ul-banaat': {
      name: 'Madarsa Jannat-ul-Banaat Barkate Fatima',
      nameUrdu: 'مدرسہ جنت البنات',
      image: '/images/girls-institution.jpg',
      established: '2000',
      description: "Dedicated girls' Madarsa providing quality Islamic education for female students, ensuring a safe and nurturing environment to pursue religious studies.",
      quickLinks: [
        { name: "Principal's Message", path: 'principal', icon: User, description: 'Message from the Principal' },
        { name: 'Teaching Staff', path: 'staff', icon: Users, description: 'Meet our qualified teachers' },
        { name: 'Facilities', path: 'facilities', icon: Building2, description: 'Campus facilities and amenities' },
        { name: 'Library', path: 'library', icon: BookOpen, description: 'Our book collection' },
        { name: 'Hostel', path: 'hostel', icon: Home, description: 'Residential facilities' },
        { name: 'Students', path: 'students', icon: GraduationCap, description: 'Student life and activities' },
        { name: 'Syllabus', path: 'syllabus', icon: FileText, description: 'Course curriculum' },
      ],
    },
    'abdul-razzaq-girls-college': {
      name: 'Abdul Razzaq Girls Inter College',
      nameUrdu: 'عبدالرزاق گرلز انٹر کالج',
      image: '/images/coaching-academy.jpg',
      established: '2010',
      description: 'Modern intermediate college for girls following the state board curriculum, empowering young women with quality secular education.',
      quickLinks: [
        { name: "Principal's Message", path: 'principal', icon: User, description: 'Message from the Principal' },
        { name: 'Teaching Staff', path: 'staff', icon: Users, description: 'Meet our qualified teachers' },
        { name: 'Facilities', path: 'facilities', icon: Building2, description: 'Campus facilities and amenities' },
        { name: 'Library', path: 'library', icon: BookOpen, description: 'Our book collection' },
        { name: 'Hostel', path: 'hostel', icon: Home, description: 'Residential facilities' },
        { name: 'Students', path: 'students', icon: GraduationCap, description: 'Student life and activities' },
        { name: 'Syllabus', path: 'syllabus', icon: FileText, description: 'Course curriculum' },
      ],
    },
    'jamia-razvia-coaching': {
      name: 'Jamia Razvia Coaching Academy',
      nameUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      image: '/images/classroom-scene.jpg',
      established: '2020',
      description: 'Professional coaching center preparing students for competitive examinations with experienced faculty.',
      quickLinks: [
        { name: "Principal's Message", path: 'principal', icon: User, description: 'Message from the Principal' },
        { name: 'Teaching Staff', path: 'staff', icon: Users, description: 'Meet our qualified teachers' },
        { name: 'Facilities', path: 'facilities', icon: Building2, description: 'Campus facilities and amenities' },
        { name: 'Library', path: 'library', icon: BookOpen, description: 'Our book collection' },
        { name: 'Hostel', path: 'hostel', icon: Home, description: 'Residential facilities' },
        { name: 'Students', path: 'students', icon: GraduationCap, description: 'Student life and activities' },
        { name: 'Syllabus', path: 'syllabus', icon: FileText, description: 'Course curriculum' },
      ],
    },
  };

  const institution = id ? institutionsData[id] : null;

  if (!institution) {
    return <Navigate to="/institutions" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="relative h-80">
        <img
          src={institution.image}
          alt={institution.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <p className="font-urdu text-gold-light text-xl mb-2">{institution.nameUrdu}</p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold">{institution.name}</h1>
            {institution.subtitle && (
              <p className="mt-3 text-lg text-white/90 font-medium">{institution.subtitle}</p>
            )}
            <p className="mt-4 text-white/80">Established: {institution.established}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Main Description */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 islamic-border">
            <p className="text-gray-600 leading-relaxed text-lg">{institution.description}</p>
          </div>

          {/* Extended Details (Renders only if they exist in the data) */}
          {institution.extendedDetails && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* About Sections */}
              <div className="space-y-8">
                {institution.extendedDetails.aboutMadarsa && (
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-4 border-b border-emerald-light/30 pb-2">About the Madarsa</h3>
                    <div className="space-y-4">
                      {institution.extendedDetails.aboutMadarsa.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {institution.extendedDetails.aboutInstitution && (
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-4 border-b border-emerald-light/30 pb-2">About the Institution</h3>
                    <div className="space-y-4">
                      {institution.extendedDetails.aboutInstitution.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Future Plans Section */}
              {institution.extendedDetails.futurePlans && (
                <div className="bg-emerald-deep rounded-lg shadow-md p-8 pattern-bg h-fit sticky top-8">
                  <h3 className="font-serif text-2xl font-bold text-gold-light mb-6">Future Expansion Plans</h3>
                  <p className="text-white/90 mb-6">The institution aims to expand with the following modern educational initiatives:</p>
                  <ul className="space-y-3">
                    {institution.extendedDetails.futurePlans.map((plan, idx) => (
                      <li key={idx} className="flex items-start text-white/90">
                        <span className="text-gold-primary mr-3 mt-1">✦</span>
                        <span>{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Quick Links Grid */}
          <div className="text-center mb-8 mt-12">
            <h2 className="section-title">Explore More</h2>
            <p className="font-urdu text-gold-primary">مزید جانیں</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {institution.quickLinks.map((link, index) => (
              <Link
                key={index}
                to={`/institutions/${id}/${link.path}`}
                className="bg-white rounded-lg shadow-md p-6 card-hover group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-emerald-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-deep transition-colors">
                    <link.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-deep transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-1">{link.name}</h3>
                <p className="text-gray-500 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetail;