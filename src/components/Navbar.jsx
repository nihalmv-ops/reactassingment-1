import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600"
        >
          ShopEasy
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-gray-700 md:flex">
          <a
            href="#home"
            className="transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-600"
          >
            About
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-700 md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t bg-white px-5 py-5 text-gray-700 md:hidden">
          
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-blue-600"
          >
            About
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;