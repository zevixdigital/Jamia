import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Phone, User, Calendar, Search, RefreshCw } from 'lucide-react';
import { getContactSubmissions } from '../../lib/firebase';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminContacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubscribe = getContactSubmissions((data) => {
      setContacts(data);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.subject?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text('Contact Form Submissions', 14, 20);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Table
    const tableData = filteredContacts.map((contact, index) => [
      index + 1,
      contact.name || 'N/A',
      contact.email || 'N/A',
      contact.phone || 'N/A',
      contact.subject || 'N/A',
      contact.message?.substring(0, 50) + '...' || 'N/A',
      contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A',
    ]);

    (doc as any).autoTable({
      head: [['#', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Date']],
      body: tableData,
      startY: 40,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [6, 78, 59] },
    });

    doc.save('contact-submissions.pdf');
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
              <h2 className="font-serif text-2xl font-bold text-emerald-deep">Contact Submissions</h2>
              <p className="text-gray-600">View and manage contact form submissions (Realtime)</p>
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
                Download PDF
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {loading ? (
              <div className="p-8 text-center">
                <RefreshCw className="w-8 h-8 text-emerald-deep animate-spin mx-auto" />
                <p className="text-gray-600 mt-4">Loading...</p>
              </div>
            ) : filteredContacts.length === 0 ? (
              <div className="p-8 text-center">
                <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No contact submissions found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-deep text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">#</th>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Contact</th>
                      <th className="px-4 py-3 text-left">Subject</th>
                      <th className="px-4 py-3 text-left">Message</th>
                      <th className="px-4 py-3 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact, index) => (
                      <tr key={contact.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">{contact.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-gray-400" />
                              {contact.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-gray-400" />
                              {contact.phone || 'N/A'}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-emerald-light text-emerald-deep rounded-full text-xs">
                            {contact.subject}
                          </span>
                        </td>
                        <td className="px-4 py-3 max-w-xs">
                          <p className="text-sm text-gray-600 truncate">{contact.message}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-emerald-deep">{contacts.length}</p>
              <p className="text-gray-600">Total Submissions</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-gold-primary">{filteredContacts.length}</p>
              <p className="text-gray-600">Filtered Results</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-emerald-deep">
                {contacts.filter(c => c.createdAt && new Date(c.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
              </p>
              <p className="text-gray-600">Last 7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
