import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, User, Phone, Mail, Calendar, Search, RefreshCw, MapPin, GraduationCap } from 'lucide-react';
import { getAdmissionSubmissions } from '../../lib/firebase';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminAdmissions = () => {
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubscribe = getAdmissionSubmissions((data) => {
      setAdmissions(data);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const filteredAdmissions = admissions.filter(admission =>
    admission.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admission.fatherName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admission.phone?.includes(searchQuery) ||
    admission.program?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getProgramName = (program: string) => {
    const programs: Record<string, string> = {
      'diniyat': 'Diniyat Section',
      'hifz': 'Hifz Section',
      'aalimiyat': 'Aalimiyat Section',
      'girls-college': 'Girls Inter College',
      'coaching': 'Coaching Academy',
    };
    return programs[program] || program;
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text('Admission Submissions', 14, 20);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Table
    const tableData = filteredAdmissions.map((admission, index) => [
      index + 1,
      admission.studentName || 'N/A',
      admission.fatherName || 'N/A',
      admission.phone || 'N/A',
      getProgramName(admission.program),
      admission.previousClass || 'N/A',
      admission.createdAt ? new Date(admission.createdAt).toLocaleDateString() : 'N/A',
    ]);

    (doc as any).autoTable({
      head: [['#', 'Student Name', 'Father Name', 'Phone', 'Program', 'Prev Class', 'Date']],
      body: tableData,
      startY: 40,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [6, 78, 59] },
    });

    doc.save('admission-submissions.pdf');
  };

  const downloadSinglePDF = (admission: any) => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text('Admission Application', 14, 20);
    
    doc.setFontSize(12);
    let y = 40;
    
    const addField = (label: string, value: string) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${label}:`, 14, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value || 'N/A', 60, y);
      y += 10;
    };

    addField('Application ID', admission.id);
    addField('Student Name', admission.studentName);
    addField('Father Name', admission.fatherName);
    addField('Date of Birth', admission.dob);
    addField('Gender', admission.gender);
    addField('Phone', admission.phone);
    addField('Email', admission.email);
    addField('Address', admission.address);
    addField('Program', getProgramName(admission.program));
    addField('Previous School', admission.previousSchool);
    addField('Previous Class', admission.previousClass);
    addField('Submission Date', admission.createdAt ? new Date(admission.createdAt).toLocaleString() : 'N/A');

    doc.save(`admission-${admission.studentName?.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-emerald-deep text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-white/80 hover:text-white flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Website
              </Link>
            </div>
            <h1 className="font-serif text-xl font-bold">Admin Panel</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Title */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-emerald-deep">Admission Submissions</h2>
              <p className="text-gray-600">View and manage admission inquiries (Realtime)</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={downloadPDF}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download All PDF
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name, father name, phone, or program..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep"
              />
            </div>
          </div>

          {/* Cards */}
          {loading ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <RefreshCw className="w-8 h-8 text-emerald-deep animate-spin mx-auto" />
              <p className="text-gray-600 mt-4">Loading...</p>
            </div>
          ) : filteredAdmissions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No admission submissions found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAdmissions.map((admission) => (
                <div key={admission.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-emerald-deep">{admission.studentName}</h3>
                      <p className="text-gray-500 text-sm">S/O {admission.fatherName}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-light text-emerald-deep rounded-full text-sm">
                      {getProgramName(admission.program)}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{admission.phone}</span>
                    </div>
                    {admission.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{admission.email}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="truncate">{admission.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>DOB: {admission.dob} | Gender: {admission.gender}</span>
                    </div>
                    {admission.previousSchool && (
                      <div className="flex items-center gap-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <span>Prev: {admission.previousSchool} - {admission.previousClass}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {admission.createdAt ? new Date(admission.createdAt).toLocaleDateString() : 'N/A'}
                    </div>
                    <button
                      onClick={() => downloadSinglePDF(admission)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-dark transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-emerald-deep">{admissions.length}</p>
              <p className="text-gray-600">Total Inquiries</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-gold-primary">{filteredAdmissions.length}</p>
              <p className="text-gray-600">Filtered Results</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-emerald-deep">
                {admissions.filter(a => a.createdAt && new Date(a.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
              </p>
              <p className="text-gray-600">Last 7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAdmissions;
