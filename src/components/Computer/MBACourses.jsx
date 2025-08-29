// Import images for each course
import imgMarketing from '../../assets/images/mm.avif';
import imgFinance from '../../assets/images/fm.avif';
import imgHR from '../../assets/images/hrm.avif';
import imgOperations from '../../assets/images/om.avif';
import imgAnalyst from '../../assets/images/ba.avif';
import {
  FaChartBar,
  FaMoneyBillWave,
  FaUsers,
  FaCogs,
  FaSearch,
} from "react-icons/fa";

const mbaCourses = [
  {
    title: "Marketing Management",
    icon: <FaChartBar className="text-[#F37021] text-3xl" />, // Marketing
    duration: "2 Years",
    img: imgMarketing,
  },
  {
    title: "Finance Management",
    icon: <FaMoneyBillWave className="text-[#F37021] text-3xl" />, // Finance
    duration: "2 Years",
    img: imgFinance,
  },
  {
    title: "Human Resource Management",
    icon: <FaUsers className="text-[#F37021] text-3xl" />, // HR
    duration: "2 Years",
    img: imgHR,
  },
  {
    title: "Operation Management",
    icon: <FaCogs className="text-[#F37021] text-3xl" />, // Operations
    duration: "2 Years",
    img: imgOperations,
  },
  {
    title: "Business Analyst",
    icon: <FaSearch className="text-[#F37021] text-3xl" />, // Analyst
    duration: "2 Years",
    img: imgAnalyst,
  },
];



import { FaArrowRight } from "react-icons/fa";

const MBACourses = () => {
  return (
    <div className="px-0 md:px-16 w-full py-10 bg-gradient-to-br from-[#fff7f2] via-[#fff3e6] to-[#ffe5d1] relative overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-[#F37021] tracking-tight drop-shadow-lg">
        MBA Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mx-auto max-w-7xl">
        {mbaCourses.map((course, idx) => (
          <div
            key={idx}
            className="group relative border border-[#ffd6b3] rounded-2xl bg-white shadow-xl shadow-orange-100 hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 flex flex-col h-full overflow-hidden transform hover:-translate-y-2 hover:border-[#F37021]"
            style={{ minHeight: 320 }}
            tabIndex={0}
          >
            {/* Animated icon */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff7f2] border-2 border-[#F37021] shadow group-hover:scale-110 transition-transform duration-300">
                {course.icon}
              </span>
            </div>
            {/* Image on top with hover zoom, no padding so image touches card borders */}
            <div className="w-full flex items-center justify-center">
              <img
                src={course.img}
                alt={course.title + " image"}
                className="object-cover w-full h-40 md:h-56 transition-transform duration-300 group-hover:scale-105"
                draggable="false"
              />
            </div>
            {/* Content below */}
            <div className="flex flex-col justify-between p-4 flex-1 w-full">
              <h3 className="text-lg font-bold mb-2 text-[#F37021] group-hover:text-[#d65c1a] transition-colors duration-300 leading-tight min-h-[48px]">
                {course.title}
              </h3>
              <div className="mb-1 text-gray-600 text-sm">
                Duration:{" "}
                <span className="font-semibold text-[#F37021]">
                  {course.duration}
                </span>
              </div>
              {/* Fees removed as per request */}
              <button
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-[#F37021] text-[#F37021] font-semibold rounded-lg shadow hover:bg-[#F37021] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F37021] transition-all duration-200 relative overflow-hidden group/apply"
                tabIndex={0}
              >
                <span className="z-10">Apply Now</span>
                <FaArrowRight className="ml-1 text-base group-hover/apply:translate-x-1 transition-transform duration-200" />
                {/* Microinteraction ripple */}
                <span className="absolute inset-0 rounded-lg pointer-events-none group-hover/apply:animate-ripple"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Ripple animation style */}
      <style>{`
  .group/apply:active .group-hover/apply:animate-ripple {
          animation: ripple 0.4s linear;
        }
        @keyframes ripple {
          0% { background: rgba(243,112,33,0.15); }
          100% { background: rgba(243,112,33,0); }
        }
      `}</style>
    </div>
  );
};

export default MBACourses;
