import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, GraduationCap, MapPin, BookOpen, Trophy } from 'lucide-react';

const Students = () => {
  const { id } = useParams<{ id: string }>();

  const studentsData: Record<string, {
    institution: string;
    institutionUrdu: string;
    totalStudents: string;
    description: string;
    demographics: { label: string; value: string; icon: any }[];
    achievements: string[];
    activities: string[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      totalStudents: '1200+',
      description: 'Students from various states across India and abroad, creating a diverse learning environment focused on Islamic education.',
      demographics: [
        { label: 'From UP', value: '60%', icon: MapPin },
        { label: 'From Other States', value: '30%', icon: MapPin },
        { label: 'International', value: '10%', icon: MapPin },
        { label: 'Hostel Residents', value: '200+', icon: Users },
        { label: 'Day Scholars', value: '1000+', icon: Users },
      ],
      achievements: [
        '500+ Huffaz graduated in last 10 years',
        '200+ students pursuing higher Islamic studies',
        '50+ students teaching in various madrasas',
        'Regular winners in Quran competitions',
      ],
      activities: [
        'Daily Quran recitation sessions',
        'Weekly Hadith study circles',
        'Monthly debates and speeches',
        'Sports tournaments',
        'Educational tours',
        'Community service programs',
      ],
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      totalStudents: '800+',
      description: 'Girls from various backgrounds pursuing Islamic education in a safe and nurturing environment.',
      demographics: [
        { label: 'From UP', value: '65%', icon: MapPin },
        { label: 'From Other States', value: '25%', icon: MapPin },
        { label: 'International', value: '10%', icon: MapPin },
        { label: 'Hostel Residents', value: '150+', icon: Users },
        { label: 'Day Scholars', value: '650+', icon: Users },
      ],
      achievements: [
        '300+ Hafizat graduated',
        '150+ students became Quran teachers',
        'Regular participation in Islamic events',
        'Excellence in academic results',
      ],
      activities: [
        'Quran learning sessions',
        'Islamic craft classes',
        'Cooking and home management training',
        'Sports and physical activities',
        'Educational seminars',
        'Community visits',
      ],
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      totalStudents: '500+',
      description: 'Girls pursuing intermediate education with excellent academic results and all-round development.',
      demographics: [
        { label: 'Science Stream', value: '40%', icon: BookOpen },
        { label: 'Arts Stream', value: '35%', icon: BookOpen },
        { label: 'Commerce Stream', value: '25%', icon: BookOpen },
        { label: 'Hostel Residents', value: '100+', icon: Users },
        { label: 'Day Scholars', value: '400+', icon: Users },
      ],
      achievements: [
        '95%+ pass percentage in board exams',
        '50+ students in merit list',
        'Excellence in sports competitions',
        'Winners in debate competitions',
      ],
      activities: [
        'Science exhibitions',
        'Debate and quiz competitions',
        'Sports tournaments',
        'Cultural programs',
        'Career counseling sessions',
        'Study tours',
      ],
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      totalStudents: '300+',
      description: 'Students preparing for various competitive examinations with good success rate.',
      demographics: [
        { label: 'NEET Aspirants', value: '40%', icon: BookOpen },
        { label: 'JEE Aspirants', value: '35%', icon: BookOpen },
        { label: 'Foundation Course', value: '25%', icon: BookOpen },
        { label: 'Hostel Residents', value: '50+', icon: Users },
        { label: 'Day Scholars', value: '250+', icon: Users },
      ],
      achievements: [
        '100+ students selected in medical colleges',
        '80+ students in engineering colleges',
        '90%+ success rate in competitive exams',
        'Top ranks in state-level exams',
      ],
      activities: [
        'Regular mock tests',
        'Doubt clearing sessions',
        'Study group discussions',
        'Motivational seminars',
        'Parent-teacher meetings',
        'Result analysis sessions',
      ],
    },
  };

  const students = id ? studentsData[id] : null;

  if (!students) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{students.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Students</h1>
          <p className="font-urdu text-white/80 text-lg">طلباء</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-12">
            <Users className="w-16 h-16 text-emerald-deep mx-auto mb-4" />
            <p className="text-5xl font-bold text-emerald-deep mb-2">{students.totalStudents}</p>
            <p className="text-gray-600 text-lg">Total Students</p>
          </div>

          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{students.description}</p>
          </div>

          {/* Demographics */}
          <div className="mb-12">
            <h2 className="section-title mb-6">Student Demographics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.demographics.map((demo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center card-hover">
                  <demo.icon className="w-10 h-10 text-gold-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-emerald-deep">{demo.value}</p>
                  <p className="text-gray-600">{demo.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-gold-primary" />
                <h2 className="font-serif text-xl font-bold text-emerald-deep">Student Achievements</h2>
              </div>
              <ul className="space-y-3">
                {students.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-emerald-deep text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-emerald-deep" />
                <h2 className="font-serif text-xl font-bold text-emerald-deep">Student Activities</h2>
              </div>
              <ul className="space-y-3">
                {students.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
