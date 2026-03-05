import { useState } from 'react';
import { Calendar, ChevronRight, Bell, FileText, Users, BookOpen } from 'lucide-react';

const Notice = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Notices', icon: Bell },
    { id: 'admission', name: 'Admission', icon: Users },
    { id: 'examination', name: 'Examination', icon: FileText },
    { id: 'event', name: 'Events', icon: Calendar },
    { id: 'academic', name: 'Academic', icon: BookOpen },
  ];

  const notices = [
    {
      id: 1,
      title: 'Admissions Open for Academic Year 2026-27',
      titleUrdu: 'تعلیمی سال ٢٠٢٥-٢٦ کے لیے داخلہ کھلا ہے',
      date: '15 Jan 2025',
      category: 'admission',
      description: 'Applications are invited for admission to various programs including Diniyat, Hifz, Aalimiyat, and Girls Inter College for the academic year 2026-27.',
      important: true,
    },
    {
      id: 2,
      title: 'Annual Examination Schedule Announced',
      titleUrdu: 'سالانہ امتحانی شیڈول کا اعلان',
      date: '10 Jan 2025',
      category: 'examination',
      description: 'The annual examination for all classes will commence from March 1, 2025. Detailed schedule is available on the website and notice board.',
      important: true,
    },
    {
      id: 3,
      title: 'Special Lecture Series on Islamic History',
      titleUrdu: 'اسلامی تاریخ پر خصوصی لیکچر سیریز',
      date: '05 Jan 2025',
      category: 'event',
      description: 'Renowned scholar Maulana Mohammad Tahseen Raza Khan will deliver a series of lectures on Islamic History every Friday after Maghrib prayer.',
      important: false,
    },
    {
      id: 4,
      title: 'New Library Resources Available',
      titleUrdu: 'کتب خانے میں نئی کتب دستیاب',
      date: '01 Jan 2025',
      category: 'academic',
      description: 'The library has acquired over 500 new books including rare manuscripts, Tafseer books, and modern Islamic literature. Students are encouraged to utilize these resources.',
      important: false,
    },
    {
      id: 5,
      title: 'Winter Vacation Notice',
      titleUrdu: 'سرکی تعطیلات کا نوٹس',
      date: '25 Dec 2024',
      category: 'academic',
      description: 'Winter vacation will be observed from December 29, 2024, to January 5, 2025. Classes will resume on January 6, 2025.',
      important: false,
    },
    {
      id: 6,
      title: 'Quran Competition Registration',
      titleUrdu: 'قرآن مقابلے کی رجسٹریشن',
      date: '20 Dec 2024',
      category: 'event',
      description: 'Annual Quran recitation and memorization competition will be held on January 15, 2025. Interested students can register with their class teachers.',
      important: false,
    },
    {
      id: 7,
      title: 'Hostel Fee Payment Reminder',
      titleUrdu: ' hostel فیس کی یاد دہانی',
      date: '15 Dec 2024',
      category: 'academic',
      description: 'Hostel students are reminded to pay their monthly fees by the 20th of each month. Late payment will incur a penalty of Rs. 50 per day.',
      important: true,
    },
    {
      id: 8,
      title: 'Scholarship Application Deadline Extended',
      titleUrdu: ' وظیفہ درخواست کی آخری تاریخ میں توسیع',
      date: '10 Dec 2024',
      category: 'admission',
      description: 'The last date for scholarship applications has been extended to January 31, 2025. Eligible students are encouraged to apply.',
      important: false,
    },
  ];

  const filteredNotices = selectedCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      admission: 'bg-blue-100 text-blue-700',
      examination: 'bg-red-100 text-red-700',
      event: 'bg-green-100 text-green-700',
      academic: 'bg-purple-100 text-purple-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">اعلانات</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Notice Board</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information from Darul Uloom Jamia Razvia.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-emerald-deep text-white'
                          : 'text-gray-700 hover:bg-emerald-light hover:text-emerald-deep'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  ))}
                </nav>

                {/* Important Notice Box */}
                <div className="mt-6 bg-gold-light/30 rounded-lg p-4">
                  <h4 className="font-medium text-gold-dark mb-2 flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    Important
                  </h4>
                  <p className="text-gray-600 text-sm">
                    For urgent queries, please contact the administration office directly at{' '}
                    <span className="text-emerald-deep font-medium">+91-9756-733 334</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content - Notices */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-xl font-bold text-emerald-deep">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-500 text-sm">
                  {filteredNotices.length} notice{filteredNotices.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-4">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`bg-white rounded-lg shadow-md p-5 card-hover ${
                      notice.important ? 'border-l-4 border-gold-primary' : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Date Badge */}
                      <div className="flex-shrink-0 w-16 h-16 bg-emerald-deep rounded-lg flex flex-col items-center justify-center text-white">
                        <span className="text-xs">{notice.date.split(' ')[1]}</span>
                        <span className="text-lg font-bold">{notice.date.split(' ')[0]}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                            {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                          </span>
                          {notice.important && (
                            <span className="px-2 py-1 bg-gold-light/50 text-gold-dark rounded-full text-xs font-medium">
                              Important
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">
                          {notice.title}
                        </h3>
                        <p className="font-urdu text-gold-primary text-sm mb-2">{notice.titleUrdu}</p>
                        <p className="text-gray-600 text-sm mb-3">{notice.description}</p>
                        <button className="inline-flex items-center gap-1 text-emerald-deep hover:text-gold-primary transition-colors text-sm font-medium">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNotices.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold text-gray-600 mb-2">No notices found</h3>
                  <p className="text-gray-500">There are no notices in this category at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
