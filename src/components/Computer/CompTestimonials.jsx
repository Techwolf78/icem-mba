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
    <div className="mb-4 px-8 md:px-16 py-10 bg-[#FCFAEE] relative overflow-hidden">
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-4xl font-semibold text-[#F37021] text-center mb-8">
        What Our Students Say
      </h2>

      {/* Single glassmorphism rectangle container */}
      <div className="bg-white/70 backdrop-blur-md shadow-xl shadow-orange-100 border border-[#ffd6b3] rounded-2xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 flex flex-row items-center"> {/* Changed layout to flex-row */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-6" /* Added margin-right for spacing */
              />
              <div className="flex-1"> {/* Ensured content takes remaining space */}
                <p className="text-lg font-semibold text-[#000000] mb-2">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                {testimonial.placementCellRole && (
                  <p className="text-gray-600 italic">{testimonial.placementCellRole}</p>
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
