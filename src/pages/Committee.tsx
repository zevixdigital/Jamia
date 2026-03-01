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
      contact?: string;
      image?: string;
    }[];
  }> = {
    'managing': {
      title: 'Managing Committee',
      titleUrdu: 'منتظمہ کمیٹی',
      description: 'The dedicated team leading Darul Uloom Jamia Razvia Management Society towards excellence in Islamic and modern education',
      members: [
        {
          name: 'Hafiz Mohammad Zafruddin Barkaati',
          designation: 'Manager',
          contact: 'manager.dujr@gmail.com | +91 9756733334',
        },
        {
          name: 'Haji Ameer Ahmad',
          designation: 'President',
          contact: '+91 9520177316',
        },
        {
          name: 'Prof. (Dr.) Tofeeq Aalam',
          designation: 'Vice-President/CEO',
          contact: 'tofeeq.aalam@gmail.com | +91 9058016190',
        },
        {
          name: 'Haji Zahoor Ahmad',
          designation: 'Secretary',
          contact: '+91 9412646396',
        },
        {
          name: 'Haseel Ahmad',
          designation: 'Treasurer',
          contact: '+91 9412667488',
        },
      ],
    },
    'advisory': {
      title: 'Advisory Committee',
      titleUrdu: 'مشاورتی کمیٹی',
      description: 'Distinguished scholars and experts providing strategic guidance and wisdom to our institution',
      members: [
        {
          name: 'Maulana Shah Ahmed Raza Qadri',
          designation: 'Chief Advisor',
          qualification: 'Islamic Jurisprudence',
          contact: 'advisor1@jrdu.com | +91-2567-252270',
        },
        {
          name: 'Dr. Mohammad Aslam',
          designation: 'Academic Advisor',
          qualification: 'Modern Education & Research',
          contact: 'advisor2@jrdu.com | +91-2567-252271',
        },
        {
          name: 'Maulana Fazlur Rahman',
          designation: 'Religious Affairs Advisor',
          qualification: 'Hadith & Tafseer',
          contact: 'advisor3@jrdu.com | +91-2567-252272',
        },
        {
          name: 'Prof. Abdul Wahab',
          designation: 'Education Advisor',
          qualification: 'Curriculum Development',
          contact: 'advisor4@jrdu.com | +91-2567-252273',
        },
        {
          name: 'Maulana Mufti Azhar Ali',
          designation: 'Legal Advisor',
          qualification: 'Islamic Law & Fatwa',
          contact: 'advisor5@jrdu.com | +91-2567-252274',
        },
        {
          name: 'Dr. Sayyid Hamid',
          designation: 'Development Advisor',
          qualification: 'Infrastructure & Planning',
          contact: 'advisor6@jrdu.com | +91-2567-252275',
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
                  {member.contact && (
                    <p className="text-emerald-700 text-sm mt-3 font-medium break-all">
                      {member.contact}
                    </p>
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
                {member.contact && (
                  <p className="text-emerald-700 text-sm mt-3 font-medium break-all">
                    {member.contact}
                  </p>
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
                    The Managing Committee of Darul Uloom Jamia Razvia is responsible for the overall administration and development of the institution.
                  </p>
                  <p className="mb-4">
                    Key responsibilities include day-to-day management, financial oversight, staff appointments, infrastructure development, and ensuring excellence in both Islamic and modern education.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    The Advisory Committee comprises distinguished scholars and experts who provide strategic guidance and wisdom on religious, academic, legal and developmental matters to the institution.
                  </p>
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