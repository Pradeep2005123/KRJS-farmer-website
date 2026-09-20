import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#committee" },
  { name: "Works", href: "#works" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">

      <div className="container mx-auto px-6 lg:px-12">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-xl">

              🌾

            </div>

            <div>

              <h1 className="text-xl font-bold text-green-800">

                KRJS

              </h1>

              <p className="text-xs text-gray-500">

                Karunada Raitha Jana Abiruddhi Sanga

              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-green-700 transition duration-300"
                >

                  {item.name}

                </a>

              </li>

            ))}

          </ul>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="flex items-center gap-2 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition">

              <Globe size={18} />

              English

            </button>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          <div className="container mx-auto px-6 py-6">

            <ul className="flex flex-col gap-5">

              {navLinks.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-green-700"
                  >

                    {item.name}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      )}

    </nav>
  );
}