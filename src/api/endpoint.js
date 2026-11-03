const API_ENDPOINTS = {
  SELLER: {
    REGISTER: "/seller/register",
    PROFILE: "/seller/profile",
    DASHBOARD:"/seller/dashboard",
  },

  PRODUCT: {
    GET_ALL: "/Allproducts",
    GET_BY_ID: (id) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id) => `/products/${id}`,
    DELETE: (id) => `/products/${id}`,
  },

  // AUTH: {
  //   LOGIN: "/auth/login",
  //   REGISTER: "/auth/register",
  // },
};

export   default  API_ENDPOINTS;