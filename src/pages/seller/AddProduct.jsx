import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaTimes, FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// ================= ADD YOUR VALUES HERE =================
const BACKEND_URL = "YOUR_BACKEND_URL"; // e.g. http://localhost:5000
const ADD_PRODUCT_ROUTE = "YOUR_ROUTE"; // e.g. /api/products
// ========================================================

const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
  "Other",
];

const EMPTY_FORM = {
  name: "",
  description: "",
  price: "",
  stock: "",
  category: "",
};

function AddProduct({ seller, onClose, onSuccess }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  // image preview urls (cleaned up automatically)
  const previews = useMemo(
    () => images.map((img) => URL.createObjectURL(img)),
    [images]
  );
  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  // clear everything
  const resetAll = () => {
    setForm(EMPTY_FORM);
    setImages([]);
    setError("");
    setLoading(false);
  };

  // cross (X) button: clear everything and close
  const handleClose = () => {
    resetAll();
    setVisible(false); // hides the modal by itself
    if (typeof onClose === "function") onClose();
    navigate("/seller/dashboard")
  };

  const handleBack = () => {
    resetAll();
    setVisible(false);
    if (typeof onClose === "function") onClose();
    navigate("/seller/dashboard");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImages = (e) => {
    const picked = Array.from(e.target.files).filter((f) =>
      f.type.startsWith("image/")
    );
    setImages((prev) => [...prev, ...picked].slice(0, 5));
    e.target.value = "";
  };

  const removeImage = (index) =>
    setImages((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (images.length === 0) {
      setError("Please add at least one image");
      return;
    }

    const sellerId = seller?._id || seller?.id;
    if (!sellerId) {
      setError("Seller not found. Please login again.");
      return;
    }

    const data = new FormData();
    data.append("sellerId", sellerId);
    Object.entries(form).forEach(([key, value]) =>
      data.append(key, String(value).trim())
    );
    images.forEach((img) => data.append("images", img));

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.post(`${BACKEND_URL}${ADD_PRODUCT_ROUTE}`, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      resetAll();
      setVisible(false);
      if (typeof onSuccess === "function") onSuccess();
      if (typeof onClose === "function") onClose();
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        (err.request
          ? "Cannot reach the server. Check backend URL."
          : "Failed to add product")
      );
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-600";

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            >
              <FaArrowLeft />
            </button>
            <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className={inputStyle}
            name="name"
            placeholder="Product name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <textarea
            className={inputStyle}
            name="description"
            placeholder="Description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              className={inputStyle}
              type="number"
              min="0"
              name="price"
              placeholder="Price (LKR)"
              value={form.price}
              onChange={handleChange}
              required
            />
            <input
              className={inputStyle}
              type="number"
              min="0"
              name="stock"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </div>

          <select
            className={inputStyle}
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-5 text-gray-500 hover:border-green-600 hover:text-green-700">
              <FaImage className="text-2xl" />
              <span className="text-xs">Upload images (max 5)</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImages}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {previews.map((src, i) => (
                  <div key={src} className="relative">
                    <img
                      src={src}
                      alt="preview"
                      className="h-16 w-full rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute -right-1 -top-1 rounded-full bg-red-500 p-1 text-[10px] text-white"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;