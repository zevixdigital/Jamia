import { useParams, Link } from 'react-router-dom';
import { Users, ArrowLeft, Award, BookOpen, GraduationCap, User } from 'lucide-react';

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
      totalStaff: '45+',
      qualifiedStaff: '35+',
      coverImage: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg',
      description: 'Our teaching staff includes highly qualified scholars, Muftis, Qaris and experienced modern education teachers dedicated to Dars-e-Nizami, Hifz, Qir’at and 1-12th Class (English Medium).',

      // Leadership (Principal & Vice-Principal)
      leadership: [
        {
          name: 'Mr. Mohd Arif',
          designation: 'Principal',
          qualification: 'B.Ed. (AMU), NET Qualified',
          roleOrSubject: '5+ Years Exp. | +91 9058840962',
          image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg'
        },
        {
          name: 'Mufti Mohd Suhail',
          designation: 'Vice-Principal',
          qualification: 'Alim & M.A (Urdu)',
          roleOrSubject: '3+ Years Exp. | +91 8057861431',
          image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg'
        }
      ],

      // Departments (sab data bilkul exact + image)
      departments: [
        {
          name: 'Dars-e-Nizami & Islamic Studies',
          teachers: [
            { 
              name: 'Molana Saleem Akhtar Misbahi', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Teacher | 20+ Years Exp. | +91 9997234176', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Molana Mohd Saleet Misbah', 
              qualification: 'Fazil & M.A (Urdu)', 
              roleOrSubject: 'Teacher | 10+ Years Exp. | +91 9012550383', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Molana Mohd Arif', 
              qualification: 'Fazil & M.A. (Urdu)', 
              roleOrSubject: 'Teacher | 7+ Years Exp. | +91 9457275575', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Molana Qamar Muneer', 
              qualification: 'Fazil', 
              roleOrSubject: 'Teacher | +91 9536695479', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Molana Meiraj Alam', 
              qualification: 'M.A (Urdu) B.Ed', 
              roleOrSubject: 'Teacher | 2+ Years Exp. | +91 9759058843', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Hafiz Mohammad Tahir', 
              qualification: 'Fazil & M.A. (Urdu)', 
              roleOrSubject: 'Teacher | 16+ Years Exp. | +91 9917788313', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Hafiz Mohd Umruddin', 
              qualification: 'Fazil', 
              roleOrSubject: 'Teacher | 16+ Years Exp. | +91 9634878786', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            }
          ],
        },
        {
          name: 'Hifz, Qir’at & Tajweed',
          teachers: [
            { 
              name: 'Qari Muzammil Husain', 
              qualification: 'Alim', 
              roleOrSubject: 'Qari / Teacher | 43+ Years Exp. | +91 9719314254', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Qari Sharif Ahmad', 
              qualification: 'Fazil', 
              roleOrSubject: 'Qari / Teacher | 20+ Years Exp. | +91 7454920196', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Qari Mohd Ilyas', 
              qualification: 'Fazil', 
              roleOrSubject: 'Qari / Teacher | 25+ Years Exp. | +91 9997885335', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            }
          ],
        },
        {
          name: 'Modern Education (1-12 English Medium)',
          teachers: [
            { 
              name: 'Abdul Hafeez', 
              qualification: 'M.A. (Edu.) & D.El.Ed', 
              roleOrSubject: 'Teacher | 12+ Years Exp. | +91 9917726702', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Mohd Ayyub', 
              qualification: 'M.A. (Pol. Scie.) & D.El.Ed', 
              roleOrSubject: 'Teacher | 12+ Years Exp. | +91 9012050035', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Mohammad Danish', 
              qualification: 'M.Sc. (I.T)', 
              roleOrSubject: 'IT Teacher | 8+ Years Exp. | +91 9557757380', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Javed Usmani', 
              qualification: 'B.A (Arts)', 
              roleOrSubject: 'Teacher | 2+ Years Exp. | +91 9837180718', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Juned Raza', 
              qualification: 'M.A (Islamic Std.) & B.lis (AMU)', 
              roleOrSubject: 'Teacher | 2+ Years Exp. | +91 9084638928', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            }
          ],
        },
        {
          name: 'Administration & Support Staff',
          teachers: [
            { 
              name: 'Mazhar Ali Khan', 
              qualification: 'Intermediate', 
              roleOrSubject: 'Staff Member | 30+ Years Exp. | +91 6396731258', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Jafar Ali', 
              qualification: 'M.com & B.Ed.', 
              roleOrSubject: 'Office Executive | +91 8273923976', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
            },
            { 
              name: 'Hafiz Tahseen Raza', 
              qualification: 'Fazil (Adab)', 
              roleOrSubject: 'Librarian | +91 9411291775', 
              image: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400260/WhatsApp_Image_2025-10-22_at_18.59.50_3f528170_adu2uf.jpg' 
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

      {/* Cover Image (sirf madarsa-darul-loom ke liye) */}
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

          {/* Leadership Section (sirf madarsa-darul-loom ke liye) */}
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
                        <div className="mt-4 bg-white px-4 py-3 rounded-lg border border-gray-100 text-xs font-medium text-emerald-700">
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