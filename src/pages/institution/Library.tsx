import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Book, Search, Clock } from 'lucide-react';

const Library = () => {
  const { id } = useParams<{ id: string }>();

  const libraryData: Record<string, {
    institution: string;
    institutionUrdu: string;
    totalBooks: string;
    description: string;
    timing: string;
    sections: { name: string; books: string; description: string }[];
    rules: string[];
  }> = {
    'madarsa-darul-loom': {
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      institutionUrdu: 'مدرسہ دارالعلوم جامعہ رضویہ',
      totalBooks: '15,000+',
      description: 'Our library houses a vast collection of Islamic literature including Quran, Hadith, Fiqh, Tafseer, and Arabic language books, along with modern reference materials.',
      timing: '8:00 AM - 8:00 PM (Daily)',
      sections: [
        { name: 'Quran Section', books: '2,000+', description: 'Various editions of Quran, Tajweed books, and Quranic studies' },
        { name: 'Hadith Section', books: '3,000+', description: 'Collections of Hadith including Sahih Bukhari, Sahih Muslim, and commentaries' },
        { name: 'Fiqh Section', books: '2,500+', description: 'Books on Islamic jurisprudence and legal rulings' },
        { name: 'Tafseer Section', books: '1,500+', description: 'Quranic commentaries and exegesis' },
        { name: 'Arabic Language', books: '2,000+', description: 'Arabic grammar, literature, and language learning materials' },
        { name: 'Islamic History', books: '1,500+', description: 'Books on Seerah, Islamic history, and biographies' },
        { name: 'General Section', books: '2,500+', description: 'Reference books, encyclopedias, and miscellaneous topics' },
      ],
      rules: [
        'Maintain silence in the library',
        'No food or drinks allowed',
        'Books can be issued for 7 days',
        'Late return will incur a fine of Rs. 5 per day',
        'Handle books with care',
        'Mobile phones must be on silent mode',
      ],
    },
    'madarsa-jannat-ul-banaat': {
      institution: 'Madarsa Jannat-ul-Banaat',
      institutionUrdu: 'مدرسہ جنت البنات',
      totalBooks: '8,000+',
      description: 'Specialized collection focusing on women\'s Islamic education, family matters, and child upbringing.',
      timing: '9:00 AM - 5:00 PM (Mon-Sat)',
      sections: [
        { name: 'Quran for Women', books: '1,000+', description: 'Quran translations and Tafseer for women' },
        { name: 'Fiqh for Women', books: '1,500+', description: 'Islamic rulings specific to women' },
        { name: 'Family & Marriage', books: '1,000+', description: 'Books on marriage, family life, and relationships' },
        { name: 'Child Upbringing', books: '800+', description: 'Guidance on raising children in Islam' },
        { name: 'Hadith for Women', books: '1,200+', description: 'Hadith collections relevant to women' },
        { name: 'Home Management', books: '500+', description: 'Books on household management and cooking' },
        { name: 'General Reading', books: '2,000+', description: 'Miscellaneous books for general knowledge' },
      ],
      rules: [
        'Female students only',
        'Maintain silence and discipline',
        'Books can be issued for 14 days',
        'Late return fine: Rs. 3 per day',
        'Respect the books and other students',
      ],
    },
    'abdul-razzaq-girls-college': {
      institution: 'Abdul Razzaq Girls Inter College',
      institutionUrdu: 'عبدالرزاق گرلز انٹر کالج',
      totalBooks: '10,000+',
      description: 'Academic books covering all subjects from class 6 to 12, reference books, and competitive exam materials.',
      timing: '8:00 AM - 4:00 PM (Mon-Sat)',
      sections: [
        { name: 'Science Section', books: '3,000+', description: 'Physics, Chemistry, Biology books and reference materials' },
        { name: 'Mathematics', books: '2,000+', description: 'Maths textbooks and problem-solving guides' },
        { name: 'English Literature', books: '1,500+', description: 'English textbooks, novels, and grammar books' },
        { name: 'Social Studies', books: '1,500+', description: 'History, Geography, Civics, and Economics books' },
        { name: 'Hindi & Urdu', books: '1,000+', description: 'Language textbooks and literature' },
        { name: 'Competitive Exams', books: '1,000+', description: 'Books for NEET, JEE, and other competitive exams' },
      ],
      rules: [
        'College ID card is mandatory',
        'Books issued for 15 days',
        'Late fine: Rs. 2 per day per book',
        'Maximum 3 books per student',
        'Maintain silence in reading area',
      ],
    },
    'jamia-razvia-coaching': {
      institution: 'Jamia Razvia Coaching Academy',
      institutionUrdu: 'جامعہ رضویہ کوچنگ اکیڈمی',
      totalBooks: '5,000+',
      description: 'Competitive exam preparation books, previous year papers, and reference materials.',
      timing: '7:00 AM - 9:00 PM (Daily)',
      sections: [
        { name: 'NEET Preparation', books: '1,500+', description: 'Biology, Physics, Chemistry books for medical entrance' },
        { name: 'JEE Preparation', books: '1,500+', description: 'Engineering entrance exam preparation materials' },
        { name: 'Previous Papers', books: '1,000+', description: 'Previous year question papers with solutions' },
        { name: 'Reference Books', books: '1,000+', description: 'Advanced reference books for all subjects' },
      ],
      rules: [
        'Reference books cannot be issued',
        'Photocopy facility available',
        'Study room access for all students',
        'Maintain discipline and silence',
      ],
    },
  };

  const library = id ? libraryData[id] : null;

  if (!library) {
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
          <p className="font-urdu text-gold-light text-xl mb-2">{library.institutionUrdu}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Library</h1>
          <p className="font-urdu text-white/80 text-lg">کتب خانہ</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="w-10 h-10 text-emerald-deep mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-deep">{library.totalBooks}</p>
              <p className="text-gray-600">Total Books</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Book className="w-10 h-10 text-gold-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-gold-primary">{library.sections.length}+</p>
              <p className="text-gray-600">Sections</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Clock className="w-10 h-10 text-emerald-deep mx-auto mb-3" />
              <p className="text-gray-600">{library.timing}</p>
              <p className="text-sm text-gray-500">Library Hours</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-emerald-light/30 rounded-lg p-6 mb-12">
            <p className="text-gray-700">{library.description}</p>
          </div>

          {/* Sections */}
          <div className="mb-12">
            <h2 className="section-title mb-6">Library Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {library.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-lg font-bold text-emerald-deep">{section.name}</h3>
                    <span className="px-3 py-1 bg-gold-light/30 text-gold-dark rounded-full text-sm font-medium">
                      {section.books}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="section-title mb-6">Library Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {library.rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
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

export default Library;
