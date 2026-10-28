import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover sm:h-52"
      />

      <div className="p-4">
        <p className="mb-2 text-xs text-gray-500">
          {product.category}
        </p>

        <h3 className="truncate font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">
          Rs. {product.price.toLocaleString("en-LK")}
        </p>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 py-2.5 font-medium text-white transition hover:bg-gray-700"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
