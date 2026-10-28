
import {
  FaShoppingBag,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-gray-900 px-5 py-4 md:px-10">

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <FaShoppingBag />
          <span>Vendora</span>
        </Link>

        {/* Desktop Search */}
        <div className="mx-6 hidden max-w-xl flex-1 items-center overflow-hidden rounded-lg bg-white md:flex">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2.5 text-sm text-gray-900 outline-none"
          />

          <button
            type="button"
            aria-label="Search"
            className="px-4 py-3 text-gray-700 hover:bg-gray-100"
          >
            <FaSearch />
          </button>
        </div>

        {/* Account and Cart */}
        <div className="flex items-center gap-5 text-white">
          <button
            type="button"
            aria-label="Account"
            className="hover:text-gray-300"
          >
            <FaUser size={19} />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="hover:text-gray-300"
          >
            <FaShoppingCart size={21} />
          </button>
        </div>
      </nav>

      {/* Center Navigation Links */}
      <div className="flex items-center justify-center gap-8 border-b border-gray-200 bg-white px-4 py-3">

        <Link
          to="/"
          className="font-medium text-gray-700 transition hover:text-gray-950"
        >
          Home
        </Link>

        <Link
          to="/shop"
          className="font-medium text-gray-700 transition hover:text-gray-950"
        >
          Shop
        </Link>

        <Link
          to="/categories"
          className="font-medium text-gray-700 transition hover:text-gray-950"
        >
          Categories
        </Link>

        {/* Become a Seller Route Link */}
        <Link
          to="/seller/register"
          className="whitespace-nowrap font-medium text-gray-700 transition hover:text-emerald-600"
        >
          Become a Seller
        </Link>
      </div>

      {/* Mobile Search */}
      <div className="flex items-center gap-2 px-5 py-3 md:hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
        />

        <button
          type="button"
          aria-label="Search"
          className="rounded-lg bg-gray-900 p-3 text-white"
        >
          <FaSearch />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
