import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, GraduationCap, Users, Trophy, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'campus', name: 'Campus', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'graduation', name: 'Graduation', icon: GraduationCap },
    { id: 'sports', name: 'Sports', icon: Trophy },
  ];

  const images = [
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.22_b802903f_mnjiya.jpg', category: 'campus', title: 'Main Campus' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.22_07835a1a_dojif0.jpg', category: 'campus', title: 'Students Reading Quran' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.22_3262cd27_vvxs2e.jpg', category: 'campus', title: 'Campus Architecture' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400589/G5_tage1i.jpg', category: 'campus', title: 'Library' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400368/G3_ublyrk.jpg', category: 'campus', title: 'Student Hostel' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400337/G1_gukgpe.jpg', category: 'campus', title: 'Classroom' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400306/G4_ifcmmt.jpg', category: 'campus', title: 'Girls Institution' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.23_bf44cc77_odbaob.jpg', category: 'campus', title: 'Coaching Academy' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.23_5236f807_ftwpgb.jpg', category: 'campus', title: 'Founder' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.22_b802903f_mnjiya.jpg', category: 'events', title: 'Annual Function' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1763329970/WhatsApp_Image_2025-11-16_at_13.36.22_a1cf810e_a4b3i3.jpg', category: 'sports', title: 'Sports Day' },
    { src: 'https://res.cloudinary.com/dadqwaqis/image/upload/v1761400370/G2_xzubxy.jpg', category: 'graduation', title: 'Graduation Ceremony' },
    { src: '/images/committee-members.jpg', category: 'events', title: 'Committee Meeting' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-emerald-deep py-16 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-urdu text-gold-light text-xl mb-2">گیلری</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore moments from our campus life, events, and achievements.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-emerald-deep text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-light hover:text-emerald-deep shadow-sm'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md"
                onClick={() => openLightbox(image.src, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium">{image.title}</p>
                    <p className="text-sm text-gold-light capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">There are no photos in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">
              {filteredImages[currentIndex]?.title}
            </p>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
