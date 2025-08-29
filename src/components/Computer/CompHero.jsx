import { useState, useEffect, useMemo } from "react";
import backgroundImage from "../../assets/images/bg-mba-icem.jpg";
import mouseIcon from "../../assets/images/white.png"; // Make sure the path to your PNG is correct

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(
    () => [
      "Business",
      "Strategy",
      "Finance",
      "Marketing",
    ],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Shorter delay before starting to delete
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    // Decrease time on deletion phase for faster typing/deleting
    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120); // Faster typing speed during typing phase and deleting

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  // Function to handle the scroll-down behavior
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4, // Scrolls down by 40% of the viewport height
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div
      className="font-baskervville-regular px-4 sm:px-8 md:px-16 relative pt-8 min-h-screen bg-cover bg-right md:bg-center bg-no-repeat text-white flex flex-col md:flex-row items-center md:items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

  {/* Black Overlay for text contrast (now below all content and form, above orange overlay) */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-20 pointer-events-none"></div>

      {/* Add custom style for selected text */}
      <style>
        {`
          ::selection {
              background-color: #F37021; /* Orange background for selection */
            color: #ffffff; /* White text for selection */
          }
        `}
      </style>

      {/* Left side content */}
      <div className="flex flex-col items-center md:items-start z-20 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] text-[#ffffff] font-semibold leading-tight mb-6">
          Creating Leaders in{" "}
          <span className="relative inline-block">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>{" "}
          with{" "}
          <span className="text-[#F37021] font-bold mech-hero-wrapper">MBA</span>{" "}
          at ICEM.
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
 Accelerate your ambitions into leadership through experiential learning, specializations, and global exposure.
        </p>
      </div>

      {/* Form container (Right side) */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 z-20 mt-8 md:mt-0">
        <div
          className="p-4 sm:p-6 max-w-sm sm:max-w-md w-full shadow-md bg-white/95 backdrop-blur-md"
          style={{ background: "#FCFAEE" }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <select
                id="state"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <select
                id="city"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select City</option>
                {/* Add city options here */}
              </select>
            </div>
            <div>
              <select
                id="discipline"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select Discipline</option>
                {/* Add discipline options here */}
              </select>
            </div>
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <select
                id="program"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select Program</option>
                {/* Add program options here */}
              </select>
            </div>
            <div>
              <input
                type="number"
                id="cet-score"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter CET Score"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-white text-[#F37021] border-2 border-[#F37021] rounded-lg font-semibold hover:bg-[#F37021] hover:text-white transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompHero;
