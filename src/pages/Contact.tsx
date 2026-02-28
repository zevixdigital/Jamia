import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../lib/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Error submitting form. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      titleUrdu: 'پتہ',
      content: 'Town Kemri-244928, District Rampur, Uttar Pradesh, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      titleUrdu: 'فون',
      content: '+91-9756-733 334',
      link: 'tel:+919756733334',
    },
    {
      icon: Mail,
      title: 'Email',
      titleUrdu: 'ای میل',
      content: 'info.jamiarazvia@gmail.com',
      link: 'mailto:info.jamiarazvia@gmail.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      titleUrdu: 'دفتر کے اوقات',
      content: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">رابطہ کریں</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get in touch with us for any queries, feedback, or information about our institutions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-5 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-emerald-deep" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-emerald-deep">{info.title}</h3>
                        <p className="font-urdu text-gold-primary text-sm">{info.titleUrdu}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-emerald-deep transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-emerald-light/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-emerald-deep mx-auto mb-2" />
                    <p className="text-emerald-deep font-medium">Google Maps Integration</p>
                    <p className="text-gray-500 text-sm">Kemri, Rampur, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
                  Send us a Message
                </h2>
                <p className="font-urdu text-gold-primary mb-6">ہمیں پیغام بھیجیں</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully.</p>
                    <p className="text-gray-500 text-sm mt-2">We will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="academic">Academic Query</option>
                          <option value="donation">Donation</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent resize-none"
                          placeholder="Enter your message"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="mt-12">
            <h2 className="section-title text-center mb-8">Department Contacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { dept: 'Admission Office', phone: '+91-9756-733 334', email: 'admission@jamiarazvia.org' },
                { dept: 'Examination Cell', phone: '+91-9756-733 335', email: 'exam@jamiarazvia.org' },
                { dept: 'Hostel Office', phone: '+91-9756-733 336', email: 'hostel@jamiarazvia.org' },
                { dept: 'Accounts Office', phone: '+91-9756-733 337', email: 'accounts@jamiarazvia.org' },
              ].map((dept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-5 text-center card-hover">
                  <h3 className="font-serif text-lg font-bold text-emerald-deep mb-3">{dept.dept}</h3>
                  <a href={`tel:${dept.phone}`} className="block text-gray-600 hover:text-emerald-deep transition-colors mb-1">
                    {dept.phone}
                  </a>
                  <a href={`mailto:${dept.email}`} className="text-sm text-gold-primary hover:text-emerald-deep transition-colors">
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
