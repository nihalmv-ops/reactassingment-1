function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ShopEasy
        </h1>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-700">
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
      </div>
    </nav>
  );
}

export default Navbar;