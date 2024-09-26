import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="flex justify-between border-b border-gray-400 ">
      <div className="flex items-center justify-between py-8 ">
        <Link to="/">
          <h1 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl select-none">
            Complejo Acuático <br />
            Uso del espacio
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li>
                  <Link
                    className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                    to="/" onClick={() => setIsNavOpen(false)}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                    to="/organismos" onClick={() => setIsNavOpen(false)}
                  >
                    Organismos
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                    to="/dashboard"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                    to="/login" onClick={() => setIsNavOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <Link
                className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                to="/organismos" 
              >
                Organismos
              </Link>
            </li>
            <li>
              <Link
                className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                to="/dashboard" 
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="mb-4 font-extrabold text-transparent bg-clip-text hover:text-teal-200 bg-gradient-to-r to-emerald-600 from-sky-400 md:text-md lg:text-lg select-none"
                to="/login" 
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </header>
  );
}

export default Header;
