import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

function SellerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    shopName: "",
    shopDescription: "",
    businessAddress: "",
    district: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Register seller in MongoDB through backend
  const registerSeller = async (data) => {
    const response = await axiosInstance.post("/seller/register", data);
    console.log("Seller registered successfully:", response.data);
    return response.data;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const result = await registerSeller(formData);

      // backend may return { seller: {...} } or the seller directly
      const backendSeller =
        result && typeof result === "object" ? result.seller || result : {};

      // build seller object (never store the password)
      const sellerData = {
        name: formData.name,
        email: formData.email,
        shopName: formData.shopName,
        shopDescription: formData.shopDescription,
        businessAddress: formData.businessAddress,
        district: formData.district,
        ...backendSeller,
      };
      delete sellerData.password;

      localStorage.setItem("seller", JSON.stringify(sellerData));

      navigate("/seller/dashboard", { replace: true });
    } catch (error) {
      console.error("Seller registration failed:", error);

      setErrorMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-3xl font-bold text-[#111827]">
          Become a Seller
        </h1>

        <p className="mb-8 text-gray-500">
          Create your shop on our marketplace.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className={inputStyle}
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className={inputStyle}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          <hr />

          <h2 className="text-lg font-semibold text-[#111827]">
            Shop Information
          </h2>

          <input
            className={inputStyle}
            name="shopName"
            placeholder="Shop name"
            value={formData.shopName}
            onChange={handleChange}
            required
          />

          <textarea
            className={inputStyle}
            name="shopDescription"
            placeholder="What products do you sell?"
            rows={3}
            value={formData.shopDescription}
            onChange={handleChange}
            required
          />

          <textarea
            className={inputStyle}
            name="businessAddress"
            placeholder="Business address"
            rows={2}
            value={formData.businessAddress}
            onChange={handleChange}
            required
          />

          <select
            className={inputStyle}
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select district</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Galle">Galle</option>
            <option value="Kandy">Kandy</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Matara">Matara</option>
          </select>

          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Create Seller Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerRegister;