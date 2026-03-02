import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';   // ← Now at root level

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Institutions from './pages/Institutions';
import InstitutionDetail from './pages/InstitutionDetail';
import Committee from './pages/Committee';
import Admission from './pages/Admission';
import Notice from './pages/Notice';
import Khidmaat from './pages/Khidmaat';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Accreditations from './pages/Accreditations';

// Institution Sub-Pages
import PrincipalMessage from './pages/institution/PrincipalMessage';
import TeachingStaff from './pages/institution/TeachingStaff';
import Facilities from './pages/institution/Facilities';
import Library from './pages/institution/Library';
import Hostel from './pages/institution/Hostel';
import Students from './pages/institution/Students';
import Syllabus from './pages/institution/Syllabus';

// Admin Pages (No Header/Footer)
import AdminContacts from './pages/admin/AdminContacts';
import AdminAdmissions from './pages/admin/AdminAdmissions';

// Main Layout (Header + Content + Footer)
const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      {/* ScrollToTop is now at ROOT LEVEL → always mounted & working */}
      <ScrollToTop />

      <Routes>
        {/* ====================== ADMIN ROUTES (No Layout) ====================== */}
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/admissions" element={<AdminAdmissions />} />

        {/* ====================== MAIN WEBSITE ====================== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/:id" element={<InstitutionDetail />} />

          {/* Institution Sub-Pages */}
          <Route path="/institutions/:id/principal" element={<PrincipalMessage />} />
          <Route path="/institutions/:id/staff" element={<TeachingStaff />} />
          <Route path="/institutions/:id/facilities" element={<Facilities />} />
          <Route path="/institutions/:id/library" element={<Library />} />
          <Route path="/institutions/:id/hostel" element={<Hostel />} />
          <Route path="/institutions/:id/students" element={<Students />} />
          <Route path="/institutions/:id/syllabus" element={<Syllabus />} />

          <Route path="/committee/:type" element={<Committee />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/khidmaat" element={<Khidmaat />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/accreditations" element={<Accreditations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;