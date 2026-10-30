
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaStar,
  FaArrowRight,
  FaLaptop,
  FaTshirt,
  FaMobileAlt,
  FaHome,
  FaHeadphones,
  FaHeart,
} from "react-icons/fa";

function Home() {
  const [cart, setCart] = useState([]);

  const categories = [
    { name: "Electronics", icon: <FaLaptop />, color: "bg-blue-100 text-blue-700" },
    { name: "Fashion", icon: <FaTshirt />, color: "bg-pink-100 text-pink-700" },
    { name: "Mobiles", icon: <FaMobileAlt />, color: "bg-purple-100 text-purple-700" },
    { name: "Home & Living", icon: <FaHome />, color: "bg-orange-100 text-orange-700" },
    { name: "Accessories", icon: <FaHeadphones />, color: "bg-green-100 text-green-700" },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 4500,
      oldPrice: 5500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      discount: "18% OFF",
    },
    {
      id: 2,
      name: "Premium Smart Watch",
      category: "Accessories",
      price: 8500,
      oldPrice: 10000,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      discount: "15% OFF",
    },
    {
      id: 3,
      name: "Modern Travel Backpack",
      category: "Fashion",
      price: 3200,
      oldPrice: 4000,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      discount: "20% OFF",
    },
    {
      id: 4,
      name: "Wireless Gaming Controller",
      category: "Electronics",
      price: 6200,
      oldPrice: 7500,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
      discount: "17% OFF",
    },
    {
      id: 5,
      name: "Classic Sports Shoes",
      category: "Fashion",
      price: 5500,
      oldPrice: 6500,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      discount: "15% OFF",
    },
    {
      id: 6,
      name: "Modern Home Lamp",
      category: "Home & Living",
      price: 2800,
      oldPrice: 3500,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
      discount: "20% OFF",
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* WELCOME SECTION */}
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-green-700">
              Welcome back!
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Discover something you love.
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Explore thousands of products from Vendora sellers.
            </p>
          </div>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
          >
            <FaShoppingCart />
            My Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </Link>
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="mx-auto mt-8 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-lg">
            <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold">
              VENDORA SPECIAL OFFER
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
              Find Your Next
              <span className="block text-green-400">Favourite Product.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              Discover amazing products from trusted local sellers.
              Great choices, all in one marketplace.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-green-600 px-6 py-3 font-semibold hover:bg-green-700"
            >
              Shop Now <FaArrowRight />
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-20 h-80 w-80 rounded-full border-[40px] border-green-700/20 sm:right-10 sm:top-0" />
          <div className="pointer-events-none absolute -bottom-40 right-20 h-80 w-80 rounded-full bg-green-600/10" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto mt-12 max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Shop by Category
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Explore products by your interests.
            </p>
          </div>

          <Link to="/categories" className="text-sm font-semibold text-green-700">
            View All <FaArrowRight className="ml-1 inline" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              to="/categories"
              key={category.name}
              className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
            >
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${category.color}`}>
                {category.icon}
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-800 group-hover:text-green-700">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto mt-14 max-w-7xl px-4 pb-16">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Handpicked products you might love.
            </p>
          </div>

          <Link to="/shop" className="text-sm font-semibold text-green-700">
            View All <FaArrowRight className="ml-1 inline" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* PRODUCT IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 rounded-md bg-green-700 px-2 py-1 text-[10px] font-bold text-white">
                  {product.discount}
                </span>

                <button
                  aria-label="Add to wishlist"
                  className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-500 shadow hover:text-red-500"
                >
                  <FaHeart />
                </button>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-3">

                <p className="text-[11px] text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-xs text-yellow-500">
                  <FaStar />
                  <span className="font-semibold text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-gray-400">(Reviews)</span>
                </div>

                <div className="mt-3">
                  <p className="text-base font-bold text-green-700">
                    LKR {product.price.toLocaleString("en-LK")}
                  </p>

                  <p className="text-xs text-gray-400 line-through">
                    LKR {product.oldPrice.toLocaleString("en-LK")}
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 py-2.5 text-xs font-semibold text-white transition hover:bg-green-800"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Home;
