/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [mobileDestOpen, setMobileDestOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  const { i18n } = useTranslation();

  const destinations = [
    { name: "Aberdare National Park", path: "/aberdare" },
    { name: "Meru National Park", path: "/meru" },
    { name: "Amboseli National Park", path: "/amboseli" },
    { name: "Nairobi National Park", path: "/nairobipark" },
    { name: "Mount Kenya", path: "/mountkenya" },
    { name: "Hell’s Gate", path: "/hellsgate" },
    { name: "Tsavo East", path: "/tsavoeast" },
    { name: "Tsavo West", path: "/tsavowest" },
    { name: "Lake Nakuru", path: "/lakenakuru" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const linkStyle =
    "text-white/90 hover:text-yellow-300 transition px-3 py-2 rounded-md bg-black/40";

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileDestOpen(false);
  };

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
        <div
          className="h-full bg-yellow-400 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 backdrop-blur-xl ${
          scrolled ? "bg-black/70 py-2" : "bg-black/90 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} className="w-10 h-10 rounded-full" />
              <span className="text-yellow-300 font-bold">
                Renlen Tours Safari
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">

              <Link className={linkStyle} to="/">
                Home
              </Link>

              {/* DESTINATIONS DROPDOWN (HEADLESS UI) */}
              <Menu as="div" className="relative">

                <Menu.Button className={linkStyle}>
                  Destinations ▾
                </Menu.Button>

                <Menu.Items className="absolute top-full left-0 mt-3 w-72 bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 focus:outline-none">

                  <div className="px-4 py-3 text-yellow-300 font-bold border-b border-white/10">
                    Explore Parks
                  </div>

                  {destinations.map((d, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          to={d.path}
                          className={`block px-4 py-3 text-sm transition ${
                            active
                              ? "bg-yellow-400/10 text-yellow-300"
                              : "text-gray-300"
                          }`}
                        >
                          {d.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}

                </Menu.Items>

              </Menu>

              <Link className={linkStyle} to="/gallery">
                Gallery
              </Link>

              <Link className={linkStyle} to="/vehicles">
                Vehicles
              </Link>

              <Link className={linkStyle} to="/contact">
                Contact
              </Link>

              {/* LANGUAGE */}
              <select
                onChange={changeLanguage}
                value={i18n.language}
                className="bg-black text-white border border-white/20 px-3 py-2 rounded-lg"
              >
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
                <option value="ar">Arabic</option>
                <option value="zh">Chinese</option>
              </select>

              <a
                href="https://wa.me/254724605140"
                className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold"
              >
                Book Safari
              </a>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-3xl"
            >
              ☰
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] bg-black/95 backdrop-blur-xl transition-transform duration-500 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-white/10 flex justify-between">
            <h2 className="text-white font-bold">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <div className="flex flex-col gap-4 p-6 text-white">

            <Link to="/" onClick={closeMobile}>
              Home
            </Link>

            {/* MOBILE DESTINATIONS */}
            <button
              onClick={() => setMobileDestOpen(!mobileDestOpen)}
              className="text-left bg-black border border-white/10 px-4 py-3 rounded-xl"
            >
              Destinations ▾
            </button>

            {mobileDestOpen && (
              <div className="bg-black border border-white/10 rounded-xl p-3">
                {destinations.map((d, i) => (
                  <Link
                    key={i}
                    to={d.path}
                    onClick={closeMobile}
                    className="block px-4 py-3 text-gray-300 hover:text-yellow-300 hover:bg-white/5 rounded-lg"
                  >
                    🏞️ {d.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/gallery" onClick={closeMobile}>
              Gallery
            </Link>

            <Link to="/vehicles" onClick={closeMobile}>
              Vehicles
            </Link>

            <Link to="/contact" onClick={closeMobile}>
              Contact
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;