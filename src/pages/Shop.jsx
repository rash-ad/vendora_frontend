
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Shop All Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Discover products for your everyday needs.
          </p>
        </div>

        {/* Search input */}
        <div className="mb-5">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-500 sm:max-w-md"
          />
        </div>

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="mb-4 text-sm text-gray-600">
          {filteredProducts.length} products found
        </p>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white py-12 text-center">
            <h2 className="font-semibold text-gray-900">
              No products found
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;
