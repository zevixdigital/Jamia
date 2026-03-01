import { useParams, Link } from 'react-router-dom';
import { User, ArrowLeft, Quote } from 'lucide-react';

const PrincipalMessage = () => {
  const { id } = useParams<{ id: string }>();

  const principals: Record<string, {
    institution: string;
    institutionUrdu: string;
    name: string;
    qualification: string;
    experience: string;
    message: string;
    messageUrdu: string;
    vision: string;
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      name: 'Moulana Mohd Sharif',
      qualification: 'Fazil-e-Darul Uloom Deoband, M.A. Arabic',
      experience: '25+ years',
      message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

It is with great pleasure and humility that I welcome you to Madarsa Darul Uloom Jamia Razvia, an institution that has been a beacon of Islamic knowledge and spiritual guidance for over five decades.

Our mission has always been to provide quality Islamic education that nurtures both the mind and soul of our students. We believe in creating an environment where students can develop a deep understanding of the Quran, Sunnah, and Islamic jurisprudence while also developing the character and moral values that define a true Muslim.

Under the guidance of our esteemed founder, Mohtamim al-Haj Abdul Razzaq (R.A), and with the blessings of Allah, we have grown from a small madrasa to a comprehensive Islamic educational institution. Our dedicated faculty members work tirelessly to ensure that each student receives personalized attention and guidance.

We are committed to preserving the traditional methods of Islamic learning while adapting to the needs of the modern world. Our curriculum is designed to produce scholars who are well-versed in Islamic sciences and capable of serving the Ummah in various capacities.

I invite you to explore our programs and join us in this noble journey of seeking knowledge for the sake of Allah.

Jazakumullah Khairan.`,
      messageUrdu: 'اسلام علیکم ورحمتہ اللہ وبرکاتہ',
      vision: 'To produce scholars who are well-versed in Islamic sciences, possess strong moral character, and are capable of serving the Muslim community with knowledge, wisdom, and compassion.',
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      name: 'Shaista Bi',
      qualification: 'Fazil-e-Darul Uloom Nadwatul Ulama, M.A. English',
      experience: '20+ years',
      message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

Welcome to Madarsa Jannat-ul-Banaat, a dedicated institution for the education of our sisters in Islam. It is our firm belief that educating women is essential for the progress of the entire Muslim Ummah.

Our institution provides a safe and nurturing environment where girls can acquire Islamic knowledge without compromising their modesty and dignity. We understand the unique needs of female students and have designed our programs accordingly.

Our female teaching staff ensures that students receive proper guidance in all aspects of Islamic education, from Quran and Hadith to Fiqh and Arabic language. We also emphasize the importance of household management and family values.

We are proud to have produced hundreds of educated sisters who are now serving their families and communities with knowledge and wisdom. Our graduates include Quran teachers, Islamic counselors, and community workers.

I invite parents to entrust us with the education of their daughters, and I assure you that we will fulfill this responsibility with dedication and sincerity.

May Allah accept our efforts and guide us all on the straight path.

Jazakumullah Khairan.`,
      messageUrdu: 'اسلام علیکم ورحمتہ اللہ وبرکاتہ',
      vision: 'To empower Muslim women with Islamic knowledge and skills that enable them to be ideal mothers, wives, and contributing members of society while maintaining their Islamic identity.',
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      name: 'Dr. Fatima Siddiqui',
      qualification: 'Ph.D. in Education, M.Ed. English Literature',
      experience: '18+ years',
      message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

As the Principal of Abdul Razzaq Girls Inter College, I extend a warm welcome to all students and parents. Our college is committed to providing quality modern education within an Islamic framework.

We believe that Muslim girls deserve the best education possible - one that prepares them for the challenges of the modern world while strengthening their faith and Islamic values. Our curriculum follows the state board standards, ensuring that our students are competitive in higher education and career opportunities.

Our experienced faculty members are dedicated to academic excellence and personal growth. We maintain a disciplined environment where students can focus on their studies and develop their talents.

In addition to academics, we offer various extracurricular activities including sports, debates, and cultural programs. We also have Islamic studies classes to ensure that our students remain connected to their faith.

Our goal is to produce confident, educated, and morally upright young women who can contribute positively to society while upholding Islamic principles.

I invite you to join our college community and be part of our journey towards excellence.

Jazakumullah Khairan.`,
      messageUrdu: 'اسلام علیکم ورحمتہ اللہ وبرکاتہ',
      vision: 'To provide quality modern education that empowers young Muslim women to achieve academic excellence and professional success while maintaining strong Islamic values and identity.',
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      name: 'Prof. Abdul Qadir',
      qualification: 'M.Tech, B.Ed., 15+ years teaching experience',
      experience: '15+ years',
      message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

Welcome to Jamia Razvia Coaching Academy, where we prepare students for success in competitive examinations and professional careers.

In today's competitive world, quality coaching is essential for students aspiring to enter prestigious institutions and professions. Our coaching academy provides expert guidance for various competitive exams including NEET, JEE, and other entrance tests.

Our faculty comprises experienced teachers who are experts in their respective subjects. We use modern teaching methods, regular test series, and personalized attention to ensure that each student reaches their full potential.

We understand that every student is unique, and we tailor our approach to meet individual needs. Our small batch sizes allow for better interaction between teachers and students.

In addition to academic preparation, we also focus on building confidence, time management skills, and exam strategies. Our goal is not just to help students pass exams, but to excel in them.

We are proud of our track record of producing successful doctors, engineers, and professionals who are serving the nation with excellence.

Join us and take the first step towards your dream career.

Jazakumullah Khairan.`,
      messageUrdu: 'اسلام علیکم ورحمتہ اللہ وبرکاتہ',
      vision: 'To provide quality coaching that helps students achieve their academic and professional goals through expert guidance, modern teaching methods, and personalized attention.',
    },
  };

  const principal = id ? principals[id] : null;

  if (!principal) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{principal.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Principal's Message</h1>
          <p className="font-urdu text-white/80 text-lg">پرنسپل کا پیغام</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Principal Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-emerald-deep rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-gold-primary" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl font-bold text-emerald-deep">{principal.name}</h2>
                <p className="text-gold-primary font-medium">Principal / Principal</p>
                <p className="text-gray-600 mt-2">{principal.qualification}</p>
                <p className="text-gray-500 text-sm">Experience: {principal.experience}</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-8 h-8 text-gold-primary" />
              <h3 className="font-serif text-xl font-bold text-emerald-deep">Message from the Principal</h3>
            </div>
            <div className="prose max-w-none">
              <p className="font-urdu text-gold-primary mb-4">{principal.messageUrdu}</p>
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {principal.message}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-emerald-light/30 rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">Our Vision</h3>
            <p className="text-gray-700">{principal.vision}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
