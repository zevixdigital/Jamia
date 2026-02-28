import { useParams, Navigate } from 'react-router-dom';
import { User, Award, Users } from 'lucide-react';

const Committee = () => {
  const { type } = useParams<{ type: string }>();

  const committeeData: Record<string, {
    title: string;
    titleUrdu: string;
    description: string;
    members: {
      name: string;
      designation: string;
      qualification?: string;
      image?: string;
    }[];
  }> = {
    'managing': {
      title: 'Managing Committee',
      titleUrdu: 'منتظمہ کمیٹی',
      description: 'The Managing Committee is responsible for the day-to-day administration and strategic planning of Darul Uloom Jamia Razvia. Members are elected to oversee the smooth functioning of all institutional activities.',
      members: [
        {
          name: 'Hafiz Mohammad Zafruddin Barkaati',
          designation: 'President / Manager (Mohtamim)',
          qualification: 'Islamic Scholar, Management Expert',
        },
        {
          name: 'Maulana Mohammad Ahmad Qadri',
          designation: 'Vice President',
          qualification: 'Senior Faculty Member',
        },
        {
          name: 'Janab Mohammad Aslam',
          designation: 'Secretary',
          qualification: 'Administrative Experience: 20+ years',
        },
        {
          name: 'Janab Mohammad Irfan',
          designation: 'Joint Secretary',
          qualification: 'Finance & Administration',
        },
        {
          name: 'Janab Mohammad Rashid',
          designation: 'Treasurer',
          qualification: 'Chartered Accountant',
        },
        {
          name: 'Maulana Mohammad Salman',
          designation: 'Member',
          qualification: 'Education Department Head',
        },
        {
          name: 'Janab Mohammad Imran',
          designation: 'Member',
          qualification: 'Community Representative',
        },
        {
          name: 'Janab Mohammad Farhan',
          designation: 'Member',
          qualification: 'Youth Representative',
        },
      ],
    },
    'advisory': {
      title: 'Advisory Committee',
      titleUrdu: 'مشاورتی کمیٹی',
      description: 'The Advisory Committee comprises esteemed Islamic scholars and community leaders who provide guidance on religious, educational, and ethical matters. Their wisdom helps maintain the institution\'s commitment to authentic Islamic teachings.',
      members: [
        {
          name: 'Mufti Mohammad Akhtar Raza Khan',
          designation: 'Chief Advisor',
          qualification: 'Grand Mufti, Islamic Jurisprudence Expert',
        },
        {
          name: 'Maulana Mohammad Tahseen Raza Khan',
          designation: 'Religious Advisor',
          qualification: 'Hadith Scholar, Author',
        },
        {
          name: 'Maulana Mohammad Asjad Raza Khan',
          designation: 'Educational Advisor',
          qualification: 'Former Principal, Darul Uloom',
        },
        {
          name: 'Dr. Mohammad Shahabuddin',
          designation: 'Modern Education Advisor',
          qualification: 'Ph.D. in Education, University Professor',
        },
        {
          name: 'Maulana Mohammad Mumtaz Ahmad',
          designation: 'Shariah Advisor',
          qualification: 'Fiqh Expert, Qazi',
        },
        {
          name: 'Janab Mohammad Haneef',
          designation: 'Community Advisor',
          qualification: 'Social Worker, Philanthropist',
        },
        {
          name: 'Maulana Mohammad Naeem',
          designation: 'Youth Affairs Advisor',
          qualification: 'Youth Counselor, Motivational Speaker',
        },
        {
          name: 'Dr. Mohammad Saleem',
          designation: 'Health & Welfare Advisor',
          qualification: 'Medical Doctor, Public Health Expert',
        },
      ],
    },
  };

  const committee = type ? committeeData[type] : null;

  if (!committee) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">{committee.titleUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{committee.title}</h1>
          <p className="text-white/80 max-w-3xl mx-auto">{committee.description}</p>
        </div>
      </div>

      {/* Committee Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Members (First 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {committee.members.slice(0, 2).map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative h-48 bg-emerald-deep flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold-primary rounded-full flex items-center justify-center">
                    {type === 'managing' ? (
                      <User className="w-12 h-12 text-white" />
                    ) : (
                      <Award className="w-12 h-12 text-white" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-deep to-transparent p-4">
                    <p className="text-gold-light font-urdu text-sm">
                      {type === 'managing' ? 'منتظم' : 'مشیر'}
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-emerald-deep mb-1">{member.name}</h3>
                  <p className="text-gold-primary font-medium mb-2">{member.designation}</p>
                  {member.qualification && (
                    <p className="text-gray-600 text-sm">{member.qualification}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Other Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.members.slice(2).map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover text-center">
                <div className="w-16 h-16 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-1">{member.name}</h3>
                <p className="text-gold-primary text-sm font-medium mb-2">{member.designation}</p>
                {member.qualification && (
                  <p className="text-gray-600 text-xs">{member.qualification}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Info */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-4">
              About the {committee.title}
            </h2>
            <div className="prose max-w-none text-gray-600">
              {type === 'managing' ? (
                <>
                  <p className="mb-4">
                    The Managing Committee of Darul Uloom Jamia Razvia is elected by the members of 
                    the Management Society. The committee meets regularly to discuss and decide on 
                    matters related to the administration, finance, and development of the institution.
                  </p>
                  <p className="mb-4">
                    Key responsibilities of the Managing Committee include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Overseeing day-to-day operations of all institutions</li>
                    <li>Financial planning and budget allocation</li>
                    <li>Appointment and supervision of teaching and non-teaching staff</li>
                    <li>Infrastructure development and maintenance</li>
                    <li>Admission policies and student welfare</li>
                    <li>Community outreach and fundraising</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    The Advisory Committee comprises respected Islamic scholars and community leaders 
                    who provide valuable guidance on religious, educational, and ethical matters. Their 
                    expertise ensures that the institution maintains its commitment to authentic 
                    Islamic teachings while adapting to contemporary challenges.
                  </p>
                  <p className="mb-4">
                    The Advisory Committee's role includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Guidance on religious curriculum and teachings</li>
                    <li>Fatwa and religious consultation</li>
                    <li>Ethical and moral guidance for the institution</li>
                    <li>Review of educational policies from an Islamic perspective</li>
                    <li>Community relations and public representation</li>
                    <li>Long-term vision and strategic planning</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
