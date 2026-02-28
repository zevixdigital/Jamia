import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Facilities = () => {
  const { id } = useParams<{ id: string }>();

  const facilitiesData: Record<string, {
    institution: string;
    institutionUrdu: string;
    description: string;
    facilities: { name: string; description: string; icon: string }[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      description: 'Our campus is equipped with modern facilities to provide a conducive learning environment for our students.',
      facilities: [
        { name: 'Spacious Classrooms', description: 'Well-ventilated classrooms with modern teaching aids and comfortable seating arrangements.', icon: '🏫' },
        { name: 'Central Mosque', description: 'Large mosque for daily prayers, Jumuah, and Quran classes with capacity for 500+ worshippers.', icon: '🕌' },
        { name: 'Library', description: 'Well-stocked library with over 15,000 books including rare Islamic manuscripts.', icon: '📚' },
        { name: 'Computer Lab', description: 'Modern computer lab with internet facility for research and modern education.', icon: '💻' },
        { name: 'Hostel', description: 'Separate residential facility for 200+ students with mess and recreational areas.', icon: '🏠' },
        { name: 'Sports Ground', description: 'Outdoor sports ground for cricket, football, and athletics.', icon: '⚽' },
        { name: 'Cafeteria', description: 'Hygienic cafeteria serving nutritious meals to students and staff.', icon: '🍽️' },
        { name: 'Medical Room', description: 'First aid facility with basic medical equipment and trained staff.', icon: '🏥' },
        { name: 'Water Supply', description: '24/7 clean drinking water supply with RO purification system.', icon: '💧' },
        { name: 'Power Backup', description: 'Generator backup for uninterrupted power supply during outages.', icon: '⚡' },
      ],
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      description: 'A safe and secure campus designed specifically for female students with all necessary amenities.',
      facilities: [
        { name: 'Separate Building', description: 'Dedicated building for girls with restricted access for male staff.', icon: '🏫' },
        { name: 'Prayer Hall', description: 'Spacious prayer hall for daily prayers and religious activities.', icon: '🕌' },
        { name: 'Library', description: 'Library with Islamic literature focused on women\'s education.', icon: '📚' },
        { name: 'Craft Room', description: 'Room for sewing, embroidery, and other craft activities.', icon: '🧵' },
        { name: 'Cooking Area', description: 'Training kitchen for teaching cooking and household management.', icon: '🍳' },
        { name: 'Hostel', description: 'Safe residential facility with female supervisors for 150+ students.', icon: '🏠' },
        { name: 'Indoor Sports', description: 'Indoor sports facilities for physical activities.', icon: '🏸' },
        { name: 'Medical Room', description: 'First aid facility with female medical staff.', icon: '🏥' },
      ],
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      description: 'Modern educational facilities designed to provide quality secular education in an Islamic environment.',
      facilities: [
        { name: 'Smart Classrooms', description: 'Classrooms equipped with smart boards and projectors.', icon: '📱' },
        { name: 'Science Labs', description: 'Well-equipped Physics, Chemistry, and Biology laboratories.', icon: '🔬' },
        { name: 'Computer Lab', description: 'Modern computer lab with high-speed internet connectivity.', icon: '💻' },
        { name: 'Library', description: 'Library with academic books, reference materials, and periodicals.', icon: '📚' },
        { name: 'Sports Facilities', description: 'Indoor and outdoor sports facilities for physical development.', icon: '⚽' },
        { name: 'Auditorium', description: 'Multi-purpose auditorium for events and functions.', icon: '🎭' },
        { name: 'Cafeteria', description: 'Hygienic cafeteria serving healthy meals.', icon: '🍽️' },
        { name: 'Hostel', description: 'Residential facility for 100+ students from distant areas.', icon: '🏠' },
      ],
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      description: 'State-of-the-art facilities designed for competitive exam preparation.',
      facilities: [
        { name: 'AC Classrooms', description: 'Air-conditioned classrooms for comfortable learning environment.', icon: '❄️' },
        { name: 'Projectors', description: 'Modern projectors for visual learning and presentations.', icon: '📽️' },
        { name: 'Study Material', description: 'Comprehensive study material and notes for all courses.', icon: '📖' },
        { name: 'Test Series', description: 'Regular mock tests and assessments with detailed analysis.', icon: '📝' },
        { name: 'Doubt Sessions', description: 'Dedicated doubt clearing sessions with faculty.', icon: '❓' },
        { name: 'Library', description: 'Reference library with competitive exam books.', icon: '📚' },
        { name: 'Online Portal', description: 'Access to online learning portal with recorded lectures.', icon: '🌐' },
        { name: 'Hostel', description: 'Limited hostel facility for outstation students.', icon: '🏠' },
      ],
    },
  };

  const facility = id ? facilitiesData[id] : null;

  if (!facility) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-4">Institution Not Found</h2>
          <Link to="/institutions" className="btn-primary">Back to Institutions</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={`/institutions/${id}`} className="inline-flex items-center gap-2 text-white/80 hover:text-gold-light transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" />
            Back to Institution
          </Link>
          <p className="font-urdu text-gold-light text-xl mb-2">{facility.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Facilities</h1>
          <p className="font-urdu text-white/80 text-lg">سہولیات</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{facility.description}</p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facility.facilities.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
