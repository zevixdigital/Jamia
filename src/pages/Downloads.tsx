import { useState } from 'react';
import { Download, FileText, Calendar, BookOpen, GraduationCap, FileSpreadsheet, Search } from 'lucide-react';

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Files', icon: FileText },
    { id: 'admission', name: 'Admission Forms', icon: GraduationCap },
    { id: 'academic', name: 'Academic', icon: BookOpen },
    { id: 'calendar', name: 'Calendars', icon: Calendar },
    { id: 'other', name: 'Other Documents', icon: FileSpreadsheet },
  ];

  const files = [
    { name: 'Admission Form 2025-26', category: 'admission', size: '245 KB', format: 'PDF', downloads: 1250 },
    { name: 'Scholarship Application Form', category: 'admission', size: '180 KB', format: 'PDF', downloads: 890 },
    { name: 'Hostel Application Form', category: 'admission', size: '156 KB', format: 'PDF', downloads: 650 },
    { name: 'Medical Fitness Certificate', category: 'admission', size: '120 KB', format: 'PDF', downloads: 520 },
    { name: 'Academic Calendar 2025-26', category: 'calendar', size: '320 KB', format: 'PDF', downloads: 2100 },
    { name: 'Examination Schedule 2025', category: 'academic', size: '180 KB', format: 'PDF', downloads: 1800 },
    { name: 'Syllabus - Diniyat Section', category: 'academic', size: '450 KB', format: 'PDF', downloads: 950 },
    { name: 'Syllabus - Hifz Section', category: 'academic', size: '280 KB', format: 'PDF', downloads: 780 },
    { name: 'Syllabus - Aalimiyat Section', category: 'academic', size: '680 KB', format: 'PDF', downloads: 620 },
    { name: 'Holiday List 2025', category: 'calendar', size: '150 KB', format: 'PDF', downloads: 1100 },
    { name: 'Fee Structure 2025-26', category: 'other', size: '200 KB', format: 'PDF', downloads: 1450 },
    { name: 'Rules & Regulations', category: 'other', size: '350 KB', format: 'PDF', downloads: 980 },
    { name: 'Uniform Guidelines', category: 'other', size: '180 KB', format: 'PDF', downloads: 750 },
    { name: 'Library Membership Form', category: 'other', size: '140 KB', format: 'PDF', downloads: 420 },
    { name: 'Leave Application Form', category: 'other', size: '120 KB', format: 'PDF', downloads: 680 },
  ];

  const filteredFiles = files.filter(file => {
    const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">ڈاؤنلوڈز</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Downloads</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Download admission forms, academic calendars, syllabi, and other important documents.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-emerald-deep text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-emerald-light hover:text-emerald-deep'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Files List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-deep text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">File Name</th>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-left">Format</th>
                    <th className="px-4 py-3 text-left">Size</th>
                    <th className="px-4 py-3 text-left">Downloads</th>
                    <th className="px-4 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-light rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-emerald-deep" />
                          </div>
                          <span className="font-medium text-gray-800">{file.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {file.category.charAt(0).toUpperCase() + file.category.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-gold-light/30 text-gold-dark rounded-full text-xs font-medium">
                          {file.format}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{file.size}</td>
                      <td className="px-4 py-3 text-gray-600">{file.downloads.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition-colors text-sm">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredFiles.length === 0 && (
              <div className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-gray-600 mb-2">No files found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-emerald-light/30 rounded-lg p-6">
            <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you are unable to find the document you need or face any issues with downloads, 
              please contact our administration office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919756733334" className="flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors">
                <span className="font-medium">Phone:</span>
                +91-9756-733 334
              </a>
              <a href="mailto:info.jamiarazvia@gmail.com" className="flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors">
                <span className="font-medium">Email:</span>
                info.jamiarazvia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
