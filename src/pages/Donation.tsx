import { useState } from 'react';
import { Heart, BookOpen, Users, Home, GraduationCap, CheckCircle, Banknote, CreditCard, Smartphone } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');

  const donationTypes = [
    { id: 'general', name: 'General Donation', icon: Heart },
    { id: 'zakat', name: 'Zakat', icon: Banknote },
    { id: 'sadaqah', name: 'Sadaqah', icon: Heart },
    { id: 'education', name: 'Education Fund', icon: GraduationCap },
    { id: 'hostel', name: 'Hostel Construction', icon: Home },
    { id: 'library', name: 'Library Books', icon: BookOpen },
  ];

  const presetAmounts = ['₹500', '₹1000', '₹2500', '₹5000', '₹10000', '₹25000'];

  const causes = [
    {
      icon: GraduationCap,
      title: 'Student Scholarships',
      titleUrdu: 'طلبہ وظائف',
      description: 'Support deserving students who cannot afford education fees. Your donation can help shape their future.',
      raised: '₹5,00,000',
      goal: '₹10,00,000',
    },
    {
      icon: Home,
      title: 'Hostel Expansion',
      titleUrdu: ' hostel کی توسیع',
      description: 'Help us expand our hostel facilities to accommodate more outstation students.',
      raised: '₹12,00,000',
      goal: '₹25,00,000',
    },
    {
      icon: BookOpen,
      title: 'Library Development',
      titleUrdu: 'کتب خانے کی ترقی',
      description: 'Contribute to our library to acquire rare Islamic manuscripts and modern educational books.',
      raised: '₹3,00,000',
      goal: '₹8,00,000',
    },
    {
      icon: Users,
      title: 'Orphan Support',
      titleUrdu: 'یتیموں کی مدد',
      description: 'Your donation helps provide education, food, and shelter to orphan students.',
      raised: '₹7,00,000',
      goal: '₹15,00,000',
    },
  ];

  const paymentMethods = [
    { name: 'UPI', icon: Smartphone },
    { name: 'Credit/Debit Card', icon: CreditCard },
    { name: 'Net Banking', icon: Banknote },
    { name: 'Bank Transfer', icon: Banknote },
  ];

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) {
      alert('Please select or enter a donation amount');
      return;
    }
    alert(`Thank you for your donation of ${amount} towards ${donationTypes.find(t => t.id === donationType)?.name}. You will be redirected to the payment gateway.`);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">عطیہ و خیرات</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Donation</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Support our mission of spreading knowledge and building a brighter future. 
            Your contribution makes a difference.
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-2">
                Make a Donation
              </h2>
              <p className="font-urdu text-gold-primary mb-6">عطیہ دیں</p>

              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Donation Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {donationTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setDonationType(type.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
                        donationType === type.id
                          ? 'border-emerald-deep bg-emerald-light'
                          : 'border-gray-200 hover:border-emerald-deep/50'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 ${donationType === type.id ? 'text-emerald-deep' : 'text-gray-500'}`} />
                      <span className={`text-xs font-medium ${donationType === type.id ? 'text-emerald-deep' : 'text-gray-600'}`}>
                        {type.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        selectedAmount === amount
                          ? 'border-emerald-deep bg-emerald-deep text-white'
                          : 'border-gray-200 hover:border-emerald-deep text-gray-700'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-deep focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-deep transition-colors"
                    >
                      <method.icon className="w-5 h-5 text-emerald-deep" />
                      <span className="text-sm text-gray-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleDonate}
                className="w-full btn-gold flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Your donation is eligible for tax exemption under Section 80G
              </p>
            </div>

            {/* Bank Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4">
                  Bank Transfer Details
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Account Name', value: 'Darul Uloom Jamia Razvia' },
                    { label: 'Account Number', value: '1234567890123' },
                    { label: 'IFSC Code', value: 'SBIN0001234' },
                    { label: 'Bank Name', value: 'State Bank of India' },
                    { label: 'Branch', value: 'Kemri, Rampur' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-emerald-deep">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-deep rounded-lg shadow-md p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-4">UPI Payment</h3>
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-emerald-deep font-bold text-xs text-center">
                      QR Code<br/>Placeholder
                    </span>
                  </div>
                  <p className="text-gold-light font-medium">UPI ID: jamiarazvia@upi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-emerald-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">ہمارے منصوبے</p>
            <h2 className="section-title">Our Causes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Your donation can make a significant impact on these important initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <cause.icon className="w-7 h-7 text-emerald-deep" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-emerald-deep">{cause.title}</h3>
                    <p className="font-urdu text-gold-primary text-sm mb-2">{cause.titleUrdu}</p>
                    <p className="text-gray-600 text-sm mb-4">{cause.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-emerald-deep font-medium">Raised: {cause.raised}</span>
                        <span className="text-gray-500">Goal: {cause.goal}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold-primary rounded-full"
                          style={{ width: `${(parseInt(cause.raised.replace(/[^0-9]/g, '')) / parseInt(cause.goal.replace(/[^0-9]/g, ''))) * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    <button className="text-emerald-deep hover:text-gold-primary transition-colors text-sm font-medium">
                      Donate to this cause →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-deep rounded-lg shadow-lg p-8 pattern-bg">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Your Impact</h2>
              <p className="font-urdu text-gold-light">آپ کا اثر</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '5000+', label: 'Students Educated', labelUrdu: 'طلباء کی تعداد' },
                { value: '₹2 Crore+', label: 'Donations Received', labelUrdu: 'موصولہ عطیات' },
                { value: '1000+', label: 'Scholarships Awarded', labelUrdu: 'وظائف کی تعداد' },
                { value: '50+', label: 'Years of Service', labelUrdu: 'سروس کے سال' },
              ].map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <p className="text-3xl font-bold text-gold-primary mb-1">{stat.value}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="font-urdu text-gold-light/80 text-xs">{stat.labelUrdu}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-emerald-light rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-emerald-deep" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-emerald-deep mb-2">
                Tax Benefits Available
              </h3>
              <p className="text-gray-600">
                Darul Uloom Jamia Razvia is registered under Section 12A and 80G of the Income Tax Act, 1961. 
                All donations are eligible for tax exemption. You will receive a donation receipt via email 
                within 24 hours of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
