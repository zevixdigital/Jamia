import { useParams, Link } from 'react-router-dom';
import { Users, ArrowLeft, BookOpen, GraduationCap, User } from 'lucide-react';

const TeachingStaff = () => {
  const { id } = useParams<{ id: string }>();

  const staffData: Record<string, {
    institution: string;
    institutionUrdu: string;
    totalStaff: string;
    qualifiedStaff: string;
    description: string;
    coverImage?: string;
    leadership?: {
      name: string;
      designation: string;
      qualification: string;
      roleOrSubject: string;
      image?: string;
    }[];
    departments: {
      name: string;
      teachers: { 
        name: string; 
        qualification: string; 
        roleOrSubject: string;
        image?: string;
      }[];
    }[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      totalStaff: '20',
      qualifiedStaff: '18+',
      description: 'Our teaching staff includes highly qualified scholars, Muftis, Qaris and experienced modern education teachers dedicated to Dars-e-Nizami, Hifz, Qir’at and 1-12th Class (English Medium).',

      // Leadership (Principal & Vice-Principal)
      leadership: [
        {
          name: 'Mohd Aarif Tauheed',
          designation: 'Principal',
          qualification: 'M.A. (Eco) & B.Ed (AMU)',
          roleOrSubject: '+91 9058840962 | aarifamu111@gmail.com',
          
        },
        {
          name: 'Mufti Mohd Suhail',
          designation: 'Vice-Principal',
          qualification: 'Alim & M.A (Urdu)',
          roleOrSubject: '+91 8057861431 | suhelrazakhan1999@gmail.com',
          
        }
      ],

      // Departments (Clean & Error-Free)
      departments: [
        {
          name: 'Dars-e-Nizami & Islamic Studies',
          teachers: [
            { 
              name: 'Molana Saleem Akhtar', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Assistant Manager | +91 9997234176 | salimaktar7450@gmail.com', 
              
            },
            { 
              name: 'Molana Mohd Saleet', 
              qualification: 'Fazil & M.A (Urdu)', 
              roleOrSubject: 'Teacher - Adab | +91 9012550383 | mohdslit50383@gmail.com', 
              
            },
            { 
              name: 'Molana Mohd Arif', 
              qualification: 'Fazil & M.A (Urdu)', 
              roleOrSubject: 'Teacher - Hadees | +91 9457275575 | abunawaz2505@gmail.com', 
              
            },
            { 
              name: 'Molana Qamar Muneer', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Teacher - Arabic | +91 9536695479 | qamarmuneer98@gmail.com', 
              
            },
            { 
              name: 'Hafiz Mohammad Tahir', 
              qualification: 'Fazil & M.A (Urdu)', 
              roleOrSubject: 'Teacher - Arabic | +91 9917788313 | mohdtahiraza0313@gmail.com', 
              
            },
            { 
              name: 'Hafiz Mohd Umruddin', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Teacher - Urdu | +91 9634878786 | mohdumruddin18@gmail.com', 
              
            }
          ],
        },
        {
          name: 'Hifz, Qir’at & Tajweed',
          teachers: [
            { 
              name: 'Qari Muzammil Husain', 
              qualification: 'Aalim (Arabic)', 
              roleOrSubject: 'Teacher - Hifz | +91 9719314254 | muzammilhussain.7860000000@gmail.com', 
              
            },
            { 
              name: 'Qari Sharif Ahmad', 
              qualification: 'Fazil (Persian)', 
              roleOrSubject: 'Teacher - Hifz | +91 7454920196', 
              
            },
            { 
              name: 'Qari Mohd Ilyas', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Teacher - Deeniyat | +91 9997885335 | qarimohdilyas786@gmail.com', 
              
            }
          ],
        },
        {
          name: 'Modern Education (1-12 English Medium)',
          teachers: [
            { 
              name: 'Mohammad Abdul Hafeez', 
              qualification: 'M.A (Education) & D.el.ed', 
              roleOrSubject: 'Teacher - English | +91 9917726702 | abdulhafiz702@gmail.com', 
              
            },
            { 
              name: 'Mohd Ayyub', 
              qualification: 'M.A (Pol. Science) & D.el.ed', 
              roleOrSubject: 'Teacher - Social Science | +91 9012050035 | ayyubmohd07869@gmail.com', 
              
            },
            { 
              name: 'Mohammad Danish', 
              qualification: 'M.Sc. (Infor. Technology)', 
              roleOrSubject: 'Teacher - Mathematics | +91 9557757380 | mohammeddanish50@gmail.com', 
              
            },
            { 
              name: 'Javed Usmani', 
              qualification: 'B.A', 
              roleOrSubject: 'Teacher - Science | +91 9837180718 | pashasakib794@gmail.com', 
              
            },
            { 
              name: 'Juned Raza', 
              qualification: 'M.A (Is.Std.) & B.Lis (AMU)', 
              roleOrSubject: 'Teacher - G.K & Computer | +91 9084638928 | junedraza03@gmail.com', 
              
            },
            { 
              name: 'Molana Meiraj Alam', 
              qualification: 'M.A (Urdu) & B.Ed.', 
              roleOrSubject: 'Teacher - English & Computer | +91 9759058843 | m.misbahi092@gmail.com', 
             
            },
            { 
              name: 'Mazhar Ali Khan', 
              qualification: 'Intermediate', 
              roleOrSubject: 'Teacher - Hindi | +91 6396731258 | mazharalikhan062@gmail.com', 
              
            }
          ],
        },
        {
          name: 'Administration & Support Staff',
          teachers: [
            { 
              name: 'Jafar Ali', 
              qualification: 'M.Com & B.Ed', 
              roleOrSubject: 'Office Executive | +91 8273923976 | jali92313@gmail.com', 
              
            },
            { 
              name: 'Hafiz Tahseen Raza', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Librarian | +91 9411291775 | tahseenraza9411@gmail.com', 
              
            }
          ],
        }
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
            { name: 'Aalima Anjum Fatima', qualification: 'Kamil (Arabic)', roleOrSubject: 'Teacher | Subject: Tafaseer' },
            { name: 'Aalima Ayesha Bi', qualification: 'Kamil (Arabic) & B.A', roleOrSubject: 'Teacher | Subject: Mantiq' },
            { name: 'Aalima Nikhat Fatima', qualification: 'Aalim', roleOrSubject: 'Teacher | Subject: Nahw' },
            { name: 'Aashiqana Barkati', qualification: 'Aalim (Arabic)', roleOrSubject: 'Teacher | Subject: Deeniyat' },
          ],
        },
        {
          name: 'Languages (Arabic, Persian & Urdu)',
          teachers: [
            { name: 'Aalima Phool Shadma', qualification: 'Kamil (Arabic) & B.A', roleOrSubject: 'Teacher | Subject: Arabic' },
            { name: 'Aalima Naziya Bi', qualification: 'Aalim & B.A', roleOrSubject: 'Teacher | Subject: Persian' },
            { name: 'Aalima Samiya Bi', qualification: 'Aalim', roleOrSubject: 'Teacher | Subject: Adab' },
            { name: 'Hafsa Barkati', qualification: 'Aalim (Arabic)', roleOrSubject: 'Teacher | Subject: Urdu' },
            { name: 'Nargis', qualification: 'B.A (Urdu)', roleOrSubject: 'Teacher | Subject: Arabic' },
          ],
        },
        {
          name: 'Modern Subjects',
          teachers: [
            { name: 'Naseem Jahan', qualification: 'M.A (English, Sociology, Political Science)', roleOrSubject: 'Teacher | Subject: English' },
            { name: 'Anam Kabeer', qualification: 'M.com (Accounts)', roleOrSubject: 'Teacher | Subject: Mathematics' },
            { name: 'Shahana', qualification: 'M.A (Political Science)', roleOrSubject: 'Teacher | Subject: Social Science' },
            { name: 'Shabeena Bi', qualification: 'M.A (Theology)', roleOrSubject: 'Teacher | Subject: General Knowledge' },
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

      {/* Cover Image */}
      {staff.coverImage && (
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <img
            src={staff.coverImage}
            alt={staff.institution}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      )}

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

          {/* Leadership Section */}
          {staff.leadership && staff.leadership.length > 0 && (
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-emerald-deep mb-6 text-center">Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {staff.leadership.map((leader, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    {leader.image && (
                      <div className="md:w-48 h-48 md:h-auto bg-emerald-deep flex items-center justify-center">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1">
                      <h3 className="font-serif text-2xl font-bold text-emerald-deep">{leader.name}</h3>
                      <p className="text-gold-primary font-semibold text-lg mt-1">{leader.designation}</p>
                      <p className="text-gray-600 mt-3">{leader.qualification}</p>
                      <div className="mt-4 bg-emerald-50 p-3 rounded-lg text-sm text-emerald-700">
                        {leader.roleOrSubject}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                      <div key={tIndex} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          {teacher.image ? (
                            <img
                              src={teacher.image}
                              alt={teacher.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200 flex-shrink-0"
                            />
                          ) : (
                            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-8 h-8 text-emerald-deep" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium text-emerald-deep leading-tight text-lg">{teacher.name}</h4>
                            <p className="text-gray-500 text-sm mt-1">{teacher.qualification}</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-white px-4 py-3 rounded-lg border border-gray-100 text-xs font-medium text-emerald-700 break-words">
                          {teacher.roleOrSubject}
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