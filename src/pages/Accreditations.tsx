import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";

const Accreditations = () => {
  const documents = [
    {
      title: "80G Certificate",
      description:
        "Income Tax exemption certificate under Section 80G of the Income Tax Act, 1961.",
      file: "/documents/80g.pdf",
    },
    {
      title: "12A Registration",
      description:
        "Registration under Section 12A of the Income Tax Act for charitable institutions.",
      file: "/documents/12a.pdf",
    },
    {
      title: "Society Registration Certificate",
      description:
        "Official registration certificate of Darul Uloom Jamia Razvia Management Society.",
      file: "/documents/society-registration.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">

      {/* Hero Section */}
      <div className="bg-emerald-deep py-20 text-center text-white">
        <p className="font-urdu text-gold-light text-xl mb-2">اعترافات و رجسٹریشن</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Accreditations & Registrations
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Darul Uloom Jamia Razvia is a legally registered and compliant
          educational institution. Below are our official certifications and
          registrations.
        </p>
      </div>

      {/* Registration Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="w-10 h-10 text-emerald-deep" />
              <h2 className="font-serif text-2xl font-bold text-emerald-deep">
                Legal Registration Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700">

              <div>
                <p><strong>Registered Name:</strong></p>
                <p>Darul Uloom Jamia Razvia Management Society</p>
              </div>

              <div>
                <p><strong>Established:</strong></p>
                <p>1972</p>
              </div>

              <div>
                <p><strong>Registration Year:</strong></p>
                <p>1996</p>
              </div>

              <div>
                <p><strong>Income Tax Sections:</strong></p>
                <p>12A & 80G Certified</p>
              </div>

            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-emerald-light rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-emerald-deep" />
                </div>

                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                  {doc.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {doc.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={doc.file}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-gold-primary transition"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>

                  <a
                    href={doc.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 border border-emerald-deep text-emerald-deep rounded-md hover:bg-emerald-light transition"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Notice */}
          <div className="mt-20 bg-emerald-deep text-white rounded-2xl p-10 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Transparency & Compliance
            </h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our institution strictly follows all regulatory guidelines
              and maintains transparency in financial and academic operations.
              Donors are eligible for tax exemption under Section 80G.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Accreditations;