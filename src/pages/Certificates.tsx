import { useState } from 'react';
import { Search, Award, CheckCircle, FileText, Download, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [certificateType, setCertificateType] = useState('all');

  const certificateTypes = [
    { id: 'all', name: 'All Certificates' },
    { id: 'course', name: 'Course Completion' },
    { id: 'degree', name: 'Degree/Diploma' },
    { id: 'achievement', name: 'Achievement Awards' },
  ];

  const certificates = [
    {
      id: 'C001',
      studentName: 'Mohammad Ahmad',
      fatherName: 'Mohammad Aslam',
      course: 'Hifz-ul-Quran',
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      issueDate: '15 Mar 2024',
      type: 'course',
      status: 'verified',
    },
    {
      id: 'C002',
      studentName: 'Fatima Begum',
      fatherName: 'Mohammad Irfan',
      course: 'Aalimiyat (8 Years)',
      institution: 'Madarsa Jannat-ul-Banaat',
      issueDate: '20 Mar 2024',
      type: 'degree',
      status: 'verified',
    },
    {
      id: 'C003',
      studentName: 'Mohammad Salman',
      fatherName: 'Mohammad Haneef',
      course: 'Diniyat Section',
      institution: 'Madarsa Darul Uloom Jamia Razvia',
      issueDate: '10 Mar 2024',
      type: 'course',
      status: 'verified',
    },
    {
      id: 'C004',
      studentName: 'Ayesha Khan',
      fatherName: 'Mohammad Rashid',
      course: 'Quran Recitation Competition - 1st Prize',
      institution: 'Jamia Razvia',
      issueDate: '05 Feb 2024',
      type: 'achievement',
      status: 'verified',
    },
    {
      id: 'C005',
      studentName: 'Mohammad Imran',
      fatherName: 'Mohammad Farooq',
      course: 'Intermediate (Science)',
      institution: 'Abdul Razzaq Girls Inter College',
      issueDate: '25 Apr 2024',
      type: 'degree',
      status: 'verified',
    },
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesType = certificateType === 'all' || cert.type === certificateType;
    const matchesSearch = 
      cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.course.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">سرٹیفکیٹس</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Verify and download certificates issued by Darul Uloom Jamia Razvia.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Verification Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
                Certificate Verification
              </h2>
              <p className="text-gray-600">
                Enter certificate ID or student name to verify and download certificates.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Certificate ID or Student Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                  />
                </div>
                <select
                  value={certificateType}
                  onChange={(e) => setCertificateType(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent bg-white"
                >
                  {certificateTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          {searchQuery && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4">
                Search Results ({filteredCertificates.length})
              </h3>
              
              {filteredCertificates.map((cert) => (
                <div key={cert.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-emerald-deep" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-serif text-lg font-bold text-emerald-deep">
                            {cert.studentName}
                          </h4>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">S/O {cert.fatherName}</p>
                        <p className="text-gold-primary font-medium">{cert.course}</p>
                        <p className="text-gray-500 text-sm">{cert.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>Certificate ID: <span className="font-medium text-emerald-deep">{cert.id}</span></span>
                          <span>Issued: {cert.issueDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-emerald-deep text-emerald-deep rounded-md hover:bg-emerald-light transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCertificates.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold text-gray-600 mb-2">No certificates found</h3>
                  <p className="text-gray-500">Please check the certificate ID or student name and try again.</p>
                </div>
              )}
            </div>
          )}

          {/* Information Section */}
          {!searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">Course Certificates</h3>
                <p className="text-gray-600 text-sm">
                  Certificates for completion of Hifz, Diniyat, and other short-term courses.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-gold-light/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">Degree/Diploma</h3>
                <p className="text-gray-600 text-sm">
                  Official degrees and diplomas awarded upon completion of Aalimiyat and other programs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">Achievement Awards</h3>
                <p className="text-gray-600 text-sm">
                  Certificates for competitions, awards, and special achievements.
                </p>
              </div>
            </div>
          )}

          {/* Contact for Certificates */}
          <div className="mt-12 bg-emerald-light/30 rounded-lg p-6">
            <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4">
              Need Help with Certificates?
            </h3>
            <p className="text-gray-600 mb-4">
              If you are unable to find your certificate or need assistance with verification, 
              please contact our examination department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:certificates@jamiarazvia.org" className="flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors">
                <span className="font-medium">Email:</span>
                certificates@jamiarazvia.org
              </a>
              <a href="tel:+919756733336" className="flex items-center gap-2 text-emerald-deep hover:text-gold-primary transition-colors">
                <span className="font-medium">Phone:</span>
                +91-9756-733 336
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
