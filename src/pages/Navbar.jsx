import logo from "/ICEM-Logo.png";
import autonomousLogo from "/ICEM-Autonomous-logo.png";

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-8 md:px-16 py-2 md:py-4">
        {/* Left Logo */}
        <div className="p-2 flex justify-start">
          <a href="/icemmba">
            <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20" />
          </a>
        </div>

        {/* Right Logo */}
        <div className="p-2 flex justify-end">
          <a href="/icemmba">
            <img src={autonomousLogo} alt="Autonomous Logo" className="h-12 sm:h-16 md:h-20" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
