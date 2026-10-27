import { useState } from "react";
import { FaShoppingCart, FaSearch, FaUser, FaTimes } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 shadow-sm md:px-10">

      {/* Logo */}
      <a href="/" className="text-2xl font-extrabold tracking-tight text-green-700">
        Vendora
      </a>

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        <a href="/" className="font-medium text-gray-700 transition hover:text-green-700">
          Home
        </a>
        <a href="/products" className="font-medium text-gray-700 transition hover:text-green-700">
          Products
        </a>
        <a
          href="/seller/register"
          className="flex items-center gap-2 font-medium text-gray-700 transition hover:text-green-700"
        >
          <IoStorefrontSharp size={19} />
          Become a Seller
        </a>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-5">

        {/* Expandable Search */}
        <div className="flex items-center">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              className="w-36 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:w-56"
            />
          )}

          <button
            type="button"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="ml-2 rounded-full p-2 text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            {isSearchOpen ? <FaTimes size={20} /> : <FaSearch size={20} />}
          </button>
        </div>

        {/* Login */}
        <a
          href="/login"
          aria-label="Login"
          className="rounded-full p-2 text-gray-700 transition hover:bg-green-50 hover:text-green-700"
        >
          <FaUser size={20} />
        </a>

        {/* Cart */}
        <a
          href="/cart"
          aria-label="Shopping cart"
          className="rounded-full p-2 text-gray-700 transition hover:bg-green-50 hover:text-green-700"
        >
          <FaShoppingCart size={21} />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
