import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Lock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admission', path: '/admission' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donation', path: '/donation' },
    { name: 'Verify-certificate', path: '/certificates' },
  ];

  const institutions = [
    { name: 'Madarsa Darul Uloom', path: '/institutions/madarsa-darul-loom' },
    { name: 'Madarsa Jannat-ul-Banaat', path: '/institutions/madarsa-jannat-ul-banaat' },
    { name: 'Girls Inter College', path: '/institutions/abdul-razzaq-girls-college' },
    { name: 'Coaching Academy', path: '/institutions/jamia-razvia-coaching' },
  ];

  return (
    <footer className="bg-emerald-deep text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <img src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400851/LOGO_NEW_y2imdz.png" alt="Jamia Logo" className="h-12 w-auto object-contain" />
                <p className="text-gold-light text-sm font-urdu">جامعہ رضویہ</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Darul Uloom Jamia Razvia is a leading academic and charitable religious educational 
              institution in Kemri, Rampur, Uttar Pradesh, India since 1972.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-gold-light transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-gold-light">Our Institutions</h4>
            <ul className="space-y-2">
              {institutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-gold-light transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-gold-light">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Town Kemri-244928, District Rampur, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <a href="tel:+919756733334" className="text-white/80 text-sm hover:text-gold-light transition-colors">
                  +91-9756-733 334
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <a href="mailto:info.jamiarazvia@gmail.com" className="text-white/80 text-sm hover:text-gold-light transition-colors">
                  info.jamiarazvia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              Copyright © 2025 | Darul Uloom Jamia Razvia • All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gold-light/80 text-sm font-urdu">
                بسم الله الرحمن الرحيم
              </p>
              {/* Admin Links */}
              <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                <Lock className="w-3 h-3 text-white/40" />
                <Link to="/admin/contacts" className="text-white/40 hover:text-gold-light text-xs transition-colors">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
