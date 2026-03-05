import { useState } from 'react';
import { CheckCircle, FileText, Calendar, User, Phone, Mail, MapPin, Download } from 'lucide-react';

const Admission = () => {
  const [activeTab, setActiveTab] = useState('process');

  const steps = [
    {
      number: '01',
      title: 'Get Application Form',
      titleUrdu: 'درخواست فارم حاصل کریں',
      description: 'Obtain the admission form from the institution office or download it from our website. Fill in all required details accurately.',
    },
    {
      number: '02',
      title: 'Submit Documents',
      titleUrdu: 'دستاویزات جمع کرائیں',
      description: 'Submit the completed form along with required documents including birth certificate, previous marksheets, and passport photos.',
    },
    {
      number: '03',
      title: 'Entrance Test/Interview',
      titleUrdu: 'داخلہ امتحان/انٹرویو',
      description: 'Appear for the entrance test or interview as per the schedule. Test covers basic Islamic knowledge and general aptitude.',
    },
    {
      number: '04',
      title: 'Admission Confirmation',
      titleUrdu: 'داخلہ کی تصدیق',
      description: 'Selected candidates will be notified. Complete the fee payment and secure your admission.',
    },
  ];

  const eligibility = [
    {
      program: 'Diniyat Section (Preparatory)',
      age: '7-10 years',
      qualification: 'Basic reading and writing skills',
      duration: '3 Years',
    },
    {
      program: 'Hifz Section',
      age: '10+ years',
      qualification: 'Ability to read Quran fluently',
      duration: '3-4 Years',
    },
    {
      program: 'Aalimiyat Section',
      age: '12+ years',
      qualification: 'Completion of Diniyat or equivalent',
      duration: '8 Years',
    },
    {
      program: 'Girls Inter College',
      age: '10+ years',
      qualification: 'Class 5 pass for admission to Class 6',
      duration: '6 Years (6-12)',
    },
  ];

  const documents = [
    'Birth Certificate (Original + 2 Copies)',
    'Previous School Marksheet (if applicable)',
    'Transfer Certificate (TC) from previous school',
    'Character Certificate',
    'Aadhar Card (Student & Parent)',
    'Passport Size Photographs (6 copies)',
    'Income Certificate (for scholarship applications)',
    'Medical Fitness Certificate',
  ];

  const forms = [
    {
      name: 'Admission Form 2026-27',
      size: '427 KB',
      format: 'PDF',
      url: 'https://drive.google.com/uc?export=download&id=1WnzXZvUIacQ8HiuE4jFkt_kbXBcOzOMK',
    },
    { name: 'Scholarship Application Form', size: '180 KB', format: 'PDF' },
    { name: 'Hostel Application Form', size: '156 KB', format: 'PDF' },
    { name: 'Medical Fitness Certificate', size: '120 KB', format: 'PDF' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">داخلہ</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Admission</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Begin your journey of knowledge and faith. Admissions are open for the academic year 2026-27.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {[
              { id: 'process', label: 'Admission Process', icon: CheckCircle },
              { id: 'eligibility', label: 'Eligibility', icon: User },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'forms', label: 'Download Forms', icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-deep text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-light hover:text-emerald-deep'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Admission Process */}
          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="section-title">Admission Process</h2>
                <p className="font-urdu text-gold-primary">داخلہ کا طریقہ کار</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-emerald-deep mt-4 mb-1">{step.title}</h3>
                    <p className="font-urdu text-gold-primary text-sm mb-3">{step.titleUrdu}</p>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
              {/* Important Dates */}
              <div className="bg-emerald-light/30 rounded-lg p-6 mt-8">
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Important Dates for 2026-27
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { date: '01 Jan 2026', event: 'Admission Opens' },
                    { date: '31 Mar 2026', event: 'Last Date for Application' },
                    { date: '10-20 Apr 2026', event: 'Entrance Test' },
                    { date: '30 Apr 2026', event: 'Results & Admission' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <p className="text-gold-primary font-bold">{item.date}</p>
                      <p className="text-gray-700 text-sm">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Eligibility */}
          {activeTab === 'eligibility' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="section-title">Eligibility Criteria</h2>
                <p className="font-urdu text-gold-primary">اہلیت کے معیار</p>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-emerald-deep text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Program</th>
                      <th className="px-4 py-3 text-left">Age Limit</th>
                      <th className="px-4 py-3 text-left">Qualification</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibility.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium text-emerald-deep">{item.program}</td>
                        <td className="px-4 py-3">{item.age}</td>
                        <td className="px-4 py-3">{item.qualification}</td>
                        <td className="px-4 py-3">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="section-title">Required Documents</h2>
                <p className="font-urdu text-gold-primary">ضروری دستاویزات</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-3 card-hover">
                    <CheckCircle className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Forms */}
          {activeTab === 'forms' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="section-title">Download Forms</h2>
                <p className="font-urdu text-gold-primary">فارم ڈاؤنلوڈ کریں</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {forms.map((form, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between card-hover"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-emerald-deep" />
                      </div>
                      <div>
                        <p className="font-medium text-emerald-deep">{form.name}</p>
                        <p className="text-gray-500 text-sm">{form.format} • {form.size}</p>
                      </div>
                    </div>

                    {form.url ? (
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition-colors opacity-50 cursor-not-allowed">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact for Admission */}
      <section className="py-12 bg-emerald-deep pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-6 text-center">
              Contact for Admission Queries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-deep" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-emerald-deep font-medium">+91-9756-733 334</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-deep" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-emerald-deep font-medium">info.jamiarazvia@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-light rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-deep" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="text-emerald-deep font-medium">Town Kemri, District Rampur, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;