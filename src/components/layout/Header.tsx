import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Institutions",
      path: "/institutions",
      dropdown: [
        { name: "Madarsa Darul Uloom Jamia Razvia", path: "/institutions/madarsa-darul-loom" },
        { name: "Madarsa Jannat-ul-Banaat", path: "/institutions/madarsa-jannat-ul-banaat" },
        { name: "Abdul Razzaq Girls Inter College", path: "/institutions/abdul-razzaq-girls-college" },
        { name: "Jamia Razvia Coaching Academy", path: "/institutions/jamia-razvia-coaching" },
      ],
    },
    {
      name: "Committee",
      path: "/committee",
      dropdown: [
        { name: "Managing Committee", path: "/committee/managing" },
        // { name: "Advisory Committee", path: "/committee/advisory" },
      ],
    },
    { name: "Admission", path: "/admission" },
    { name: "Notice", path: "/notice" },
    { name: "Khidmaat", path: "/khidmaat" },
    {
      name: "More",
      path: "#",
      dropdown: [
        { name: "Downloads", path: "/downloads" },
        { name: "Gallery", path: "/gallery" },
        { name: "Accreditations & Registrations", path: "/accreditations" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    // FIX: Removed overflow-x-hidden from the header class
    <header className="w-full relative z-[1000]">

      {/* Top Bar */}
      <div className="bg-emerald-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919756733334" className="flex items-center gap-2 hover:text-gold-light transition">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91-9756-733 334</span>
            </a>
            <a href="mailto:info.jamiarazvia@gmail.com" className="flex items-center gap-2 hover:text-gold-light transition">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info.jamiarazvia@gmail.com</span>
            </a>
          </div>
          <span className="text-gold-light font-urdu text-xs hidden md:inline">
            بسم الله الرحمن الرحيم
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`bg-emerald-deep sticky top-0 z-[1000] ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dadqwaqis/image/upload/v1761400851/LOGO_NEW_y2imdz.png"
                alt="Jamia Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-white">

              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-gold-light"
                        : "hover:text-gold-light"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={15} />}
                  </Link>

                  {item.dropdown && openDropdown === item.name && (
  <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-2xl py-3 z-[2000] before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-5 py-2 text-sm text-gray-700 hover:bg-emerald-light hover:text-emerald-deep transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Donation Button */}
              <Link
                to="/donation"
                className="bg-gold-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-emerald-deep transition-all duration-300 shadow-md"
              >
                Donate
              </Link>

            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-emerald-deep border-t border-white/10 z-[1500] relative">
          <div className="px-6 py-4 space-y-3 text-white">
            {navItems.map((item) => (
              <div key={item.name}>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer"
                  onClick={() =>
                    item.dropdown
                      ? setOpenDropdown(openDropdown === item.name ? null : item.name)
                      : setIsMobileMenuOpen(false)
                  }
                >
                  <Link to={item.path}>{item.name}</Link>
                  {item.dropdown && (
                    <ChevronDown
                      className={`transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item.dropdown && openDropdown === item.name && (
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block text-white/80 hover:text-gold-light text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/donation"
              className="block text-center bg-gold-primary py-2 rounded-full font-semibold mt-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;