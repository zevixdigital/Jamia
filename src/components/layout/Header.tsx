import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Institutions',
      path: '/institutions',
      dropdown: [
        { name: 'Madarsa Darul Uloom Jamia Razvia', path: '/institutions/madarsa-darul-loom' },
        { name: 'Madarsa Jannat-ul-Banaat', path: '/institutions/madarsa-jannat-ul-banaat' },
        { name: 'Abdul Razzaq Girls Inter College', path: '/institutions/abdul-razzaq-girls-college' },
        { name: 'Jamia Razvia Coaching Academy', path: '/institutions/jamia-razvia-coaching' },
      ],
    },
    {
      name: 'Committee',
      path: '/committee',
      dropdown: [
        { name: 'Managing Committee', path: '/committee/managing' },
        { name: 'Advisory Committee', path: '/committee/advisory' },
      ],
    },
    { name: 'Admission', path: '/admission' },
    { name: 'Notice', path: '/notice' },
    { name: 'Khidmaat', path: '/khidmaat' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donation', path: '/donation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-emerald-deep text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919756733334" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91-9756-733 334</span>
            </a>
            <a href="mailto:info.jamiarazvia@gmail.com" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info.jamiarazvia@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-light font-urdu text-xs hidden md:inline">بسم الله الرحمن الرحيم</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-emerald-deep shadow-lg sticky top-0 z-50' : 'bg-emerald-deep'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src='https://res.cloudinary.com/dadqwaqis/image/upload/v1761400851/LOGO_NEW_y2imdz.png'/>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-gold-light'
                        : 'text-white/90 hover:text-gold-light'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-light hover:text-emerald-deep transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-emerald-deep border-t border-white/10 animate-slide-up">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'text-gold-light bg-white/10'
                        : 'text-white/90 hover:text-gold-light hover:bg-white/10'
                    }`}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(openDropdown === item.name ? null : item.name);
                          }}
                        />
                      )}
                    </div>
                  </Link>

                  {/* Mobile Dropdown */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="pl-4 mt-1 space-y-1 animate-slide-up">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-gold-light hover:bg-white/5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
