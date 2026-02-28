import { useParams, Link } from 'react-router-dom';
import { Users, ArrowLeft, Award, BookOpen, GraduationCap } from 'lucide-react';

const TeachingStaff = () => {
  const { id } = useParams<{ id: string }>();

  const staffData: Record<string, {
    institution: string;
    institutionUrdu: string;
    totalStaff: string;
    qualifiedStaff: string;
    description: string;
    departments: {
      name: string;
      teachers: { name: string; qualification: string; roleOrSubject: string }[];
    }[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      totalStaff: '45+',
      qualifiedStaff: '35+',
      description: 'Our teaching staff includes graduates from prestigious institutions like Darul Uloom Deoband, Nadwatul Ulama, and other renowned Islamic universities.',
      departments: [
        {
          name: 'Quran & Tajweed',
          teachers: [
            { name: 'Qari Mohammad Ahmad', qualification: 'Ijazah in Qiraat', roleOrSubject: 'Experience: 20 years' },
            { name: 'Qari Mohammad Yusuf', qualification: 'Hafiz & Qari', roleOrSubject: 'Experience: 15 years' },
            { name: 'Maulana Mohammad Imran', qualification: 'Masters in Tajweed', roleOrSubject: 'Experience: 12 years' },
          ],
        },
        {
          name: 'Hadith Department',
          teachers: [
            { name: 'Maulana Mohammad Tahir', qualification: 'Fazil-e-Hadith', roleOrSubject: 'Experience: 25 years' },
            { name: 'Maulana Mohammad Asad', qualification: 'M.A. Hadith', roleOrSubject: 'Experience: 18 years' },
          ],
        },
        {
          name: 'Fiqh & Islamic Law',
          teachers: [
            { name: 'Mufti Mohammad Rashid', qualification: 'Mufti, Darul Uloom', roleOrSubject: 'Experience: 22 years' },
            { name: 'Maulana Mohammad Haneef', qualification: 'Fazil-e-Fiqh', roleOrSubject: 'Experience: 16 years' },
          ],
        },
        {
          name: 'Arabic Language',
          teachers: [
            { name: 'Maulana Mohammad Salman', qualification: 'M.A. Arabic', roleOrSubject: 'Experience: 14 years' },
            { name: 'Maulana Mohammad Farooq', qualification: 'Al-Azhar Graduate', roleOrSubject: 'Experience: 10 years' },
          ],
        },
      ],
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat Barkate Fatima',
      institutionUrdu: 'مدرسہ جنت البنات',
      totalStaff: '16',
      qualifiedStaff: '15+',
      description: 'Female teaching staff with qualifications from renowned Islamic and modern institutions, dedicated to educating our sisters.',
      departments: [
        {
          name: 'Administration',
          teachers: [
            { name: 'Shaista Bi', qualification: 'M.A (English)', roleOrSubject: 'Principal | Subject: Science' },
            { name: 'Aalima Muniba Bi', qualification: 'Kamil (Arabic)', roleOrSubject: 'Vice Principal | Subject: Hadees' },
            { name: 'Ghazala Naaz', qualification: 'M.A (History)', roleOrSubject: 'Office Attendant' },
          ],
        },
        {
          name: 'Islamic Studies & Theology',
          teachers: [
            { name: 'Aalima Anjum Fatima', qualification: 'Kamil (Arabic)', roleOrSubject: 'Subject: Tafaseer' },
            { name: 'Aalima Ayesha Bi', qualification: 'Kamil (Arabic) & B.A', roleOrSubject: 'Subject: Mantiq' },
            { name: 'Aalima Nikhat Fatima', qualification: 'Aalim', roleOrSubject: 'Subject: Nahw' },
            { name: 'Aashiqana Barkati', qualification: 'Aalim (Arabic)', roleOrSubject: 'Subject: Deeniyat' },
          ],
        },
        {
          name: 'Languages (Arabic, Persian & Urdu)',
          teachers: [
            { name: 'Aalima Phool Shadma', qualification: 'Kamil (Arabic) & B.A', roleOrSubject: 'Subject: Arabic' },
            { name: 'Aalima Naziya Bi', qualification: 'Aalim & B.A', roleOrSubject: 'Subject: Persian' },
            { name: 'Aalima Samiya Bi', qualification: 'Aalim', roleOrSubject: 'Subject: Adab' },
            { name: 'Hafsa Barkati', qualification: 'Aalim (Arabic)', roleOrSubject: 'Subject: Urdu' },
            { name: 'Nargis', qualification: 'B.A (Urdu)', roleOrSubject: 'Subject: Arabic' },
          ],
        },
        {
          name: 'Modern Subjects',
          teachers: [
            { name: 'Naseem Jahan', qualification: 'M.A (English, Sociology, Pol. Science)', roleOrSubject: 'Subject: English' },
            { name: 'Anam Kabeer', qualification: 'M.com (Accounts)', roleOrSubject: 'Subject: Mathematics' },
            { name: 'Shahana', qualification: 'M.A (Political Science)', roleOrSubject: 'Subject: Social Science' },
            { name: 'Shabeena Bi', qualification: 'M.A (Theology)', roleOrSubject: 'Subject: General Knowledge' },
          ],
        },
      ],
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      totalStaff: '5+',
      qualifiedStaff: '5',
      description: 'Highly qualified teachers committed to academic excellence in modern and scientific education.',
      departments: [
        {
          name: 'Administration & Leadership',
          teachers: [
            { name: 'Dr. Fatima Khan', qualification: 'Ph.D (Education)', roleOrSubject: 'Principal | Educational Management' },
            { name: 'Mrs. Ayesha Siddiqui', qualification: 'M.A (English)', roleOrSubject: 'Vice Principal | English Literature' },
          ],
        },
        {
          name: 'Science & Mathematics',
          teachers: [
            { name: 'Mrs. Zainab Ahmed', qualification: 'M.Sc (Mathematics)', roleOrSubject: 'Subject: Mathematics' },
            { name: 'Mrs. Rukhsar Begum', qualification: 'M.Sc (Physics)', roleOrSubject: 'Subject: Physics' },
            { name: 'Mrs. Sana Parveen', qualification: 'M.Sc (Chemistry)', roleOrSubject: 'Subject: Chemistry' },
          ],
        },
      ],
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      totalStaff: '4+',
      qualifiedStaff: '4',
      description: 'Experienced faculty members who are subject matter experts preparing students for competitive examinations.',
      departments: [
        {
          name: 'Administration',
          teachers: [
            { name: 'Prof. Mohammad Saleem', qualification: 'M.A, B.Ed', roleOrSubject: 'Director | Competitive Exams' },
          ],
        },
        {
          name: 'Core Faculty',
          teachers: [
            { name: 'Mr. Arif Khan', qualification: 'M.A (English)', roleOrSubject: 'Senior Faculty | Subject: English' },
            { name: 'Mr. Raheem Ahmed', qualification: 'M.Sc (Mathematics)', roleOrSubject: 'Faculty | Subject: Mathematics' },
            { name: 'Mrs. Nazia Parveen', qualification: 'M.A (History)', roleOrSubject: 'Faculty | Subject: General Studies' },
          ],
        },
      ],
    },
  };

  const staff = id ? staffData[id] : null;

  if (!staff) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{staff.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Teaching Staff</h1>
          <p className="font-urdu text-white/80 text-lg mt-2">تدریسی عملہ</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="w-10 h-10 text-emerald-deep mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-deep">{staff.totalStaff}</p>
              <p className="text-gray-600">Total Staff</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <GraduationCap className="w-10 h-10 text-gold-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-gold-primary">{staff.qualifiedStaff}</p>
              <p className="text-gray-600">Highly Qualified</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="w-10 h-10 text-emerald-deep mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-deep">{staff.departments.length}</p>
              <p className="text-gray-600">Departments</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{staff.description}</p>
          </div>

          {/* Departments */}
          <div className="space-y-8">
            {staff.departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-emerald-deep text-white px-6 py-4">
                  <h3 className="font-serif text-xl font-bold">{dept.name}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.teachers.map((teacher, tIndex) => (
                      <div key={tIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-2">
                          <Award className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-emerald-deep leading-tight">{teacher.name}</h4>
                            <p className="text-gray-500 text-sm mt-1">{teacher.qualification}</p>
                          </div>
                        </div>
                        <div className="bg-white px-3 py-2 rounded mt-3 border border-gray-100">
                          <p className="text-emerald-deep/80 font-medium text-xs">{teacher.roleOrSubject}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingStaff;