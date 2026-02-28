import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Home, Users, Utensils, Shield, Clock } from 'lucide-react';

const Hostel = () => {
  const { id } = useParams<{ id: string }>();

  const hostelData: Record<string, {
    institution: string;
    institutionUrdu: string;
    capacity: string;
    description: string;
    facilities: { name: string; description: string; icon: any }[];
    rules: string[];
    fee: string;
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      capacity: '200+',
      description: 'Separate hostel facility with comfortable rooms, mess facility, and 24/7 supervision for outstation students.',
      facilities: [
        { name: 'Spacious Rooms', description: 'Shared rooms with 4-6 students, beds, cupboards, and study tables', icon: Home },
        { name: 'Mess Facility', description: 'Nutritious meals served 3 times a day', icon: Utensils },
        { name: '24/7 Security', description: 'Security guards and CCTV surveillance', icon: Shield },
        { name: 'Study Hours', description: 'Dedicated study hours with supervision', icon: Clock },
        { name: 'Recreation Area', description: 'Common room for indoor games and TV', icon: Users },
        { name: 'Laundry', description: 'Laundry facility available for students', icon: Home },
      ],
      rules: [
        'Students must return to hostel by Maghrib',
        'No mobile phones allowed without permission',
        'Visitors allowed only on Sundays',
        'Maintain cleanliness and discipline',
        'Follow the daily schedule strictly',
        'No outside food without permission',
      ],
      fee: '₹2,500 per month (including food)',
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      capacity: '150+',
      description: 'Safe and comfortable residential facility with female staff supervision for girls.',
      facilities: [
        { name: 'Safe Rooms', description: 'Shared rooms with female room attendants', icon: Home },
        { name: 'Mess', description: 'Home-style cooking with hygienic food', icon: Utensils },
        { name: 'Female Supervisors', description: '24/7 female staff for supervision', icon: Shield },
        { name: 'Study Area', description: 'Quiet study area for evening studies', icon: Clock },
        { name: 'Craft Room', description: 'Space for sewing and craft activities', icon: Users },
      ],
      rules: [
        'Strictly no male visitors',
        'Parents can visit on designated days',
        'Mobile phones for limited hours only',
        'Follow hostel schedule',
        'Maintain Islamic dress code',
        'Participate in household chores',
      ],
      fee: '₹2,000 per month (including food)',
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      capacity: '100+',
      description: 'Residential facility for students from distant areas with modern amenities.',
      facilities: [
        { name: 'Modern Rooms', description: 'Well-furnished rooms with attached bathrooms', icon: Home },
        { name: 'Dining Hall', description: 'Spacious dining hall with nutritious meals', icon: Utensils },
        { name: 'Security', description: 'Female security staff and CCTV', icon: Shield },
        { name: 'Study Hall', description: 'Dedicated study hall with library access', icon: Clock },
        { name: 'Common Room', description: 'TV and indoor games facility', icon: Users },
      ],
      rules: [
        'Entry allowed only with ID card',
        'Gate closing time: 6:00 PM',
        'Parents can visit on weekends',
        'No outside stay without permission',
        'Maintain room cleanliness',
      ],
      fee: '₹3,000 per month (including food)',
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      capacity: '50+',
      description: 'Limited hostel facility for outstation students preparing for competitive exams.',
      facilities: [
        { name: 'Study Rooms', description: 'Rooms designed for focused study', icon: Home },
        { name: 'Mess', description: 'Simple and nutritious meals', icon: Utensils },
        { name: 'Security', description: '24/7 security and supervision', icon: Shield },
        { name: 'Extended Study Hours', description: 'Study allowed till late night', icon: Clock },
      ],
      rules: [
        'Priority for outstation students',
        'Study hours must be maintained',
        'No disturbance to other students',
        'Limited seats available',
      ],
      fee: '₹3,500 per month (including food)',
    },
  };

  const hostel = id ? hostelData[id] : null;

  if (!hostel) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{hostel.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Hostel</h1>
          <p className="font-urdu text-white/80 text-lg"> hostel</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="w-10 h-10 text-emerald-deep mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-deep">{hostel.capacity}</p>
              <p className="text-gray-600">Student Capacity</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Home className="w-10 h-10 text-gold-primary mx-auto mb-3" />
              <p className="text-xl font-bold text-gold-primary">{hostel.fee}</p>
              <p className="text-gray-600">Monthly Fee</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{hostel.description}</p>
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="section-title mb-6">Hostel Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostel.facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <facility.icon className="w-10 h-10 text-emerald-deep mb-4" />
                  <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="section-title mb-6">Hostel Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hostel.rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
