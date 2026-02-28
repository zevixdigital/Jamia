import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Clock, CheckCircle } from 'lucide-react';

const Syllabus = () => {
  const { id } = useParams<{ id: string }>();

  const syllabusData: Record<string, {
    institution: string;
    institutionUrdu: string;
    description: string;
    programs: {
      name: string;
      nameUrdu: string;
      duration: string;
      subjects: string[];
    }[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      description: 'Comprehensive Islamic education curriculum following the traditional Dars-e-Nizami system with modern adaptations.',
      programs: [
        {
          name: 'Diniyat Section (Preparatory)',
          nameUrdu: 'دینیات سیکشن',
          duration: '3 Years',
          subjects: [
            'Nazira Quran with Tajweed',
            'Basic Arabic Grammar (Sarf & Nahv)',
            'Urdu Language & Literature',
            'Islamic Etiquettes & Manners',
            'Basic Fiqh (Worship rules)',
            'Seerah of Prophet Muhammad (PBUH)',
            'Islamic History basics',
          ],
        },
        {
          name: 'Hifz Section',
          nameUrdu: 'حفظ سیکشن',
          duration: '3-4 Years',
          subjects: [
            'Complete Quran Memorization',
            'Tajweed Rules',
            'Revision & Perfection',
            'Basic Islamic Studies',
            'Arabic Language basics',
          ],
        },
        {
          name: 'Aalimiyat Section',
          nameUrdu: 'عالمیات سیکشن',
          duration: '8 Years',
          subjects: [
            'Advanced Arabic Grammar (Sarf & Nahv)',
            'Logic (Mantiq)',
            'Islamic Philosophy (Falsafa)',
            'Principles of Fiqh (Usul al-Fiqh)',
            'Comparative Fiqh',
            'Hadith Studies (Sihah Sitta)',
            'Principles of Hadith (Usul al-Hadith)',
            'Tafseer of Quran',
            'Principles of Tafseer',
            'Islamic History & Seerah',
            'Arabic Literature & Poetry',
          ],
        },
      ],
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      description: 'Islamic education curriculum specially designed for girls, focusing on both religious and practical knowledge.',
      programs: [
        {
          name: 'Preparatory Course',
          nameUrdu: 'تیاری کورس',
          duration: '2 Years',
          subjects: [
            'Nazira Quran with Tajweed',
            'Basic Arabic Reading',
            'Urdu Language',
            'Islamic Etiquettes for Girls',
            'Basic Fiqh for Women',
          ],
        },
        {
          name: 'Hifz Course',
          nameUrdu: 'حفظ کورس',
          duration: '3-4 Years',
          subjects: [
            'Complete Quran Memorization',
            'Tajweed Rules',
            'Revision & Perfection',
          ],
        },
        {
          name: 'Alimah Course',
          nameUrdu: 'عالمہ کورس',
          duration: '6 Years',
          subjects: [
            'Arabic Grammar (Sarf & Nahv)',
            'Fiqh for Women',
            'Hadith Studies',
            'Tafseer of Quran',
            'Islamic History',
            'Arabic Literature',
            'Home Management',
            'Cooking & Sewing',
            'Child Upbringing in Islam',
          ],
        },
      ],
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      description: 'State board curriculum for classes 6-12 with additional Islamic studies and moral education.',
      programs: [
        {
          name: 'Middle School (Classes 6-8)',
          nameUrdu: 'مڈل اسکول',
          duration: '3 Years',
          subjects: [
            'Hindi Language & Literature',
            'English Language & Literature',
            'Mathematics',
            'Science',
            'Social Science',
            'Computer Education',
            'Islamic Studies',
            'Moral Education',
            'Physical Education',
          ],
        },
        {
          name: 'High School (Classes 9-10)',
          nameUrdu: 'ہائی اسکول',
          duration: '2 Years',
          subjects: [
            'Hindi',
            'English',
            'Mathematics',
            'Science (Physics, Chemistry, Biology)',
            'Social Science',
            'Computer Applications',
            'Islamic Studies',
          ],
        },
        {
          name: 'Intermediate (Classes 11-12) - Science',
          nameUrdu: 'انٹرمیڈیٹ - سائنس',
          duration: '2 Years',
          subjects: [
            'Physics',
            'Chemistry',
            'Biology/Mathematics',
            'English',
            'Hindi/Urdu',
          ],
        },
        {
          name: 'Intermediate (Classes 11-12) - Arts',
          nameUrdu: 'انٹرمیڈیٹ - آرٹس',
          duration: '2 Years',
          subjects: [
            'History',
            'Geography',
            'Political Science',
            'Economics',
            'English',
            'Hindi/Urdu',
          ],
        },
      ],
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      description: 'Comprehensive coaching curriculum designed for competitive examination preparation.',
      programs: [
        {
          name: 'NEET Preparation',
          nameUrdu: 'نیٹ تیاری',
          duration: '1-2 Years',
          subjects: [
            'Physics (Class 11-12 + Advanced)',
            'Chemistry (Organic, Inorganic, Physical)',
            'Biology (Botany & Zoology)',
            'Regular Mock Tests',
            'Previous Year Paper Analysis',
          ],
        },
        {
          name: 'JEE Preparation',
          nameUrdu: 'جے ای ای تیاری',
          duration: '1-2 Years',
          subjects: [
            'Physics (Mechanics, Electromagnetism, etc.)',
            'Chemistry (All branches)',
            'Mathematics (Algebra, Calculus, Geometry)',
            'Problem Solving Sessions',
            'Mock Tests & Analysis',
          ],
        },
        {
          name: 'Foundation Course (Classes 9-10)',
          nameUrdu: 'فاؤنڈیشن کورس',
          duration: '2 Years',
          subjects: [
            'Mathematics Foundation',
            'Science Foundation',
            'Logical Reasoning',
            'Mental Ability',
            'Olympiad Preparation',
          ],
        },
        {
          name: 'SSC/Banking Preparation',
          nameUrdu: 'ایس ایس سی/بینکنگ تیاری',
          duration: '6-12 Months',
          subjects: [
            'Quantitative Aptitude',
            'Reasoning Ability',
            'English Language',
            'General Awareness',
            'Computer Knowledge',
          ],
        },
      ],
    },
  };

  const syllabus = id ? syllabusData[id] : null;

  if (!syllabus) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{syllabus.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Syllabus</h1>
          <p className="font-urdu text-white/80 text-lg">نصاب</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{syllabus.description}</p>
          </div>

          {/* Programs */}
          <div className="space-y-8">
            {syllabus.programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-emerald-deep text-white px-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl font-bold">{program.name}</h3>
                      <p className="font-urdu text-gold-light">{program.nameUrdu}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {program.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gold-primary" />
                    Subjects / مضامین
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.subjects.map((subject, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-deep flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Note */}
          <div className="mt-12 bg-gold-light/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-gold-dark" />
              <h3 className="font-serif text-lg font-bold text-emerald-deep">Download Detailed Syllabus</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For detailed syllabus including topic-wise breakdown, exam patterns, and study materials, 
              please download the complete syllabus PDF from our downloads section.
            </p>
            <Link to="/downloads" className="btn-primary inline-flex items-center gap-2">
              Go to Downloads
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
