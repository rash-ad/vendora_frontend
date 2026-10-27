import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className=" flex-column w-full max-w-[260px] overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg">

      <img
        src={product.image}
        alt={product.altName}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-green-700">
          Rs. {product.price.toLocaleString()}
        </p>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 py-2 text-white hover:bg-green-800">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;

