import newImage from "../../assets/images/testimony.webp"; // New Image for the right section
import Slider from "react-slick"; // Importing react-slick

function Testimonials() {
  const testimonials = [
    {
      name: "Santanu Brahme",
      role: "Pre and post Sales Engineer",
      company: "Hettich India Pvt. Ltd",
      text: "ICEM has a wonderful group of faculties who have a great bonding with students and parents. Various good companies come to college for campus interview, placement is also good. College has very nice environment. Thanks ICEM for the great opportunity. There's a lot that I learned when I was working in the placement cell.",
      placementCellRole: "Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full conﬁdence & that key to the success is taught through various activities held by placement cell in ICEM.",
      image: "src/assets/images/SantanuBrahme.png" // Corrected image path
    },
    {
      name: "Vidya Nair",
      role: "Analyst IT Audit",
      company: "KPMG",
      text: "Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full conﬁdence & that key to the success is taught through various activities held by placement cell in ICEM.",
      image: "src/assets/images/VidyaNair.png" // Corrected image path
    }
  ];

  const settings = {
    dots: true, // Navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds here)
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="mb-4 px-4 sm:px-8 md:px-16 py-10 bg-[#FCFAEE] relative overflow-hidden">
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#F37021] mb-8 text-center">
        Student Testimonials
      </h2>

      {/* Single glassmorphism rectangle container */}
      <div className="bg-white/70 backdrop-blur-md shadow-xl shadow-orange-100 border border-[#ffd6b3] rounded-2xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 sm:p-6 flex flex-col md:flex-row items-start text-left">
              {/* Left: Profile Image (responsive layout) */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
                />
              </div>

              {/* Right / Bottom: Text Content */}
              <div className="w-full">
                <p className="text-base sm:text-lg font-semibold text-[#000000] mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm sm:text-base text-gray-500 mb-3">
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-3">{testimonial.text}</p>
                {testimonial.placementCellRole && (
                  <p className="text-sm sm:text-base text-gray-600 italic">{testimonial.placementCellRole}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
