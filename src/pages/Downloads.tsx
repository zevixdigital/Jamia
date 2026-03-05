import { useState } from "react";
import { Download, FileText, Calendar, BookOpen, GraduationCap, Search } from "lucide-react";

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Files", icon: FileText },
    { id: "prospectus", name: "Prospectus", icon: BookOpen },
    { id: "admission", name: "Admission Forms", icon: GraduationCap },
    { id: "academic", name: "Academic", icon: BookOpen },
    { id: "calendar", name: "Calendars", icon: Calendar },
  ];

  const files = [
    {
      name: "Prospectus (DUJR) 2026-27",
      category: "prospectus",
      size: "1.8 MB",
      format: "PDF",
      downloads: 0,
      link: "https://drive.google.com/file/d/14wt_DbfZAZuwmoSWZWV7f1UhEMqRBN6n/view?usp=drivesdk",
    },
    {
      name: "Admission Form 2026-27",
      category: "admission",
      size: "245 KB",
      format: "PDF",
      downloads: 0,
      link: "https://drive.google.com/file/d/1WnzXZvUIacQ8HiuE4jFkt_kbXBcOzOMK/view?usp=drivesdk",
    },
    {
      name: "Teaching Staffs",
      category: "admission",
      size: "180 KB",
      format: "PDF",
      downloads: 0,
      link: "/documents/scholarship-form.pdf",
    },
    {
      name: "Scholarship Application Form",
      category: "admission",
      size: "180 KB",
      format: "PDF",
      downloads: 0,
      link: "/documents/scholarship-form.pdf",
    },
    {
      name: "Academic Calendar 2026-27",
      category: "calendar",
      size: "320 KB",
      format: "PDF",
      downloads: 0,
      link: "/documents/academic-calendar.pdf",
    },
    {
      name: "DUJR Syllabus",
      category: "academic",
      size: "405 KB",
      format: "PDF",
      downloads: 0,
      link: "https://drive.google.com/file/d/10fKltdPgLGbKmZN1KmRuK6rh8GmgD4n3/view?usp=drivesdk",
    },
     {
      name: "Syllabus - Aalimiyat",
      category: "academic",
      size: "486 KB",
      format: "PDF",
      downloads: 0,
      link: "https://drive.google.com/file/d/1JafEsV1HfhRJcMXkiLEVPLn0qOrdDgKE/view?usp=drivesdk",
    },
  ];

  const filteredFiles = files.filter((file) => {
    const matchesCategory =
      selectedCategory === "all" || file.category === selectedCategory;
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "prospectus":
        return "Prospectus";
      case "admission":
        return "Admission";
      case "academic":
        return "Academic";
      case "calendar":
        return "Calendar";
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen bg-cream">

      {/* Header */}
      <div className="bg-emerald-deep py-16 text-center text-white">
        <p className="font-urdu text-gold-light text-xl mb-2">ڈاؤنلوڈز</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Downloads
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Download official prospectus, admission forms, academic documents and calendars.
        </p>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">

          {/* Search + Filter */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">

              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-deep focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                      selectedCategory === category.id
                        ? "bg-emerald-deep text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-emerald-light hover:text-emerald-deep"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-emerald-deep text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Document</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Size</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredFiles.map((file, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 flex items-center gap-3">
                        <FileText className="w-5 h-5 text-emerald-deep" />
                        <span className="font-medium text-gray-800">
                          {file.name}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                          {getCategoryLabel(file.category)}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {file.size}
                      </td>

                      <td className="px-6 py-4">
                        <a
                          href={file.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-deep text-white rounded-md hover:bg-emerald-medium transition text-xs"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredFiles.length === 0 && (
              <div className="p-10 text-center text-gray-500">
                No documents found.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Downloads;