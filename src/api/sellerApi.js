
import axios from "axios";
import API_ENDPOINTS from "../api/endpoint";
import.meta.env.VITE_BACKEND_API_URL
const RegisterSeller = async (formData) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINTS.BACKEND_API_URL}${API_ENDPOINTS.SELLER.REGISTER}`,
      formData
    );

    console.log("Seller registered successfully:", response.data);

    return response.data;

  } catch (error) {
    console.error(
      "Seller registration failed:",
      error.response?.data?.message || error.message
    );

    throw error;
  }
};

export  default RegisterSeller ;
